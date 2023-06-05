// vite.config.ts
import { defineConfig } from "file:///C:/my-projects/node/react-native/bare/react-monorepo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/my-projects/node/react-native/bare/react-monorepo/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  }
});
export {
  vite_config_default as default
};

