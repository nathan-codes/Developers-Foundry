const app = Vue.createApp({
  data: () => {
    return {
      name: "Nathan",
      isSuccessful: true,
      count: 0,
      showbooks: false,
    };
  },
  methods: {
    changeTitle() {
      this.name = "update";
    },
    toggleShowBooks() {
      this.showbooks = !this.showbooks;
    },
  },
});

app.mount("#app");
