// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app"

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCkMKhAoqnxWiZu2zCaqSWjv0AG9Cm1-h8",
    authDomain: "aplicacion-dah2022.firebaseapp.com",
    projectId: "aplicacion-dah2022",
    storageBucket: "aplicacion-dah2022.appspot.com",
    messagingSenderId: "77626448390",
    appId: "1:77626448390:web:22066899022a4cbefc8187"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
