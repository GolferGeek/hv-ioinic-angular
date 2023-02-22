export const environment = {
  production: false,
  auth: {
    domain: "golfer-geek.us.auth0.com",
    clientId: "DqDFsmpuW5RPgFzWkE9OR7XBsOATBxr1",
    authorizationParams: {
      audience: "https://hiverarchy-api.com",
      redirect_uri: window.location.origin
    }
  },
  // api: 'https://hiverarchyapi.azurewebsites.net/api'
  api: 'https://localhost:5000/api'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
