'use client';

import { useEffect, useState } from 'react';
import type { Partner, Gametype } from '@/lib/mockDev';
import BrandCard from './BrandCard';

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
  const [gclid, setGclid] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const gclidFromUrl = urlParams.get('gclid');
      if (gclidFromUrl) {
        setGclid(gclidFromUrl);
      }
    }
  }, []);

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
