import PolicyPage from "@/component/PolicyPage";
import { LAST_UPDATED, cookieNotice } from "@/content/policies";

export const metadata = {
  title: "Cookie Notice | TrustKeeper",
  description:
    "Learn how Trust Keeper uses cookies and how you can manage your preferences.",
};

export default function CookieNoticePage() {
  return (
    <PolicyPage
      title="Cookie Notice"
      lastUpdated={LAST_UPDATED}
      intro="This notice explains how Trust Keeper uses cookies and similar technologies on our website."
      sections={cookieNotice}
    />
  );
}
