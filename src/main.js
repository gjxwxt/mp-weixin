import { createSSRApp } from 'vue'
import uviewPlus, { setConfig } from 'uview-plus'
import App from './App.vue'
import custom from './components/custom/custom.vue'
import util from './utils/util.js'
setConfig({
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: 'rpx',
  },
})
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(util)
  app.component('custom', custom)
  return {
    app,
  }
}
