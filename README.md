# <a href="https://github.com/frontful/frontful-common"><img heigth="75" src="http://www.frontful.com/assets/packages/common.png" alt="Frontful Common" /></a>

[`frontful-common`](https://github.com/frontful/frontful-common) is common configuration and utilities provider for [Frontful](https://github.com/frontful) infrastructure. This package on its own has no use outside Frontful infrastructure. It is deployed and packaged only for purpose of internal code reuse.

### _Package development helper_

When developing a package it may be helpful to test it in playground project and immediately see changes when you update package code without need to rebuild, redeploy/reinstall package and restart project. [`npm link`](https://docs.npmjs.com/cli/link) and [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) partially helps with it, but it means that you still either need to rebuild your project or write it in ES5, project restart is still needed.

_Package development helper_ focuses on making package development and testing in the project seamless. Change package code and project will be rebuilt and reloaded as if you changed local project file.  
Streamlined package development process can be beneficial in decoupling of larger applications and help distributed teams work on modules instead of single codebase. _Package development helper_ is used in developing all Frontful packages and has shown to be efficient way of developing and maintaining several decoupled projects in production.

##### To benefit from _Package development helper_
1. Playground project must use [`frontful-environment`](https://github.com/frontful/frontful-environment)
2. Package should be built using [`babel-preset-frontful`](https://github.com/frontful/babel-preset-frontful) or be compatible with its Babel configuration
3. Install package in playground project by executing `yarn add my_package`
4. Register package link by executing `yarn link` in the root of the package
5. Link package to playground project by executing `yarn link my_package` in the root of the project
6. Specify package name in `frontful.common.packages` in  `package.json` of playground project
```javascript
// package.json
{
  "frontful": {
    "common": {
      "packages": ["my_package"]
    }
  }
}
```
7. Start project, change package code and watch everything reload
