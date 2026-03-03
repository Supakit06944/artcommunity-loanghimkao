<script setup>
import { computed, ref, watch } from "vue";
import { t } from "../i18n";

import soapImg from "../assets/ทำสบู่จากธรรมชาติ.webp";
import candleImg from "../assets/ทำเทียนหอม.webp";
import dyeImg from "../assets/ย้อมสีธรรมชาติ.webp";
import trayImg from "../assets/ระบายสีถาดไม้.webp";
import bagImg from "../assets/วาดภาพบนกระเป๋าผ้า.webp";
import artImg from "../assets/เวิร์กชอปศิลปะ.webp";

const categoryImages = [soapImg, candleImg, dyeImg, trayImg, bagImg, artImg];

const categories = computed(() => {
  const items = t("categories.items");
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    ...item,
    image: categoryImages[index] || categoryImages[0],
  }));
});

const selectedCategory = ref(null);
const isModalOpen = ref(false);

const openModal = (category) => {
  selectedCategory.value = category;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedCategory.value = null;
  }, 300); // Wait for transition
};

// Body scroll lock
watch(isModalOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <section id="workshops" class="py-24 px-6 bg-market-beige/50">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <h2
            class="text-4xl md:text-5xl font-serif font-bold text-market-charcoal mb-4"
          >
            {{ t("categories.title") }}
          </h2>
          <p class="text-gray-600 max-w-xl">{{ t("categories.desc") }}</p>
        </div>
        <a
          href="#"
          class="text-market-accent font-semibold border-b-2 border-market-accent/20 hover:border-market-accent transition-all duration-300 pb-1"
        >
          {{ t("categories.cta") }}
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="cat in categories"
          :key="cat.title"
          @click="openModal(cat)"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
        >
          <div class="h-64 overflow-hidden relative">
            <img
              :src="cat.image"
              :alt="cat.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-2">
              <h3
                class="text-xl font-bold group-hover:text-market-accent transition-colors duration-300"
              >
                {{ cat.title }}
              </h3>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">
              {{ cat.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Workshop Modal -->
    <Teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-market-charcoal/60 backdrop-blur-sm"
            @click="closeModal"
          ></div>

          <!-- Modal Box -->
          <transition
            enter-active-class="transition duration-500 ease-out delay-100"
            enter-from-class="opacity-0 scale-95 translate-y-8"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-8"
            appear
          >
            <div
              v-if="selectedCategory"
              class="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              @click.stop
            >
              <!-- Close Button -->
              <button
                @click="closeModal"
                class="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <!-- Image Side -->
              <div
                class="md:w-1/2 h-64 md:h-auto relative bg-market-charcoal overflow-hidden group/modal-img"
              >
                <!-- Blurred background to fill the frame -->
                <img
                  :src="selectedCategory.image"
                  class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                />
                <!-- Full image in foreground -->
                <img
                  :src="selectedCategory.image"
                  :alt="selectedCategory.title"
                  class="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover/modal-img:scale-105"
                />
                <div
                  class="absolute inset-0 z-20 bg-gradient-to-t from-market-charcoal/40 via-transparent to-transparent md:bg-gradient-to-r pointer-events-none"
                ></div>
              </div>

              <!-- Content Side -->
              <div class="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div class="mb-8">
                  <div
                    class="text-market-accent font-bold tracking-widest text-xs uppercase mb-2"
                  >
                    Workshop Experience
                  </div>
                  <h2
                    class="text-3xl md:text-4xl font-serif font-bold text-market-charcoal"
                  >
                    {{ selectedCategory.title }}
                  </h2>
                </div>

                <div class="space-y-6 text-gray-600 leading-relaxed mb-10">
                  <p class="text-lg italic text-market-charcoal/80">
                    {{ selectedCategory.desc }}
                  </p>
                  <p>{{ selectedCategory.detailedDesc }}</p>
                </div>

                <!-- Attributes removed per user request -->

                <!-- Footer Action -->
                <div class="mt-auto">
                  <a
                    href="https://www.facebook.com/LoangHimKao"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/btn relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-market-charcoal text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:bg-market-accent shadow-lg"
                  >
                    <div class="relative z-10 flex items-center gap-3">
                      <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        />
                      </svg>
                      <span>{{ t("categories.moreInfo") }}</span>
                    </div>
                    <div
                      class="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </Teleport>
  </section>
</template>
