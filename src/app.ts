import Vue from 'vue'
import './app.scss'
import Taro from '@tarojs/taro'
const App = new Vue({

  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})
import TaroUiVue from 'taro-ui-vue/src'
import 'taro-ui-vue/dist/style/index.scss'
Vue.use(TaroUiVue)

Vue.prototype.$taro = Taro
export default App
