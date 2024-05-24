<script setup lang="ts">
/* __placeholder__ */
import MaisonCard from '@/components/MaisonCard.vue'
import type { MaisonsRecord } from '@/types'

const maisonsListe: MaisonsRecord[] = [
  {
    adresse: '14 rue du grand coucou',
    collectionId: 'etv8qoummvhury4',
    collectionName: 'maison',
    created: '2024-04-11 14:19:29.912Z',
    favori: false,
    id: '000000000000001',
    images: ['palhouse_X82MoNe9Z2.webp'],
    nbChambres: 4,
    nbSdb: 2,
    nomMaison: 'PalHouse',
    prix: 200000,
    surface: 135,
    updated: '2024-04-11 14:19:29.912Z'
  },
  {
    adresse: '1980 rue de zen',
    collectionId: 'etv8qoummvhury4',
    collectionName: 'maison',
    created: '2024-04-11 14:24:56.926Z',
    favori: true,
    id: '000000000000002',
    images: ['vinz_house_SOLdATjy1t.webp'],
    nbChambres: 1,
    nbSdb: 1,
    nomMaison: 'VinzHouse',
    prix: 12,
    surface: 30,
    updated: '2024-05-02 08:59:54.423Z'
  },
  {
    adresse: '14 rue saint binbinks',
    collectionId: 'etv8qoummvhury4',
    collectionName: 'maison',
    created: '2024-04-11 14:27:15.906Z',
    favori: false,
    id: '000000000000003',
    images: ['albinks_house_je5JoAGThl.jpg'],
    nbChambres: 6,
    nbSdb: 3,
    nomMaison: 'AlbinksHouse',
    prix: 1100000,
    surface: 350,
    updated: '2024-04-11 14:27:15.906Z'
  },
  {
    adresse: '667 rue de freeze farfadet',
    collectionId: 'etv8qoummvhury4',
    collectionName: 'maison',
    created: '2024-04-11 14:29:44.042Z',
    favori: false,
    id: '000000000000667',
    images: ['farfadet_house_Rx3TGHZLvW.jpg'],
    nbChambres: 3,
    nbSdb: 1,
    nomMaison: 'ImalveillantHouse',
    prix: 667000,
    surface: 80,
    updated: '2024-04-11 14:29:44.042Z'
  },
  {
    adresse: '55 rue de hugoat',
    collectionId: 'etv8qoummvhury4',
    collectionName: 'maison',
    created: '2024-04-11 14:32:34.048Z',
    favori: false,
    id: '000000000000004',
    images: ['maison_mc_zqdBbr1j7F.avif'],
    nbChambres: 4,
    nbSdb: 2,
    nomMaison: 'McHouse',
    prix: 640000,
    surface: 200,
    updated: '2024-04-11 14:32:42.105Z'
  }
]
console.log(maisonsListe)
</script>

<!--<PersonneCard v-for="unPersonne in personnesListe" :key="unPersonne.nom" v-bind="unPersonne" />-->

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="maison in maisonsListe" :key="maison.id" v-bind="maison" />
</template>
