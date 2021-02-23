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
      section2: {
        info1: [
          {
            src1: "img/section2/sec2_boat_1.jpg",
            alt1: "boat_1",
            class: "position-relative col-lg-6 mb-lg-0 col-12 mb-3",
            sp1p1: "730",
            sp2h3: "Figueira da Foz",
            sp2p2: "Portugal",
          },
          {
            src1: "img/section2/sec2_boat_2.jpg",
            alt1: "boat_2",
            class: "position-relative col-lg-3 mb-lg-0 col-12 mb-3",
            sp1p1: "621",
            sp2h3: "Ibiza",
            sp2p2: "Spain",
          },
        ],
        info2: [
          {
            src1: "img/section2/sec2_boat_3.jpg",
            alt1: "boat_3",
            class: "position-relative col-lg-3 mb-lg-0 col-12 mb-3",
            sp1p1: "543",
            sp2h3: "Palma de Mallorca",
            sp2p2: "Spain",
          },
          {
            src1: "img/section2/sec2_boat_4.jpg",
            alt1: "boat_4",
            class: "position-relative col-lg-3 mb-lg-0 col-12 mb-3",
            sp1p1: "495",
            sp2h3: "Portofino",
            sp2p2: "Italy",
          },
          {
            src1: "img/section2/sec2_boat_5.jpg",
            alt1: "boat_5",
            class: "position-relative col-lg-3 mb-lg-0 col-12 mb-3",
            sp1p1: "402",
            sp2h3: "Port Hercules",
            sp2p2: "Monaco",
          },
        ],
      },
    };
  },

  methods: {},

  mounted() {},
};
Vue.createApp(app).mount("#app");
