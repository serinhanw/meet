# Welcome to Meet

Meet is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city

## User Stories:

📚 As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.<br>
📚 As a user, I should be able to show/hide an event’s details, so that I can see more or less details about that event.<br>
📚As a user, I should be able to specify the number of events I want to view in the app so that I am given a list of more or fewer events at once.<br>
📚 As a user, I should be able to use the app when offline, so that I don’t need internet connection to see the upcoming events.<br>
📚 As a user, I should be able to add an app shortcut to my home screen, so that I can open my app quicker from my mobile device.<br>
📚 As a user, I should be able to see a chart showing the number of upcoming events by city, so that I can search through the upcoming events in that selected city.

### FEATURE 1: FILTER EVENTS BY CITY

📚 USER STORY: As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city

#### Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.

**Given** the user hasn’t searched for any city,<br>
**When** the user opens the app,<br>
**Then** the user should see a list of all upcoming events

#### Scenario 2: User should see a list of suggestions when they search for a city. 

**Given** the main page is open,<br>
**When** user starts typing in the city textbox,<br>
**Then** the user should see a list of cities (suggestions) that match what they’ve typed

#### Scenario 3: User can select a city from the suggested list.
**Given** the user was typing “Berlin” in the city textbox,<br>
And the list of suggested cities is showing,<br>
**When** the user selects a city (e.g., “Berlin, Germany”) from the list,<br>
**Then** their city should be changed to that city (i.e., “Berlin, Germany”),<br>
And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

📚 USER STORY: As a user, I should be able to show/hide an event’s details, so that I can see more or less details about that event.

#### Scenario 1: An event element is collapsed by default

**Given** the user didn’t open an event,<br> 
And a list of events is displayed on the page,<br>
**When** the user sees a list of events,<br>
**Then** the user can see the collapsed events by default

#### Scenario 2: User can expand an event to see its details

**Given** the user didn’t open an event,<br>
And a list of collapsed events is displayed on the page,<br>
**When** the user clicks and opens the selected event,<br>
**Then** the selected event element expands,<br>
And the user can see the details about that selected event

#### Scenario 3: User can collapse an event to hide its details

**Given** the user opened one event from the list to see the details,<br>
**When** the user clicks to close the details of that event element,<br>
**Then** the event element collapses,<br> 
And the details of that event are hidden 

### FEATURE 3: SPECIFY NUMBER OF EVENTS

📚 USER STORY: As a user, I should be able to specify the number of events I want to view in the app so that I am given a list of more or fewer events at once. 

#### Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user hasn’t specified a number of events to display,<br>
**When** the user searches,<br>
**Then** the user should be able to see 32 events on the events list

#### Scenario 2: User can change the number of events they want to see

**Given** the user didn’t change the number of events on the events list,<br>
**When** the user changes the number of the events,<br>
**Then** the user should be able to see the selected number of the events that they want to see

### FEATURE 4: USE THE APP WHEN OFFLINE

📚 USER STORY: As a user, I should be able to use the app when offline, so that I don’t need internet connection to see the upcoming events.

#### Scenario 1: Show cached data when there’s no internet connection

**Given** the user has no internet connection,<br>
**When** user uses the app without internet connection,<br>
**Then** the user should be able to see cached events

#### Scenario 2: Show error when user changes the settings (city, time range)

**Given** the user has no internet connection,<br>
**When** the user wants to begin a new search,<br>
**Then** the user should be able to see an error message from the app

### FEATURE 5: DATA VISUALIZATION

📚 USER STORY: As a user, I should be able to see a chart showing the number of upcoming events by city, so that I can search through the upcoming events in that selected city.

#### Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user is surfing on the application,<br>
And the chart page is open,<br>
**When** the user sees a list of cities,<br>
**Then** the user should be able to see a chart showing the number of upcoming events in each city