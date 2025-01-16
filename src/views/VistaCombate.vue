<template>
    <section :style="{ backgroundImage: `url(${this.escenario.imagen})`}" class="h-screen bg-no-repeat bg-cover landscape:flex landscape:flex-col p-[20px] gap-[20px]">
        <router-link to="/"><button class="bg-[#1e8fde] h-[40px] w-[100px] rounded-[7px] font-bold text-[24px] text-[white]">Volver</button></router-link>
        <div class="flex flex-row justify-between w-full gap-[100px] p-[30px]">
          <TarjetaPersona :imagen="p1.imagen" :nombre="p1.nombre"></TarjetaPersona>
          <TarjetaPersona :imagen="p2.imagen" :nombre="p2.nombre"></TarjetaPersona>
        </div>
      </section>
  </template>
  
  <script>
  import TarjetaPersona from "../components/TarjetaPersona.vue";
  import { enfrentamientos } from '@/db/datos.js';
  export default {
    components: { TarjetaPersona },
      name: 'VistaCombate',
      data(){
        return{
            escenario: '',
            p1: '',
            p2: ''
        }
        
      },
      
      methods:{
        guardarEscenario(){
            this.escenario = JSON.parse(localStorage.getItem('escenario'))
        },
        añadirEnfrentamiento(){
            
            enfrentamientos.push({'Enfrentamiento':{personajes:[this.p1,this.p2],escenario:this.escenario}})
            localStorage.setItem('enfrentamientos',JSON.stringify(enfrentamientos))
        },
        getPersonajes(){
          this.p1=JSON.parse(localStorage.getItem('p1'))
          this.p2=JSON.parse(localStorage.getItem('p2'))
        }
      },
      mounted(){
        this.guardarEscenario()
        console.log(this.escenario);
        this.getPersonajes()
        this.añadirEnfrentamiento()
        
      }
      
  }
  </script>