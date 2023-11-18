import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../state/actions';

class RestaurantList extends React.Component {
    componentDidMount() {
        // Dispatch an action to fetch the restaurants
        this.props.fetchRestaurants();
    }

    render() {
        const { restaurants, loading, error } = this.props;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                <h1>Restaurant List</h1>
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>{restaurant.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
