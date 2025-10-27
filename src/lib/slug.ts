export function slug(teks: string) {
  return teks
    .toLowerCase()
    .trim()
    .replace(/[^\w-]+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}
