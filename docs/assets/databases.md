<script setup>
import { data } from "./databases.data.js";

</script>

# Databases

En Croissant comes with a selection of databases to download with a single click. Here's a list of the databases currently available:


<div v-for="db in data" :key="db.name" class="card">
    <h3>{{db.title}}</h3>
    <p class="flex">
        <span><b>Games:</b> {{db.game_count}}</span>
        <span><b>Players:</b> {{db.player_count}}</span>
    </p>
    <a :href="db.downloadLink">Download</a>
</div>

<style scoped>
    h3 {
        padding-top: 12px;
        font-size: 20px;
        font-weight: 700;
    }
    .flex {
        display: flex;
        gap: 1rem;
    }
</style>