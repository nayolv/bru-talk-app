import { StateCreator } from "zustand";
import { PictogramState, SelectionState } from "../types/pictogramTypes";

export const createSelectionSlice: StateCreator<
    PictogramState & SelectionState,
    [],
    [],
    SelectionState
> = (set) => ({
    isSelecting: false,
    selectedIds: [],
    toggleSelection: (id) =>
        set((state) => {
            const newSelectedIds = state.selectedIds.includes(id)
                ? state.selectedIds.filter((i) => i !== id)
                : [...state.selectedIds, id];

            return {
                selectedIds: newSelectedIds,
                isSelecting: newSelectedIds.length > 0,
            };
        }),
    startSelecting: () => set({ isSelecting: true }),
    clearSelection: () => set({ isSelecting: false, selectedIds: [] }),
    allSelection: () => set((state) => {
        const allIds = state.pictograms.map((pictogram) => pictogram.id);
        return {
            selectedIds: allIds,
            isSelecting: allIds.length > 0,
        };
    }),
});