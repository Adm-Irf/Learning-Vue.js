const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
  },
  computed: {
    fullname() {
      console.log('Running again...')
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      else {
      return this.name + ' ' + this.lastname;
      } 
    }
  },
  watch: {
    // name(value) {
    //   if (value === '') {
    //      return '';
    //    }
    //    else {
    //   this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //      return '';
    //    }
    //    else {
    //    this.fullname = this.name + ' ' + value ;
    //   }
    // }

  }
});

app.mount('#events');
