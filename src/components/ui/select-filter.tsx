import { createListCollection } from "@chakra-ui/react";
import {
 SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText
} from "@/components/ui/select";

type FilterSelectProps = {
  value: string;
  items: { label: string; value: string }[];
  placeholder?: string;
  onChange: (value: string) => void;
  maxW?: string | object;
};

/**
 *
 * @param value is the state/input value
 * @param items is a list of collection values
 * @param placeholder
 * @param onChange set the selected value by user / ALL
 * @param maxW
 * @returns
 */
export function FilterSelect({
 value, items, placeholder, onChange, maxW = { base: "full", md: "240px" }
}: FilterSelectProps) {
  return (
    <SelectRoot
      size="md"
      maxW={maxW}
      value={[value]}
      onValueChange={(details: { value: string[] }) => onChange(details.value?.[0] ?? "ALL")}
      collection={createListCollection({ items })}
    >
      <SelectTrigger
        rounded="4xl"
        bg="bg.default"
        color="fg.muted"
        indicatorColor="gray"
      >
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent >
        {items.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
