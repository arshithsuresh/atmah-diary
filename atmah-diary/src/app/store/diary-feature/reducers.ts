import { createReducer, on } from '@ngrx/store';
import { DiaryPageState } from './state';
import { DiaryPageActions } from './actions';
import { NO_SELECTED_COMPONENT } from '../../constants/state.constant';
import * as DevErrors from '../../errors/dev-errors';
import { DEFAULT_COMPONENT_NAME } from '../../constants/default-values.constants';

export const initialState: DiaryPageState = {
  registeredComponents: new Map(),
  focusedComponent: NO_SELECTED_COMPONENT,
  pageData: {
    dated: Date.now(),
    initialPageTitle: 'Title Goes here...',
    pageEvents: [],
    pageIndex: 0,
  },
  //pageData: testData,
  currentRecordEventIndex: 0,
  loading: false,
};

export const DiaryPageReducer = createReducer(
  initialState,
  on(DiaryPageActions.recordEventAction, (state, { data }): DiaryPageState => {
    const pageEvents = [...state.pageData.pageEvents, data];

    return {
      ...state,
      pageData: {
        ...state.pageData,
        pageEvents: pageEvents,
      },
    };
  }),

  on(
    DiaryPageActions.registerRecordableComponent,
    (state: DiaryPageState, { componentId, component }): DiaryPageState => {
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
    DiaryPageActions.setFocusRecordableComponent,
    (state: DiaryPageState, { componentId }): DiaryPageState => {
      const currentComponent = state.registeredComponents.get(componentId);
      if (!currentComponent) {
        console.warn('Component not registered');
        return { ...state };
      }
      return { ...state, focusedComponent: componentId };
    }
  ),

  on(
    DiaryPageActions.recordEventCompleted,
    (state: DiaryPageState): DiaryPageState => {
      const nextRecordEventIndex = state.currentRecordEventIndex + 1;
      console.log('Next Record Event Index ', nextRecordEventIndex);
      return {
        ...state,
        currentRecordEventIndex: nextRecordEventIndex,
      };
    }
  ),

  on(
    DiaryPageActions.setNextRecordEvent,
    (state: DiaryPageState, { data }): DiaryPageState => {
      return { ...state, focusedComponent: data.componentId };
    }
  ),

  on(DiaryPageActions.startDiaryReplay, (state: DiaryPageState) => {
    console.log('Start Diary Replay');
    const currentRecordEvent =
      state.pageData.pageEvents[state.currentRecordEventIndex];
    const currentComponent = currentRecordEvent
      ? currentRecordEvent.componentId
      : DEFAULT_COMPONENT_NAME;
    return { ...state, focusedComponent: currentComponent };
  }),

  on(
    DiaryPageActions.diaryReplayCompleted,
    (state: DiaryPageState): DiaryPageState => {
      console.log('Diary Replay Completed');

      return {
        ...state,
        currentRecordEventIndex: 0,
        focusedComponent: NO_SELECTED_COMPONENT,
      };
    }
  )
);
