<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out!</p>
    <form @submit.prevent="submitForm">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitForm() {
      console.log(`Form submitted with email: ${this.email}`);
    }
  }
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  background-color: #eef2f7;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
