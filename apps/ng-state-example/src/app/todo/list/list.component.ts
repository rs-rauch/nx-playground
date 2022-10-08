import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { selectToDos } from '../todo.selectors';

import * as actions from './actions';

const todoListViewModel = createSelector(selectToDos, (list) => ({ list }));

@Component({
  selector: 'nx-playground-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  toDosViewModel$ = this.store.select(todoListViewModel);
  constructor(private readonly store: Store) {
    store.dispatch(actions.toDosOpened());
  }
}
