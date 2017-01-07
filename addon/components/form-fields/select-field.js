import Ember from 'ember';
import layout from '../../templates/components/form-fields/select-field';

const {
  Component,
  set
} = Ember;

const SelectFieldComponent = Component.extend({
  tagName: '',
  layout,
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  control: 'one-way-select',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

SelectFieldComponent.reopenClass({
  positionalParams: ['propertyName', 'options']
});

export default SelectFieldComponent;
