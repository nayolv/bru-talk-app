import { create } from "zustand";
import { createPictogramSlice } from "./pictogramSlice";
import { createSelectionSlice } from "./selectionSlice";
import { createCategorySlice } from "./categorySlice";
import { CategoryState, PictogramState, SelectionState } from "../types/pictogramTypes";

export const usePictogramStore = create<
    PictogramState & SelectionState & CategoryState
>()((...a) => ({
    ...createPictogramSlice(...a),
    ...createSelectionSlice(...a),
    ...createCategorySlice(...a),
}));