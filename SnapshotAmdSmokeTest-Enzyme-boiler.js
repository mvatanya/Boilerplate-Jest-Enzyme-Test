// Must have this file name with the component you want to test follow by .test.js in src folder for example --> my-tested-app/src/GoodComponent.test.js
// *** Before doing any Enzyme test, has to set up the Enzyme test by creatig setUpTest.js (boiler plate is in setUpTest.js)

import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import GoodComponent from "./GoodComponent";


// ***** SMOKE TEST WITH ENZYME *****

//smoke test tests --> Does the component render, or does it blow up (like a smoking box)?

/** smoke test - shallow
 - if GoodComponent has a child that is badComponent (that is failed smoke test) - shallow test with the parent(GoodComponent) will not care about the 
   bad child  and will let the test pass if the GoodComponent is good
 */

it("renders without crashing using shallow", function() {
  shallow(<GoodComponent />);
});

/** smoke test - mount
 - if GoodComponent has a child that is badComponent (that is failed smoke test) - mount test with both parent(GoodComponent), and child so it will fail this
   GoodComponent because it has a bad child
 */

it("renders without crashing using shallow", function() {
  mount(<GoodComponent />);
});


// ***** SNAPSHOT TEST WITH ENZYME *****

// snapshot test --> Does the component’s rendered HTML render in the way you expect?

it("matches snapshot", function() {
  let wrapper = shallow(<GoodComponent />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});


// Snapshot test with different props example; 

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dog from "./Dog";

it("renders without crashing", function() {
  shallow(<Dog name="Whiskey" isAdopted />);
  shallow(<Dog name="Tubby" />);
});

it("matches snapshot for adopted dogs", function() {
  let wrapper = shallow(<Dog name="Whiskey" isAdopted />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("matches snapshot for non-adopted dogs", function() {
  let wrapper = shallow(<Dog name="Tubby" />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});






/** NOTE: Every create-react-app comes with one smoke test for App.js using Jest 
 
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    it('renders without crashing', function() {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

  If using Enzyme it will look like this:

    import React from "react";
    import { shallow } from "enzyme";
    import App from "./App";

    it("renders without crashing", function() {
      shallow(<App />);
    });

*/