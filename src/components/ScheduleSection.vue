<script setup>
import { computed } from "vue";
import { t } from "../i18n";

const schedule = computed(() => t("schedule.items"));
</script>

<template>
  <section id="events" class="py-24 px-6 bg-white overflow-hidden relative">
    <!-- Decorative Shape -->
    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-market-beige rounded-full opacity-50 z-0"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="max-w-3xl">
        <h2
          class="text-4xl md:text-5xl font-serif font-bold text-market-charcoal mb-12"
        >
          {{ t("schedule.title") }}
        </h2>

        <div class="space-y-8">
          <div
            v-for="(item, index) in schedule"
            :key="index"
            class="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b border-gray-100 last:border-0"
          >
            <div class="md:w-48 text-market-accent font-bold tracking-wider">
              <span
                class="block text-sm uppercase text-gray-400 mb-1 font-sans"
                >{{ item.day }}</span
              >
              <span class="text-lg md:text-xl">{{ item.time }}</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-500 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
