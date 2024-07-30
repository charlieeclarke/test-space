import mc from '@mailchimp/mailchimp_marketing';

export default async function mailchimp(req, res) {
  const { email, status, mergeFields, audienceId } = req.body;

  if (!process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || !process.env.NEXT_PUBLIC_MAILCHIMP_SERVER) {
    return res.status(400).send({
      error: true,
      message:
        'Mailchimp not configured. Please ensure your Mailchimp API key and server location are stored correctly. See the documentation for more information.',
    });
  }

  mc.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER,
  });

  try {
    await mc.lists.addListMember(audienceId, {
      email_address: email,
      status,
      merge_fields: mergeFields,
    });
  } catch (error) {
    return res.status(400).send({ error: true, message: error?.response?.text });
  }

  return res.json({ success: true });
}
