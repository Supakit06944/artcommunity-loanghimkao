<script setup>
import { computed } from "vue";
import { t } from "../i18n";

import meenaLogo from "../assets/โลโก้ร้านมีนา.webp";
import spaceLogo from "../assets/โลโก้ร้านบ้านพัก.webp";
import werngLogo from "../assets/โลโก้ร้านฉ่ำฉา.webp";
import sabooLogo from "../assets/โลโก้เฮือนสบู่.webp";
import najaiLogo from "../assets/โลโก้เฮือน-ณ-ใจ๋.webp";
import poengLogo from "../assets/โลโก้เปิงใจ๋.webp";
import usaLogo from "../assets/โลโก้บ้านอุษา.webp";
import andamanLogo from "../assets/โลโก้อันดามันมัดย้อม.jpg";
import lanfaiLogo from "../assets/โลโก้ล้านฝ้ายงาม.jpg";

// Map logos to the 9 shops in order
const shopImages = [
  meenaLogo,
  spaceLogo,
  werngLogo,
  sabooLogo,
  najaiLogo,
  poengLogo,
  usaLogo,
  andamanLogo,
  lanfaiLogo,
];

const shops = computed(() => {
  const items = t("shops.items");
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    ...item,
    image: shopImages[index] || shopImages[0],
  }));
});
</script>

<template>
  <section id="shops" class="py-24 px-6 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
      >
        <div>
          <h2
            class="text-4xl md:text-5xl font-serif font-bold text-market-charcoal mb-4"
          >
            {{ t("shops.title") }}
          </h2>
          <p class="text-gray-600 max-w-xl text-lg">{{ t("shops.desc") }}</p>
        </div>
        <a
          href="https://www.facebook.com/LoangHimKao"
          target="_blank"
          class="text-market-accent font-semibold border-b-2 border-market-accent/20 hover:border-market-accent transition-all duration-300 pb-1"
        >
          {{ t("nav.brand") }} Facebook
        </a>
      </div>

      <div class="space-y-32">
        <div
          v-for="(shop, index) in shops"
          :key="shop.title"
          class="flex flex-col md:flex-row items-center gap-12 lg:gap-20 group"
          :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
        >
          <!-- Image Container -->
          <div class="w-full md:w-1/2 lg:w-2/5 relative">
            <div
              class="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-white"
            >
              <img
                :src="shop.image"
                :alt="shop.title"
                class="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <!-- Decorative element -->
            <div
              class="absolute -inset-4 bg-market-beige/30 rounded-[2.5rem] -z-0 transform transition-transform duration-500 group-hover:scale-105"
              :class="index % 2 === 0 ? 'rotate-2' : '-rotate-2'"
            ></div>
          </div>

          <!-- Content Container -->
          <div class="w-full md:w-1/2 lg:w-3/5">
            <div class="flex items-center gap-4 mb-6">
              <span class="h-px w-12 bg-market-accent/30"></span>
              <span
                class="text-market-accent font-bold tracking-widest text-xs uppercase"
              >
                0{{ index + 1 }} — Local Shop
              </span>
            </div>
            <h3
              class="text-3xl md:text-4xl font-serif font-bold text-market-charcoal mb-8 leading-tight group-hover:text-market-accent transition-colors duration-500"
            >
              {{ shop.title }}
            </h3>
            <p
              class="text-gray-600 text-lg md:text-xl leading-relaxed font-light italic border-l-4 border-market-beige/50 pl-8"
            >
              {{ shop.desc }}
            </p>

            <!-- Extra Details -->
            <div class="mt-8 space-y-3 pl-8">
              <div
                v-if="shop.hours"
                class="flex items-center gap-3 text-sm text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-market-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ shop.hours }}</span>
              </div>
              <div
                v-if="shop.social"
                class="flex items-center gap-3 text-sm text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-market-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ shop.social }}</span>
              </div>
              <div
                v-if="shop.phone"
                class="flex items-center gap-3 text-sm text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-market-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{{ shop.phone }}</span>
              </div>
              <div
                v-if="shop.email"
                class="flex items-center gap-3 text-sm text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-market-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{{ shop.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Any specific scoped styles if needed, though Tailwind covers most */
.font-serif {
  font-family: "Playfair Display", serif;
}
</style>
