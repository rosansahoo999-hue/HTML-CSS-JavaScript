import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if(action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId
    );
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST, 
    );

    const addPost = () => { }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        })
    }

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }
        }>{children}</PostList.Provider>
    )
}

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'Hi Friends, I am going to Mumbai for my vactions. Hope to enjoy a lot. Peace out.',
        reaction: 2,
        userId: 'user-9',
        tags: ["Vacation", "Mumbai", "Enjoying"]
    },
    {
        id: '2',
        title: 'Pass ho bhai',
        body: '4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.',
        reaction: 15,
        userId: 'user-12',
        tags: ["Graduating", "Unbelievable"]
    }
]

export default PostListProvider;