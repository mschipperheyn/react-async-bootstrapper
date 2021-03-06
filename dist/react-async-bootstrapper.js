'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var reactTreeWalker = _interopDefault(require('react-tree-walker'))

/* eslint-disable no-console */

var warnmsg =
  '"react-async-bootstrapper" deprecation notice: please rename your "asyncBootsrap" methods to "bootstrap"'

var defaultContext = {
  reactAsyncBootstrapperRunning: true,
}

function asyncBootstrapper(app, options) {
  var context =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}

  var visitor = function visitor(element, instance) {
    if (
      instance &&
      (typeof instance.asyncBootstrap === 'function' ||
        typeof instance.bootstrap === 'function')
    ) {
      return typeof instance.bootstrap === 'function'
        ? instance.bootstrap()
        : console.log(warnmsg) || instance.asyncBootstrap()
    }
    return undefined
  }

  return reactTreeWalker(
    app,
    visitor,
    Object.assign({}, context, defaultContext),
    options,
  )
}

module.exports = asyncBootstrapper
//# sourceMappingURL=react-async-bootstrapper.js.map
