<template>
  <table class="table is-hoverable is-size-4">
    <thead>
      <tr>
        <th>Country</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="job in jobs" :key="job.country">
        <th>
          <flag :iso="job.country" />
        </th>
        <th>{{ job.link }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
