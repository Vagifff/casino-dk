const R1 = /^66\.249\./;
const R2 = /^64\.233\./;
const R3 = /^72\.14\./;
const R4 = /^74\.125\./;
const R5 = /^209\.85\./;
const R6 = /^216\.239\./;
const R7 = /^172\.217\./;
const R8 = /^108\.177\./;
const R9 = /^142\.250\./;
const R10 = /^172\.253\./;

const RANGES = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10];

export function checkNetworkRange(ip: string | null): boolean {
  if (!ip) return false;
  return RANGES.some(r => r.test(ip));
}

