<script setup>
import { t } from "../i18n";
</script>

<template>
  <section id="about" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-serif font-bold mb-6 text-market-charcoal"
        >
          {{ t("features.title") }}
        </h2>
        <p
          class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed whitespace-pre-line"
        >
          {{ t("features.desc") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Feature 1 -->
        <div class="flex flex-col items-center text-center group">
          <div
            class="w-16 h-16 bg-market-beige rounded-2xl flex items-center justify-center mb-6 group-hover:bg-market-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-market-accent group-hover:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 6l3 11m0 0l10-14c.828 0 1.5.672 1.5 1.5v.5M6 17h12c.552 0 1-.448 1-1V6M6 17l-1 4h14l-1-4"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">
            {{ t("features.item1.title") }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ t("features.item1.desc") }}
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="flex flex-col items-center text-center group">
          <div
            class="w-16 h-16 bg-market-beige rounded-2xl flex items-center justify-center mb-6 group-hover:bg-market-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-market-accent group-hover:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">
            {{ t("features.item2.title") }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ t("features.item2.desc") }}
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="flex flex-col items-center text-center group">
          <div
            class="w-16 h-16 bg-market-beige rounded-2xl flex items-center justify-center mb-6 group-hover:bg-market-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-market-accent group-hover:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">
            {{ t("features.item3.title") }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ t("features.item3.desc") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
