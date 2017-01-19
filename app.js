// app.js
Vue.config.debug = true;
Vue.config.devtools = true;
new Vue({
  // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
      event: { name: '', description: '', date: '' },
      events: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {},

    // Methods we want to use in our application are registered here
    methods: {
      addEvent: function()
      {
        if(this.event.name)
        {
          this.events.push(this.event);
          this.event = { name: '', description: '', date: '' };
        }
      }
    }
});
