import TextField from './text-field';

export default TextField.extend({
  control: 'one-way-url',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),
});
