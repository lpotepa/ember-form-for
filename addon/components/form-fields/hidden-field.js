import TextField from './text-field';

export default TextField.extend({
  control: 'one-way-hidden',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),
});
