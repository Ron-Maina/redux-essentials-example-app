import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state,action){
                state.push(action.payload)
            },
            // worries about generating payload with the correct content and format
            prepare(title, content){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        // can write reducer function directly like below
        // postAdded(state, action){
        //     state.push(action.payload)
        // },
        // or like a key value pair
        // postAdded: (state, action) => {
        //     state.push(action.payload)
        // }
        postUpdated(state,action){
            // destructuring an object
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)

            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer