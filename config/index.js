const defaultConfig = require('./index.default')
const providerPackage = require('frontful-config/provider/package')
const objectPath = require('object-path')

const customConfig = objectPath(providerPackage('frontful.common') || {})

const mergedConfig = {
  packages: defaultConfig.packages.concat(customConfig.get('packages') || []),
  alias: customConfig.get('alias') || {},
}

module.exports = mergedConfig
