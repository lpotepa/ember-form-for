import TextField from './text-field';
import { toMonthString } from '../../utils/date';

export default TextField.extend({
  control: 'one-way-month',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  serializeValue(value) {
    if (value instanceof Date) {
      return toMonthString(value);
    }

    return value;
  },

  deserializeValue(value) {
    if (value != null) {
      return new Date(value);
    }

    return value;
  }
});
