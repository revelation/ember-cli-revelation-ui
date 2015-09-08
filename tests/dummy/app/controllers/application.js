import Ember from 'ember';

export default Ember.Controller.extend({
  // Service::Menu Injected into global application controller for property access
  // Service::Menu Injected into global application router for method access
  // TBD: May rename as layout-preferences
  menu: Ember.inject.service('menu'),

  // +++
  // Dummy Only
  // +++

  // For displaying loading state on async button option
  asyncAction1: false,
  asyncAction2: false,
  animals: ['Antelope', 'Giraffes', 'Penguins', 'Bears', 'Ostrich'],
  mySelectOptions: [
    {title: 'Bears', id: 1},
    {title: 'Tigers', id: 2},
    {title: 'Lions', id: 3}
  ]
});
