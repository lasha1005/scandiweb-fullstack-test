export function toKebabCase(str) {
  return str
    .replace(/\s+/g, '-')
    .replace(/_/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}
