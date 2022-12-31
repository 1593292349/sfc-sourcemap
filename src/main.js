import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip=false;
Vue.config.performance=false;

const container=document.createElement('div');
container.id='app';
document.body.appendChild(container);

new Vue(App).$mount(container.appendChild(document.createElement('div')));
