import { TPackageDetails, TSiteInformation } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PopularPackagesState = {
  treks: TPackageDetails[];
  tours: TPackageDetails[];
  setTreks: (packages: TPackageDetails[]) => void;
  setTours: (packages: TPackageDetails[]) => void;
  clear: () => void;
};

const useSiteStore = create(
  persist(
    (set) => ({
      information: {},
      setSiteInformation: (info: TSiteInformation) =>
        set({ information: info }),
    }), {
    name: 'site-information',
  }
  )
);

export const usePopularPackages = create<PopularPackagesState>()(
  persist(
    (set) => ({
      treks: [],
      tours: [],
      setTreks: (packages) => set({ treks: packages }),
      setTours: (packages) => set({ tours: packages }),
      clear: () => set({ treks: [], tours: [] }),
    }),
    {
      name: "popular-packages", 
    }
  )
);

export default useSiteStore;
