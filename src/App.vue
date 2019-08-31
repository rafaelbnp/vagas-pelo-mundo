<template>
  <div class="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">VagasPeloMundo.dev</h1>
          <h2 class="subtitle">Jobs para brasileirxs</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="vpm-lead">
        <button class="button is-primary is-large" @click="showForm = true">Add</button>
        <Table :jobs="jobs" class="vpm-table" />
        <BulmaModal :isActive="showForm" @onClose="showForm = false">
          <Form @onCancel="showForm = false" @onSubmit="onSubmit" />
        </BulmaModal>
      </div>
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

.vpm-lead {
  padding: 3rem 0;
}
.vpm-table {
  margin-top: 1.5rem;
}
</style>
