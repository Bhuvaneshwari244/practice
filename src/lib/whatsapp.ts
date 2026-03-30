export const WHATSAPP_PHONE = "919701473371";

const isMobileDevice = () =>
  typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

export function buildWhatsAppLink(message = "", phone = WHATSAPP_PHONE) {
  const text = encodeURIComponent(message);
  if (isMobileDevice()) {
    return `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;
  }

  return `https://web.whatsapp.com/send?phone=${phone}${text ? `&text=${text}` : ""}`;
}
