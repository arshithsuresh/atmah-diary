import { MemoizedSelector, Store } from '@ngrx/store';
import { take } from 'rxjs';

export function selectOnceFromStore<T, Z>(
  store: Store<T>,
  selector: MemoizedSelector<T, Z>
) {
  return store.select(selector).pipe(take(1));
}
