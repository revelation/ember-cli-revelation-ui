import Ember from 'ember'
import layout from './template'

export default Ember.Component.extend({
  classNames: ['rui-error-template'],
  layout,

  externalLink: Ember.computed(function() {
    let link = this.get('link')

    return link.indexOf('http') >= 0 ? true : false
  }),

  actions: {
    back(event){
      event.preventDefault()

      /**
      * For now, since all this is managed by rails app,
      * We have to use window.location to handle navigating
      * to root then last visited project or login if unauthenticated
      **/

      return window.location.replace(window.location.origin)
    }
  }
})
