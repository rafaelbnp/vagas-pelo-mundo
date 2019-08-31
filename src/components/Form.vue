<template>
  <form @submit.prevent="$emit('onSubmit', job)">
    <div class="field is-horizontal">
      <div class="field-label is-large">
        <label class="label">Title</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input v-model.trim="job.title" class="input is-large" type="text" autofocus />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-large">
        <label class="label">Link</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input v-model.trim="job.link" class="input is-large" type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-large">
        <label class="label">Country</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select is-large">
              <select class="vpm-select" @change="onCountryChange">
                <option></option>
                <option v-for="(country, key) in countries" :key="key" :value="key">
                  {{ country }}
                </option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <flag v-if="job.country" :iso="job.country" :squared="false" />
              <font-awesome-icon v-else icon="globe" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right vpm-actions">
      <div class="control">
        <button class="button is-white is-large" type="button" @click="$emit('onCancel')">
          Cancel
        </button>
        <button class="button is-primary is-large" type="submit">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
import countries from '@/assets/countries';

export default {
  data: () => ({
    countries,
    job: {
      country: '',
      link: '',
      title: ''
    }
  }),
  mounted() {
    this.$el.querySelector('input[autofocus]').focus();
  },
  methods: {
    onCountryChange({ target }) {
      this.job.country = target.value;
    }
  }
};
</script>

<style scoped lang="scss">
.vpm-select {
  width: 100%;
}
.vpm-actions {
  margin-top: 1.5rem;
}
</style>
