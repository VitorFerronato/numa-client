import { createVuetify } from "vuetify";
import {
  VApp,
  VMain,
  VContainer,
  VBtn,
  VCard,
  VRow,
  VCol,
  VForm,
  VTextField,
  VIcon,
  VProgressCircular,
} from "vuetify/components";
import "vuetify/styles";

import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VContainer,
    VBtn,
    VCard,
    VRow,
    VCol,
    VForm,
    VTextField,
    VIcon,
    VProgressCircular,
  },
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        colors: {
          primary: "#15C64F",
          error: "#b00020",
          success: "#1d8527",
          background: "#f5f5f5",
          text: "#003705",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
