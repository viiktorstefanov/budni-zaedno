export interface DonationFormState {
  amount: number | null;
  isCustomAmount: boolean;
  donorName: string;
  donorEmail: string;
  causeId: string | null;
  message: string;
}

export interface DonationSubmission extends DonationFormState {
  referenceId: string;
  submittedAt: string;
}

export const DONATION_PRESETS: readonly number[] = [10, 25, 50, 100, 200];

export const EMPTY_DONATION_FORM: DonationFormState = {
  amount: null,
  isCustomAmount: false,
  donorName: '',
  donorEmail: '',
  causeId: null,
  message: '',
};
