import { siteConfig } from "../config/site";

const stripNonDigits = (value: string) => value.replace(/\D/g, "");

export const buildWhatsAppUrl = (
  messageTemplate: string,
  sourceSection: string,
  phone = siteConfig.whatsapp.number
) => {
  const sanitizedPhone = stripNonDigits(phone);
  const message = `${messageTemplate}\n\nOrigem do contato: ${sourceSection}.`;

  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
};

