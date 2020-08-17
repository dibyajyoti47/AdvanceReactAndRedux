import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it ("should handle actions of the SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New Comment"
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual(["New Comment"]);
})

it ("should handle unknown action types", () => {
    const action = { type: "sasa"};
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
})