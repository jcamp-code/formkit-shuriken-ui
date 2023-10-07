<script setup lang="ts">
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
  datetimeLocal: '',
  startDate: new Date(),
  endDate: new Date(),
  participants: [],
  color: '',
  category: '',
  agree: false,
  dropdown: 'vue',
  switch: false,
})

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
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
                FormKit Pro Inputs Tailwind Styling Only
              </BaseHeading>
              <BaseText size="sm" class="text-muted-400">These are only the pro inputs.</BaseText>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="grid grid-cols-12 gap-4 py-8">
              <div class="col-span-12">
                <FormKit type="colorpicker" />
                <FormKit
                  type="datepicker"
                  name="date"
                  label="Appointment date"
                  placeholder="Select a date"
                  calendar-icon="i-[ph-calendar-duotone]"
                  next-icon="i-[carbon-chevron-right]"
                  prev-icon="i-[carbon-chevron-left]"
                  overlay
                />
                <FormKit
                  type="dropdown"
                  name="dropdown"
                  label="Dropdown"
                  placeholder="pick a framework"
                  :options="frameworks"
                />
                <FormKit
                  type="autocomplete"
                  :options="people"
                  label="Auto Complete"
                  multiple
                  name="participants"
                  placeholder="Choose people..."
                  prefix-icon="i-[ph-users-duotone]"
                  validation="required"
                />
                <FormKit type="toggle" name="switch" label="Switch" />
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
        <pre>{{ formModel }}</pre>
      </BaseCard>
    </div>
  </FormKit>
</template>
