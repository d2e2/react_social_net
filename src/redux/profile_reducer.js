import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'i will be King!', like: '10' },
        { id: 2, message: 'politics evil', like: '2' }
    ],
    newPostText: 'kama.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
            }
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 3, message: newPost }]
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        // let userId = this.props.match.params.userId;
        // if (!userId) { userId = 24; }
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            });
    }
}


export default profileReducer;