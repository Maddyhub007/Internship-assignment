"use client"

import type React from "react"

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {
  setTripType,
  setServiceType,
  setFrom,
  setTo,
  setPickupDate,
  setReturnDate,
  setPickupTime,
  swapLocations,
} from "../store/slices/bookingSlice"
import styles from "./BookingForm.module.css"

interface LocationSuggestion {
  display_name: string
  lat: string
  lon: string
}

export default function BookingForm() {
  const dispatch = useAppDispatch()
  const booking = useAppSelector((state) => state.booking)

  const [fromSuggestions, setFromSuggestions] = useState<LocationSuggestion[]>([])
  const [toSuggestions, setToSuggestions] = useState<LocationSuggestion[]>([])
  const [showFromSuggestions, setShowFromSuggestions] = useState(false)
  const [showToSuggestions, setShowToSuggestions] = useState(false)

  const indianCities = [
    "Lucknow",
    "Ayodhya",
    "Gorakhpur",
    "Varanasi",
    "Allahabad (Prayagraj)",
    "Kanpur",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Agra",
    "Noida",
    "Gurgaon",
  ]

  const fetchLocationSuggestions = async (query: string): Promise<LocationSuggestion[]> => {
    if (query.length < 2) return []

    // Filter Indian cities for demo purposes
    const filtered = indianCities
      .filter((city) => city.toLowerCase().includes(query.toLowerCase()))
      .map((city) => ({
        display_name: city + ", India",
        lat: "0",
        lon: "0",
      }))

    return filtered
  }

  const handleFromChange = async (value: string) => {
    dispatch(setFrom(value))
    const suggestions = await fetchLocationSuggestions(value)
    setFromSuggestions(suggestions)
    setShowFromSuggestions(true)
  }

  const handleToChange = async (value: string) => {
    dispatch(setTo(value))
    const suggestions = await fetchLocationSuggestions(value)
    setToSuggestions(suggestions)
    setShowToSuggestions(true)
  }

  const handleSwap = () => {
    dispatch(swapLocations())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", booking)
    alert("Exploring cabs for your journey!")
  }

  return (
    <div className={styles.bookingCard}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${booking.serviceType === "outstation" ? styles.tabActive : ""}`}
          onClick={() => dispatch(setServiceType("outstation"))}
        >
          Outstation
        </button>
        <button
          className={`${styles.tab} ${booking.serviceType === "local" ? styles.tabActive : ""}`}
          onClick={() => dispatch(setServiceType("local"))}
        >
          Local
        </button>
        <button
          className={`${styles.tab} ${booking.serviceType === "airport" ? styles.tabActive : ""}`}
          onClick={() => dispatch(setServiceType("airport"))}
        >
          Airport
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.tripTypeToggle}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${booking.tripType === "oneWay" ? styles.toggleActive : ""}`}
            onClick={() => dispatch(setTripType("oneWay"))}
          >
            One Way
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${booking.tripType === "roundTrip" ? styles.toggleActive : ""}`}
            onClick={() => dispatch(setTripType("roundTrip"))}
          >
            Round Trip
          </button>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.locationInputs}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>FROM</label>
              <div className={styles.autocompleteWrapper}>
                <input
                  type="text"
                  placeholder="Input Text"
                  value={booking.from}
                  onChange={(e) => handleFromChange(e.target.value)}
                  onFocus={() => setShowFromSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                  className={styles.input}
                />
                {showFromSuggestions && fromSuggestions.length > 0 && (
                  <ul className={styles.suggestions}>
                    {fromSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          dispatch(setFrom(suggestion.display_name))
                          setShowFromSuggestions(false)
                        }}
                        className={styles.suggestionItem}
                      >
                        {suggestion.display_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button type="button" className={styles.swapBtn} onClick={handleSwap} title="Swap locations">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 4L7 16M7 16L4 13M7 16L10 13M13 16L13 4M13 4L10 7M13 4L16 7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className={styles.inputGroup}>
              <label className={styles.label}>TO</label>
              <div className={styles.autocompleteWrapper}>
                <input
                  type="text"
                  placeholder="Input Text"
                  value={booking.to}
                  onChange={(e) => handleToChange(e.target.value)}
                  onFocus={() => setShowToSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                  className={styles.input}
                />
                {showToSuggestions && toSuggestions.length > 0 && (
                  <ul className={styles.suggestions}>
                    {toSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          dispatch(setTo(suggestion.display_name))
                          setShowToSuggestions(false)
                        }}
                        className={styles.suggestionItem}
                      >
                        {suggestion.display_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Pickup Date</label>
            <input
              type="date"
              value={booking.pickupDate}
              onChange={(e) => dispatch(setPickupDate(e.target.value))}
              className={styles.input}
            />
          </div>

          {booking.tripType === "roundTrip" && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Return Date</label>
              <input
                type="date"
                value={booking.returnDate}
                onChange={(e) => dispatch(setReturnDate(e.target.value))}
                className={styles.input}
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>Pickup Time</label>
            <input
              type="time"
              value={booking.pickupTime}
              onChange={(e) => dispatch(setPickupTime(e.target.value))}
              className={styles.input}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          EXPLORE CABS
        </button>
      </form>
    </div>
  )
}
