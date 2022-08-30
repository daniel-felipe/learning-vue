<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { ref } from "@vue/runtime-core";

let message = ref("Hello, world");

let doSomething = () => {
  alert("doing it now");
};
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <p>
      <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
