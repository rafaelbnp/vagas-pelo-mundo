<template>
  <table class="table is-hoverable is-size-4">
    <thead>
      <tr>
        <th>
          <font-awesome-icon icon="globe" />
        </th>
        <th>Title</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="job in jobs" :key="job.country">
        <th>
          <flag :iso="job.country" :squared="false" :title="countries[job.country]" />
        </th>
        <th>{{ job.title }}</th>
        <th>{{ job.link }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import countries from '@/assets/countries';

export default {
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  data: () => ({ countries })
};
</script>

<style>
</style>
