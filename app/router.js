import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('shop', function (){
    this.route('feedback', {path:'/feedback/:service_id'});
  });

  this.route('map', {path:'/map/:service_id'});
});

export default Router;
