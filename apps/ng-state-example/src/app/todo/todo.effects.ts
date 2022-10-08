import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as apiActions from './actions';
import * as todoListActions from './list/actions';
import { TodoService } from './todo.service';

@Injectable()
export class ToDoEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly todoService: TodoService
  ) {}
  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoListActions.toDosOpened),
      exhaustMap(() =>
        this.todoService.getToDos().pipe(
          map((toDos) => apiActions.toDosFetchedSuccess({ toDos })),
          catchError(() =>
            of(
              apiActions.toDosFetchedError({
                errorMessage: 'Error fetching toDos',
              })
            )
          )
        )
      )
    );
  });
}
