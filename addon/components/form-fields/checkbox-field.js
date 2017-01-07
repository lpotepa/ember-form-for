import Ember from 'ember';
import layout from '../../templates/components/form-fields/checkbox-field';

const {
  Component,
  set
} = Ember;

const CheckboxFieldComponent = Component.extend({
  tagName: '',
  layout,
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  control: 'one-way-checkbox',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CheckboxFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CheckboxFieldComponent;
