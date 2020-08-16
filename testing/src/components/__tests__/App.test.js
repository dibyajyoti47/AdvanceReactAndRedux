import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

//using absolute path for imports, not relative.
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let appComponent;

beforeEach(() => {
    appComponent = shallow (<App />);
});

//enzyme way
it("shows a comment box", () => {    
    expect (appComponent.find(CommentBox).length).toEqual(1);
})

it("shows a comment list", () => {
    expect (appComponent.find(CommentList).length).toEqual(1);
})
///////////////////////////////

//vanila way..
/*
it ("shows a comment box - vanilla way", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain("Comment Box");
    ReactDOM.unmountComponentAtNode(div);   //clean up
});

*/