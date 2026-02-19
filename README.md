# React.js User Directory with OpenStreetMap

## Live Demo
https://user-directory-inky.vercel.app/

## Overview

This project is a React.js User Directory application that integrates with a public API and OpenStreetMap.

The application fetches user data from a public API and displays:

- A searchable user list
- An interactive OpenStreetMap
- Dynamic markers based on user location
- Smooth animated map transitions
- Highlighted selected users

The goal of this project is to demonstrate strong understanding of React fundamentals, API integration, state management, search logic, OpenStreetMap customization, and clean UI implementation.

---

## Tech Stack

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- OpenStreetMap
- react-leaflet
- Basic CSS (Custom Styling)
- Fetch API

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/ajps208/user-directory
cd user-directory  

### 2. Install Dependencies

npm install  

### 3. Start Development Server

npm start  

The application will run at:

http://localhost:3000

---

## API Used

Public API:
https://jsonplaceholder.typicode.com/users

Fields used:
- name
- email
- address.city
- address.geo.lat
- address.geo.lng

---

## Application Features

### User List
- Displays user name, email, and city
- Scrollable list when content exceeds view
- Active user highlighting
- Click interaction syncs with map

### Search Functionality
- Case-insensitive search by user name
- Real-time filtering
- Displays meaningful empty state when no users match

### Map Integration
- Interactive OpenStreetMap
- Marker for each user location
- Marker click selects user
- Smooth animated flyTo transition
- Dynamic zoom when selecting a user
- Custom marker icon for active user

---

## Search Logic Explanation

Search is implemented using controlled input and React state.

The application maintains:
- `users` → Original data from API
- `filteredUsers` → Data displayed in UI
- `search` → Current search input value

When the search input changes:

1. A useEffect runs.
2. It filters users using:

user.name.toLowerCase().includes(search.toLowerCase())

3. The filtered result is stored in `filteredUsers`.
4. Both the user list and map markers depend on `filteredUsers`.

This ensures that the UI is updated dynamically based on the search input.

---

## OpenStreetMap Customizations Implemented

The map is built using react-leaflet.

The following enhancements were implemented:

### 1. Custom Marker Icons
- Default marker icon for regular users
- Red marker icon for selected (active) user

This provides clear visual feedback.

### 2. Dynamic Zoom on Selection
When a user is selected:
- The map zoom level increases automatically
- The selected location becomes the center

### 3. Smooth Fly Animation
Implemented using:

map.flyTo([latitude, longitude], zoomLevel, { duration: 1.5 })

This creates smooth animated transitions instead of abrupt jumps.

### 4. Active Marker Highlight
The selected user’s marker changes icon dynamically to indicate active state.

### 5. Two-Way Interaction
- Clicking a user card moves the map.
- Clicking a marker selects the user card.
- State remains synchronized across components.

---

## UI and UX Decisions

The UI was designed to be clean, minimal, and professional.

Implemented improvements:

- Scrollable user list
- Avatar initials for better identity recognition
- Hover animations for user cards
- Responsive layout (desktop and mobile)
- Proper loading state
- Proper error state
- Clear empty state message

The focus was clarity and usability over heavy design.

---

## State Management Approach

Used React built-in hooks:
- useState
- useEffect

No external state library was used to keep the implementation simple and aligned with assignment requirements.

---

## Assumptions

- API provides valid latitude and longitude
- Dataset is small (no pagination required)
- No authentication required

---

## Limitations

- Public mock API (no real backend)
- No persistent state after refresh
- No clustering (not needed for small dataset)

---

## Future Improvements

- Marker clustering for large datasets
- Dark mode toggle
- Debounced search
- Expandable user detail panel
- Unit testing (Jest + React Testing Library)
- TypeScript integration

---

## Git Strategy Used

- Feature-based branching
- Conventional commit messages
- Pull request based merging
- Clean and structured commit history
- Main branch kept stable

---

## Architectural Decisions

- Feature-based component separation
- Map isolated in its own component
- Controlled input for search
- No unnecessary external libraries
- Emphasis on readability and maintainability

---

## Conclusion

This project demonstrates:

- Strong React fundamentals  
- Clean API integration  
- Proper state management  
- OpenStreetMap customization  
- Structured Git workflow  

The focus was engineering quality, clarity, and maintainability rather than heavy UI styling.

---

Author  
Ajith P S  
Full Stack Developer  
