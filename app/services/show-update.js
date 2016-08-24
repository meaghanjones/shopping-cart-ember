import Ember from 'ember';

export default Ember.Service.extend({
  updateServiceForm: false,
  service: [],
  showUpdateService2(){
    this.set('updateServiceForm',true);
  },
  hideUpdateService(){
    this.set('updateServiceForm',false);
  },
  setService(service){
    this.set('service' ,service);
  }

});
