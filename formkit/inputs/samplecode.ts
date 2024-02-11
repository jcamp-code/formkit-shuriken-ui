// import type { FormKitTypeDefinition } from '@formkit/core'
// import {
//   casts,
//   createSection,
//   help,
//   inner,
//   label,
//   message,
//   messages,
//   outer,
//   prefix,
//   suffix,
//   wrapper,
// } from '@formkit/inputs'
// import Text from '../vue/Text.vue'

// const inputSection = createSection('input', () => ({
//   $cmp: 'shText',
//   props: {
//     context: '$node.context',
//   },
// }))

// /**
//  * Input definition for a Shuriken UI Text.
//  * @public
//  */
// export const shtext: FormKitTypeDefinition = {
//   library: { shText: markRaw(Text) },
//   schema: outer(
//     wrapper(label('$label'), inner(prefix(), inputSection(), suffix())),
//     help('$help'),
//     messages(message('$message.value')),
//   ),
//   type: 'input',
//   props: ['colorFocus', 'rounded', 'icon'],
//   features: [casts],
//   schemaMemoKey: `${Math.random()}`,
// }
