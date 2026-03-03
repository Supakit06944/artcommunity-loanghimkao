<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import ShopSection from "./components/ShopSection.vue";
import CategorySection from "./components/CategorySection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ShopSection />
      <CategorySection />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global reset or minimal styles if needed */
body {
  margin: 0;
  padding: 0;
}
</style>
