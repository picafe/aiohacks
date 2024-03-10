export const updateUser = async ({ greeting,subtitle,header,image,description }, context) => {
    if (!context.user) {
        throw new HttpError(401)
      }

    return context.entities.User.update({
      where: { id: context.user.id },
      data: {
        greeting,subtitle,header,image,description
      },
    })
  }