import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// Bootstrap the Angular application with the specified providers
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Provide routing configuration
    provideHttpClient(), // Provide HTTP client for making API calls
    provideAnimations() // Provide animations support
  ],
}).catch((err) => console.error(err)); // Catch and log any errors during bootstrap