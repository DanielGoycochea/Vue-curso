const app = new Vue ({
  el: '#app',
  data:{
    saludo: 'soy ciclo de vida de Vue'
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  }
















})