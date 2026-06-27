import PolicyPage from "@/component/PolicyPage";
import { LAST_UPDATED, privacyPolicy } from "@/content/policies";

export const metadata = {
  title: "Privacy Policy | TrustKeeper",
  description:
    "Learn how Trust Keeper protects your personal data with encryption, transparency, and user control.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro="Your privacy and security are paramount. Trust Keeper is your secure digital vault for managing personal and financial data — and we are committed to protecting the information you entrust to us."
      sections={privacyPolicy}
    />
  );
}
