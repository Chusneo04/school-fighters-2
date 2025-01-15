<template>
    <section class="h-screen bg-no-repeat bg-cover landscape:flex landscape:flex-col landscape:justify-center landscape:items-center landscape:bg-[url('/src/assets/img/fondo.jpg')] gap-[20px]">
        <h1 class="text-[40px] font-bold text-[white] ">SCHOOL FIGHTER 2</h1>
        <p class="text-[white] text-[16px] w-[50%] text-center">El mejor juego de lucha entre alumnos. Selecciona los alumnos que van a darse de hostias</p>
        <div class="flex flex-row gap-[50px]">
            <select class="w-[300px] h-[75px] rounded-[7px] text-[24px] font-bold p-[10px]" v-model="p1" required>
                <option disabled value="">Elige un Personaje</option>
                <option v-for="(persona, index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
            </select>
            <select class="w-[300px] h-[75px] rounded-[7px] text-[24px] font-bold p-[10px]"  v-model="p2" required>
                <option disabled value="">Elige un Personaje</option>
                <option v-for="(persona, index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
            </select>
        </div>
        <router-link :to="this.destino"><button  class="bg-[#3dbc1e] h-[75px] w-[250px] rounded-[7px] font-bold text-[24px] text-[white]" @click="guardarPersonajes">Continuar</button></router-link>
        
    </section>
  </template>
  
  <script>
  import { personajes } from '@/db/datos.js';
  import { useToast } from "vue-toastification";
  export default {
      name: 'VistaPersonajes',
      setup() {
        const toast = useToast();
        return { toast }
      },
      data(){
        return {
            personas: '',
            p1: '',
            p2: '',
            destino: ''
        }
      },
      methods: {
        getLocalStoragePersonajes(){
            this.personas=JSON.parse(localStorage.getItem('personajes'))
            if (this.personas == null) {
                this.personas = personajes
            }
            localStorage.setItem('personajes', JSON.stringify(this.personas))
        },
        guardarPersonajes(){
            this.p1 = this.personas.find(p => p.nombre === this.p1)
            this.p2 = this.personas.find(p => p.nombre === this.p2)
            console.log(this.p1, this.p2);
            
            if (this.p1 != undefined && this.p2 != undefined) {
                localStorage.setItem('p1', JSON.stringify(this.p1))
                localStorage.setItem('p2', JSON.stringify(this.p2))
                this.destino = '/escenarios'
                this.toast.success(`Jugador 1 ha seleccionado a ${JSON.stringify(this.p1.nombre)}`);
                this.toast.success(`Jugador 2 ha seleccionado a ${JSON.stringify(this.p2.nombre)}`)
            }
            else{
                this.toast.error("Debes seleccionar 2 personajes");
            }
        }
      },
    
      mounted(){
        this.getLocalStoragePersonajes()
        this.personas=this.personas.sort((a,b) => a.nombre.localeCompare(b.nombre))
      }


  }
  </script>