import Ember from 'ember'
import layout from './template'

const { Component } = Ember

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['toggle-input'],
  classNameBindings: ['checked:toggle-input-on:toggle-input-off']
})
