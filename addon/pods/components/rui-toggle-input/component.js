import Ember from 'ember'
import layout from './template'

const { Component } = Ember

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['toggle-input'],
  labels: true,
  classNameBindings: ['checked:toggle-input-on:toggle-input-off', 'labels:show-labels:hide-labels']
})
