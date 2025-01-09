module.exports = {
    hooks: {
      readPackage(pkg) {
        pkg.publishConfig = pkg.publishConfig || {};
        pkg.publishConfig.registry = 'https://registry.npmjs.org/';
        return pkg;
      }
    }
  };
