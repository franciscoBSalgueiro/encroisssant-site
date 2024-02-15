<script setup>
import { data } from "./engines.data.js";

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

</script>

# Engines

En Croissant comes with a selection of engines to download with a single click. Here's a list of the engines currently available:

<div class="grid">
  <div class="engine" v-for="engine in data" :key="engine.name">
    <div>
      <p class="title">{{ engine.name }}</p>
      <p class="elo">{{ engine.elo }} ELO</p>
    </div>
    <img :src="engine.image" />
    <a :href="engine.url">Download</a>
  </div>
</div>

ELO ratings are sourced from [CCRL](https://computerchess.org.uk/ccrl/4040/rating_list_all.html).

<style scoped>
  img {
    max-height: 150px;
  }
  .elo {
    font-size: 0.8em;
    font-weight: normal;
    color: var(--vp-c-text-2);
    margin-top: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .engine {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    text-align: center;
  }
  .title {
    font-size: 1.2em;
    margin-bottom: 0;
  }
  a {
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>