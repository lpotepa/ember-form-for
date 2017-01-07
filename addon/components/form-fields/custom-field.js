import Ember from 'ember';
import layout from '../../templates/components/form-fields/custom-field';

const {
  Component,
  set
} = Ember;

const CustomFieldComponent = Component.extend({
  tagName: '',
  layout,
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  control: 'one-way-input',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CustomFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CustomFieldComponent;
