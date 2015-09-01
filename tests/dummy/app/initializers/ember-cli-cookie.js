// https://www.npmjs.com/package/ember-cli-cookie

export function initialize(container, app) {
  app.inject('service:menu', 'cookie', 'cookie:main');
}

export default {
  name: 'ember-cli-cookie',
  after: ['cookie'],
  initialize: initialize
};
