import Ember from 'ember';

export default Ember.Component.extend({
  googleMap: Ember.inject.service(),
  actions:{
    showMap(service){
      this.get('googleMap').showMap(service);
    }
  }
});
