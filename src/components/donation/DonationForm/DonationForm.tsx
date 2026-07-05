import type { FormEvent } from 'react';
import { causes } from '@/data/causes';
import { Button } from '@/components/common/Button/Button';
import { AmountPresetSelector } from '@/components/donation/AmountPresetSelector/AmountPresetSelector';
import { useDonateContext } from '@/pages/DonatePage/DonateContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './DonationForm.scss';

export function DonationForm() {
  const { state, dispatch } = useDonateContext();
  const { language } = useLanguage();
  const t = useTranslation();
  const activeCauses = causes.filter((cause) => cause.status === 'active');

  const isValid = Boolean(state.form.amount && state.form.amount > 0 && state.form.donorName && state.form.donorEmail);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;

    dispatch({
      type: 'SUBMIT',
      submission: {
        ...state.form,
        referenceId: `BZ-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
        submittedAt: new Date().toISOString(),
      },
    });
  }

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <AmountPresetSelector />

      <div className="donation-form__field">
        <label htmlFor="donor-name">{t.donate.nameLabel}</label>
        <input
          id="donor-name"
          type="text"
          required
          value={state.form.donorName}
          onChange={(event) => dispatch({ type: 'SET_FIELD', field: 'donorName', value: event.target.value })}
        />
      </div>

      <div className="donation-form__field">
        <label htmlFor="donor-email">{t.donate.emailLabel}</label>
        <input
          id="donor-email"
          type="email"
          required
          value={state.form.donorEmail}
          onChange={(event) => dispatch({ type: 'SET_FIELD', field: 'donorEmail', value: event.target.value })}
        />
      </div>

      <div className="donation-form__field">
        <label htmlFor="donor-cause">{t.donate.causeLabel}</label>
        <select
          id="donor-cause"
          value={state.form.causeId ?? ''}
          onChange={(event) => dispatch({ type: 'SET_CAUSE', causeId: event.target.value || null })}
        >
          <option value="">{t.common.generalCause}</option>
          {activeCauses.map((cause) => (
            <option key={cause.id} value={cause.id}>
              {cause.title[language]}
            </option>
          ))}
        </select>
      </div>

      <div className="donation-form__field">
        <label htmlFor="donor-message">{t.donate.messageLabel}</label>
        <textarea
          id="donor-message"
          rows={3}
          value={state.form.message}
          onChange={(event) => dispatch({ type: 'SET_FIELD', field: 'message', value: event.target.value })}
        />
      </div>

      {!isValid && <p className="donation-form__hint">{t.donate.validationHint}</p>}

      <Button type="submit">{t.donate.submitCta}</Button>
    </form>
  );
}
