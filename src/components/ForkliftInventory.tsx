import React from "react";
import EquipmentShowcase from "./EquipmentShowcase";

interface ForkliftInventoryProps {
  onInquireWithForklift?: (forkliftName: string) => void;
}

export default function ForkliftInventory({ onInquireWithForklift }: ForkliftInventoryProps) {
  return <EquipmentShowcase onInquireWithEquipment={onInquireWithForklift || (() => {})} />;
}
