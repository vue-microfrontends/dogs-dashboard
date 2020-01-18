<template>
  <div>
    <page-header title="Dogs dashboard"></page-header>
    <div class="card">
      <div v-if="dogs.length === 0">
        There are no dogs!
        <router-link to="/rate-doggos">Rate dogs</router-link>.
      </div>
      <div v-else class="dogs">
        <div v-for="dog in dogs" v-bind:key="dog.url" class="dog">
          <img :src="dog.url" alt="dog photo" />
          <div class="rating">Rating: {{ dog.rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PageHeader } from "@vue-mf/styleguide";

export default {
  components: { PageHeader },
  data: () => ({
    dogs: JSON.parse(localStorage.getItem("dogs")) || []
  })
};
</script>
<style scoped>
.card {
  background-color: white;
  margin: 3.2rem auto 0 auto;
  width: 75%;
  padding: 2.4rem;
}

.dogs {
  display: flex;
  flex-wrap: wrap;
}

.dog {
  margin: 1.6rem;
  max-width: 100rem;
}

.rating {
  display: flex;
  justify-content: center;
}
</style>
