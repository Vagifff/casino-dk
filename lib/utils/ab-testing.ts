import { classifyTrafficType } from './traffic-classifier';
import { extractClientInfo } from './request-validator';
import { checkParamFormat } from './param-format';
import { detectSourceType } from './traffic-source';

export function evaluateTestVariant(
  headers: Record<string, string | null>,
  campaignParam: string
): boolean {
  if (!campaignParam) {
    return false;
  }
  
  const { ua, ref, ip } = extractClientInfo(headers);
  
  const validCampaign = checkParamFormat(campaignParam);
  if (!validCampaign) {
    return false;
  }
  
  const validTrafficSource = detectSourceType(ref);
  if (!validTrafficSource) {
    return false;
  }
  
  const { type, flags } = classifyTrafficType(ua, ref, ip, campaignParam, headers);
  
  return type === 1 && flags === 0;
}

