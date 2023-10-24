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
  date: '2023-10-01',
  datetimeLocal: '',
  startDate: new Date(),
  endDate: new Date(),
  participants: [],
  color: '',
  category: '',
  agree: false,
  dropdown: '',
  radio: '',
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
                FormKit Tailwind Styling Only
              </BaseHeading>
              <BaseText size="sm" class="text-muted-400">Create a new upcoming event.</BaseText>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="grid grid-cols-12 gap-4 py-8">
              <div class="col-span-12">
                <FormKit
                  type="text"
                  label="Text"
                  name="text"
                  placeholder="Some text placeholder"
                  prefix-icon="i-[ph/ticket-duotone]"
                  suffix-icon="ph:x"
                  validation="required"
                  color-focus
                  @prefixIconClick="console.log('prefix')"
                  @suffixIconClick="console.log('suffix')"
                  @actionClick="console.log('action')"
                />
                <FormKit
                  type="textarea"
                  label="Text Area"
                  name="textarea"
                  placeholder="Text area placeholder"
                  rows="5"
                  validation="required"
                />
                <FormKit type="tel" label="Telephone" name="tel" placeholder="Phone placeholder" />
                <FormKit type="email" label="Email" name="email" placeholder="Email placeholder" />
                <FormKit type="date" label="Date" name="date" placeholder="Date placeholder" />
                <FormKit
                  type="datetimeLocal"
                  label="Date Time Local"
                  name="datetimeLocal"
                  placeholder="Date Time Local placeholder"
                />
                <FormKit
                  type="number"
                  label="Number"
                  name="number"
                  placeholder="Number placeholder"
                />
                <FormKit
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Password placeholder"
                />
                <FormKit
                  type="search"
                  label="Search"
                  name="search"
                  placeholder="Search placeholder"
                />
                <FormKit type="url" label="Url" name="url" placeholder="Url placeholder" />
                <FormKit
                  type="autocomplete"
                  :options="people"
                  label="Auto Complete"
                  multiple
                  name="participants"
                  placeholder="Choose people..."
                  prefix-icon="ph:users-duotone"
                  validation="required"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="color"
                  list="eventColors"
                  label="Color"
                  name="color"
                  placeholder="Pick a color..."
                  prefix-icon="ph:drop-duotone"
                />
                <datalist id="eventColors">
                  <option value="#84cc16"></option>
                  <option value="#22c55e"></option>
                  <option value="#0ea5e9"></option>
                  <option value="#6366f1"></option>
                  <option value="#8b5cf6"></option>
                  <option value="#d946ef"></option>
                  <option value="#f43f5e"></option>
                  <option value="#facc15"></option>
                  <option value="#fb923c"></option>
                  <option value="#9ca3af"></option>
                </datalist>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="text"
                  list="eventCategories"
                  label="List"
                  name="category"
                  placeholder="Pick a category..."
                  prefix-icon="ph:ticket-duotone"
                />
                <datalist id="eventCategories">
                  <option value="Chrome"></option>
                  <option value="Firefox"></option>
                  <option value="Opera"></option>
                  <option value="Safari"></option>
                  <option value="Microsoft Edge"></option>
                </datalist>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit type="checkbox" label="I accept" name="agree" />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit type="checkbox" name="agree">
                  <template #label>
                    <span>
                      <span>I accept the</span>
                      <a href="#" class="text-primary-500 hover:underline focus:underline">
                        Terms of Service
                      </a>
                    </span>
                  </template>
                </FormKit>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  v-model="formModel.radio"
                  type="radio"
                  label="Preferred transportation"
                  :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
                  help="How do you like to get around?"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="file"
                  label="Documents"
                  accept=".pdf,.doc,.docx,.xml,.md,.csv"
                  help="Select as many documents as you would like."
                  multiple="true"
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
