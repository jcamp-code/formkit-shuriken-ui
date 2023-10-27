<script setup lang="ts"></script>

<template>
  <div>
    <BaseThemeToggle></BaseThemeToggle>
    <div class="grid grid-cols-2 gap-4">
      <p class="bg-blue-200">
        Tailwind:
        <Icon name="i-mdi-abacus" />
        <Icon name="i-mdi-abacus" size="24" />
        <Icon name="i-mdi-abacus" size="48" />
        <Icon name="i-mdi:abacus" />
        <Icon name="i-mdi:abacus" size="24" />
        <Icon name="i-mdi:abacus" size="48" />
      </p>
      <p class="bg-blue-200">
        Automatic:
        <Icon name="mdi-abacus" />
        <Icon name="i-mdi-abacus" />
        <Icon name="mdi:abacus" />
        <Icon name="mdi-access-point-minus" size="24" />
        <Icon name="mdi-abjad-arabic" size="48" />
        <Icon name="i-logos-adobe-indesign" size="48" />
      </p>

      <!-- <ShurikenTairo></ShurikenTairo> -->
      <FormKitShurikenComponents></FormKitShurikenComponents>
      <FormKitShurikenTailwind></FormKitShurikenTailwind>
    </div>
  </div>
</template>
