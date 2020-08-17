import React from "react";
import moxios from "moxios";

import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
        response: [{name: "Fetch 1"}, {name: "Fetch 2"} ],
        status: 200
    })
});

afterEach(() => {
    moxios.uninstall();
});

it (" can fetch a list of list of components and display them", (done) => {
    //Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the 'fetchcomments' button and click it
    wrapped.find(".fetch-comments").simulate("click");
    //Expect  to find a list of components
    moxios.wait(()=> {
        wrapped.update();
        expect (wrapped.find("li").length).toEqual(2);
        done();
        wrapped.unmount();
    });
    
});