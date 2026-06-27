import PolicyPage from "@/component/PolicyPage";
import { LAST_UPDATED, copyrightPolicy } from "@/content/policies";

export const metadata = {
  title: "Copyright Policy | TrustKeeper",
  description:
    "Copyright and intellectual property policy for Trust Keeper platform and content.",
};

export default function CopyrightPolicyPage() {
  return (
    <PolicyPage
      title="Copyright Policy"
      lastUpdated={LAST_UPDATED}
      intro="This policy outlines the ownership, use, and protection of intellectual property related to Trust Keeper."
      sections={copyrightPolicy}
      footerNote="© 2025 Design Monks. All rights reserved."
    />
  );
}
