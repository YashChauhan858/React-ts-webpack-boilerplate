# **React, Webpack, Ts, Eslint, Docker and Redux boilerplate**

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react" width="100"/>
  <img src="https://webpack.js.org/assets/icon-square-big.svg" alt="webpack" width="100">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="typescript" width="100">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="docker" width="100"/>
  <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="docker" width="110"/>
  <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux" width="100"/>
</p>

- This is a boilerplate that includes react setup with webpack from scartch and integration of
  typescript, eslint and redux with best practices, This boilerplate includes enviornment awareness with a support for both development spinup and production spin up
- This boilerplate also includes npm-check -u command for npm package check for all possible
  minor, major or patch update , for that simply run **npm run checkPackageUpdate**
- ErrorBoundary component for tracking all the errors and sending to backend for
  maintaining a logger file (./src/ErrorLogger/ErrorLogger.tsx)

Commands:

1. npm run start ( spin up webpack server )
2. npm run build ( builds production build and run postbuild command )
3. npm run checkPackageUpdate ( runs npm-check -u for all possible updates in package.json )

Production build includes the following optimization

- cache busting
- code obfuscation
  - js minification ( run parallel )
- chunk spliting ( Two possible ways )
- Html optimization
- Css optmization
  - Extract css per chunk into its own file
  - Minify it ( run parallel )
- Tree shaking

@babel/preset-typescript:
There are several ways to compile your TypeScript projects nowadays. You can use a vanilla call to tsc to just convert everything to .js files, or you can use a build tool like webpack and use a TypeScript loader like ts-loader or Babels @babel/preset-typescript
