const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
    }
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');

// v-if for if statement
// v-else-if for else if statement
// v-for is 'for' statement