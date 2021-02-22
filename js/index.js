const app = {
  data() {
    return {
      section1: {
        bottomHeader: [
          { h2: "2,300", p: "Destinations" },
          { h2: "1,000", p: "Cities" },
          { h2: "35,000", p: "Boats" },
          { h2: "50,000", p: "Sailors" },
        ],
      },
    };
  },

  methods: {},

  mounted() {},
};
Vue.createApp(app).mount("#app");
