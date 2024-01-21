<script setup lang="ts">

</script>

<template>
  <Navbar />
  <div class="flex flex-col md:flex-row justify-center h-screen space-y-4 md:space-y-0 md:space-x-4"> <!-- Stack on small screens, flex-row on medium screens and up -->
    <div class="flex flex-col">
      <NameAndTitle />
      <TailwindCard />
    </div>
    <div class="flex flex-col">
      <Map />
    </div>
  </div>
</template>


<style scoped>

</style>