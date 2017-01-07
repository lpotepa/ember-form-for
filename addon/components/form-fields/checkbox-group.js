import Ember from 'ember';
import layout from '../../templates/components/form-fields/checkbox-group';
import { invokeAction } from 'ember-invoke-action';

const {
  Component,
  get
} = Ember;

const CheckboxGroupComponent = Component.extend({
  tagName: '',
  layout,
  
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  actions: {
    updateSelection(value, object, propertyName, include) {
      let selection = get(object, propertyName);
      if (include && !selection.contains(value)) {
        selection.pushObject(value);
      } else {
        selection.removeObject(value);
      }

      invokeAction(this, 'update', object, propertyName, selection);
    }
  }
});

CheckboxGroupComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CheckboxGroupComponent;
