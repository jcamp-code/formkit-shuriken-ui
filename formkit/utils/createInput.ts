import type { FormKitSchemaNode, FormKitTypeDefinition } from '@formkit/core'
import {
  createSection,
  help,
  inner,
  label,
  message,
  messages,
  outer,
  prefix,
  suffix,
  wrapper,
  type FormKitSection,
} from '@formkit/inputs'
import { cloneAny } from '@formkit/utils'
import { markRaw, type Component } from 'vue'

let totalCreated = 1

/**
 * Determine if the given object is a vue component.
 *
 * @param obj - Object or function
 * @returns
 * @public
 */
function isComponent(obj: any): obj is Component {
  return (
    (typeof obj === 'function' && obj.length === 2) ||
    (typeof obj === 'object' &&
      !Array.isArray(obj) &&
      !('$el' in obj) &&
      !('$cmp' in obj) &&
      !('if' in obj))
  )
}

function createSchema(inputSection: FormKitSection) {
  return outer(
    wrapper(label('$label'), inner(prefix(), inputSection(), suffix())),
    help('$help'),
    messages(message('$message.value')),
  )
}

function noLabelSchema(inputSection: FormKitSection) {
  return outer(
    wrapper(inner(prefix(), inputSection(), suffix())),
    help('$help'),
    messages(message('$message.value')),
  )
}

/**
 * Creates a new input from schema or a Vue component with the "standard"
 * FormKit features in place such as labels, help text, validation messages, and
 * class support.
 *
 * @param schemaOrComponent - The actual schema of the input or the component.
 * @param definitionOptions - Any options in the FormKitTypeDefinition you want
 * to define.
 *
 * @returns {@link @formkit/core#FormKitTypeDefinition | FormKitTypeDefinition}
 *
 * @public
 */
export function createInput(
  schemaOrComponent: FormKitSchemaNode | FormKitSection | Component,
  definitionOptions: Partial<FormKitTypeDefinition> = {},
  label: boolean = true,
): FormKitTypeDefinition {
  const definition: FormKitTypeDefinition = {
    type: 'input',
    ...definitionOptions,
  }
  let schema: FormKitSection
  if (isComponent(schemaOrComponent)) {
    const cmpName = `SchemaComponent${totalCreated++}`
    schema = createSection('input', () => ({
      $cmp: cmpName,
      props: {
        context: '$node.context',
      },
    }))
    definition.library = { [cmpName]: markRaw(schemaOrComponent) }
  } else if (typeof schemaOrComponent === 'function') {
    schema = schemaOrComponent
  } else {
    schema = createSection('input', () => cloneAny(schemaOrComponent))
  }

  // Use the default wrapping schema
  definition.schema = label
    ? createSchema(schema || 'Schema undefined')
    : noLabelSchema(schema || 'Schema undefined')
  if (!definition.schemaMemoKey) definition.schemaMemoKey = `${Math.random()}`

  return definition
}
