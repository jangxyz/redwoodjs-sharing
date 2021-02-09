import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'

import { value } from '../../../sharing/shared_js'
import { value2 } from '../../../sharing/shared_export'

console.log('🚀 ~ file: graphql.js ~ line 15 ~', { value })
console.log('🚀 ~ file: graphql.js ~ line 16 ~', { value2 })

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
