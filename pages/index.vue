<template>
  <div class="container flex flex-col h-screen justify-center mx-auto">
    <div class="flex flex-row items-center px-10 py-5">
        <NameAndTitle />
        <Map />
<!--      <NuxtImg src="/bright_map.png"/>-->
    </div>
    <div class="flex flex-col md:flex-row px-10 py-5"> <!-- Bottom horizontal container -->
      <div class="p-4 md:w-1/5 mr-2"> <!-- Box for WebDev with border, padding and margin-right -->
        <WebDev />
      </div>
      <div class="p-4 md:w-1/5 mx-2"> <!-- Box for FrontEnd with border, padding and margins -->
        <FrontEnd />
      </div>
      <div class="p-4 md:w-1/5 mx-2"> <!-- Box for PythonSkills with border, padding and margins -->
        <PythonSkills />
      </div>
      <div class="p-4 md:w-1/5 ml-2"> <!-- Box for Database with border, padding and margin-left -->
        <Database />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>