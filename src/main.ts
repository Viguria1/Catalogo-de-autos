import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAspDLps0k05VNHv0eeq5ywm7NvAVKJkPQ',
  authDomain: 'catalogo-autos-1f83b.firebaseapp.com',
  projectId: 'catalogo-autos-1f83b',
  storageBucket: 'catalogo-autos-1f83b.appspot.com',
  messagingSenderId: '120828881820',
  appId: '1:120828881820:web:745c5b024abac10f637659',
  measurementId: 'G-ZWV5DN07DN'
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), // <- esto es necesario
    provideFirestore(() => getFirestore())
  ]
});

