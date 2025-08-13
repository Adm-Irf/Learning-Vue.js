// First Step always declare Vue apps
const app = Vue.createApp({
    // It has to be 'data'
    data: function() {
        // Return an object
        return {
            courseGoal: 'Finish the course and learn Vue!'
        };
    }
});

// Declare which section i want to controll (like widget)
// The string for mount is css selector (Put #), taken from section id
app.mount('#user-goal');

// Vue will scan the HTML, and implied it based on the section
// This will only work in section id "user-goal", if the {{courseGoal}} waas to be put
// in other section it will not work