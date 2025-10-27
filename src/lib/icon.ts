import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export function getIconByName(name: string): LucideIcon {
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return Icon || LucideIcons.HelpCircle;
}
