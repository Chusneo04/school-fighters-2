<template>
    <section :style="{ backgroundImage: `url(${this.escenario.imagen})`}" class="h-screen bg-no-repeat bg-cover landscape:flex landscape:flex-col p-[20px] gap-[20px]">
        <router-link to="/"><button class="bg-[#1e8fde] h-[40px] w-[100px] rounded-[7px] font-bold text-[24px] text-[white]">Volver</button></router-link>
    </section>
  </template>
  
  <script>
  export default {
      name: 'VistaCombate',
      data(){
        return{
            escenario: ''
        }
        
      },
      methods:{
        guardarEscenario(){
            this.escenario = JSON.parse(localStorage.getItem('escenario'))
        }
      },
      mounted(){
        this.guardarEscenario()
        console.log(this.escenario);
        
      }
      
  }
  </script>