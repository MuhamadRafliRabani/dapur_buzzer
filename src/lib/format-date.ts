export function formatDate(value: string | undefined) {
  if (!value) return "-";

  const date = new Date(value);

  return date
    .toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", " •");
}
