import { create } from "zustand";
import { createPictogramSlice } from "./pictogramSlice";
import { createSelectionSlice } from "./selectionSlice";
import { PictogramState, SelectionState } from "../types/pictogramTypes";

export const usePictogramStore = create<PictogramState & SelectionState>()((...a) => ({
    ...createPictogramSlice(...a),
    ...createSelectionSlice(...a),
}));