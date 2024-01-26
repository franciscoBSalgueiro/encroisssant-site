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

<VPTeamMembers :members="data" />

ELO ratings are sourced from [CCRL](https://computerchess.org.uk/ccrl/4040/rating_list_all.html).