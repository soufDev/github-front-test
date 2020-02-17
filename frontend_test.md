# Challenges Frontend

## Challenge description

Build a small app that displays some stats about a GitHub profile.

First make a small form to ask the user for a GitHub access token.
Then, using either the [Rest API](https://developer.github.com/v3/) or [GraphQL API](https://developer.github.com/v4/),
query data on the authenticated user and display it. The layout is yours to choose.

Example of data to display:

- Avatar
- name
- login
- bio
- number of repositories
- number of commits

- display 3 repositories of the user (bonus: the most starred repositories)
- display organizations the user is collaborating on.

Design for Desktop (1600px wide) first but responsiveness is a plus (350px wide).

## Requirements

All your react components should be written with hooks (except obviously an error handling component).

### Authorized Technologies

- React: latest-version
- Redux - Redux-saga: (not needed for the test but you can show us how you use these libraries).
- CSS-in-JS: We use styled-components at GitGuardian. You can use plain CSS if you feel more comfortable.
- latest CSS features (available on Chrome, Firefox and Safari) like flexbox and grid.
- Any 3rd party library that you deem production ready and useful for your app.

### Duration

- Between 1-4 hours.

### Output

- If you bootstrap a project from scratch (using create-react-app for example), version your work using git and deliver use a compressed archived of the project.
- You can also use a SaaS platform like [CodeSandbox](https://codesandbox.io/).

## Evaluation Criteria

From most to least important:

- The code is working as expected and the correct data is displayed
- The code is clean and easy to understand
- The components are reusable
- The design is responsive
- The code is loosely coupled (Separation of concerns, eg: data collection vs display)
