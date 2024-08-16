import { createReducer, on } from '@ngrx/store';
import { DiaryPageState } from './state';
import * as DiaryPageActions from './actions';
import { NO_SELECTED_COMPONENT } from '../../constants/state.constant';
import { state } from '@angular/animations';
import * as DevErrors from '../../errors/dev-errors';

export const initialState: DiaryPageState = {
  registeredComponents: new Map(),
  currentComponent: NO_SELECTED_COMPONENT,
  pageData: {
    pageEvents: [],
    pageIndex: -1,
  },
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
  )
);
