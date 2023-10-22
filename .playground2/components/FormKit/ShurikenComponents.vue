<script setup lang="ts">
async function searchMovies(search: string) {
  if (!search) return []
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=1&include_adult=false`,
  )
  if (res.ok) {
    const data = await res.json()
    // Iterating over results to set the required
    // `label` and `value` keys.
    return data.results.map((result: any) => {
      return {
        id: result.id,
        text: result.title,
      }
    })
  }
  // If the request fails, we return an empty array.
  return []
}
function filterItems(query?: string) {
  if (!query) return []

  // search by name or text
  return searchMovies(query)
}

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
  radio: '',
})

const dates = ref({
  start: new Date(),
  end: new Date(),
})
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]
const frameworks3 = [
  { name: 'React', valueKey: 'react' },
  { name: 'Vue', text: 'ghghg', valueKey: 'vue' },
  { name: 'Angular', text: '', valueKey: 'angular' },
  { name: 'Svelte', text: '', valueKey: 'svelte' },
]

const frameworks2 = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])

const masks = ref({
  input: 'YYYY-MM-DD',
})

const people = ref([
  'John Brown',
  'Anita Smith',
  'Belen Rodriguez',
  'Sammy Lee',
  'Hermann Schmidt',
  'Chloe Varley',
])

const selectedMovie = ref()
const selectedFramework = ref('angular')
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
                <FormKit
                  type="text"
                  label="Text"
                  name="text"
                  color-focus
                  placeholder="Some text placeholder"
                  shape="curved"
                  icon="ph:ticket-duotone"
                  :suffix-icon="formModel.text && 'ph:x'"
                  suffix-button
                  :input-classes="{
                    suffixButton: '!hidden group-focus-within:!flex',
                    suffixIcon: 'group-focus-within:!text-primary-500',
                  }"
                  validation="required"
                />

                <FormKit
                  type="text"
                  label="Text"
                  name="text"
                  placeholder="Some text placeholder"
                  shape="curved"
                  icon="ph:ticket-duotone"
                  :input-classes="{
                    suffixButton: ' group-focus-within:!flex',
                    suffixIcon: 'group-focus-within:!text-primary-500',
                  }"
                  validation="required"
                />
                <FormKit
                  type="textarea"
                  label="Text Area"
                  name="textarea"
                  placeholder="Text area placeholder"
                  shape="curved"
                  rows="5"
                  validation="required"
                />
                <FormKit
                  type="tel"
                  label="Telephone"
                  name="tel"
                  placeholder="Phone placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Email placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="date"
                  label="Date"
                  name="date"
                  placeholder="Date placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="datetimeLocal"
                  label="Date Time Local"
                  name="datetimeLocal"
                  placeholder="Date Time Local placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="number"
                  label="Number"
                  name="number"
                  placeholder="Number placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Password placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="search"
                  label="Search"
                  name="search"
                  placeholder="Search placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="url"
                  label="Url"
                  name="url"
                  placeholder="Url placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />

                <FormKit
                  type="autocomplete"
                  :options="people"
                  label="Auto Complete"
                  multiple
                  name="participants"
                  placeholder="Choose people..."
                  shape="curved"
                  icon="ph:users-duotone"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11',
                  }"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="color"
                  list="eventColors"
                  label="Color"
                  name="color"
                  placeholder="Pick a color..."
                  shape="curved"
                  icon="ph:drop-half-duotone"
                  :input-classes="{
                    input: '!h-11 !ps-11 appearance-none',
                    icon: '!h-11 !w-11',
                  }"
                />
                <datalist id="eventColors">
                  <option value="#84cc16" />
                  <option value="#22c55e" />
                  <option value="#0ea5e9" />
                  <option value="#6366f1" />
                  <option value="#8b5cf6" />
                  <option value="#d946ef" />
                  <option value="#f43f5e" />
                  <option value="#facc15" />
                  <option value="#fb923c" />
                  <option value="#9ca3af" />
                </datalist>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="text"
                  list="eventCategories"
                  label="List"
                  name="category"
                  placeholder="Pick a category..."
                  shape="curved"
                  icon="ph:ticket-duotone"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11 !w-11',
                  }"
                />
                <datalist id="eventCategories">
                  <option value="Chrome" />
                  <option value="Firefox" />
                  <option value="Opera" />
                  <option value="Safari" />
                  <option value="Microsoft Edge" />
                </datalist>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="checkbox"
                  label="I accept"
                  shape="rounded"
                  color="primary"
                  name="agree"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit type="checkbox" shape="rounded" color="primary" name="agree">
                  <span>
                    <span>I accept the</span>
                    <a href="#" class="text-primary-500 hover:underline focus:underline">
                      Terms of Service
                    </a>
                  </span>
                </FormKit>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  name="radio"
                  type="radio"
                  color="primary"
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
    <FormKit type="multi-step" tab-style="progress">
      <FormKit type="step" name="stepOne">
        <FormKit type="text" label="Name" validation="required" />
        <FormKit type="text" label="Name" validation="required" />
        <FormKit type="textarea" label="Your story" validation="required" />
        <BaseAutocomplete
          :filter-items="filterItems"
          label="Movies through Autocomplete Directly"
          :display-value="(item) => item.text"
          placeholder="Choose movie..."
          icon="ph:user-duotone"
          :filter-debounce="300"
        />
        <FormKit
          v-model="selectedMovie"
          type="autocomplete"
          :filter-items="filterItems"
          label="Movies through FormKit"
          :display-value="(item: any) => item.text"
          placeholder="Choose movie..."
          icon="ph:user-duotone"
          :filter-debounce="300"
          by="id"
        />
        {{ selectedMovie }}
        <FormKit
          type="autocomplete"
          v-model="selectedFramework"
          label="Dropdown"
          shape="curved"
          color-focus
          clearable
          allow-custom
          placeholder="pick a framework"
          :items="frameworks2"
        />
        {{ selectedFramework }}

        <FormKit
          type="datepicker"
          name="date"
          label="Date"
          suffix-icon="ph:calendar-blank-duotone"
        />
      </FormKit>
      <FormKit type="step" name="stepTwo">
        <FormKit type="textarea" label="Your story" validation="required" />
      </FormKit>
      <FormKit type="step" name="stepThree">
        <FormKit type="textarea" label="Something else" validation="required" />
      </FormKit>
    </FormKit>
  </FormKit>
</template>

<style>
.nui-input-wrapper .nui-input-icon {
  z-index: initial;
}
</style>
