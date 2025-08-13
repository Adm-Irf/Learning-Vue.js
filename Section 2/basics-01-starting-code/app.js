// First Step always declare Vue apps
const app = Vue.createApp({
    // It has to be 'data'(reserved), not a function
    data: function() {
        // Return an object
        return {
            courseGoal : 'First Goals',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Master Vue aand build amazing Apps!</h2>',
            vueLink: 'https://vuejs.org/',
        };
    },
    // Method help to create function(to call)
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            // this. can use to refer (point) to the data, cannot call direct
            if (randomNumber < 0.5) {
                return this.courseGoalA
            }
            else {
                return this.courseGoalB
            }
        }
    }
});

// Declare which section i want to controll (like widget)
// The string for mount is css selector (Put #), taken from section id
app.mount('#user-goal');

// Vue will scan the HTML, and implied it based on the section
// This will only work in section id "user-goal", if the {{courseGoal}} waas to be put
// in other section it will not work