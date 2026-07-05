import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import { EMPTY_DONATION_FORM, type DonationFormState, type DonationSubmission } from '@/types/donation';

interface DonateState {
  step: 'form' | 'success';
  form: DonationFormState;
  submission: DonationSubmission | null;
}

type DonateAction =
  | { type: 'SET_PRESET_AMOUNT'; amount: number }
  | { type: 'SET_CUSTOM_AMOUNT'; amount: number | null }
  | { type: 'SET_FIELD'; field: 'donorName' | 'donorEmail' | 'message'; value: string }
  | { type: 'SET_CAUSE'; causeId: string | null }
  | { type: 'SUBMIT'; submission: DonationSubmission }
  | { type: 'RESET' };

function donateReducer(state: DonateState, action: DonateAction): DonateState {
  switch (action.type) {
    case 'SET_PRESET_AMOUNT':
      return { ...state, form: { ...state.form, amount: action.amount, isCustomAmount: false } };
    case 'SET_CUSTOM_AMOUNT':
      return { ...state, form: { ...state.form, amount: action.amount, isCustomAmount: true } };
    case 'SET_FIELD':
      return { ...state, form: { ...state.form, [action.field]: action.value } };
    case 'SET_CAUSE':
      return { ...state, form: { ...state.form, causeId: action.causeId } };
    case 'SUBMIT':
      return { ...state, step: 'success', submission: action.submission };
    case 'RESET':
      return { step: 'form', form: EMPTY_DONATION_FORM, submission: null };
    default:
      return state;
  }
}

interface DonateContextValue {
  state: DonateState;
  dispatch: Dispatch<DonateAction>;
}

const DonateContext = createContext<DonateContextValue | null>(null);

interface DonateProviderProps {
  children: ReactNode;
  initialCauseId?: string | null;
}

export function DonateProvider({ children, initialCauseId = null }: DonateProviderProps) {
  const [state, dispatch] = useReducer(donateReducer, {
    step: 'form',
    form: { ...EMPTY_DONATION_FORM, causeId: initialCauseId },
    submission: null,
  });

  return <DonateContext.Provider value={{ state, dispatch }}>{children}</DonateContext.Provider>;
}

export function useDonateContext() {
  const context = useContext(DonateContext);
  if (!context) {
    throw new Error('useDonateContext must be used within a DonateProvider');
  }
  return context;
}
