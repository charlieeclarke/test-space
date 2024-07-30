# Mailchimp Form

## Prerequisites

To get started, you'll need a Mailchimp API key, a Mailchimp server location and a Mailchimp audience.
Store the API key and server location in the .env file under the following variable names:

 - NEXT_PUBLIC_MAILCHIMP_API_KEY
 - NEXT_PUBLIC_MAILCHIMP_SERVER

 The server location is just the start of the URL of your Mailchimp admin page, eg. 'us21' for 'https://us21.admin.mailchimp.com/admin/'.

## Basic usage

After that, all that's required to get a simple form up and running is an audience ID.
The Audience ID should be passed as a prop into the component itself. This gives you the option of allowing users to sign up to multiple different audiences if required. In the example below, the audience ID is being read from the .env file, but you can pass it in directly if you prefer.
You can find the audience ID by going to the Audience page in Mailchimp, clicking the 'Settings' dropdown and selecting 'Audience name and defaults'.

```
<MailChimpForm
  audienceId={process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID_1}
/>
```

If no fields prop is passed in, the component will automatically add an E-mail input which maps to the 'EMAIL' merge tag.

## Customisation

```
<MailChimpForm
  audienceId={process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID_1}
  fields={[
    { name: 'FNAME', label: 'First Name', placeholder: 'First Name', required: true },
    { name: 'LNAME', label: 'Last Name', placeholder: 'Last Name' },
    { name: 'EMAIL', label: 'Email', placeholder: 'Email', type: 'email', required: true },
  ]}
  submitLabel="Subscribe"
  subscribeMessages = {
    success: 'You have been subscribed to our newsletter.',
    error: 'There was an error subscribing to the newsletter.',
  },
  className: {styles.someClassName}
/>
```

### fields

The fields prop is an array of objects that map to the merge tags set up in Mailchimp. Each field is made up of the following properties:

 - name (required): string - the name of the Mailchimp merge tag to map to
 - label (required): string - the label text of the input
 - placeholder: string - the placeholder text of the input
 - type: string - the type of input (eg. email, number, text)
 - required: boolean - whether the input is required or not

 The EMAIL field is only required if you want to alter the defaults since the component will automatically add an EMAIL field if none is passed in. This is because EMAIL is the only required field in a Mailchimp audience by default.

 ### submitLabel

 The label text for the submit button.

 ### subscribeMessages

 An object containing success and error strings that are displayed after the API call.

 ### CSS

The component uses the following CSS variables that can be used to tweak things, eg.:

- --mailchimp-form-direction: column;
- --mailchimp-form-spacing: 0.75rem;
- --mailchimp-form-error-size: 0.75rem;
- --mailchimp-form-error-color: #ca1010;
- --mailchimp-form-success-color: #70ca10;
- --mailchimp-form-label-color: var(--white);
- --mailchimp-form-label-size: 0.75rem;

Everything else can be styled using the className prop.

## Error Handling

If the call to the Mailchimp API fails or if Mailchimp returns an error (eg. if the user is already subscribed), the component will display a standard error message by default. If you want more control over the error message that's displayed, you can access the Mailchimp error object in the catch block of the onSubmit function and write custom logic to display the appropriate message.