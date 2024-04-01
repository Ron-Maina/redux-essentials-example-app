import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch()

    // Object.entries converts the reactionEmoji object into an array of its key-value pairs, 
    // where each key-value pair is represented as an array with two elements: 
    // the key and the corresponding value. 
    // For example, if reactionEmoji is { 'thumbsUp': '👍', 'heart': '❤️', 'laugh': '😂' }, 
    // Object.entries(reactionEmoji) would result in [ ['thumbsUp', '👍'], ['heart', '❤️'], ['laugh', '😂'] ].

    // ([name, emoji]): This syntax represents destructuring of each array element obtained from Object.entries(reactionEmoji). 
    // It means that for each key-value pair in the array, the first element (name) will be assigned the value of the key, 
    // and the second element (emoji) will be assigned the value of the corresponding value.
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button 
                key={name} 
                type="button" 
                className="muted-button reaction-button"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}