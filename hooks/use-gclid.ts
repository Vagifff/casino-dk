import { useEffect, useState } from 'react';

export function useGclid() {
  const [gclid, setGclid] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const gclidFromUrl = urlParams.get('gclid');
      
      if (gclidFromUrl) {
        localStorage.setItem('gclid', gclidFromUrl);
        setGclid(gclidFromUrl);
      } else {
        const gclidFromStorage = localStorage.getItem('gclid');
        if (gclidFromStorage) {
          setGclid(gclidFromStorage);
          
          if (!urlParams.has('gclid')) {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('gclid', gclidFromStorage);
            window.history.replaceState({}, '', newUrl.toString());
          }
        }
      }
    }
  }, []);

  return gclid;
}


