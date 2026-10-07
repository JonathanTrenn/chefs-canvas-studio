import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'chefs-canvas-studio',

  projectId: '8y4vtona',
  dataset: 'production',

  plugins: [
    structureTool({structure: deskStructure}),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
