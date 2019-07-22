import Vue from "vue";
const vfilter = {
  stringfilter(val) {
    if (val == "" || val == undefined || val == null) {
      return null;
    } else {
      return val;
    }
  },
  vfilterlevel(val) {
    if (val == "0") {
      return "普通";
    } else if (val == "1") {
      return "店主";
    } else if (val == "2") {
      return "站长";
    }
  },
  vfiltervalue(val){
      if(val==1){
          return '登陆'
      }
  }
};
for (let key in vfilter) {
  Vue.filter(key, vfilter[key]);
}
