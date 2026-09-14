"use client";

import { useSyncExternalStore } from "react";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@/components/ui/Select";
import { COUNTRIES, STORAGE_KEY, type CountryCode } from "@/lib/brand";

const CHANGE_EVENT = "aura-country-change";

type CountrySelectProps = {
  className?: string;
};

function readCountry(): CountryCode {
  const stored = window.localStorage.getItem(STORAGE_KEY) as CountryCode | null;
  if (stored && COUNTRIES.some((c) => c.code === stored)) {
    return stored;
  }
  return "MX";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

export function CountrySelect({ className }: CountrySelectProps) {
  const country = useSyncExternalStore(subscribe, readCountry, () => "MX");

  function onChange(value: string) {
    const next = value as CountryCode;
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <Select value={country} onValueChange={onChange}>
      <SelectTrigger className={className} aria-label="Elige tu país">
        <SelectValue placeholder="Elige tu país" />
        <SelectIcon />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={8}>
        <SelectViewport>
          {COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.code}>
              <SelectItemText>
                {c.code} · {c.name}
              </SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}
