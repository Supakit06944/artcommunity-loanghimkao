<script setup>
import { t } from "../i18n";
</script>

<template>
  <footer id="contact" class="bg-market-charcoal text-white py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-serif font-bold text-market-accent mb-6">
            {{ t("nav.brand") }}
          </h2>
          <p class="text-gray-400 max-w-sm leading-relaxed">
            {{ t("footer.desc") }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-bold mb-6 text-lg">{{ t("footer.contact") }}</h4>
          <ul class="space-y-4 text-gray-400">
            <li>
              <a
                href="https://maps.app.goo.gl/s6FFmWCVoTQ37yMf6"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-market-accent transition-colors block"
              >
                {{ t("footer.map") }}
              </a>
            </li>
            <li>
              <a
                href="https://lin.ee/vXqjynq"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-market-accent transition-colors flex items-center gap-2"
              >
                <svg
                  class="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 5.58 2 10c0 2.45 1.34 4.62 3.5 6.06l-.5 2.44c-.1.5.4.9.8.7l2.8-1.4c1.1.4 2.2.6 3.4.6 5.52 0 10-3.58 10-8s-4.48-8-10-8z"
                  />
                </svg>
                <span>{{ t("footer.line") }}: @vXqjynq</span>
              </a>
            </li>
            <li class="text-gray-400">
              {{ t("footer.address") }}
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-bold mb-6 text-lg">{{ t("footer.follow") }}</h4>
          <div class="flex space-x-6">
            <a
              href="https://www.facebook.com/LoangHimKao"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <span class="sr-only">Facebook</span>
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
              class="text-gray-400 hover:text-white transition-colors"
            >
              <span class="sr-only">LINE</span>
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
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <span>© 2026 {{ t("nav.brand") }}. All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>
