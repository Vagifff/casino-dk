'use client';

import type { Partner, Gametype } from '@/lib/mockDev';
import BrandCard from './BrandCard';
import { useGclid } from '@/hooks/use-gclid';

interface BrandListClientProps {
  partners: Partner[];
  isMobile: boolean;
  gametype: Gametype;
}

export default function BrandListClient({
  partners,
  isMobile,
  gametype,
}: BrandListClientProps) {
  const gclid = useGclid();

  return (
    <section className='pt-1 pb-8 md:pt-6 md:pb-16 px-4 bg-[#0B0C10]'>
      <div className='container mx-auto max-w-6xl'>
        <div className='space-y-2 md:space-y-6'>
          {partners.map((partner, index) => (
            <BrandCard
              key={partner.id}
              partner={partner}
              gclid={gclid}
              isMobile={isMobile}
              showPopularBadge={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
