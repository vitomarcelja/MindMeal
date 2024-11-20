<!-- src/views/TermsOfServicePage.vue -->
<template>
  <div class="terms-page">
    <h1>Terms of Service</h1>
    <p>Please read these terms carefully before using our service.</p>
    <ul>
      <li>Term 1: You agree to the terms.</li>
      <li>Term 2: You will not misuse the service.</li>
      <li>Term 3: We reserve the right to terminate your account.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TermsOfServicePage',
};
</script>

<style scoped>
.terms-page {
  padding: 20px;
  background-color: #fafafa;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
</style>
