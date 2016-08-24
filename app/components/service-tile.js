import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: Ember.inject.service(),
  actions:{
    delete(service){
      this.sendAction('destroyService', service);
    },
    showUpdateService(service){
      this.get('showUpdate').showUpdateService2();
      this.get('showUpdate').setService(service);
    }
  }
});
