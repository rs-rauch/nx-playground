import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as apiActions from './actions';
import * as todoListActions from './list/actions';

import { ToDo } from './model/todo';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  list: EntityState<ToDo>;
}

export const todoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

const initState: TodoState = {
  list: todoAdapter.getInitialState(),
};

export const todoReducer = createReducer(
  initState,
  on(todoListActions.toDosOpened, (state) => ({
    ...state,
  })),
  on(apiActions.toDosFetchedSuccess, (state, { toDos }) => ({
    ...state,
    list: todoAdapter.upsertMany(toDos, state.list),
  }))
);
