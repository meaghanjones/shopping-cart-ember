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

    destroyService(service){
      service.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
