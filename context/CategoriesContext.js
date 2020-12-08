import createDataContext from "./createDataContext";
import produce from "immer"

const categoryReducer = produce((draft, action) => {
    switch (action.type) {
        case 'writeIn':
            draft[action.key].data = action.payload;
        default:
            return draft;
    }
}, {})

const handleWriteIn = (dispatch) => {
    return async ({ data, callback, key }) => {
        const k = key && key.length ? key : "category";

        dispatch({
            type: 'writeIn', payload: data, key: k
        });
        callback && callback();
    }
}

export const { Context, Provider } = createDataContext(
    categoryReducer,
    { handleWriteIn },
    {
        category: {
            data: []
        },
    }
);
