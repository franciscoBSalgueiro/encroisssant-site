<script setup>
import { ref } from "vue";
import Linux from "./Linux.vue";
import Windows from "./Windows.vue";
import MacOS from "./MacOS.vue";
import { version } from "../global.ts";

const baseUrl = "https://github.com/franciscoBSalgueiro/en-croissant/releases/download";

const links = ref([
  {
    name: "Linux",
    url: `${baseUrl}/v${version}/en-croissant_${version}_amd64.AppImage`,
  },
  {
    name: "Windows",
    url: `${baseUrl}/v${version}/en-croissant_${version}_x64_en-US.msi`,
  },
  {
    name: "MacOS",
    url: `${baseUrl}/v${version}/en-croissant_${version}_aarch64.dmg`,
  },
]);
</script>

<template>
  <div :class="$style.grid">
    <div v-for="link in links" :class="$style.wrapper">
      <div :class="$style.col">
        <p :class="$style.downloadName">{{ link.name }}</p>
        <a :class="$style.download" :href="link.url">Download</a>
      </div>

      <div>
        <Linux v-if="link.name === 'Linux'" :class="$style.logo" />
        <Windows v-if="link.name === 'Windows'" :class="$style.logo" />
        <MacOS v-if="link.name === 'MacOS'" :class="$style.logo" />
      </div>
    </div>
  </div>
</template>

<style module>
.grid {
  display: grid;
  margin-top: 3rem;
  margin-bottom: 3rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  justify-content: space-between;
  width: 100%;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.wrapper {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  height: 10rem;
  width: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.downloadName {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.download {
  line-height: 38px;
  padding: 0 20px;
  background-color: var(--vp-c-brand-3);
  font-size: 14px;
  font-weight: 600;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  border-radius: 20px;
}
.download:hover {
  background-color: var(--vp-c-brand-2);
}
</style>
