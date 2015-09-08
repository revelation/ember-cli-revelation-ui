module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;
    return self.addBowerPackagesToProject([
      { name: 'bootstrap',        target: 'v4-dev' },
      { name: 'font-awesome',     target: '~4.4.0' }
    ]).then(function(){
      return self.addPackagesToProject([
        { name: 'ember-cli-sass',           target: '4.1.0' },
        { name: 'ember-cli-autoprefixer',   target: '0.4.1' },
        { name: 'ember-cli-cookie',         target: '0.1.0' }
      ]);
    });
  }
};
