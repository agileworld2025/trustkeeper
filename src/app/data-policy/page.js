import PolicyPage from "@/component/PolicyPage";
import { LAST_UPDATED, dataPolicy } from "@/content/policies";

export const metadata = {
  title: "Data Policy | TrustKeeper",
  description:
    "Understand how Trust Keeper collects, protects, stores, and manages your data.",
};

export default function DataPolicyPage() {
  return (
    <PolicyPage
      title="Data Policy"
      lastUpdated={LAST_UPDATED}
      intro="Trust Keeper is built with a privacy-first approach. This policy explains how we handle your data from collection through storage, use, and deletion."
      sections={dataPolicy}
    />
  );
}
