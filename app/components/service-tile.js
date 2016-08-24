import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(service){
      this.sendAction('destroyService', service);
    }
  }
});
