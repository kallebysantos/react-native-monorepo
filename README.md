# React + Native - Monorepo Guide

> Monorepos, or "monolithic repositories", are single repositories 
containing multiple apps or packages. It can help speed up 
development for larger projects, make it easier to share code, 
and act as a single source of truth. 

This guide will set up a simple monorepo with a **React Native CLI** 
and **React Web** projects.

### 1 - Creating a Yarn workspace
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

### 2 - Creating the Web app
Now that we have the basic monorepo structure set up, let's add our
first app.

Before we can create our app, we have to create the **packages/** 
folder. 
This folder can contain all separate apps or websites that belong 
to this monorepo.

Inside this **packages/** folder, we can create a subfolder that 
contains the React Web app.
```
yarn create vite --template react-ts 
```
>This command will create a react web application using vite you 
should run it inside **packages/** folder.

---

### 3 - Creating the mobile app
Inside our **packages/** folder we can create a subfolder with our
mobile app.
```
npx react-native init mobile
```

>This command will create a react native application.

#### Setting up mobile app to find packages from root workspace.

Its important to change all **react-native** references to point
to **node_modules** in root folder.
> Change all `../node_modules` to `../../../node_modules`
>
> Also you should uncomment the `android/app/build.gradle` file and
> updated the react-native references.
>```gradle
>react {
>    /* Folders */
>    //   The root of your project, i.e. where "package.json" lives. Default is '..'
>    root = file("../")
>
>    //   The folder where the react-native NPM package is. Default is ../node_modules/react-native
>    reactNativeDir = file("../../../../node_modules/react-native")
>
>    //   The folder where the react-native Codegen package is. Default is ../node_modules/react-native-codegen
>
>    codegenDir = file("../../../../node_modules/react-native-codegen")
>
>    //   The cli.js file which is the React Native CLI entrypoint. Default is ../node_modules/react-native/cli.js
>    cliFile = file("../../../../node_modules/react-native/cli.js")
>}
>```


Now we need to add `react-native-web` in order to share compones 
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },.
