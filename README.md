## Front End Interview Challenge
## Set-up
Clone the repo locally. Inside the REPO there are 2 folders the src folder containing the frontend code. And the serve folder containing the code for the graph QL server.
To run the frontend run **_npm install_** followed by **_npm run dev_** in the root folder.

To run the server run _**node server.js**_ in the server directory.

## Objective:
Build a simple web application that fetches data from the SpaceX REST API, transforms it using a GraphQL layer with Apollo Client resolvers, and displays it. The application should demonstrate good state management practices and closely follow the design specifications.

## Requirements:
1.	Design Implementation:
•	Your task is to closely follow the task specifications and display the required information to your own design.
2.	Data Fetching:
•	Query the SpaceX REST API to retrieve the required data.
•	Use Apollo Client with resolvers to transform and manage this data using a GraphQL schema.
3.	State Management:
•	Implement appropriate state management to handle the fetched data and any UI states (loading, error, etc.).
4.	Data Display:
•	Display the data in the UI as specified in the Figma template.

## Technical Requirements:
•	React: Use React for building the UI components.
•	Apollo Client: Use Apollo Client to manage GraphQL queries and local resolvers.
•	GraphQL: Create a local GraphQL schema and use resolvers to fetch data from the SpaceX REST API.
•	State Management: if needed, you can use React's Context API, Redux, or any other state management library you are comfortable with.
•	CSS/SCSS: Use CSS or SCSS for styling. Ensure the styles match the Figma design closely.
•	Responsive Design: Ensure the application is responsive and works well on different screen sizes.
External API:
•	Use the following SpaceX REST API endpoint: https://api.spacexdata.com/v4/launches
•	https://api.spacexdata.com/v4/rockets
•	You will need to fetch and display a list of SpaceX launches. The details to display include:
•	Mission Name
•	Launch Date
•	Rocket Name
•	Launch Site
•	Mission Patch Image
## Tasks:
1.	Setup:
•	Initialize a new React project.
•	Install necessary dependencies (apollo-client, @apollo/react-hooks, graphql, axios or fetch, etc.).
2.	API Integration:
•	Set up Apollo Client in your React application.
•	Define a local GraphQL schema that represents the data you need to display.
•	Write resolvers that fetch data from the SpaceX REST API and resolve the data according to your schema.
3.	State Management:
•	Implement state management to handle the fetched data.
•	Store the data in a global state or appropriate local state as needed.
4.	Data Display:
•	Create components to display the fetched data.
•	Ensure the data is presented in a clean and user-friendly manner as per the briefing.
5.	Testing:
•	Ensure your application is functional and displays data correctly.
•	Verify the responsiveness of the design on different devices.
Submission:
•	Provide a link to a public repository (e.g., GitHub) containing your code.
•	Ensure the repository includes instructions on how to set up and run the project locally.
•	Optionally, deploy the application to a hosting service (e.g., Netlify, Vercel) and provide the link.
Evaluation Criteria:
•	Design Fidelity: How you have chosen to display the data.
•	Code Quality: Clean, readable, and maintainable code.
•	State Management: Effective and efficient state management practices.
•	Functionality: Correct implementation of API integration, GraphQL resolvers, and data display.
•	Responsiveness: Proper responsive design implementation.

## Task Details:
1.	Schema Definitions and Resolvers:
•	Define GraphQL schema types and corresponding resolvers to fetch data from the SpaceX API's launches and rockets endpoints.
•	Ensure that the schema includes necessary fields to query launch and rocket data.
2.	Dashboard Screen:
•	Display the six most recent launches on a dashboard screen.
•	Each launch should be represented as a card containing the launch title and an image.
3.	Launch Details:
•	Implement functionality to display specific details about a launch when the corresponding card is clicked.
•	Details should include launch date, mission name, launch site, rocket details, and any other relevant information.
- Feel free to use any external npm packages to display the data.

## Useful Documentation
Apollo Client
1.	Apollo Client Documentation
•	Getting Started: Apollo Client Getting Started
•	Setup: Apollo Client Setup
•	Queries: Executing Queries
•	Local State Management: Local State Management
GraphQL
1.	GraphQL Documentation
•	Introduction: GraphQL Introduction
•	Schema: GraphQL Schema
•	Queries and Mutations: Queries and Mutations
SpaceX API
1.	SpaceX REST API Documentation
•	Overview: SpaceX API Documentation
•	Launches Endpoint: Launches Endpoint
