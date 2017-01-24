// app.js
Vue.config.debug = true;
Vue.config.devtools = true;
new Vue({
    el: '#events', //target element is div with id=element

    data: {
      event: { name: '', description: '', date: '' }, //"data" is similer to scope in AngularJs . It is the glue between ctrl and view
      events: []
    },

    ready: function() { //ready is the init method . runs when vue initializes
      this.fetchEvents();
    },

    methods: { //this is where we register methods
        fetchEvents: function() {
          // var events = [
          //     {
          //       id: 1,
          //       name: 'Do shopping',
          //       description: 'Buy monthly groceries from Keels',
          //       date: '2015-09-10'
          //     },
          //     {
          //       id: 2,
          //       name: 'Take the motorcycle to service',
          //       description: 'Change new tires',
          //       date: '2015-10-02'
          //     },
          //     {
          //       id: 3,
          //       name: 'Take out garbage',
          //       description: 'And clean the garden',
          //       date: '2016-03-11'
          //     }
          //   ];
          //     this.$set('events', events);
      },

      addEvent: function()
      {
        if(this.event.name)
        {
          this.events.push(this.event);
          this.event = { name: '', description: '', date: '' };
        }
        else{
          alert("Please add a name to the event!");
        }
      },

      deleteEvent: function(item) {
        if(confirm("Are you sure you want to delete this event?")) {
          this.events.$remove(item); // $remove is a Vue convenience method similar to splice
        }
      }
    }
});
