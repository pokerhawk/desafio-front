import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { handleGetSale, handleGetSaleStatus, handleSetSale, handleSetSaleStatus } from "./usePersistData";

export type SaleContextType = {
  sale?: any;
  setSale: (sale: any) => void;
  saleStatus?: any;
  setSaleStatus: (saleStatus: any) => void;
};

export type SaleProviderProps = {
  children: ReactNode;
};

export const SaleContext = createContext<SaleContextType>(
  {} as SaleContextType
);

export function SaleProvider({ children }: SaleProviderProps) {
  const [sale, setStateSale] = useState<any | undefined>(() => handleGetSale());
  const [saleStatus, setStateSaleStatus] = useState<any | undefined>(() => handleGetSaleStatus());

  const setSaleStatus = (saleStatus: any | undefined) => {
    setStateSaleStatus(saleStatus);

    if (saleStatus) {
      handleSetSaleStatus(saleStatus);
    }
  }

  const setSale = (sale: any | undefined) => {
    setStateSale(sale);

    if (sale) {
      handleSetSale(sale);
    }
  }

  const value = useMemo(() => {
    return {
      sale,
      setSale,
      saleStatus,
      setSaleStatus,
    };
  }, [sale, setSale, saleStatus, setSaleStatus]);

  return <SaleContext.Provider value={value}>{children}</SaleContext.Provider>;
}

export const useSale = () => {
  const context = useContext(SaleContext);

  return context;
};
