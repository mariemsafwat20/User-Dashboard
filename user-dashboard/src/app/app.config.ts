import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { createFeatureSelector, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './Store/users/user.reducer';
import { UserState } from './Store/users/user.state';
import { UserEffects } from './Store/users/user.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),               
    provideClientHydration(),            
    provideAnimationsAsync(),    
    provideHttpClient(),                
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),       
    provideStoreDevtools({ 
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};

export const selectUserState = createFeatureSelector<UserState>('users');
