import {createApp} from 'vue';
import App from './App.vue';

const app=createApp(App);

app.config.performance=false;

const container=document.createElement('div');
container.id='app';
document.body.appendChild(container);

app.mount(container);
