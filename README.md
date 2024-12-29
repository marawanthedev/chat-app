# Messaging Application

## Overview

This project is a messaging application built using React, TypeScript, Tailwind CSS, and React Query, with a focus on accessibility and smooth user interactions. The application has multiple pages including a Home page, Chat page, Loading state, and a Not Found page. The Home page allows users to view and interact with a list of conversations, and upon clicking on a conversation, the user is redirected to the Chat page where they can view messages and send new ones.

## Setup and Installation
- git clone https://github.com/marawanthedev/chat-app.git
- cd chat-app
- npm install
- npm start

# Linting
- npm run lint
- npm run lint:fix (to resolve fixable lintig problem, such as formatting)

# Testing
- npm run test

### Pages:
- **Home Page**: Displays a list of conversations for a user, along with filters, a floating footer, navigation, a no-conversation placeholder, and a search bar to filter the conversations.
- **Chat Page**: Displays messages for a specific conversation. Includes a header section with information about the other user, a messages section, and an input area to send new messages.
- **Loading Page**: Displays loading indicators when fetching data.
- **Not Found Page**: Displays when a user navigates to an invalid route.

## Features

### Home Page:
- **Conversation List**: Displays conversations for a user, each showing the most recent message, which can be text, audio, or a photo, with appropriate data presentation for each type.
- **Search Bar**: The search bar allows filtering conversations and is debounced to reduce load on the server. It uses React Query for fetching and caching data.
- **Filters**: Allows filtering of conversations based on different criteria.
- **Floating Footer**: Includes buttons for common actions at the bottom of the screen.
- **Navigation**: Provides easy navigation between pages.
- **No Conversation Placeholder**: Displays when no conversations are available.

### Chat Page:
- **Header**: Shows information about the other user in the conversation.
- **Messages Section**: Displays a list of messages, divided into those sent by the user (`self`) and those received from the other user (`other`).
- **Input Section**: Allows the user to send a message.
- **Three States for Sections**: Each section (messages, header, etc.) has three possible states:
  - Expected content.
  - Loading screen with dimensions of the section.
  - No data to display.

### Technical Features:
- **React Query**: Used to fetch data from the server and manage caching, reducing unnecessary network requests.
- **Debounced Search**: The search input on the Home page is debounced to reduce server load.
- **Error Boundary**: Wraps all routes and catches any errors, both synchronous and asynchronous, ensuring the app doesn't crash unexpectedly.
- **Z-index Manager**: Ensures proper stacking order for elements by defining layers to avoid random `z-index` values. Example:
  ```ts
  export const zIndex = {
    background: 1,
    content: 10,
    sticky: 20,
    modal: 30,
    dropdown: 40,
    toast: 50,
    floatingActionButton: 100,
  };

- **Transition Effects**: Smooth transitions for route changes and sections of the Chat page, ensuring a seamless user experience while navigating through different views.
- **Tailwind CSS**:  Used for styling the application. Tailwind CSS is a utility-first CSS framework, which allows for quick and efficient styling with a responsive and flexible design approach.
- **Unit Testing**:  Implemented with Vitest to ensure that all parts of the application work as expected. Unit tests help to identify issues early and ensure robust, error-free functionality
- **CI/CD Setup**: Continuous Integration and Continuous Deployment pipeline with linting, testing, and building setup to ensure the app is always in a deployable state. This ensures code quality and reliability across different environments.
- **Accessibility**: The app follows best practices for accessibility using ARIA labels and roles
