import DS from 'ember-data';

export default DS.Model.extend({
  feedbackPersonName: DS.attr(),
  serviceFeedback: DS.attr(),
  time: DS.attr(),
  service: DS.belongsTo('service', {async:true})
});
