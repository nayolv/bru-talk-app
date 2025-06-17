import { StateCreator } from "zustand";
import { DEFAULT_CATEGORY, Pictogram, PictogramState, SelectionState } from "../types/pictogramTypes";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: Pictogram[] = [
    { id: '1', label: 'Agua', categories: [DEFAULT_CATEGORY] },
    { id: '2', label: 'Comida', categories: [DEFAULT_CATEGORY] },
    { id: '3', label: 'Baño', categories: [DEFAULT_CATEGORY] },
    { id: '4', label: 'Dormir', categories: [DEFAULT_CATEGORY] },
]

type PersistedPictogramState = {
    pictograms: Pictogram[];
};
const persistOptions: PersistOptions<PictogramState, PersistedPictogramState> = {
    name: 'pictograms-slice-storage',
    storage: createJSONStorage<PersistedPictogramState>(() => AsyncStorage),
    partialize: (state) => ({ pictograms: state.pictograms }),
};

export const createPictogramSlice: StateCreator<
    PictogramState & SelectionState,
    [],
    [['zustand/persist', PersistedPictogramState]],
    PictogramState
> = persist(
    (set) => ({
        pictograms: initialState,
        addPicto: (picto) =>
            set((state) => ({ pictograms: [...state.pictograms, picto] })),
        updatePicto: (updatedPicto) =>
            set((state) => ({
                pictograms: state.pictograms.map((p) =>
                    p.id === updatedPicto.id ? { ...p, ...updatedPicto } : p
                ),
            })),
        deletePictograms: (ids) =>
            set((state) => ({
                pictograms: state.pictograms.filter((p) => !ids.includes(p.id)),
            })),
        reorderPictograms: (newOrder) =>
            set(() => ({ pictograms: newOrder })),
    }),
    persistOptions
);