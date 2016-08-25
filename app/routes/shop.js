import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.query ('service', {
      orderBy: 'name',
      limitToFirst: 100  // this would limit the services to just the first 100
    });
  },
});
