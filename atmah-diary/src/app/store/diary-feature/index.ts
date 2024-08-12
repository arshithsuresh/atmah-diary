import { createFeature, createSelector } from '@ngrx/store';
import { DiaryPageReducer } from './reducers';

export const diaryPageFeature = createFeature({
  name: 'diary',
  reducer: DiaryPageReducer,
  extraSelectors: ({ selectDiaryState, selectPageData }) => {
    const selectPageIndex = createSelector(selectPageData, pageData => {
      return pageData.pageIndex;
    });
    const selectPageEvents = createSelector(selectPageData, pageData => {
      return pageData.pageEvents;
    });

    return { selectPageIndex, selectPageEvents };
  },
});
