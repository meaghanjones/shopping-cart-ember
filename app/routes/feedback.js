import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('service', params.service_id);
  },

  actions: {
    saveFeedback (params) {
      var newFeedback = this.store.createRecord ('feedback', params);
      console.log(params.service);
      var service = params.service;
      service.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function(){
        return service.save();
      });
      this.transitionTo('feedback', params.service);
    }
  }

});
