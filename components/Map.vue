<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'maplibre-gl/dist/maplibre-gl.css'
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
      center: [-98.5795, 39.8283], // Center on the United States
      zoom: 2, // Adjust the zoom level as needed
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
    new maplibregl.Marker()
        .setLngLat([-120.84711, 44.30291])
        .setPopup(new maplibregl.Popup().setHTML("<div class='text-xl text-stone-900'>Location: Prineville, OR </div>")) // add popup
        .addTo(map);
  }
});
</script>


<template>
  <div ref="mapContainer" class="h-96 w-96 md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[700px] xl:w-[700px]"></div>

</template>

<style scoped>

</style>