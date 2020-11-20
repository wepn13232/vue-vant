import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//引入vant全局样式
import 'vant/lib/index.css';

import {
	Skeleton,
	ActionSheet,
	Tabbar,
	TabbarItem,
	Empty,
	Button,
	NavBar,
	Loading
} from 'vant';

Vue.use(Skeleton);
Vue.use(ActionSheet);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Empty);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Loading);


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
