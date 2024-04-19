import { INVESTMENT_RANGE, ONBOARDING_AS } from "./enums";

export interface USER {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  franchiseName: string;
  investmentRange: INVESTMENT_RANGE;
  onBoardingAs: ONBOARDING_AS;
  locationImage: string | null;
  status: string;
  message: string;
  tempPassword: string;
  token: string;
}
