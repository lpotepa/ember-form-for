import Ember from 'ember';
import config from '../config/environment';

const { merge, set } = Ember;

export function initialize(application) {
  let formForConfig = merge(DEFAULT_CONFIG, config['ember-form-for']);
  let configService = application.lookup('service:ember-form-for/config');

  Object.keys(formForConfig).forEach((key) => {
    set(configService, key, formForConfig[key]);
  });
}

export default {
  name: 'form-for-initializer',
  initialize
};
