import { DONATION_PRESETS } from '@/types/donation';
import { useDonateContext } from '@/pages/DonatePage/DonateContext';
import { useTranslation } from '@/i18n/useTranslation';
import './AmountPresetSelector.scss';

export function AmountPresetSelector() {
  const { state, dispatch } = useDonateContext();
  const t = useTranslation();

  return (
    <div className="amount-selector">
      <span className="amount-selector__label">{t.donate.amountLabel}</span>
      <div className="amount-selector__grid">
        {DONATION_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={`amount-selector__preset${
              !state.form.isCustomAmount && state.form.amount === preset ? ' amount-selector__preset--active' : ''
            }`}
            onClick={() => dispatch({ type: 'SET_PRESET_AMOUNT', amount: preset })}
          >
            {preset} {t.common.currency}
          </button>
        ))}
      </div>

      <div className="amount-selector__custom">
        <label htmlFor="custom-amount">{t.donate.customAmountLabel}</label>
        <input
          id="custom-amount"
          type="number"
          min={1}
          placeholder={t.donate.customAmountPlaceholder}
          value={state.form.isCustomAmount && state.form.amount ? state.form.amount : ''}
          onChange={(event) => {
            const value = event.target.value;
            dispatch({ type: 'SET_CUSTOM_AMOUNT', amount: value ? Number(value) : null });
          }}
        />
      </div>
    </div>
  );
}
