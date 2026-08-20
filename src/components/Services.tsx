import React from "react";
import EquipmentShowcase from "./EquipmentShowcase";

interface ServicesProps {
  onQuoteClickWithService?: (serviceTitle: string) => void;
}

export default function Services({ onQuoteClickWithService }: ServicesProps) {
  return <EquipmentShowcase onInquireWithEquipment={onQuoteClickWithService || (() => {})} />;
}
