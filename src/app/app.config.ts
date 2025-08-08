import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(ReactiveFormsModule, HttpClientModule),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura },
    }),
  ],
};
