import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('service');
  },

  actions:{
    saveService(params){
      var newService = this.store.createRecord('service', params);
      newService.save();
      this.transitionTo('admin');
    },
    updateService(service, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          service.set(key,params[key]);
        }
      });
      service.save();
      this.transitionTo('admin');
    },

    destroyService(service){
      service.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
