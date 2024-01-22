<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-screen"> <!-- Main vertical container -->
    <div class="flex flex-wrap justify-between px-10 py-5"> <!-- Top horizontal container -->
      <div class="p-4 rounded-lg w-1/4"> <!-- Box for NameAndTitle with border and padding -->
        <NameAndTitle />
      </div>
      <div class="p-4 rounded-lg flex-grow ml-4"> <!-- Box for Map with border, padding and margin-left -->
        <Map />
      </div>
    </div>
    <div class="flex flex-wrap justify-around px-10 py-5"> <!-- Bottom horizontal container -->
      <div class="p-4 rounded-lg w-1/5 mr-2"> <!-- Box for WebDev with border, padding and margin-right -->
        <WebDev />
      </div>
      <div class="p-4 rounded-lg w-1/5 mx-2"> <!-- Box for FrontEnd with border, padding and margins -->
        <FrontEnd />
      </div>
      <div class="p-4  rounded-lg w-1/5 mx-2"> <!-- Box for PythonSkills with border, padding and margins -->
        <PythonSkills />
      </div>
      <div class="p-4 rounded-lg w-1/5 ml-2"> <!-- Box for Database with border, padding and margin-left -->
        <div>Database Component</div>
      </div>
    </div>
  </div>
</template>

<style>
/* Optional: if you want to add custom styles */
</style>



<style scoped>

</style>