<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { state, t } from "../i18n";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = computed(() => [
  { name: t("nav.home"), href: "#home" },
  { name: t("nav.about"), href: "#about" },
  { name: t("nav.shops"), href: "#shops" },
  { name: t("nav.workshops"), href: "#workshops" },
  { name: t("nav.contact"), href: "#contact" },
]);

const languages = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
  { code: "cn", label: "CN" },
];

const changeLanguage = (code) => {
  state.locale = code;
  isMobileMenuOpen.value = false;
};

const scrollToSection = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    isMobileMenuOpen.value = false;
  }
};
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a
        href="#home"
        @click="scrollToSection($event, '#home')"
        class="text-2xl font-serif font-bold tracking-tight text-market-accent"
      >
        {{ t("nav.brand") }}
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 items-center">
        <div class="flex space-x-6">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="text-sm font-medium hover:text-market-accent transition-colors duration-300"
            :class="isScrolled ? 'text-market-charcoal' : 'text-white'"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Social Links & Language Switcher Desktop -->
        <div
          class="flex items-center space-x-4 border-l border-gray-300 pl-6 ml-2"
        >
          <!-- Social Links -->
          <div class="flex items-center space-x-3 mr-2">
            <a
              href="https://www.facebook.com/LoangHimKao"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors duration-300"
              :class="
                isScrolled
                  ? 'text-market-charcoal hover:text-market-accent'
                  : 'text-white hover:text-market-accent'
              "
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <a
              href="https://lin.ee/vXqjynq"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors duration-300"
              :class="
                isScrolled
                  ? 'text-market-charcoal hover:text-market-accent'
                  : 'text-white hover:text-market-accent'
              "
            >
              <!-- Minimalist LINE Bubble Icon -->
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 5.58 2 10c0 2.45 1.34 4.62 3.5 6.06l-.5 2.44c-.1.5.4.9.8.7l2.8-1.4c1.1.4 2.2.6 3.4.6 5.52 0 10-3.58 10-8s-4.48-8-10-8z"
                />
              </svg>
            </a>
          </div>

          <!-- Language Buttons -->
          <div
            class="flex items-center space-x-2 border-l border-gray-200 pl-4"
          >
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              :class="[
                'text-xs font-bold px-2 py-1 rounded transition-colors',
                state.locale === lang.code
                  ? 'bg-market-accent text-white'
                  : isScrolled
                    ? 'text-market-charcoal hover:bg-gray-100'
                    : 'text-white hover:bg-white/20',
              ]"
            >
              {{ lang.label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden focus:outline-none"
        :class="isScrolled ? 'text-market-charcoal' : 'text-white'"
      >
        <svg
          v-if="!isMobileMenuOpen"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
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
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 border-t border-gray-100"
      >
        <div class="flex flex-col space-y-4 mb-6">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="text-lg font-medium text-market-charcoal hover:text-market-accent transition-colors duration-300"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Mobile Social & Language Switcher -->
        <div class="pt-4 border-t border-gray-100">
          <div class="flex justify-center space-x-8 mb-4">
            <a
              href="https://www.facebook.com/LoangHimKao"
              target="_blank"
              rel="noopener noreferrer"
              class="text-market-charcoal hover:text-market-accent transition-colors duration-300"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <a
              href="https://lin.ee/vXqjynq"
              target="_blank"
              rel="noopener noreferrer"
              class="text-market-charcoal hover:text-market-accent transition-colors duration-300"
            >
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 5.58 2 10c0 2.45 1.34 4.62 3.5 6.06l-.5 2.44c-.1.5.4.9.8.7l2.8-1.4c1.1.4 2.2.6 3.4.6 5.52 0 10-3.58 10-8s-4.48-8-10-8z"
                />
              </svg>
            </a>
          </div>
          <div class="flex space-x-2">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              :class="[
                'flex-1 text-center py-2 rounded-lg font-bold transition-colors',
                state.locale === lang.code
                  ? 'bg-market-accent text-white'
                  : 'bg-gray-100 text-market-charcoal',
              ]"
            >
              {{ lang.label }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
