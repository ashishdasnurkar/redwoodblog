import { Form, TextField, TextAreaField, Submit, FieldError, Label} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success("Thank you for your message!")
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data
      }
    })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Form onSubmit={onSubmit} error={error}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" errorClassName="error" validation={{required: true}}></TextField>
        <FieldError name="name" className="error"></FieldError>

        <Label name="email" errorClassName="error">Email</Label>
        <TextField name="email" errorClassName="error" validation={{required: true}}></TextField>
        <FieldError name="email" className="error"></FieldError>

        <Label name="email" errorClassName="error">Message</Label>
        <TextAreaField name="message" errorClassName="error" validation={{required: true}}></TextAreaField>
        <FieldError name="message" className="error"></FieldError>

        <Submit disabled={loading}>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
