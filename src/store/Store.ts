// src/store/Store.ts
import { configureStore } from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice";
import StaffSlice from "../reducers/StaffSlice";
import CropSlice from "../reducers/CropSlice";
import EquipmentSlice from "../reducers/EquipmentSlice";
import FieldSlice from "../reducers/FieldSlice";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
        field: FieldSlice,
    }
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;