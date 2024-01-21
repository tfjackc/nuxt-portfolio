<script setup lang="ts">
import { onMounted, ref } from 'vue';
import maplibregl, { StyleSpecification } from 'maplibre-gl';
const mapContainer = ref(null);

onMounted(() => {
  if (mapContainer.value) {
    // Define a minimal style
    const minimalStyle: StyleSpecification = {
      version: 8,
      sources: {},
      layers: []
    };

    // Initialize the map with the minimal style
    const map = new maplibregl.Map({
      container: mapContainer.value,
      style: minimalStyle, // use minimal style
      center: [0, 0],
      zoom: 1,
    });

    map.on('load', () => {
      // Add the GeoJSON source for countries
      map.addSource('countries', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
      });

      // Add a layer for the countries source
      map.addLayer({
        'id': 'countries-layer',
        'type': 'fill',
        'source': 'countries',
        'paint': {
          'fill-color': '#0c0a09', // Example fill color
          'fill-opacity': 1,
          'fill-outline-color': '#fafaf9'
        }
      });
    });
  }
});
</script>


<template>
  <div ref="mapContainer" class="h-96"></div>
</template>

<style scoped>

</style>