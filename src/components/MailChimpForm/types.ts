type MailChimpField = {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
};

export type MailChimpFormProps = {
  name?: string;
  audienceId: string;
  fields?: MailChimpField[];
  submitLabel?: string;
  children?: React.ReactNode;
  subscribeMessages?: {
    success?: string;
    error?: string;
  };
  className?: string;
};

export type MailChimpFormValues = {
  [K in MailChimpField['name']]: string;
};

export type MailChimpFormComponent = React.FC<MailChimpFormProps>;
