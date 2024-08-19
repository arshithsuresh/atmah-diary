import { createReducer, on } from '@ngrx/store';
import { DiaryPageState } from './state';
import * as DiaryPageActions from './actions';
import { NO_SELECTED_COMPONENT } from '../../constants/state.constant';
import { state } from '@angular/animations';
import * as DevErrors from '../../errors/dev-errors';
import { testData } from '../../views/diary/diary/testData';

export const initialState: DiaryPageState = {
  registeredComponents: new Map(),
  currentComponent: NO_SELECTED_COMPONENT,
  pageData: testData,
  currentRecordEventIndex: 0,
  loading: false,
};

export const DiaryPageReducer = createReducer(
  initialState,
  on(DiaryPageActions.RecordEventAction, (state, { data }) => {
    return state;
  }),

  on(
    DiaryPageActions.RegisterRecordableComponent,
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
    DiaryPageActions.FocusRecordableComponent,
    (state: DiaryPageState, { componentId }) => {
      const currentComponent = state.registeredComponents.get(componentId);
      if (!state.registeredComponents.get(componentId)) {
        console.warn('Component not registered');
        return { ...state };
      }
      return { ...state, currentComponent: componentId };
    }
  ),

  on(DiaryPageActions.RecordEventCompleted, (state: DiaryPageState) => {
    const nextRecordEventIndex = state.currentRecordEventIndex + 1;
    console.log('Next Record Event Index ', nextRecordEventIndex);
    return {
      ...state,
      currentRecordEventIndex: nextRecordEventIndex,
    };
  }),

  on(DiaryPageActions.SetNextRecordEvent, (state: DiaryPageState, { data }) => {
    return { ...state, currentComponent: data.componentId };
  }),

  on(DiaryPageActions.StartDiaryReplay, (state: DiaryPageState) => {
    console.log('Start Diary Replay');
    const currentRecordEvent =
      state.pageData.pageEvents[state.currentRecordEventIndex];
    return { ...state, currentComponent: currentRecordEvent.componentId };
  }),

  on(DiaryPageActions.DiaryReplayCompleted, (state: DiaryPageState) => {
    console.log('Start Resume');

    return {
      ...state,
      currentRecordEventIndex: 0,
      currentComponent: NO_SELECTED_COMPONENT,
    };
  })
);
