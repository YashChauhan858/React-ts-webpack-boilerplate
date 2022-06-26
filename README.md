# _react, webpack, ts, eslint and redux boilerplate_

- This is a boiler plate that includes react setup with webpack from scartch and integration of
  typescript, eslint and redux with best practices, This boilerplate includes enviornment awareness with a support for both development spinup and production spin up
- This boiler plate also includes npm-check -u command for npm package check for all possible
  minor, major or patch update , for that simply run _npm run checkPackageUpdate_

With production being the most optiminal settings including

- cache busting
- code obfuscation
  - js minification ( run parallel )
- chunk spliting ( Two possible ways )
- Html optimization
- Css optmization
  - Extract css per chunk into its own file
  - Minify it ( run parallel )

@babel/preset-typescript:
There are several ways to compile your TypeScript projects nowadays. You can use a vanilla call to tsc to just convert everything to .js files, or you can use a build tool like webpack and use a TypeScript loader like ts-loader or Babels @babel/preset-typescript
