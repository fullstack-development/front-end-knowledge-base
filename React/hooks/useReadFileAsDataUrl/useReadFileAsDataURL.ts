import { useEffect, useState } from 'react';

export const useReadFileAsDataURL = (file?: File | Blob) => {
  const [dataURL, setDataURL] = useState<string>();

  useEffect(() => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const { result } = fileReader;

      if (typeof result === 'string') setDataURL(result);
    };

    if (file) fileReader.readAsDataURL(file);
    else setDataURL(undefined);

    return () => {
      fileReader.onload = null;
    };
  }, [file]);

  return dataURL;
};
