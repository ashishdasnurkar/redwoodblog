import { Form, TextField, TextAreaField, Submit, FieldError, Label} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" errorClassName="error" validation={{required: true}}></TextField>
        <FieldError name="name" className="error"></FieldError>

        <Label name="email" errorClassName="error">Email</Label>
        <TextField name="email" errorClassName="error" validation={{required: true, pattern: {
            value: /[^@]+@[^\.]+\..+/,
          }}}></TextField>
        <FieldError name="email" className="error"></FieldError>

        <Label name="email" errorClassName="error">Message</Label>
        <TextAreaField name="message" errorClassName="error" validation={{required: true}}></TextAreaField>
        <FieldError name="message" className="error"></FieldError>

        <Submit>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
