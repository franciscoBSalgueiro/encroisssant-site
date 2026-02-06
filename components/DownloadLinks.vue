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
    icon: Linux,
    id: "linux"
  },
  {
    name: "Windows",
    url: `${baseUrl}/v${version}/en-croissant_${version}_x64-setup.exe`,
    icon: Windows,
    id: "windows"
  },
  {
    name: "MacOS",
    url: `${baseUrl}/v${version}/en-croissant_${version}_x64.dmg`,
    icon: MacOS,
    id: "macos"
  },
]);
</script>

<template>
  <div :class="$style.grid">
    <a v-for="link in links" :key="link.name" :href="link.url" :class="$style.card">
      <component :is="link.icon" :class="$style.icon" />
      <div :class="$style.content">
        <h3 :class="$style.title">{{ link.name }}</h3>
        <span :class="$style.cta">Download</span>
      </div>
    </a>
  </div>
</template>
<style module>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.25s ease;
  text-decoration: none !important;
  cursor: pointer;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft-up);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
}

.icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
  fill: var(--vp-c-text-1);
  transition: fill 0.25s ease;
}

.card:hover .icon {
  fill: var(--vp-c-brand-1);
}

.content {
  text-align: center;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.cta {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s ease;
}

.card:hover .cta {
  color: var(--vp-c-brand-2);
}
</style>
