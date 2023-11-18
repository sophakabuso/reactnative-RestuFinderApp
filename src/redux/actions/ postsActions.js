export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => 
                dispatch(fetchPostsSuccess(posts))
            )
            .catch(error => 
                dispatch(fetchPostsFailure(error))
            );
    };
};

const fetchPostsRequest = () => {
    return {
        type: 'FETCH_POSTS_REQUEST'
    };
};

const fetchPostsSuccess = posts => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    };
};

const fetchPostsFailure = error => {
    return {
        type: 'FETCH_POSTS_FAILURE',
        payload: error
    };
};