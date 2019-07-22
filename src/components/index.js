import Vue from "vue";
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from "element-ui";
[Button].forEach(Component => {
  Vue.component(Component.name, Component);
});
