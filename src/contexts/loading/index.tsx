import React, { createContext, useContext, useState } from 'react';

interface Loading {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const LoadingContext = createContext<Loading>({} as Loading);

interface Props {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};
