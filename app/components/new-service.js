import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: Ember.inject.service(),
  // updateServiceForm: showUpdate.updateServiceForm,
  actions:{
    saveService () {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        photo: this.get('photo'),
        price: parseInt(this.get('price')).toFixed(2)
      };
      this.sendAction('saveService', params);
      this.set('name',"");
      this.set('price',"");
      this.set('photo',"");
      this.set('description',"");
    },
    updateService(service){
      console.log(service);
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        photo: this.get('photo'),
        price: parseInt(this.get('price')).toFixed(2)
      };
      this.sendAction('updateService', service, params);
      this.get('showUpdate').hideUpdateService();
      this.set('name',"");
      this.set('price',"");
      this.set('photo',"");
      this.set('description',"");
    },

  }
});
