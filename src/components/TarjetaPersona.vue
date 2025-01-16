<template>
  <div class="flex flex-col w-full justify-center items-center gap-[10px]">
    <img :src="imagen" :alt="nombre" class="h-[150px] w-[150px] rounded-[20px]">
    <span class="text-[white] text-[30px]">{{ nombre }}</span>
  </div>
</template>

<script>
export default {
    name: 'TarjetaPersona',
    props:{
        imagen: {
            type: String,
            required: true
        },
        nombre:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>