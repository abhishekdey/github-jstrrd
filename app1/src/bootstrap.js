// import App from './App.component';
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
