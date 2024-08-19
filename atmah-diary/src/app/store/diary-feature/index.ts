import { createFeature, createSelector } from '@ngrx/store';
import { DiaryPageReducer } from './reducers';
import { DEFAULT_RECORD_EVENT } from '../../constants/default-values.constants';

export { DiaryPageState } from './state';

export const DiaryPageFeature = createFeature({
  name: 'diary',
  reducer: DiaryPageReducer,
  extraSelectors: ({ selectDiaryState, selectPageData }) => {
    const selectPageIndex = createSelector(selectPageData, pageData => {
      return pageData.pageIndex;
    });

    const selectPageEvents = createSelector(selectPageData, pageData => {
      return pageData.pageEvents;
    });

    const selectRecordEvent = createSelector(selectDiaryState, diaryData => {
      const recordIndex = diaryData.currentRecordEventIndex;
      const recordEvent =
        diaryData.pageData.pageEvents.at(recordIndex) ?? DEFAULT_RECORD_EVENT;

      return recordEvent;
    });

    return { selectPageIndex, selectPageEvents, selectRecordEvent };
  },
});
