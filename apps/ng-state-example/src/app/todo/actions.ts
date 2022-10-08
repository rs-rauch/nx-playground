import { createAction, props } from '@ngrx/store';
import { ToDo } from './model/todo';

export const toDosFetchedSuccess = createAction(
  '[ToDo API] toDos fetched success',
  props<{ toDos: ToDo[] }>()
);

export const toDosFetchedError = createAction(
  '[ToDos API] toDos fetching error',
  props<{ errorMessage: string }>()
);
