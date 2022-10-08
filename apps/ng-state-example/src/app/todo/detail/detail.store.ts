import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { ToDo } from '../model/todo';

interface TodoDetailState {
  toDos?: ToDo[];
}

@Injectable()
export class TodoDetailStore extends ComponentStore<TodoDetailState> {
  constructor(private readonly store: Store) {
    super({});
  }
}
