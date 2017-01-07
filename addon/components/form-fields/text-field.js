import Ember from 'ember';
import layout from '../../templates/components/form-fields/text-field';

const {
  Component,
  set
} = Ember;

const TextFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-text',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
