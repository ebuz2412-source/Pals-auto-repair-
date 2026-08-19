import React from "react";
import ForkliftInventory from "./ForkliftInventory";

interface ServicesProps {
  onQuoteClickWithService?: (forkliftName: string) => void;
}

export default function Services({ onQuoteClickWithService }: ServicesProps) {
  return <ForkliftInventory onInquireWithForklift={onQuoteClickWithService} />;
}
