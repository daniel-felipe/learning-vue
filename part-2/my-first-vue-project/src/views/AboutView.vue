<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay!!', 'it works on the about page!', 'info')">Click Me</button>
    </p>
  </div>
</template>
