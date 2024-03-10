export const getUser = async (args, context) => {
  return context.entities.User.findFirst({
    where: {
      name: {
        equals: args.name
      }
    },
  })
}