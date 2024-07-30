import { Button } from '@components/Button';
import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const Form = ({ name, netlify = true, handler = '', fields = [] }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const { t } = useTranslation('common');

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch(handler, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(data),
    })
      .then(() => {
        // Handle success
      })
      .catch((error) => alert(error));
  };

  if (fields.length < 1) return null;

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} data-netlify={netlify} name={name}>
      {fields.map((field) => {
        return (
          <div className="form-input" key={field.id}>
            <label>
              <span className="form-input__label">{t(`form_label_${field.name}`)}</span>
              <input {...register(field.name, { required: field?.required || false })} type={field?.type || 'text'} />
              {errors[field.name] && <div className="form-input__error">{t('form_error')}</div>}
            </label>
          </div>
        );
      })}

      <Button type="submit" variant="primary">
        {t('form_submit')}
      </Button>
    </form>
  );
};

export default Form;
