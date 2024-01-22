<script setup lang="ts">

</script>

<template>
  <Navbar />
  <div class="flex flex-col md:flex-row h-screen md:justify-center lg:justify-center"> <!-- Stack on small screens, flex-row on medium screens and up -->
    <div class="flex flex-col px-6 py-4">
      <NameAndTitle />
      <div class="py-6 mt-10">
      <WebDev />
      </div>
    </div>
    <div class="flex flex-col">
      <Map />
    </div>
  </div>
</template>


<style scoped>

</style>