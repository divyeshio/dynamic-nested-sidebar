import { clsx, type ClassValue } from "clsx";
import { format, formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names, resolving any conflicts.
 *
 * @param inputs - An array of class names to merge.
 * @returns A string of merged and optimized class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
export const arrayEquals = (a: string[], b: string[]) =>
  a.length === b.length && a.every((val, index) => val === b[index]);
export function formatDate(date: Date | string | number | undefined | null): string {
  if (!date) return "-";
  const d = new Date(date);
  return format(d, "MMM d, yyyy HH:mm:ss");
}

export function formatRelativeDate(date: Date | string | number | undefined | null): string {
  if (!date) return "-";
  const d = new Date(date);
  return formatDistanceToNow(d, {
    addSuffix: true,
  });
}
