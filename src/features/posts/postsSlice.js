import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'


const initialState = [
    { 
        id: '1', 
        title: 'First Post!', 
        content: 'Hello!',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },

    { 
        id: '2', 
        title: 'Second Post', 
        content: 'More text', 
        date: sub(new Date(), { minutes: 5 }).toISOString()
    }
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
            prepare(title, content, userId){
                return{
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId
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