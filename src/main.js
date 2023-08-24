import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles/generic/_index.scss";
import "vuetify/styles/settings/_index.sass";
import "vuetify/styles/utilities/_index.sass";
import "vuetify/styles/elements/_blockquote.sass";
import "./custom.scss";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  styles: { configFile: "src/custom.scss" },
});

createApp(App).use(vuetify).mount("#app");
