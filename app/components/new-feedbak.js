import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveFeedback (){
      console.log("new-fb");
      var params = {
        feedbackPersonName: this.get('feedbackPersonName'),
        serviceFeedback: this.get('serviceFeedback'),
        service: this.get('service'),
        time: moment().format("MMM Do YYYY, h:mm a")
      };
      this.sendAction('saveFeedback', params);
      this.set('feedbackPersonName', "");
      this.set('serviceFeedback', "");
    }
  }
});
