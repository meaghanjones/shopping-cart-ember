import Ember from 'ember';

export function serviceCost(params) {
  var servicePrice = params[0].get('price');
  if (servicePrice >= 50.00){
    return '$$$';
  } else if (servicePrice >= 25.00){
    return '$$';
  } else if (servicePrice <= 24.99){
    return '$';
  }
}

export default Ember.Helper.helper(serviceCost);
