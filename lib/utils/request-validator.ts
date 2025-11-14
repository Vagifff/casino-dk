export function validateRequestHeaders(headers: Record<string, string | null>): boolean {
  const required = ['user-agent'];
  return required.every(key => headers[key] !== null && headers[key] !== undefined);
}

export function extractClientInfo(headers: Record<string, string | null>) {
  const ua = headers['user-agent']?.toLowerCase() || '';
  const ref = headers['referer'] || headers['referrer'] || '';
  const ip = headers['x-forwarded-for']?.split(',')[0]?.trim() || headers['x-real-ip'] || null;
  
  return { ua, ref, ip };
}


