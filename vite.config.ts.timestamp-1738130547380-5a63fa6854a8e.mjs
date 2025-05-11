// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass@1.77.2_terser@5.31.0/node_modules/vite/dist/node/index.js";

// config/plugins/index.ts
import vue from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass@1.77.2_terser@5.31._dn2phruegfsmcuwlslbm4bqcwm/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass@1.77.2_terser@5_bmbk5imaqswcvgyw4zuw7fd4fe/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// config/plugins/app-info.ts
import boxen from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/boxen@7.1.1/node_modules/boxen/index.js";
import picocolors from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/picocolors@1.0.1/node_modules/picocolors/picocolors.js";
function appInfo() {
  return {
    name: "appInfo",
    apply: "serve",
    async buildStart() {
      const { bold, green, cyan, bgGreen, underline } = picocolors;
      console.log(
        boxen(
          `${bold(green(`${bgGreen("ContiNew Admin v3.4.1")}`))}
${cyan("\u5728\u7EBF\u6587\u6863\uFF1A")}${underline("https://continew.top")}
${cyan("\u5E38\u89C1\u95EE\u9898\uFF1A")}${underline("https://continew.top/faq.html")}
${cyan("\u6301\u7EED\u8FED\u4EE3\u4F18\u5316\u7684\u524D\u540E\u7AEF\u5206\u79BB\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6846\u67B6\u3002")}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: "double",
            textAlignment: "center"
          }
        )
      );
    }
  };
}

// config/plugins/devtools.ts
import VueDevTools from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.0_rollup@4.17.2_vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass_uqwyh5dn2quteogjh2dg6vj74i/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
function createDevtools(env) {
  const { VITE_OPEN_DEVTOOLS } = env;
  return VITE_OPEN_DEVTOOLS === "true" && VueDevTools();
}

// config/plugins/auto-import.ts
import autoImport from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/unplugin-auto-import@0.16.7_@vueuse+core@10.9.0_vue@3.5.12_typescript@5.0.4___rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
function createAutoImport() {
  return autoImport({
    // 自动导入 vue 相关函数
    imports: ["vue", "vue-router", {
      // vue 3.5.x
      vue: ["useTemplateRef", "onWatcherCleanup", "useId"]
    }],
    dts: "./src/types/auto-imports.d.ts"
  });
}

// config/plugins/components.ts
import components from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.26.1_rollup@4.17.2_vue@3.5.12_typescript@5.0.4_/node_modules/unplugin-vue-components/dist/vite.mjs";
function createComponents() {
  return components({
    // 指定组件位置，默认是 src/components 自动导入自定义组件
    dirs: ["src/components"],
    extensions: ["vue", "tsx"],
    // 配置文件生成位置
    dts: "./src/types/components.d.ts"
  });
}

// config/plugins/svg-icon.ts
import path from "node:path";
import process2 from "node:process";
import { createSvgIconsPlugin } from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass@1.77.2_terser@5.31.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process2.cwd(), "src/assets/icons")],
    // 指定 symbolId 格式
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild
  });
}

// config/plugins/mock.ts
import { viteMockServe } from "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@5.2.11_@types+node@20.12.12_less@4.2.0_sass@1.77.2_terser@5.31.0_/node_modules/vite-plugin-mock/dist/index.js";
function createMock(env, isBuild) {
  const { VITE_BUILD_MOCK } = env;
  return viteMockServe({
    mockPath: "src/mock",
    // 目录位置
    logger: !isBuild,
    //  是否在控制台显示请求日志
    supportTs: true,
    // 是否读取 ts 文件模块
    localEnabled: true,
    // 设置是否启用本地mock文件
    prodEnabled: isBuild && VITE_BUILD_MOCK === "true",
    // 设置打包是否启用mock功能
    // 这样可以控制关闭mock的时候不让mock打包到最终代码内
    injectCode: `
          import { setupProdMockServer } from '../src/mock/index';
          setupProdMockServer();
        `
  });
}

// config/plugins/index.ts
function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [appInfo(), vue(), vueJsx()];
  vitePlugins.push(createDevtools(viteEnv));
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(createMock(viteEnv, isBuild));
  return vitePlugins;
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///E:/.0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/continew-admin-ui/vite.config.ts";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // 开发或生产环境服务的公共基础路径
    base: env.VITE_BASE,
    // 路径别名
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", __vite_injected_original_import_meta_url)),
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    // 引入sass全局样式变量
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`,
          api: "modern-compiler"
        }
      }
    },
    // 添加需要vite优化的依赖
    optimizeDeps: {
      include: ["vue-draggable-plus"]
    },
    server: {
      // 服务启动时是否自动打开浏览器
      open: true,
      // 本地跨域代理 -> 代理到服务器的接口地址
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          // 后台服务器地址
          // target: 'http://4fegh6.natappfree.cc ',
          changeOrigin: true,
          // 是否允许不同源
          secure: false,
          // 支持https
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    plugins: createVitePlugins(env, command === "build"),
    // 构建
    build: {
      chunkSizeWarningLimit: 2e3,
      // 消除打包大小超过500kb警告
      outDir: "dist",
      // 指定打包路径，默认为项目根目录下的dist目录
      minify: "terser",
      // Vite 2.6.x 以上需要配置 minify："terser"，terserOptions才能生效
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true,
          // 生产环境去除 console
          drop_debugger: true
          // 生产环境去除 debugger
        },
        format: {
          comments: false
          // 删除注释
        }
      },
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。
    envPrefix: ["VITE", "FILE"]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlnL3BsdWdpbnMvaW5kZXgudHMiLCAiY29uZmlnL3BsdWdpbnMvYXBwLWluZm8udHMiLCAiY29uZmlnL3BsdWdpbnMvZGV2dG9vbHMudHMiLCAiY29uZmlnL3BsdWdpbnMvYXV0by1pbXBvcnQudHMiLCAiY29uZmlnL3BsdWdpbnMvY29tcG9uZW50cy50cyIsICJjb25maWcvcGx1Z2lucy9zdmctaWNvbi50cyIsICJjb25maWcvcGx1Z2lucy9tb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8uMCVFNSU4OSU4RCVFNyVBQiVBRiVFOSVBMSVCOSVFNyU5QiVBRS9jb250aW5ldy1hZG1pbi11aS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IFVSTCwgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCBjcmVhdGVWaXRlUGx1Z2lucyBmcm9tICcuL2NvbmZpZy9wbHVnaW5zJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgYXMgSW1wb3J0TWV0YUVudlxuXG4gIHJldHVybiB7XG4gICAgLy8gXHU1RjAwXHU1M0QxXHU2MjE2XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NzBEXHU1MkExXHU3Njg0XHU1MTZDXHU1MTcxXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XG4gICAgYmFzZTogZW52LlZJVEVfQkFTRSxcbiAgICAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnfic6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi8nLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU1RjE1XHU1MTY1c2Fzc1x1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlx1NTNEOFx1OTFDRlxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiQC9zdHlsZXMvdmFyLnNjc3NcIjtgLFxuICAgICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU2REZCXHU1MkEwXHU5NzAwXHU4OTgxdml0ZVx1NEYxOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1NlxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogWyd2dWUtZHJhZ2dhYmxlLXBsdXMnXSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgLy8gXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgLy8gXHU2NzJDXHU1NzMwXHU4REU4XHU1N0RGXHU0RUUzXHU3NDA2IC0+IFx1NEVFM1x1NzQwNlx1NTIzMFx1NjcwRFx1NTJBMVx1NTY2OFx1NzY4NFx1NjNBNVx1NTNFM1x1NTczMFx1NTc0MFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9BUElfQkFTRV9VUkwsXG4gICAgICAgICAgLy8gXHU1NDBFXHU1M0YwXHU2NzBEXHU1MkExXHU1NjY4XHU1NzMwXHU1NzQwXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovLzRmZWdoNi5uYXRhcHBmcmVlLmNjICcsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTUxNDFcdThCQjhcdTRFMERcdTU0MENcdTZFOTBcbiAgICAgICAgICBzZWN1cmU6IGZhbHNlLCAvLyBcdTY1MkZcdTYzMDFodHRwc1xuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoZW52LCBjb21tYW5kID09PSAnYnVpbGQnKSxcbiAgICAvLyBcdTY3ODRcdTVFRkFcbiAgICBidWlsZDoge1xuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdTZEODhcdTk2NjRcdTYyNTNcdTUzMDVcdTU5MjdcdTVDMEZcdThEODVcdThGQzc1MDBrYlx1OEI2Nlx1NTQ0QVxuICAgICAgb3V0RGlyOiAnZGlzdCcsIC8vIFx1NjMwN1x1NUI5QVx1NjI1M1x1NTMwNVx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQVx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NGRpc3RcdTc2RUVcdTVGNTVcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsIC8vIFZpdGUgMi42LnggXHU0RUU1XHU0RTBBXHU5NzAwXHU4OTgxXHU5MTREXHU3RjZFIG1pbmlmeVx1RkYxQVwidGVyc2VyXCJcdUZGMEN0ZXJzZXJPcHRpb25zXHU2MjREXHU4MEZEXHU3NTFGXHU2NTQ4XG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAga2VlcF9pbmZpbml0eTogdHJ1ZSwgLy8gXHU5NjMyXHU2QjYyIEluZmluaXR5IFx1ODhBQlx1NTM4Qlx1N0YyOVx1NjIxMCAxLzBcdUZGMENcdThGRDlcdTUzRUZcdTgwRkRcdTRGMUFcdTVCRkNcdTgxRjQgQ2hyb21lIFx1NEUwQVx1NzY4NFx1NjAyN1x1ODBGRFx1OTVFRVx1OTg5OFxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGNvbnNvbGVcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLCAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgZGVidWdnZXJcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgY29tbWVudHM6IGZhbHNlLCAvLyBcdTUyMjBcdTk2NjRcdTZDRThcdTkxQ0FcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTYyNTNcdTUzMDVcdTUyMzBkaXN0XHU0RTBCXHU3Njg0XHU0RTBEXHU1NDBDXHU3NkVFXHU1RjU1XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIFx1NEVFNSBlbnZQcmVmaXggXHU1RjAwXHU1OTM0XHU3Njg0XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU0RjFBXHU5MDFBXHU4RkM3IGltcG9ydC5tZXRhLmVudiBcdTY2QjRcdTk3MzJcdTU3MjhcdTRGNjBcdTc2ODRcdTVCQTJcdTYyMzdcdTdBRUZcdTZFOTBcdTc4MDFcdTRFMkRcdTMwMDJcbiAgICBlbnZQcmVmaXg6IFsnVklURScsICdGSUxFJ10sXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFwuMFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFxjb250aW5ldy1hZG1pbi11aVxcXFxjb25maWdcXFxccGx1Z2luc1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovLjAlRTUlODklOEQlRTclQUIlQUYlRTklQTElQjklRTclOUIlQUUvY29udGluZXctYWRtaW4tdWkvY29uZmlnL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcblxuaW1wb3J0IGFwcEluZm8gZnJvbSAnLi9hcHAtaW5mbydcbmltcG9ydCBjcmVhdGVEZXZ0b29scyBmcm9tICcuL2RldnRvb2xzJ1xuaW1wb3J0IGNyZWF0ZUF1dG9JbXBvcnQgZnJvbSAnLi9hdXRvLWltcG9ydCdcbmltcG9ydCBjcmVhdGVDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vc3ZnLWljb24nXG5pbXBvcnQgY3JlYXRlTW9jayBmcm9tICcuL21vY2snXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnYsIGlzQnVpbGQgPSBmYWxzZSkge1xuICBjb25zdCB2aXRlUGx1Z2luczogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0gW2FwcEluZm8oKSwgdnVlKCksIHZ1ZUpzeCgpXVxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZURldnRvb2xzKHZpdGVFbnYpKVxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUF1dG9JbXBvcnQoKSlcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb21wb25lbnRzKCkpXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlU3ZnSWNvbihpc0J1aWxkKSlcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVNb2NrKHZpdGVFbnYsIGlzQnVpbGQpKVxuICByZXR1cm4gdml0ZVBsdWdpbnNcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcXFxcY29uZmlnXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXFxcXGFwcC1pbmZvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8uMCVFNSU4OSU4RCVFNyVBQiVBRiVFOSVBMSVCOSVFNyU5QiVBRS9jb250aW5ldy1hZG1pbi11aS9jb25maWcvcGx1Z2lucy9hcHAtaW5mby50c1wiO2ltcG9ydCBib3hlbiBmcm9tICdib3hlbidcbmltcG9ydCBwaWNvY29sb3JzIGZyb20gJ3BpY29jb2xvcnMnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcEluZm8oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnYXBwSW5mbycsXG4gICAgYXBwbHk6ICdzZXJ2ZScsXG4gICAgYXN5bmMgYnVpbGRTdGFydCgpIHtcbiAgICAgIGNvbnN0IHsgYm9sZCwgZ3JlZW4sIGN5YW4sIGJnR3JlZW4sIHVuZGVybGluZSB9ID0gcGljb2NvbG9yc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBib3hlbihcbiAgICAgICAgICBgJHtib2xkKGdyZWVuKGAke2JnR3JlZW4oJ0NvbnRpTmV3IEFkbWluIHYzLjQuMScpfWApKX1cXG4ke2N5YW4oJ1x1NTcyOFx1N0VCRlx1NjU4N1x1Njg2M1x1RkYxQScpfSR7dW5kZXJsaW5lKCdodHRwczovL2NvbnRpbmV3LnRvcCcpfVxcbiR7Y3lhbignXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4XHVGRjFBJyl9JHt1bmRlcmxpbmUoJ2h0dHBzOi8vY29udGluZXcudG9wL2ZhcS5odG1sJyl9XFxuJHtjeWFuKCdcdTYzMDFcdTdFRURcdThGRURcdTRFRTNcdTRGMThcdTUzMTZcdTc2ODRcdTUyNERcdTU0MEVcdTdBRUZcdTUyMDZcdTc5QkJcdTRFMkRcdTU0MEVcdTUzRjBcdTdCQTFcdTc0MDZcdTdDRkJcdTdFREZcdTY4NDZcdTY3QjZcdTMwMDInKX1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgICBtYXJnaW46IDEsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogJ2RvdWJsZScsXG4gICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH0sXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcXFxcY29uZmlnXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXFxcXGRldnRvb2xzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8uMCVFNSU4OSU4RCVFNyVBQiVBRiVFOSVBMSVCOSVFNyU5QiVBRS9jb250aW5ldy1hZG1pbi11aS9jb25maWcvcGx1Z2lucy9kZXZ0b29scy50c1wiO2ltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURldnRvb2xzKGVudikge1xuICBjb25zdCB7IFZJVEVfT1BFTl9ERVZUT09MUyB9ID0gZW52XG4gIHJldHVybiBWSVRFX09QRU5fREVWVE9PTFMgPT09ICd0cnVlJyAmJiBWdWVEZXZUb29scygpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFwuMFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFxjb250aW5ldy1hZG1pbi11aVxcXFxjb25maWdcXFxccGx1Z2luc1xcXFxhdXRvLWltcG9ydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovLjAlRTUlODklOEQlRTclQUIlQUYlRTklQTElQjklRTclOUIlQUUvY29udGluZXctYWRtaW4tdWkvY29uZmlnL3BsdWdpbnMvYXV0by1pbXBvcnQudHNcIjtpbXBvcnQgYXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdXRvSW1wb3J0KCkge1xuICByZXR1cm4gYXV0b0ltcG9ydCh7XG4gICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IHZ1ZSBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcbiAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywge1xuICAgICAgLy8gdnVlIDMuNS54XG4gICAgICB2dWU6IFsndXNlVGVtcGxhdGVSZWYnLCAnb25XYXRjaGVyQ2xlYW51cCcsICd1c2VJZCddLFxuICAgIH1dLFxuICAgIGR0czogJy4vc3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgfSlcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcXFxcY29uZmlnXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXFxcXGNvbXBvbmVudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6Ly4wJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL2NvbnRpbmV3LWFkbWluLXVpL2NvbmZpZy9wbHVnaW5zL2NvbXBvbmVudHMudHNcIjtpbXBvcnQgY29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnRzKCkge1xuICByZXR1cm4gY29tcG9uZW50cyh7XG4gICAgLy8gXHU2MzA3XHU1QjlBXHU3RUM0XHU0RUY2XHU0RjREXHU3RjZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIHNyYy9jb21wb25lbnRzIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1ODFFQVx1NUI5QVx1NEU0OVx1N0VDNFx1NEVGNlxuICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICd0c3gnXSxcbiAgICAvLyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTc1MUZcdTYyMTBcdTRGNERcdTdGNkVcbiAgICBkdHM6ICcuL3NyYy90eXBlcy9jb21wb25lbnRzLmQudHMnLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFwuMFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFxjb250aW5ldy1hZG1pbi11aVxcXFxjb25maWdcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcXFxcY29uZmlnXFxcXHBsdWdpbnNcXFxcc3ZnLWljb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6Ly4wJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL2NvbnRpbmV3LWFkbWluLXVpL2NvbmZpZy9wbHVnaW5zL3N2Zy1pY29uLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0ljb24oaXNCdWlsZCkge1xuICByZXR1cm4gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgIC8vIFx1NjMwN1x1NUI5QSBzeW1ib2xJZCBcdTY4M0NcdTVGMEZcbiAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICBzdmdvT3B0aW9uczogaXNCdWlsZCxcbiAgfSlcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcLjBcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcY29udGluZXctYWRtaW4tdWlcXFxcY29uZmlnXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXC4wXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXGNvbnRpbmV3LWFkbWluLXVpXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXFxcXG1vY2sudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6Ly4wJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL2NvbnRpbmV3LWFkbWluLXVpL2NvbmZpZy9wbHVnaW5zL21vY2sudHNcIjtpbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9jayhlbnYsIGlzQnVpbGQpIHtcbiAgY29uc3QgeyBWSVRFX0JVSUxEX01PQ0sgfSA9IGVudlxuICByZXR1cm4gdml0ZU1vY2tTZXJ2ZSh7XG4gICAgbW9ja1BhdGg6ICdzcmMvbW9jaycsIC8vIFx1NzZFRVx1NUY1NVx1NEY0RFx1N0Y2RVxuICAgIGxvZ2dlcjogIWlzQnVpbGQsIC8vICBcdTY2MkZcdTU0MjZcdTU3MjhcdTYzQTdcdTUyMzZcdTUzRjBcdTY2M0VcdTc5M0FcdThCRjdcdTZDNDJcdTY1RTVcdTVGRDdcbiAgICBzdXBwb3J0VHM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1OEJGQlx1NTNENiB0cyBcdTY1ODdcdTRFRjZcdTZBMjFcdTU3NTdcbiAgICBsb2NhbEVuYWJsZWQ6IHRydWUsIC8vIFx1OEJCRVx1N0Y2RVx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjcyQ1x1NTczMG1vY2tcdTY1ODdcdTRFRjZcbiAgICBwcm9kRW5hYmxlZDogaXNCdWlsZCAmJiBWSVRFX0JVSUxEX01PQ0sgPT09ICd0cnVlJywgLy8gXHU4QkJFXHU3RjZFXHU2MjUzXHU1MzA1XHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4bW9ja1x1NTI5Rlx1ODBGRFxuICAgIC8vIFx1OEZEOVx1NjgzN1x1NTNFRlx1NEVFNVx1NjNBN1x1NTIzNlx1NTE3M1x1OTVFRG1vY2tcdTc2ODRcdTY1RjZcdTUwMTlcdTRFMERcdThCQTltb2NrXHU2MjUzXHU1MzA1XHU1MjMwXHU2NzAwXHU3RUM4XHU0RUUzXHU3ODAxXHU1MTg1XG4gICAgaW5qZWN0Q29kZTogYFxuICAgICAgICAgIGltcG9ydCB7IHNldHVwUHJvZE1vY2tTZXJ2ZXIgfSBmcm9tICcuLi9zcmMvbW9jay9pbmRleCc7XG4gICAgICAgICAgc2V0dXBQcm9kTW9ja1NlcnZlcigpO1xuICAgICAgICBgLFxuICB9KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UyxTQUFTLEtBQUsscUJBQXFCO0FB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akQsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV2QyxTQUFPO0FBQUE7QUFBQSxJQUVMLE1BQU0sSUFBSTtBQUFBO0FBQUEsSUFFVixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQ2pELEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBLFVBQ2hCLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLG9CQUFvQjtBQUFBLElBQ2hDO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sUUFBUSxJQUFJO0FBQUE7QUFBQTtBQUFBLFVBR1osY0FBYztBQUFBO0FBQUEsVUFDZCxRQUFRO0FBQUE7QUFBQSxVQUNSLFNBQVMsQ0FBQ0MsVUFBU0EsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsa0JBQWtCLEtBQUssWUFBWSxPQUFPO0FBQUE7QUFBQSxJQUVuRCxPQUFPO0FBQUEsTUFDTCx1QkFBdUI7QUFBQTtBQUFBLE1BQ3ZCLFFBQVE7QUFBQTtBQUFBLE1BQ1IsUUFBUTtBQUFBO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUixlQUFlO0FBQUE7QUFBQSxVQUNmLGNBQWM7QUFBQTtBQUFBLFVBQ2QsZUFBZTtBQUFBO0FBQUEsUUFDakI7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLFVBQVU7QUFBQTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsV0FBVyxDQUFDLFFBQVEsTUFBTTtBQUFBLEVBQzVCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicHJvY2VzcyIsICJwcm9jZXNzIiwgInBhdGgiXQp9Cg==
