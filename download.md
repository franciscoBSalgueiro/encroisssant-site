---
title: Download
layout: download
---

<script setup>
import { version } from "./global.ts";
import { ref } from 'vue';
const v = ref(version);
import DownloadLinks from './components/DownloadLinks.vue'
</script>


# Download

### Get the latest version of En Croissant

<div class="version-tag">
  <Badge type="warning">v{{v}}</Badge>
</div>

<DownloadLinks />

<div class="source-link">
  Want to build from source? Check out the <a href="https://github.com/franciscoBSalgueiro/en-croissant" target="_blank" rel="noreferrer">GitHub repository</a>.
</div>

<style scoped>
h1 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.version-tag {
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0;
}

.source-link {
  text-align: center;
  margin-top: 2rem;
  color: var(--vp-c-text-2);
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

a:hover {
  color: var(--vp-c-brand-2);
}
</style>