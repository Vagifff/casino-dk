function checkFormat(value: string): boolean {
  if (!value || value.length < 15) return false;
  
  const hasAlpha = /[a-zA-Z]/.test(value);
  const hasNumeric = /[0-9]/.test(value);
  
  if (!hasAlpha || !hasNumeric) return false;
  
  const alphanumericOnly = value.replace(/[^a-zA-Z0-9]/g, '');
  if (alphanumericOnly.length < 15) return false;
  
  const startsWithAlpha = /^[a-zA-Z]/.test(value);
  const endsWithAlphaNumeric = /[a-zA-Z0-9]$/.test(value);
  
  if (!startsWithAlpha || !endsWithAlphaNumeric) return false;
  
  return true;
}

function verifyIntegrity(value: string): boolean {
  const clean = value.replace(/[^a-zA-Z0-9]/g, '');
  if (clean.length < 15) return false;
  
  let sum = 0;
  for (let i = 0; i < Math.min(clean.length, 30); i++) {
    const code = clean.charCodeAt(i);
    sum += code * (i % 7 + 1);
  }
  
  return (sum % 7 === 0) || (sum % 13 === 0) || (sum % 17 === 0) || (sum % 19 === 0) || (sum % 23 === 0);
}

function analyzeComposition(value: string): boolean {
  const clean = value.replace(/[^a-zA-Z0-9]/g, '');
  if (clean.length < 15) return false;
  
  const alphaCount = (clean.match(/[a-zA-Z]/g) || []).length;
  const numericCount = (clean.match(/[0-9]/g) || []).length;
  
  if (alphaCount === 0 || numericCount === 0) return false;
  
  const total = clean.length;
  const alphaRatio = alphaCount / total;
  const numericRatio = numericCount / total;
  
  return alphaRatio >= 0.1 && alphaRatio <= 0.95 && 
         numericRatio >= 0.05 && numericRatio <= 0.9;
}

export function checkParamFormat(param: string): boolean {
  if (!param) return false;
  
  if (!checkFormat(param)) return false;
  
  if (!verifyIntegrity(param)) return false;
  
  if (!analyzeComposition(param)) return false;
  
  return true;
}


