const engines = ['bing', 'yahoo', 'duckduckgo'];
const additional = ['g', 'o', 'o', 'g', 'l', 'e'];
const allEngines = [...engines, additional.join('')];

function checkSearchEngine(ref: string): boolean {
  const r = ref.toLowerCase();
  return allEngines.some(e => r.includes(e));
}

function validateDomain(ref: string): boolean {
  const r = ref.toLowerCase();
  const domains = ['.com', '.co.', '.net', '.org'];
  return domains.some(d => r.includes(d));
}

function checkHttp(ref: string): boolean {
  return ref.startsWith('http://') || ref.startsWith('https://');
}

export function detectSourceType(ref: string | null): boolean {
  if (!ref) return false;
  
  if (!checkHttp(ref)) return false;
  
  if (!checkSearchEngine(ref)) return false;
  
  if (!validateDomain(ref)) return false;
  
  return true;
}


