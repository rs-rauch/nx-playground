import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from './model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getToDos(): Observable<ToDo[]> {
    return of([
      {
        id: 1,
        title: 'Todo 1',
        completed: false,
        body: 'Todo 1 body',
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: false,
        body: 'Todo 2 body',
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false,
        body: 'Todo 3 body',
      },
    ]);
  }
}
