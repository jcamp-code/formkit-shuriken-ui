<script setup lang="ts">
const formModel = ref({
  participants: null,
  framework: null,
  frameworks: [],
  frameworkObjs: [],
})

const frameworks = [
  { label: 'React', value: 'react1' },
  { label: 'Vue', value: 'vue2' },
  { label: 'Angular', value: 'angular3' },
  { label: 'Svelte', value: 'svelte4' },
]
const people = ref([
  'John Brown',
  'Anita Smith',
  'Belen Rodriguez',
  'Sammy Lee',
  'Hermann Schmidt',
  'Chloe Varley',
])
</script>

<template>
  <div>
    <BaseThemeToggle></BaseThemeToggle>
    <div class="w-64">
      <div>
        <BaseHeading>Comboboxes with string arrays</BaseHeading>
        <BaseAutocomplete
          dropdown
          :items="people"
          v-model.prop="formModel.participants"
          label="Framework Combobox No Create"
          placeholder="Select participants"
        />
        <BaseAutocomplete
          dropdown
          :items="people"
          v-model.prop="formModel.participants"
          label="Framework Combobox Create"
          allow-create
          placeholder="Select participants"
        />
        <BaseAutocomplete
          dropdown
          :items="people"
          v-model.prop="formModel.participants"
          label="Framework Combobox Create, Hidden Prompt"
          allow-create
          hide-create-prompt
          placeholder="Select participants"
        />
        <FormKit
          type="autocomplete"
          dropdown
          :options="people"
          v-model.prop="formModel.participants"
          label="Formkit: Framework Combobox Create, Hidden Prompt"
          allow-create
          hide-create-prompt
          placeholder="Select participants"
        />
        <BaseHeading>Comboboxes with object arrays</BaseHeading>
        <BaseAutocomplete
          dropdown
          :items="frameworks"
          v-model.prop="formModel.framework"
          label="Framework Combobox No Create"
          placeholder="Select a framework"
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <BaseAutocomplete
          dropdown
          :items="frameworks"
          v-model.prop="formModel.framework"
          label="Framework Combobox Allow Create"
          placeholder="Select a framework"
          allow-create
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <BaseAutocomplete
          dropdown
          :items="frameworks"
          v-model.prop="formModel.framework"
          label="Framework Combobox Allow Create, No Prompt"
          placeholder="Select a framework"
          allow-create
          hide-create-prompt
          clearable
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <FormKit
          type="combobox"
          :options="frameworks"
          v-model.prop="formModel.framework"
          label="FormKit: Framework Combobox Allow Create, No Prompt"
          placeholder="Select a framework"
          allow-create
          hide-create-prompt
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <BaseHeading
          >Comboboxes with object arrays, multiple selection</BaseHeading
        >
        <BaseAutocomplete
          dropdown
          multiple
          :items="frameworks"
          v-model.prop="formModel.frameworks"
          label="Framework Combobox No Create"
          placeholder="Select a framework"
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <FormKit
          type="autocomplete"
          dropdown
          multiple
          :options="frameworks"
          v-model.prop="formModel.frameworkObjs"
          label="Formkit: Use Objects Autocomplete Dropdown No Create"
          placeholder="Select a framework"
          clearable
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />
        <BaseListbox
          multiple
          :items="frameworks"
          v-model.prop="formModel.frameworks"
          label="Framework Combobox No Create"
          :properties="{
            value: 'value',
            label: 'label',
          }"
        />

        <ClientOnly>
          <pre> {{ formModel }}</pre>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
