import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface BookingState {
  tripType: "oneWay" | "roundTrip"
  serviceType: "outstation" | "local" | "airport"
  from: string
  to: string
  pickupDate: string
  returnDate: string
  pickupTime: string
}

const initialState: BookingState = {
  tripType: "oneWay",
  serviceType: "outstation",
  from: "",
  to: "",
  pickupDate: "",
  returnDate: "",
  pickupTime: "00:00",
}

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setTripType: (state, action: PayloadAction<"oneWay" | "roundTrip">) => {
      state.tripType = action.payload
    },
    setServiceType: (state, action: PayloadAction<"outstation" | "local" | "airport">) => {
      state.serviceType = action.payload
    },
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload
    },
    setPickupDate: (state, action: PayloadAction<string>) => {
      state.pickupDate = action.payload
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload
    },
    setPickupTime: (state, action: PayloadAction<string>) => {
      state.pickupTime = action.payload
    },
    swapLocations: (state) => {
      const temp = state.from
      state.from = state.to
      state.to = temp
    },
  },
})

export const {
  setTripType,
  setServiceType,
  setFrom,
  setTo,
  setPickupDate,
  setReturnDate,
  setPickupTime,
  swapLocations,
} = bookingSlice.actions

export default bookingSlice.reducer
