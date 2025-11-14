import type { Partner, Gametype } from '@/lib/mockDev';
import BrandListClient from './BrandListClient';

interface BrandListProps {
  partners: Partner[];
  isMobile: boolean;
  gametype: Gametype;
  gclid: string;
  enableExtendedView?: boolean;
}

export default function BrandList({
  partners,
  isMobile,
  gametype,
  gclid,
  enableExtendedView = false,
}: BrandListProps) {
  const sortedPartners = [...partners].sort((a, b) => a.order - b.order);

  return (
    <BrandListClient
      partners={sortedPartners}
      isMobile={isMobile}
      gametype={gametype}
      gclid={gclid}
    />
  );
}

