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
  radio: '',
})

const dates = ref({
  start: new Date(),
  end: new Date(),
})

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
                  type="shtext"
                  label="Text"
                  name="text"
                  placeholder="Some text placeholder"
                  shape="curved"
                  icon="ph:ticket-duotone"
                  :input-classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11 !w-11',
                  }"
                  validation="required"
                />
                <FormKit
                  type="shtextarea"
                  label="Text Area"
                  name="textarea"
                  placeholder="Text area placeholder"
                  shape="curved"
                  rows="5"
                  validation="required"
                />
                <FormKit
                  type="shtel"
                  label="Telephone"
                  name="tel"
                  placeholder="Phone placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shemail"
                  label="Email"
                  name="email"
                  placeholder="Email placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shdate"
                  label="Date"
                  name="date"
                  placeholder="Date placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shdatetimeLocal"
                  label="Date Time Local"
                  name="datetimeLocal"
                  placeholder="Date Time Local placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shnumber"
                  label="Number"
                  name="number"
                  placeholder="Number placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shpassword"
                  label="Password"
                  name="password"
                  placeholder="Password placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shsearch"
                  label="Search"
                  name="search"
                  placeholder="Search placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />
                <FormKit
                  type="shurl"
                  label="Url"
                  name="url"
                  placeholder="Url placeholder"
                  :input-classes="{
                    input: '!h-11',
                  }"
                />

                <FormKit
                  type="shautocomplete"
                  :items="people"
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
                  type="shcolor"
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
                  type="shtext"
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
                  <option value="Chrome"></option>
                  <option value="Firefox"></option>
                  <option value="Opera"></option>
                  <option value="Safari"></option>
                  <option value="Microsoft Edge"></option>
                </datalist>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="shcheckbox"
                  label="I accept"
                  shape="rounded"
                  color="primary"
                  name="agree"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit type="shcheckbox" shape="rounded" color="primary" name="agree">
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
                  type="shradio"
                  color="primary"
                  label="Preferred transportation"
                  :items="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
                  help="How do you like to get around?"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <FormKit
                  type="shfile"
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
        <pre>{{ formModel }}</pre>
      </BaseCard>
    </div>
    <FormKit type="multi-step" tab-style="progress">
      <FormKit type="step" name="stepOne">
        <FormKit type="shtext" label="Name" validation="required" />
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
