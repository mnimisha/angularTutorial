// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment :{firebaseConfig:any,production:boolean} = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCzSHstXZIfBYLg36xdR4OrNy7QdU2tUT8",
    authDomain: "whatsapp-clone-tutorial-281ab.firebaseapp.com",
    projectId: "whatsapp-clone-tutorial-281ab",
    storageBucket: "whatsapp-clone-tutorial-281ab.appspot.com",
    messagingSenderId: "596399445758",
    appId: "1:596399445758:web:9adbcd732dddcc6b7337af"
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
