var HomeComponent = Vue.component('home', {
  name: 'Home',
  data: function () {
    return {
      message: 'MobileUI + VueJS = '
    }
  },
  template: `
    <div>
      <h1>{{ message }} <span style="color: red">❤️</span></h1>
    </div>
  `
})

var DemoRouterComponent = Vue.component('basic', {
  data: function () {
    return {
      title: 'You can use VueRouter!'
    }
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatum numquam, molestias illo ut aliquid dolore? Ut sed commodi labore ullam molestias quae quam eum aliquam. Adipisci nisi fuga deleniti.</p>
    </div>
  `
})

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/demo',
      component: DemoRouterComponent
    }
  ]
})

var vueApp = new Vue({
  el: '#app',
  router
})
