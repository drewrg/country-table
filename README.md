# country-table
Design and develop a cutting-edge application using ReactJS that effectively loads a list of countries from a specified API endpoint. The app must display the retrieved country data in a sleek and well-organized table format.

Running an Existing React TypeScript Project with Vite
======================================================

If you have already generated a React TypeScript project using Vite, you can follow these steps to run and build the project:

Step 1: Install Dependencies
----------------------------

Make sure that all the dependencies required by the project are installed. Navigate to the project directory in your terminal and run the following command:

`npm install`

This will install all the required dependencies listed in your `package.json` file.

Step 2: Start the Development Server
------------------------------------

To start the development server, run the following command:


`npm run dev`

This will start the Vite development server and launch the app in your default browser. The app should automatically reload whenever you make changes to the code.

Step 3: Build for Production
----------------------------

When you're ready to build the app for production, run the following command:

`npm run build`

This will create an optimized build of your app in the `dist` folder.

Step 4: Serve the Production Build
----------------------------------

To serve the production build, run the following command:

`npm run serve`

This will start a production server that serves the files from your `dist` folder.

Conclusion
----------

These are the basic steps to run and build a React TypeScript project generated with Vite. You can also customize the Vite configuration in the `vite.config.ts` file located in the root directory of your project.



# Requirements.
-------------


Web Developer Technical Task

Summary

Build SPA (single-page application) web application named "World Countries Desk". Use

https://restcountries.com/v3.1/all public API for fetching data. The application should display

all countries with the ability to see more details, search in the list and apply filters.

Functional Requirements

- The app should have fixed header

- The header should contain:

o Search box to search for country common/native name and capital name

o The following drop-down lists for filters (data collected from API)

- Filter by regions and sub-regions (sub-regions applies when region is

selected)

- Filter by time-zone

- Filter by language

- Filter by currency

o Toggle button "is independent"

o "Clear Filter" button

- App body should contain the data table that represents countries using pagination.

Table should have the following columns:

o Flag

o Country Name

o Capital Name

o Region

o Sub-region

o Language

o Currency with symbol

o Independent (Yes/No)

o Area (sq/km)

- Click on table row should open popup to display more detailed information about

selected country

- Columns should be sortable (ascending/descending)

Technical Requirements

- Use TypeScript and ReactJS as main library

- Use dependency (package) management tool like npm or yarn

- Create a Readme.md file to explain how to run and use app

- Demonstrate of basic knowledge of ReactJS (Hooks, Common Components, Redux etc.)

- Provide unit tests on few components

- Commit and push code to GitHub public repository

Additional:

- Deploy web application on remote server (AWS cloud S3 static hosting, Apache Server

etc.)

- Support of screen breakpoints (adaptive and responsive UI, mobile view for table)

- User friendly design (bootstrap, Material UI etc.)
