import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App: require('./app.vue').default
	}
});
