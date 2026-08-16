export function getSiteNumber() {
  const siteNumber = process.env.NEXT_PUBLIC_SITE_NUMBER || process.env.SITE_NUMBER;

  if (!siteNumber) {
    return 1;
  }

  const parsed = parseInt(siteNumber, 10);

  if (isNaN(parsed) || parsed < 1 || parsed > 40) {
    return 1;
  }

  return parsed;
}
