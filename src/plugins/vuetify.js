import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: colors.blue.darken2,
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  icons: {
    iconfont: "fa",
    values: {
      add: "fas fa-plus",
      close: "fas fa-times",
      home: "fas fa-home",
      tasks: "fas fa-list-ul",
      ongoing: "fas fa-gavel",
      done: "fas fa-check-circle",
      back: "fas fa-arrow-left",
      settings: "fas fa-cog",
      option: "fas fa-ellipsis-v",
      select: "far fa-check-square",
      unselect: "fas fa-check-square",
    },
  },
});
