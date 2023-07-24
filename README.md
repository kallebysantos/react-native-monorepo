# React + Native - Monorepo Guide

> Monorepos, or "monolithic repositories", are single repositories 
containing multiple apps or packages. It can help speed up 
development for larger projects, make it easier to share code, 
and act as a single source of truth. 

This guide will set up a simple monorepo with a **React Native CLI** 
and **React Web** projects.

## 1. Creating a Yarn workspace
All yarn monorepos should have a "root" **package.json** file. 
It is the main configuration for our monorepo and may contain 
packages installed for all projects in the repository. 
You can run ``yarn init``, or create the **package.json** manually. 
It should look something like this:

```json
{
  "name": "monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": {
    "packages": [
      "packages/*"
    ]
  }
}
```

---

## 2. Creating packages
Now that we have the basic monorepo structure set up, let's add our
packages, first of all we need to create a **packages/** folder. 
This folder will contain all separate apps or websites that belong 
to this monorepo.

> You should run all the following commands inside **packages/** folder

#### React Web
```bash
yarn create vite --template react-ts 
```
>This command will create a react web application using vite.

---

#### React-Native 
```bash
npx react-native init mobile
```

>This command will create a react native application. 


#### A Shared component library 
```bash
mkdir shared && cd shared && yarn init
```
>This command will create shared package. 

After that you should have the following folder structure:
```
├── package.json
└── packages
    ├── mobile
    ├── shared
    └── web
``` 

## 3. Setting up packages
### Setting up mobile app to find packages from root workspace.

Its important to change all **react-native** references to point
to **node_modules** in root folder, in order that change all `../node_modules` to `../../../node_modules`.

Then change the `metro.config.js` with the following:
```js
const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '.'),
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../packages')
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
```

#### Android specific config
You should uncomment the `android/app/build.gradle` file and
updated the react-native references.

```gradle
// packages/mobile/android/app/build.gradle

react {
    /* Folders */
    //   The root of your project, i.e. where "package.json" lives. Default is ..'
    root = file("../")

    //   The folder where the react-native NPM package is. Default is ../node_modules/react-native
    reactNativeDir = file("../../../../node_modules/react-native")

    //   The folder where the react-native Codegen package is. Default is ../node_modules/react-native-codegen

    codegenDir = file("../../../../node_modules/react-native-codegen")

    //   The cli.js file which is the React Native CLI entrypoint. Default is ../node_modules/react-native/cli.js
    cliFile = file("../../../../node_modules/react-native/cli.js")
}
```

#### ios specific config
Update the `ios/Podfile` file with the following:
```ruby
# packages/mobile/ios/Podfile

target 'mobile' do
  #...
  
  use_react_native!(
    :path => '../../../node_modules/react-native',
    #...    
    :app_path => "#{Pod::Config.instance.installation_root}/.."
  )

  # ...

  post_install do |installer|
    react_native_post_install(
      installer,
      '../../../node_modules/react-native', 
      # ...
    )

  # ...

end
```
>Then run `npx pod-install` to apply updates

### Setting up apps to use shared components

Let's reference the `shared` package in both `mobile` and `web` projects.

> For that you need to add `@monorepo/shared` as **dependency** inside `package.json`.


#### Web specific config

Update your `vite.config.js` with the following:
```js
// packages/web/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
})

```

## 4. Creating and using Shared Components

After link and setup our projects to work in a monorepo structure we would be able to share code and create **cross platform components**.

At this point we'll be using the [`react-native-web`](https://www.npmjs.com/package/react-native-web) package. This package allows `react-native` components to run on the web.

Let's create an `HelloWorld.tsx` inside our `shared` package.
```tsx
// packages/shared/components/HelloWorld.tsx

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from shared-component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
```

Then let's import our shared component in both `mobile` and `web` apps

#### Mobile app
```tsx
// packages/mobile/App.tsx

import React from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

// Importing Shared Component
import { HelloWorld } from '@monorepo/shared/components/HelloWorld';

function App(): JSX.Element {
    return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, color: 'black' }}>
          Hello from mobile app ({Platform.OS})
        </Text>

        {/* Using the shared component */}
        <HelloWorld />

      </View>
    </SafeAreaView>
  );
}

export default App;
```

#### Web app

```tsx
// packages/web/src/App.tsx

import react from 'react'

// Importing Shared Component
import { HelloWorld } from '@monorepo/shared/components/HelloWorld';

function App() {
  return (
    <>
      <h1>Hello from web</h1>

      {/* Using the shared component */}
      <HelloWorld />
    </>
  )
}

export default App
```
