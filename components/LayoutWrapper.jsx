'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Loading2 from './Loading2';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
  }, [pathname]);

if (loading) {
    return <Loading2 />;
  }


  return (
    <>
      {children}
    </>
  );
}