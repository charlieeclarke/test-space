import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

import { Button } from '@components/Button';

import styles from './MailChimpForm.module.scss';

import { MailChimpFormValues, MailChimpFormComponent } from './types';

export const MailChimpForm: MailChimpFormComponent = ({
  name = 'mailchimpForm',
  audienceId = null,
  fields = [],
  submitLabel = 'Submit',
  subscribeMessages = {
    success: 'You have been subscribed to our newsletter.',
    error: 'There was an error subscribing to the newsletter.',
  },
  className = '',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const [subscribeError, setSubscribeError] = useState<boolean | null>(null);

  const { t } = useTranslation('common');

  const containsEmailField = fields.some((obj) => obj['name'] === 'EMAIL');

  if (!containsEmailField) {
    fields.push({ name: 'EMAIL', label: 'E-mail', placeholder: 'E-mail', type: 'email', required: true });
  }

  const onSubmit: SubmitHandler<MailChimpFormValues> = async (data) => {
    const { EMAIL, ...mergeFields } = data;

    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audienceId,
          email: EMAIL,
          status: 'subscribed',
          mergeFields,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData?.message) {
          throw {
            error: JSON.parse(responseData.message as string),
          };
        } else {
          throw {
            error: 'Something went wrong',
          };
        }
      }

      if (responseData.error) {
        setSubscribeError(true);
      } else {
        setSubscribeError(false);
      }
    } catch (error) {
      setSubscribeError(true);
    }
  };

  if (!audienceId || !process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || !process.env.NEXT_PUBLIC_MAILCHIMP_SERVER) {
    // eslint-disable-next-line no-console
    console.warn(
      'Mailchimp configuration error: Please ensure you have set the audienceId, Mailchimp API key and Mailchimp server location. See the documentation for more information.'
    );
    return null;
  }

  return (
    <div className={`${styles.mailchimpForm} ${className}`}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form name={name} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted && subscribeError !== null && (
          <p className={styles['form-subscribe-status']} data-subscribe-status={!subscribeError}>
            {subscribeError ? subscribeMessages.error : subscribeMessages.success}
          </p>
        )}
        {fields.map((field, i) => {
          return (
            <div className={styles.form__field} key={`${name}-${i}`} data-input-error={errors[field.name]}>
              <label>
                <span className={styles.form__label}>{field.label}</span>
                <input
                  {...register(field.name, { required: field?.required || false })}
                  type={field?.type || 'text'}
                  placeholder={field?.placeholder || ''}
                />
              </label>
              {errors[field.name] && <p className={styles['form-input__error']}>{t('form_error')}</p>}
            </div>
          );
        })}
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default MailChimpForm;
