<script setup lang="ts">
import AutoTest from './AutoTest.vue'

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

const formModel = ref({
  text: '',
  textarea: '',
  tel: '',
  email: '',
  password: '',
  search: '',
  url: '',
  number: 1,
  date: new Date(),
  datetest: '09/21/2023',
  datetimeLocal: '',
  startDate: new Date(),
  endDate: new Date(),
  participants: null,
  color: '',
  category: '',
  agree: false,
  switch: true,
  dropdown: '',
})

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
  <FormKit
    v-model="formModel"
    type="form"
    :actions="false"
    :incomplete-message="false"
  >
    <div class="relative py-3 sm:mx-auto sm:max-w-xl">
      <BaseCard class="relative px-4 py-10 sm:p-10 md:mx-0">
        <div class="mx-auto max-w-md">
          <div class="flex items-center gap-4">
            <div
              class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
            >
              <Icon name="ph:calendar-blank-duotone" class="h-5 w-5" />
            </div>
            <div class="block text-xl font-semibold text-gray-700">
              <BaseHeading as="h3" size="lg" weight="medium">
                FormKit Tairo / Shuriken Components
              </BaseHeading>
              <BaseText size="sm" class="text-muted-400"
                >Create a new upcoming event.</BaseText
              >
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="grid grid-cols-12 gap-4 py-8">
              <div class="col-span-12">
                <FormKit
                  type="datepicker"
                  name="date"
                  label="Date"
                  suffix-icon="ph:calendar-blank-duotone"
                />
                <FormKit
                  type="dropdown"
                  name="dropdown"
                  label="Dropdown"
                  color-focus
                  placeholder="pick a framework"
                  :items="frameworks"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11',
                  }"
                />
                <FormKit
                  type="dropdown"
                  :options="people"
                  label="Drop down strings"
                  placeholder="Choose people..."
                  color-focus
                  fixed
                  icon="ph:users-duotone"
                />
                <div class="h-24 w-48 overflow-hidden">
                  <FormKit
                    type="dropdown"
                    :options="people"
                    label="Drop down Portalled"
                    placeholder="Choose people..."
                    color-focus
                    fixed
                    icon="ph:users-duotone"
                  />
                </div>
                <FormKit
                  type="autocomplete"
                  :options="people"
                  label="Auto Complete"
                  placeholder="Choose people..."
                  color-focus
                  multiple
                  icon="ph:users-duotone"
                ></FormKit>
                <div class="h-24 w-48 overflow-hidden">
                  <FormKit
                    type="autocomplete"
                    :options="people"
                    label="Auto Complete Portalled"
                    placeholder="Choose people..."
                    color-focus
                    fixed
                    icon="ph:users-duotone"
                  ></FormKit>
                </div>
                <div class="relative h-24 w-48 overflow-hidden">
                  <FormKit
                    type="autocomplete"
                    :options="frameworks"
                    label="Auto Complete Portalled 2"
                    placeholder="Choose people..."
                    color-focus
                    fixed
                    icon="ph:users-duotone"
                    :displayValue="(i) => i.label"
                    :properties="{ key: 'value', label: 'label' }"
                  ></FormKit>
                </div>
                <FormKit
                  type="toggle"
                  name="switch"
                  label="Switch"
                  sublabel="sub label"
                />
                <FormKit
                  type="toggle"
                  :thin="true"
                  name="switch"
                  label="Switch"
                  sublabel="sub label"
                />
              </div>
            </div>
            <div class="flex items-center gap-4 pt-4">
              <BaseButton class="!h-12 w-full">Cancel</BaseButton>
              <BaseButton type="submit" color="primary" class="!h-12 w-full"
                >Create</BaseButton
              >
            </div>
          </div>
        </div>
        <ClientOnly>
          <pre>{{ formModel }}</pre>
        </ClientOnly>
      </BaseCard>
    </div>
  </FormKit>
</template>

<style>
.nui-switch-ball .nui-switch-ball-icon {
  z-index: initial;
}
/* .nui-listbox .nui-listbox-options {
  z-index: 20;
} */
</style>
