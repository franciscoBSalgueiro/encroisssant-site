---
title: Download
layout: download
search: false
---

<script setup>
import { version } from "./global.ts";
import { ref } from 'vue';
const v = ref(version);
import DownloadLinks from './components/DownloadLinks.vue'
</script>


# Download <Badge type="warning">v{{v}}</Badge>

### Get the latest version of En Croissant

<DownloadLinks />

Want to build from source? Check out the [GitHub repository](https://github.com/franciscoBSalgueiro/en-croissant).


<style scoped>
h1 {
  font-size: 48px;
  font-weight: 700;
}

h3 {
  padding-top: 12px;
  font-size: 20px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

a {
  color: var(--vp-c-brand-1);
}

a:hover {
  text-decoration: underline;
}

</style>