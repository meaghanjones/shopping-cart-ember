import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveService () {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        photo: this.get('photo'),
        price: this.get('price')
      };
      this.sendAction('saveService', params);
    }
  }
});
