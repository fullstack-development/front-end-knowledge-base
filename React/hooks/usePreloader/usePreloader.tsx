import { useCallback, useState, useRef, useEffect } from 'react';

function useIsMounted(): React.MutableRefObject<boolean> {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

export type SetLoadingStatus<TError = string> = React.Dispatch<
  React.SetStateAction<{
    isPending: boolean;
    error: TError;
  }>
>;

function usePreloader<TError = string>(
  initialError: TError,
  initialIsPending = false,
): [boolean, TError, SetLoadingStatus<TError>] {
  const isMounted = useIsMounted();
  const [{ isPending, error }, setLoadingStatus] = useState<{ isPending: boolean; error: TError }>({
    isPending: initialIsPending,
    error: initialError,
  });
  const checkAndSetLoadingStatus: SetLoadingStatus<TError> = useCallback(
    (value) => {
      if (isMounted.current) setLoadingStatus(value);
    },
    [isMounted],
  );
  return [isPending, error, checkAndSetLoadingStatus];
}

export { usePreloader, useIsMounted };
