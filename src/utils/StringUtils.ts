/**
 * Shortens text to specified size and adds three dots
 * @param text string
 * @param size number
 */

export function truncate(text: string, size: number) {
  return text.length > size ? `${text.slice(0, size - 1)}…` : text;
}
