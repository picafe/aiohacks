import { defineUserSignupFields } from 'wasp/server/auth'

export const userSignupFields = defineUserSignupFields({
   name: async (data) => {
    const name = data.name
    if (typeof name !== 'string') {
      throw new Error('Name is required')
    }
    if (name.length < 1) {
      throw new Error('Are you sure that is your name?')
    }
    return name
  },
})