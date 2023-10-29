# @Frontend-Next/react-vite-shared-library

###### based on @Frontend-Next/react-template

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - It's a standard now!
- 🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- ⚙️ WIP [Jest](https://jestjs.io/) - Testing libraries
- ⌨️ Absolute Imports
- Fully tree shakeable. Only component code is imported.
- You can develop library like a normal application, with demo usage for examlpe, but expose only `lib` folder outside.
- The components are styled with css modules, this approach avoids a compatibility issue.

## Usage

### To use this template see instructions below:

```bash
# to clone repository run:
npx degit Frontend-Next/react-template my-app

cd my-app

# Required if you want a repository and work with Git hooks
git init

yarn install

yarn dev
```

### Development linking

For development purposes you can install library into your application using `yarn`/`npm` `link` command.

```bash
# inside of your library folder use
yarn link
# to build a link to this library

# inside of your application folder use
yarn link <library_name>
# to install this library ino node_modules folder as a symlink
```

## Available commands

| Command             | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| yarn dev            | Runs the app in the development mode.                                                         |
| yarn build          | Builds the `lib` folder for production to the `dist` folder.                                  |
| yarn watch          | Builds the `lib` folder for production to the `dist` folder and is watching for file changes. |
| yarn prepublishOnly | Builds the app for production to the `dist` folder.                                           |
| yarn lint           | Runs the Eslint and show code problems.                                                       |
| yarn preview        | Builds the app for production to the `dist` folder, and run locally server.                   |

## Issues

- Due to config limitations, imports from `lib` directory must be `relative` imports.
