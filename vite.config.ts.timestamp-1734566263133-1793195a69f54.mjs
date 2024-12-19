// vite.config.ts
import * as path from "path";
import react from "file:///C:/Users/click/Desktop/ituwa/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/click/Desktop/ituwa/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\click\\Desktop\\ituwa";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assests": path.resolve(__vite_injected_original_dirname, "./src/assests"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components")
    }
  },
  server: {
    port: 3e3
  },
  build: {
    outDir: "dist",
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjbGlja1xcXFxEZXNrdG9wXFxcXGl0dXdhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjbGlja1xcXFxEZXNrdG9wXFxcXGl0dXdhXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jbGljay9EZXNrdG9wL2l0dXdhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0Bhc3Nlc3RzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2VzdHMnKSxcbiAgICAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXG5cbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1IsWUFBWSxVQUFVO0FBRXRTLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUg3QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsWUFBaUIsYUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDbkQsZUFBb0IsYUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxJQUUzRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
