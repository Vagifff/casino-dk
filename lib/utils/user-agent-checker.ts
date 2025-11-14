export function isLegitimateBrowser(ua: string | null): boolean {
  if (!ua) return false;
  
  const u = ua.toLowerCase();
  
  const browsers = ['chrome', 'firefox', 'safari', 'edge', 'opera'];
  const hasBrowser = browsers.some(b => u.includes(b));
  
  if (!hasBrowser) return false;
  
  const botPatterns = ['bot', 'crawler', 'spider', 'scraper'];
  const isBot = botPatterns.some(p => u.includes(p) && !u.includes('mobile'));
  
  return !isBot;
}

export function hasStandardHeaders(headers: Record<string, string | null>): boolean {
  const required = ['accept', 'accept-language'];
  return required.every(key => headers[key] !== null && headers[key] !== undefined);
}


