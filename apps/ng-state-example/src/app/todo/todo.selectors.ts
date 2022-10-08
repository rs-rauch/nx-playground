import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoAdapter, TodoState, TODO_FEATURE_KEY } from './todo.reducer';

const selectTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const selectToDosState = createSelector(selectTodoState, (state) => state.list);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const selectToDos = createSelector(selectToDosState, selectAll);
const selectToDosEntities = createSelector(selectToDosState, selectEntities);
