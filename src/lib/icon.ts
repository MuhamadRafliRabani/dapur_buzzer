// /lib/icons.ts
import * as LucideIcons from "lucide-react";

export function getIconByName(name: string) {
  return (LucideIcons as any)[name] || LucideIcons.HelpCircle;
}
