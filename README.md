# Yatri Cabs - One Way Intercity Taxi Services

A modern, fully responsive landing page for Yatri Cabs built with Next.js 16, Redux for state management, and vanilla CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Redux Toolkit
- **State Management**: Redux for booking form and application state
- **Responsive Design**: Fully responsive layout that works on all devices
- **Location Autocomplete**: Indian cities autocomplete for booking form
- **Vanilla CSS**: No UI libraries - all styling done with custom CSS
- **Component-Based**: Modular component architecture for easy maintenance

## Project Structure

\`\`\`
app/
├── components/         # React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── BookingForm.tsx
│   ├── WhyYatriSection.tsx
│   ├── PricingTable.tsx
│   ├── TestimonialsSection.tsx
│   ├── Footer.tsx
│   └── [other components]
├── store/             # Redux store configuration
│   ├── store.ts
│   ├── hooks.ts
│   └── slices/
│       └── bookingSlice.ts
├── globals.css        # Global styles
├── layout.tsx         # Root layout
├── page.tsx          # Home page
└── providers.tsx     # Redux provider wrapper
\`\`\`

## Getting Started

1. **Install Dependencies**
\`\`\`
npm install
\`\`\`

2. **Run Development Server**
\`\`\`
npm run dev
\`\`\`

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Redux State Management

The application uses Redux for managing the booking form state:

- **Trip Type**: One way or Round trip
- **Service Type**: Outstation, Local, or Airport
- **Locations**: From and To destinations with autocomplete
- **Dates**: Pickup and optional return date
- **Time**: Pickup time

## Styling

All components use CSS Modules for scoped styling. The design system includes:

- **Colors**: Green theme (#4a7c0f primary, #84cc16 accent)
- **Typography**: System fonts with responsive sizing
- **Layout**: Flexbox and CSS Grid for responsive layouts
- **Components**: Reusable button, card, and form styles

## Components

- **Header**: Navigation with logo, contact info, and user profile
- **HeroSection**: Main hero with background image and booking form
- **BookingForm**: Interactive form with Redux state management
- **WhyYatriSection**: Feature showcase with icons
- **PricingTable**: Car types and pricing information
- **TestimonialsSection**: Customer reviews
- **Footer**: Site navigation and copyright

## Future Enhancements

- Integration with real location API (LocationIQ or MapMyIndia)
- Backend API for booking submissions
- User authentication
- Payment gateway integration
- Real-time cab tracking

## License

All rights reserved by Yatri Cabs
