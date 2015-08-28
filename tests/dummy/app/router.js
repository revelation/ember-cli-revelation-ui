import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styles');
  this.route('components');
  this.route('layout');
});

export default Router;
