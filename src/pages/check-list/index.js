import Vue from 'vue';
import { Button, Cell, NavBar, CellGroup, Toast,CountDown ,Field,DropdownMenu,DropdownItem} from 'vant';
import 'vant/lib/index.css';
import App from './app/index.vue';
import 'assets/styles/tailwind.css'
// 注册Vant组件
Vue.use(Button);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Field);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  render: h => h(App)
}).$mount('#app');