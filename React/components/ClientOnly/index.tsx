import { FC, ReactNode } from 'react';

import { useIsSsr } from 'shared/context/useIsSsr';

export type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

export const ClientOnly: FC<Props> = ({ children, fallback = null }) => {
  const isSsr = useIsSsr();

  return <>{!isSsr ? children : fallback}</>;
};
