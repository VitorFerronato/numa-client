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
  VDivider,
  VDialog,
  VCombobox,
  VCheckbox,
  VSkeletonLoader,
  VTabs,
  VWindow,
  VWindowItem,
  VTab,
} from "vuetify/components";
import "vuetify/styles";

import { aliases, mdi } from "vuetify/iconsets/mdi";
import { VDateInput } from "vuetify/labs/VDateInput";

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
    VDivider,
    VDialog,
    VDateInput,
    VCombobox,
    VCheckbox,
    VSkeletonLoader,
    VTabs,
    VTab,
    VWindow,
    VWindowItem,
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
          "background-light": "#E0E0E0",
          text: "#003705",
          "text-secondary": "#666666",
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
