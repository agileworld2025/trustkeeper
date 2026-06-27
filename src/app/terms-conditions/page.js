import PolicyPage from "@/component/PolicyPage";
import { LAST_UPDATED, termsAndConditions } from "@/content/policies";

export const metadata = {
  title: "Terms & Conditions | TrustKeeper",
  description:
    "Read the terms and conditions for using Trust Keeper services and platform.",
};

export default function TermsConditionsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      lastUpdated={LAST_UPDATED}
      sections={termsAndConditions}
      footerNote="By using our platform, you acknowledge that you have read and understood these terms."
    />
  );
}
