import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {appRoutes} from "./app/app.routes";


bootstrapApplication(AppComponent, {
  // providers: [provideRouter(appRoutes, withPreloading(PreloadAllModules)), provideHttpClient()],
  providers: [provideRouter(appRoutes), provideHttpClient()],
}).catch(err => console.error(err));
