<script setup lang="ts">
  const maisonsListe: {
    adresse: string;
    collectionId: string;
    /* ... */
  }[] = /* ... */

  interface MaisonRecord {
  adresse: string;
  collectionId: string;
  /* ... */
  }

  const maisonsListe: MaisonRecord[] = /* ... */
</script>


<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
