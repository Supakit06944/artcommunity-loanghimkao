<script setup>
import { t } from "../i18n";
import heroBg from "../assets/รูปแรกโหล่งฮิมคาว.webp";
</script>

<template>
  <section
    id="home"
    class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
  >
    <!-- -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroBg"
        :alt="t('nav.brand')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <h1
        class="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight"
      >
        {{ t("nav.brand") }}
      </h1>
      <p
        class="text-xl md:text-2xl text-white/90 mb-10 font-light tracking-wide max-w-2xl mx-auto italic"
      >
        {{ t("hero.subtitle") }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#shops"
          class="w-full sm:w-auto px-8 py-4 bg-market-accent text-white font-medium rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-market-accent/25"
        >
          {{ t("hero.cta1") }}
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>
