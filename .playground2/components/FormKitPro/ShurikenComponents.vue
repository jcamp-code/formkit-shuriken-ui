<script setup lang="ts">
import { DatePicker } from 'v-calendar'

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
  <FormKit v-model="formModel" type="form" :actions="false" :incomplete-message="false">
    <div class="relative py-3 sm:mx-auto sm:max-w-xl">
      <BaseCard shape="curved" class="relative px-4 py-10 sm:p-10 md:mx-0">
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
              <BaseText size="sm" class="text-muted-400">Create a new upcoming event.</BaseText>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="grid grid-cols-12 gap-4 py-8">
              <div class="col-span-12">
                <FormKit type="datepicker" name="date" label="Date" />
                <FormKit
                  type="dropdown"
                  name="dropdown"
                  label="Dropdown"
                  shape="curved"
                  placeholder="pick a framework"
                  :items="frameworks"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11',
                  }"
                />
                <FormKit
                  type="autocomplete"
                  :items="people"
                  label="Auto Complete"
                  name="participants"
                  placeholder="Choose people..."
                  shape="curved"
                  icon="ph:users-duotone"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11',
                  }"
                />
                <FormKit type="toggle" name="switch" label="Switch" sublabel="sub label" />
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
              <BaseButton shape="curved" class="!h-12 w-full">Cancel</BaseButton>
              <BaseButton type="submit" shape="curved" color="primary" class="!h-12 w-full"
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
