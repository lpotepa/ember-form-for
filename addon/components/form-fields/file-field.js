import TextField from './text-field';

export default TextField.extend({
  control: 'one-way-file',
  id: Ember.computed('propertyName', function(){
    return this.get('propertyName');
  }),
});
