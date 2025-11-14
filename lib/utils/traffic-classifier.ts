import { checkNetworkRange } from './ip-utils';
import { isLegitimateBrowser, hasStandardHeaders } from './user-agent-checker';

export function classifyTrafficType(
  ua: string,
  ref: string,
  ip: string | null,
  trackingId: string,
  headers: Record<string, string | null>
): { type: number; flags: number } {
  let type = 0;
  let flags = 0;
  
  const validBrowser = isLegitimateBrowser(ua);
  const validHeaders = hasStandardHeaders(headers);
  
  if (validBrowser && validHeaders) {
    type = 1;
  }
  
  const botChecks = [
    !validBrowser,
    !validHeaders,
    checkNetworkRange(ip) && !ref && !trackingId,
    checkNetworkRange(ip) && !headers['cookie'] && !trackingId,
  ];
  
  const botScore = botChecks.filter(Boolean).length;
  if (botScore >= 2) {
    flags = 1;
  }
  
  return { type, flags };
}

