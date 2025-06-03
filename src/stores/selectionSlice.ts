import { StateCreator } from "zustand";
import { PictogramState, SelectionState } from "../types/pictogramTypes";

export const createSelectionSlice: StateCreator<
    PictogramState & SelectionState, // Combinación con otros slices
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

            // Si no hay seleccionados, desactiva el modo selección
            return {
                selectedIds: newSelectedIds,
                isSelecting: newSelectedIds.length > 0, // <- Aquí está la magia
            };
        }),
    startSelecting: () => set({ isSelecting: true }),
    clearSelection: () => set({ isSelecting: false, selectedIds: [] }),
});