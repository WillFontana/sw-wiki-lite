import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EraType = "prequels" | "classic";

interface EraState {
  selectedEra: EraType;
}

const initialState: EraState = {
  selectedEra: "prequels",
};

const eraSlice = createSlice({
  name: "era",
  initialState,
  reducers: {
    setEra: (state, action: PayloadAction<EraType>) => {
      state.selectedEra = action.payload;
    },
  },
});

export const { setEra } = eraSlice.actions;
export default eraSlice.reducer;
