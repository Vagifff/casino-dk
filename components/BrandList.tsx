"use client"

import type { Partner, Gametype } from '@/lib/mockDev';
import BrandListClient from './BrandListClient';
import { useIsMobile } from "@/hooks/use-mobile"

interface BrandListProps {
  partners: Partner[];
  gametype: Gametype;
}

export default function BrandList({
  partners,
  gametype,
}: BrandListProps) {
  const isMobile = useIsMobile()
  const sortedPartners = [...partners].sort((a, b) => a.order - b.order);

  return (
    <BrandListClient
      partners={sortedPartners}
      isMobile={isMobile}
      gametype={gametype}
    />
  );
}

