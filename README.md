# FormKit Shuriken UI

Two FormKit configs for integrating with [Shuriken UI](http://github.com/shuriken-ui/nuxt)

### Add FormKit inputs and style existing ones

This config adds the ShurikenUI components with a `sh` prefix. It also adds Tailwind classes to style all of the built in FormKit inputs to match Shuriken UI as best as possible.

It cannot be used to replace existing FormKit inputs as there would be class conflicts between the Tailwind config and the ShurikenUI classes.

### Replace FormKit inputs (opinionated config)

So this configuration is an opinionated config designed to replace FormKit's defaults with ShurikenUI, except in cases, in my opinin, where FormKit's inputs are considerably better.

#### ShurikenUI Components

- All Text (including native inputs)
- AutoComplete
- Textarea
- Checkbox
- Radio
- Dropdown
- Switch
- Datepicker (uses v-calendar for functionality)

#### FormKit Components With More Functionality Than ShurikenUI:

- ColorPicker (Pro)
- File

#### FormKit Components that don't exist in Shuriken:

- MultiStep
- Range (not yet styled)
- Rating (not yet styled)
- Repeater (not yet styled)
- TagList (not yet styled)
- TransferList (not yet styled)

** Will style these as needed **
