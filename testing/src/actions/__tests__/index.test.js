import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe ("saveComment", () => {
    it ("has the correct type", () => {
        const action = saveComment();
        expect (action.type).toEqual("save_comment");
    });

    it ("has the correct payload", () => {
        const action = saveComment("comment test");
        expect (action.payload).toEqual("comment test");
    });
})