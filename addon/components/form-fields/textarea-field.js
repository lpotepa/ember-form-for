import Ember from 'ember';
import layout from '../../templates/components/form-fields/textarea-field';

const {
  Component,
  set
} = Ember;

const TextareaFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-textarea',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextareaFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextareaFieldComponent;
