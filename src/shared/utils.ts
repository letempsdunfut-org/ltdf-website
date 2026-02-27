import { z } from "zod";
import { toaster } from "@/components/ui/toaster";

export const isNil = (value: unknown): value is null | undefined => value == null;

export const emailSchema = z.email({ message: "Invalid email format" });

export const emailObjectSchema = z.object({
  email: emailSchema,
});


export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true;
  if (typeof value === "string") return value.length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

export function mapToFilterItems(items: string[]): Array<{ label: string; value: string }> {
  return items.map((item) => ({
    label: item,
    value: item,
  }));
}

export function showCommonError(descriptionLabel: string) {
  toaster.error({
    duration: 5000,
    title: "common.toaster.error.title",
    description: descriptionLabel,
    closable: true,
  });
}

