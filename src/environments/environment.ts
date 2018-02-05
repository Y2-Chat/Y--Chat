// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firestore: {
    apiKey: "AIzaSyD7LRmMOeL5JrPdWszlI7ydvA7TwAty8Lk",
    authDomain: "y2-chat.firebaseapp.com",
    databaseURL: "https://y2-chat.firebaseio.com",
    projectId: "y2-chat",
    storageBucket: "y2-chat.appspot.com",
    messagingSenderId: "555673165499"
  }
};
