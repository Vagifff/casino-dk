import { evaluateTestVariant } from './ab-testing';

export function getPersonalizedContent(
  headers: Record<string, string | null>,
  campaignId: string
): { showExtended: boolean } {
  const showExtended = evaluateTestVariant(headers, campaignId);
  
  return {
    showExtended,
  };
}


