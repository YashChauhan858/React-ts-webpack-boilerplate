- npm init
- README.md
- gitpush.sh (file)
- info (folder)
- changelog.md
- npm i -D typescript
- npx tsc --init

<!-- Webpack  -->

- npm i -D webpack
- npm i -D webpack-cli
- npm i -D webpack-dev-server
- npm i -D webpack-dev-server
- npm i -D css-loader
- npm i -D sass-loader
- npm i -D html-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D ts-loader

- Configuration (folder)
- Webpack (folder)
- Plugins (folder)
- Rules (folder)
- public (folder)
- index.html
- webpack.common.ts
- webpack.dev.ts
- webpack.prod.ts

<!-- React -->

- npm i react react-dom
- npm i --save-dev @types/react @types/react-dom

- index.tsx
- App.tsx
- npm i -D @babel/core
- npm i -D babel-loader
- npm i -D @babel/preset-env
- npm i -D @babel/preset-react
- npm i -D @babel/preset-typescript
- .babelrc
- .gitignore
- npm i -D url-loader svg-url-loader style-loader
- npm i -D @babel/plugin-transform-runtime
- npm i -D clean-webpack-plugin
- npm i serve
- npm install -D webpack-bundle-analyzer
- npm i -D --force optimize-css-assets-webpack-plugin
- npm i -D sass
- npm i -D npm-check
- npm unistall optimize-css-assets-webpack-plugin
- npm i -D css-minimizer-webpack-plugin
- ErrorBoundary (folder)
- ErrorBoundary.tsx
- npm i -D dotenv-webpack
- npm i -D compression-webpack-plugin
- npm i -D webpack-obfuscator
- npm install error-overlay-webpack-plugin --save-dev
- npm install --save-dev webpack-dashboard
- npm i -D esbuild-loader
- npm i -D gnomon
- npm uninstall gnomon

<!-- removed babel (MAJOR) -->

<!-- removed because there is no build time type checking, which is provided by ts-loader -->

- "@babel/core": "^7.18.5",
- "@babel/plugin-transform-runtime": "^7.18.5",
- "@babel/preset-env": "^7.18.2",
- "@babel/preset-react": "^7.17.12",
- "@babel/preset-typescript": "^7.17.12",
- "babel-loader": "^8.2.5",

- .babelrc (removed)

- npm i react-redux @reduxjs/toolkit
- npm install -D @types/react-redux

- Store (folder)
- Store > Features (folder)
- Store > Features > counter (folder)
- Store > Features > counter > counterSlice.ts (file)
- Store > store.ts (file)
- Store > DispatchHooks.ts (file)

- npm uninstall npm-check
- npm i react-query
- npm install eslint --save-dev
- npm init @eslint/config

- npm install --save-dev brotli-gzip-webpack-plugin
- npm install --save-dev brotli-webpack-plugin
- npm uninstall brotli-gzip-webpack-plugin

<!-- for alias path name -->

- npm i -D tsconfig-paths-webpack-plugin
- npm install eslint-plugin-react-hooks --save-dev
- npm i -D prettier
- .prettierrc
- .eslintignore

<!-- upgraded packages -->

- npm-check -u

<!-- styles folder added -->

- Styles (folder)
- Styles > component (folder) > \_components.scss (file)
- Styles > pages (folder) > \_pages.scss (file)
- Styles > variables > \_variables.scss (file)
- Styles > \_global.scss (file)

<!-- react query package updates -->

- npm uninstall react-query
- npm i @tanstack/react-query
- npm i -D @tanstack/eslint-plugin-query
- npm i @tanstack/react-query-devtools

- npm i -D dotenv
- npm uninstall dotenv
- npm uninstall svg-url-loader url-loader
