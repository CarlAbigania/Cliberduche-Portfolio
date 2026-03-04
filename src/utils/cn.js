/**
 * Simple classname utility function
 * Combines multiple class names and filters out false values
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
