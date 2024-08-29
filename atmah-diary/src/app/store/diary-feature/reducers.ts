import { createReducer, on } from '@ngrx/store';
import { DiaryPageState } from './state';
import { DiaryPageActions } from './actions';
import { NO_SELECTED_COMPONENT } from '../../constants/state.constant';
import * as DevErrors from '../../errors/dev-errors';
import { testData } from '../../views/diary/diary/testData';

export const initialState: DiaryPageState = {
  registeredComponents: new Map(),
  focusedComponent: NO_SELECTED_COMPONENT,
  activeComponent: NO_SELECTED_COMPONENT,
  pageData: testData,
  currentRecordEventIndex: 0,
  loading: false,
};

export const DiaryPageReducer = createReducer(
  initialState,
  on(DiaryPageActions.recordEventAction, (state, { data }) => {
    return state;
  }),

  on(
    DiaryPageActions.registerRecordableComponent,
    (state: DiaryPageState, { componentId, component }) => {
      let _registeredComponents = new Map(state.registeredComponents);

      if (_registeredComponents.has(componentId)) {
        throw DevErrors.DUPLICATE_RECORDER_ID();
      }

      _registeredComponents.set(componentId, true);

      return {
        ...state,
        registeredComponents: _registeredComponents,
      };
    }
  ),

  on(
    DiaryPageActions.focusRecordableComponent,
    (state: DiaryPageState, { componentId }) => {
      const currentComponent = state.registeredComponents.get(componentId);
      if (!state.registeredComponents.get(componentId)) {
        console.warn('Component not registered');
        return { ...state };
      }
      return { ...state, focusedComponent: componentId };
    }
  ),

  on(DiaryPageActions.recordEventCompleted, (state: DiaryPageState) => {
    const nextRecordEventIndex = state.currentRecordEventIndex + 1;
    console.log('Next Record Event Index ', nextRecordEventIndex);
    return {
      ...state,
      currentRecordEventIndex: nextRecordEventIndex,
    };
  }),

  on(DiaryPageActions.setNextRecordEvent, (state: DiaryPageState, { data }) => {
    return { ...state, activeComponent: data.componentId };
  }),

  on(DiaryPageActions.startDiaryReplay, (state: DiaryPageState) => {
    console.log('Start Diary Replay');
    const currentRecordEvent =
      state.pageData.pageEvents[state.currentRecordEventIndex];
    return { ...state, activeComponent: currentRecordEvent.componentId };
  }),

  on(DiaryPageActions.diaryReplayCompleted, (state: DiaryPageState) => {
    console.log('Diary Replay Completed');

    return {
      ...state,
      currentRecordEventIndex: 0,
      activeComponent: NO_SELECTED_COMPONENT,
    };
  })
);
