import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoEffects } from './todo/todo.effects';
import { todoReducer, TODO_FEATURE_KEY } from './todo/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [TODO_FEATURE_KEY]: todoReducer }),
    EffectsModule.forRoot([ToDoEffects]),
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./todo/todo.module').then((m) => m.TodoModule),
      },
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
