<template>
  <form @submit.prevent="$emit('onSubmit', job)">
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
              <select class="country-select" @change="onCountryChange">
                <option></option>
                <option v-for="(country, key) in countries" :key="key" :value="key">
                  {{ country }}
                </option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <flag :iso="job.country" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right actions-group">
      <div class="control">
        <button class="button is-white is-large" type="button" @click="$emit('onCancel')">
          Cancel
        </button>
        <button class="button is-dark is-large" type="submit">Save</button>
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
      link: ''
    }
  }),
  methods: {
    onCountryChange({ target }) {
      this.job.country = target.value;
    }
  }
};
</script>

<style scoped lang="scss">
.country-select {
  width: 100%;
}
.actions-group {
  margin-top: 1.5rem; // TODO: is there a bulma variable to calculate this? (e.g. 2x field margin)
}
</style>
