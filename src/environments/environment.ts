import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: false,


  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
