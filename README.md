# Unicard Test

Hi! Many thanks for giving me this challenge, I've thoroughly enjoyed building this project. Here's a bit of info that will help you make your way around the codebase.

## Running the app locally - iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc
4. Install js dependencies: `yarn install`
5. Install native dependencies: `cd ios && pod install`
7. Start the js bundler: `yarn start` (Optional, `yarn ios` will start up a new bundler if none is active)
8. Run the project: `yarn ios`

## Running the app locally - Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager (or have a real device connected)
3. Install js dependencies: `yarn install`
5. Start the js bundler: `yarn start` (Optional, `yarn android` will start up a new bundler if none is active)
6. Run the project: `yarn android`

## Structure

`redux` is used for state management and `redux-thunks` for asynchronous actions e.g. api requests.

The bulk of the code is in the `app` directory.

| location       | contents                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| app/App.js     | Entrypoint for the app                                                                                                       |
| app/components | Where components and their tests are kept.                                                                                |
| app/screens    | Components representing entire screens within the app, where smaller component are pieced together.      API layer implementation                                                                                                      |
| hooks/       | Custom hooks                                                                                        |
| app/config     | app-wide config - things like an api host, colors, etc. Configuration of the redux store and, in dev, tools like Reactotron. |
| app/state      | redux reducers/actions/selectors. Combined in `index.js`                                                                     |
| fastlane/     | Where `fastlane` configuration belongs.                                              |
| jest/      | Global `jest` config.                                              |
| .github/workflows      | Github Actions workflows are stored here as `.yml`                                           |
| ios/           | Native iOS project                                                                                                           |
| android/       | Native Android project                                                                                                       |
| e2e/       | Detox e2e tests                                                                                                      |

## Redux

Redux setup is done in `config/store.js`. This sets up the redux store, add middleware (such as `redux-thunk`)

`@reduxjs/toolkit` is included, which speeds up development by allowing us to abstract away most of the typical boilerplate code associated with setting up and using redux. For example:

- Includes a convenience function for configuring the store
- Has the concept of a `slice` which incorporates reducers and action creators
- Exposes a nice way to write async actions using thunks

It's worth reading through the [toolkit docs](https://redux-toolkit.js.org/) for more details

## Tests

Run unit tests with `yarn test`. 

Run detox e2e tests with `yarn e2e-ios/android`. Note, there can be issues when running detox on an android emulator, depending on setup. iOs tets work fine in all cases. For the sake of the test I haven't spent more time in making sure android e2e test work everywhere. In a production environment this should be done.


# Build & Deploy

I've set up `fastlane` to deliver the app to `TestFlight` and `PlayStore` beta tracks. There is a Github Action that triggers this pipeline on every push and PR to master. It will not work as there are no credentials set to deliver to the stores, as it is not necessary for the sake of the test. In a production scenario, those guides should be followed to set up Keys and Certificates for [Android](https://shift.infinite.red/simple-react-native-android-releases-319dc5e29605) and [iOs](https://docs.fastlane.tools/actions/match/#setup).  Follow the steps below to deploy a `debug` version to a local device

## iOS

Running `yarn ios` will open a `js bundler` and a Simulator on which the app will install automatically.

## Android

Open the emulator and run `yarn android`, a `js bundler` will start and the app will install automatically on the emulator.
