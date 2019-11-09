# Boilerplate-Jest-Enzyme-Test
Boiler plate for Jest and Enzyme testing in create-react-app

##CRA Testing

###Built-in Test support
  - CRA comes with some built-in test configuration using Jest
  - You can test your app with ```npm test```
  - Jest looks for files matching *.test.js, or files in a __tests__ folder

###Type of Test

####Smoke Test 
  - Check if the component render without crashing
  - Every app created with create-react-app comes with one smoke test for App.js
  - To run test -- ```$ jest App.test.js```
####Snapshot Tests
  - Check if the component's rendered HTML render in the way you expect

###Smoke Tests with Enzyme

####Enzyme

 - Enzyme is popular testing add-on for React
 - Allows us to test React components in isolation
 - Provides “jQuery-like” API for checking results of component rendering

####Enzyme Setup
```
  $ npm i --save-dev enzyme enzyme-adapter-react-16 \enzyme-to-json

```

- Also must add file setUpTest.js to setup Enzyme Test -- use boiler plate from setUpTest.js
- To run Enzyme test -- ``` $ npm test ComponentFileName.test.js ```
- If your component is update the snapshot will faile so press ```u``` after run ``` $ npm test ComponentFileName.test.js ``` to update the snapshot test
