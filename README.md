# React test

Further considerations with more time
- Improve test coverage
- Implement react-router for navigation
- Implement with TypeScript for type safety & Interfaces, this will reduce errors and make the code easier to read
- Improve design to match spec from design team, improve responsiveness for mobile / tablets
- Implement debug mode / logging / improved error handling
- If the app was going to scale, extract Http service for network calls, structure files in subfolders
- Learn more about React

Retrospective comments after time
- The search form should be refactored into more reusable components - ie extract the pagination into its own component (single responsibility)
- Further validation on the user input and URI encode the string before fetching data from the API
- Store previous searches in state, same for search input field, would be more a React way of doing things
- For back button handling, a nicer solution would be to use a React class component and use the lifecycle method `componentWillUnmount` to call the API with the previous query


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
