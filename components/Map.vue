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
      center: [-120.84711, 44.30291], // Center on the United States
      zoom: 6, // Adjust the zoom level as needed
    });

    map.on('load', () => {
      // Add the GeoJSON source for countries
      map.addSource('oregon_state', {
        type: 'geojson',
        data: 'https://services8.arcgis.com/8PAo5HGmvRMlF2eU/arcgis/rest/services/Counties_Polygon/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
      });

      // Add a layer for the countries source
      map.addLayer({
        'id': 'oregon_state_boundary',
        'type': 'fill',
        'source': 'oregon_state',
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
  <div ref="mapContainer" class="md:h-[500px] md:w-[800px] lg:h-[600px] lg:w-[800px] xl:h-[700px] xl:w-[1000px]"></div>

</template>

<style scoped>

</style>