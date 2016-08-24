import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  cost: 0.00,
  add(item){
    // console.log(.price);
    this.get('items').pushObject(item);

    this.set('cost', (parseInt(this.cost) + parseInt(item.get('price'))).toFixed(2));
  }
});
