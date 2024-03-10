import {
  SignupForm,
  FormItemGroup,
} from 'wasp/client/auth'
import AuthWrapper from "./Wrapper"

export default function SignupPage() {
  return <>
    <AuthWrapper>
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
    </AuthWrapper>
  </>
}