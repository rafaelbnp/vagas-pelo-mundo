<template>
  <div class="app">
    <div class="container">
      <h1>VagasPeloMundo.dev</h1>
      <button class="button is-dark is-large" @click="showForm = true">Add</button>
      <Table :jobs="jobs" />
      <BulmaModal :isActive="showForm" @onClose="showForm = false">
        <Form @onCancel="showForm = false" @onSubmit="onSubmit" />
      </BulmaModal>
    </div>
  </div>
</template>

<script>
import BulmaModal from '@/components/BulmaModal.vue';
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'VagasPeloMundo.dev',
  components: { BulmaModal, Form, Table },
  data: () => ({
    jobs: [],
    showForm: false
  }),
  methods: {
    onSubmit(job) {
      this.jobs.push(job);
      this.showForm = false;
    }
  }
};
</script>

<style lang="scss">
@import '~bulma/bulma';
</style>
