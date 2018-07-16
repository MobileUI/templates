var vueApp = new Vue({
  el: '#app',
  data: {
    message: 'MobileUI + VueJS = ',
    customStyle: 'text-align: center; font-family: sans-serif'
  },
  template: `
  <div :style="customStyle">
    <h1>{{ message }} <span style="color: red">❤️</span></h1>
  </div>
  `
})
