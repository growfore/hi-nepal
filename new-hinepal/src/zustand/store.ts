import { TSiteInformation } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export default useSiteStore;
