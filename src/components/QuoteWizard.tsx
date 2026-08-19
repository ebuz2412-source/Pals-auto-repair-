import React from "react";
import InquiryWizard from "./InquiryWizard";

interface QuoteWizardProps {
  initialService?: string;
}

export default function QuoteWizard({ initialService }: QuoteWizardProps) {
  return <InquiryWizard initialForklift={initialService} />;
}
