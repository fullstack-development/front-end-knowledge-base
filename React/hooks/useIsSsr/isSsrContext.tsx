import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

function useCheckIsSsr() {
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    setIsSsr(false);
  }, []);

  return isSsr;
}

const IsSsrContext = createContext<boolean | undefined>(undefined);

function IsSsrProvider({ children }: { children: ReactNode }) {
  const isSsr = useCheckIsSsr();

  return <IsSsrContext.Provider value={isSsr}>{children}</IsSsrContext.Provider>;
}

function useIsSsr(): boolean {
  const isSsr = useContext(IsSsrContext);

  if (typeof isSsr === 'undefined')
    throw new Error('useIsSsr should be called inside IsSsrContext');

  return isSsr;
}

export { IsSsrProvider, useIsSsr };
