import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions:{
    showMap(service){
      var container = this.$('.map-display')[0];
      var options ={
        center: this.get('map').center(service.get('latitude'), service.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    },
    showMap2(){
      this.get('show-map').click();
    }
  }
});
