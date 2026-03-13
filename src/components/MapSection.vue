<script setup>
import { t } from "../i18n";
import mapImage from "../assets/map-longhimkao.webp";
</script>

<template>
  <section id="map" class="py-24 px-6 bg-market-beige/30">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-serif font-bold mb-6 text-market-charcoal"
        >
          {{ t("map.title") }}
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {{ t("map.desc") }}
        </p>
      </div>

      <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4">
        <div class="overflow-hidden rounded-2xl">
          <img
            :src="mapImage"
            alt="Loang Him Kao Community Map"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div class="mt-12 text-center">
        <a
          href="https://maps.app.goo.gl/s6FFmWCVoTQ37yMf6"
          target="_blank"
          class="inline-flex items-center gap-2 px-8 py-4 bg-market-accent text-white font-medium rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-market-accent/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ t("footer.map") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles removed or kept for custom utilities only */
</style>
