<template>
    <section class="h-screen bg-no-repeat bg-cover landscape:flex landscape:flex-col landscape:justify-center landscape:items-center landscape:bg-[url('/src/assets/img/fondo.jpg')] gap-[20px]">
        <h1 class="text-[40px] font-bold text-[white] ">SCHOOL FIGHTER 2</h1>
        <p class="text-[white] text-[16px] w-[50%] text-center">El mejor juego de lucha entre alumnos. Selecciona los alumnos que van a darse de hostias</p>
        <div class="flex flex-row gap-[50px]">
            <select class="w-[300px] h-[75px] rounded-[7px] text-[24px] font-bold p-[10px]" v-model="e1">
                <option value="">Elige un Escenario</option>
                <option v-for="(escenario, index) in escenarios" :key="index" :value="escenario.nombre">{{ escenario.nombre }}</option>
            </select>
        </div>
        <div class="flex flex-row gap-[50px]">
            <router-link to="/"><button class="bg-[#b91111] h-[75px] w-[250px] rounded-[7px] font-bold text-[24px] text-[white]">Volver</button></router-link>
            <router-link to="/combate"><button class="bg-[#7311b9] h-[75px] w-[250px] rounded-[7px] font-bold text-[24px] text-[white]" @click="guardarEscenario">Continuar</button></router-link>
        </div>
    </section>
  </template>
  
  <script>
  import { escenarios } from '@/db/datos.js';
  export default {
      name: 'VistaEscenarios',
      data(){
        return {
            escenarios: '',
            e1: '',
            
        }
      },
      methods: {
        getLocalStorageEscenarios(){
            this.escenarios=JSON.parse(localStorage.getItem('escenarios'))
            if (this.escenarios == null) {
                this.escenarios = escenarios
            }
            localStorage.setItem('escenarios', JSON.stringify(this.escenarios))
        },
        guardarEscenario(){
            this.e1 = this.escenarios.find(e => e.nombre === this.e1)

            localStorage.setItem('escenario', JSON.stringify(this.e1))
        }
      },
      mounted(){
        this.getLocalStorageEscenarios()
      }
  }
  </script>