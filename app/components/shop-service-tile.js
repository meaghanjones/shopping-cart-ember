import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(service){
      this.get('shoppingCart').add(service);
    },
    showMap(service){
      this.sendAction("showMap", service);
    }
  }
});
