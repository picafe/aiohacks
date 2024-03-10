import {
  SignupForm,
  FormItemGroup,
} from 'wasp/client/auth'

export default function SignupPage() {
  return <>
    <SignupForm
      additionalFields={[
        {
          name: 'name',
          label: 'Name',
          type: 'input',
          validations: {
            required: 'Name is required',
          },
        }, (form, state) => {
          []
          const username = form.watch('name')
          return (
            username && (
              <FormItemGroup>
                Hello there <strong>{username}</strong> 👋
              </FormItemGroup>
            )
          )
        },
      ]}
    />
  </>
}