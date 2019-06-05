import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCUhvan4A745isat9I1i5BaE_M0vILGCyA",
  authDomain: "vue-firebase-chat-4ed71.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-4ed71.firebaseio.com",
  projectId: "vue-firebase-chat-4ed71",
  storageBucket: "vue-firebase-chat-4ed71.appspot.com",
  messagingSenderId: "167035516180",
  appId: "1:167035516180:web:e87d954064b07c86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

window.db=db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
