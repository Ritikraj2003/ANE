export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const KOKRAJHAP_COORDS = {
  lat: "26.4014° N",
  lng: "90.2727° E",
  elevation: "38m AMSL",
  zone: "BTR, Assam 783370, India",
};
