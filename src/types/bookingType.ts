import { INVESTMENT_RANGE, ONBOARDING_AS } from "./enums";

export interface BOOKING {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  franchiseName: string;
  investmentRange: INVESTMENT_RANGE;
  onBoardingAs: ONBOARDING_AS;
  message: string;
}
