import { createReducer, on } from '@ngrx/store';
import { DiaryPageState } from './state';
import * as DiaryPageActions from './actions';

export const initialState: DiaryPageState = {
  pageData: {
    pageEvents: [],
    pageIndex: -1,
  },
  loading: false,
};

export const DiaryPageReducer = createReducer(
  initialState,
  on(DiaryPageActions.RecordEventAction, state => {
    return state;
  })
);
