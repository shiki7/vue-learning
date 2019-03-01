// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAJ4tDqNm7Eixd8-vp1VPeWGUwwgumEzU8',
  authDomain: 'vue-test-5b634.firebaseapp.com',
  databaseURL: 'https://vue-test-5b634.firebaseio.com',
  projectId: 'vue-test-5b634',
  storageBucket: 'vue-test-5b634.appspot.com',
  messagingSenderId: '506810547531'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
