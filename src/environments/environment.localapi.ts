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
  api: 'https://localhost:5000/api'
};
