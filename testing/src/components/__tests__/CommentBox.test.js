import React from "react";
import  { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
    wrapped = mount((
        <Root>
            <CommentBox />
        </Root>
        ));
});

afterEach(() => {
    wrapped.unmount(); 
})

it ("has a test area and a button", () => {
    expect(wrapped.find("button").length).toEqual(2);
    expect(wrapped.find("textarea").length).toEqual(1);
})

describe ("the text area", () => {
    let mockEvent;
    beforeEach (()=>{
        mockEvent = {
            target: {value: "new comment"},
            preventDefault : () => {}
        }
    })
    
    it ("has a text area that users can type in", () => {
        wrapped.find("textarea").simulate("change", mockEvent);
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });
    
    it ("should empty the text area when form gets submitted", () => {
        wrapped.find("form").simulate("submit", mockEvent);
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
})