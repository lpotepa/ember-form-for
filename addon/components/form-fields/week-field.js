import TextField from './text-field';
import { fromWeekString, toWeekString } from '../../utils/date';

export default TextField.extend({
  control: 'one-way-week',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),

  serializeValue(value) {
    if (value instanceof Date) {
      return toWeekString(value);
    }

    return value;
  },

  deserializeValue(value) {
    if (value != null) {
      return fromWeekString(value);
    }

    return value;
  }
});
