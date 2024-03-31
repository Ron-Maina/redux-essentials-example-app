import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // can write reducer function directly like below
        postAdded(state, action){
            state.push(action.payload)
        }
        // or like a key value pair
        // postAdded: (state, action) => {
        //     state.push(action.payload)
        // }
    }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer