<template>
  <q-layout view="lHh Lpr lFf" class="custom-page-background">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="custom-toolbar-title">
          <img
            alt="MindMeal logo"
            src="~assets/Untitled-4.png"
            style="width: 200px; height: 62px"
          />
        </q-toolbar-title>
        <img
          alt="MindMeal logo"
          src="~assets/logo.png"
          style="width: 85px; height: 50px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="custom-drawer"
    >
      <q-list class="q-mt-md">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue"; // Ensure this is correctly imported

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Početna",
    caption: "Naslovna stranica",
    icon: "home",
    link: "#/",
  },
  {
    title: "Planovi prehrane",
    caption: "Pretraga prehrambenih planova prehrane",
    icon: "search",
    link: "#/pretrazivanje",
  },
  {
    title: "Personalizirani planovi",
    caption: "Personalizirani planovi prehrane",
    icon: "shield",
    link: "#/personalizacija",
  },
  {
    title: "Forum",
    caption: "Komunikacija između korisnika",
    icon: "forum",
    link: "#/forum",
  },
  {
    title: "Korisnik",
    caption: "Profil korisnika",
    icon: "person",
    link: "#/profilkorisnika",
  },
  {
    title: "Stručnjak",
    caption: "Profil Stručnjaka",
    icon: "badge",
    link: "#/profilstrucnjaka",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.custom-toolbar-title {
  font-family: "Century Gothic", Arial, sans-serif;
}
.custom-page-background {
  background-color: #ffffff;
}
</style>
