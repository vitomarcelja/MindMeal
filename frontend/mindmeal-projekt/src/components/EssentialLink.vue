<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
    class="custom-link-item"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" class="custom-link-icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="custom-link-title">{{ props.title }}</q-item-label>
      <q-item-label caption class="custom-link-caption">{{
        props.caption
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.custom-link-item {
  font-family: "Century Gothic", Arial, sans-serif;
  padding: 13px 16px;
}

.custom-link-title {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
}

.custom-link-caption {
  font-size: 12px;
  color: #5f5f5f;
}

.custom-link-icon {
  color: #0066ff;
  font-size: 26px;
}
</style>
