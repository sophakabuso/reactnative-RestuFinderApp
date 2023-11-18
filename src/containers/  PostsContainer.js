import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import Posts from '../components/Posts';

const PostsContainer = ({ fetchPosts, posts }) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return <Posts posts={posts} />;
};

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);