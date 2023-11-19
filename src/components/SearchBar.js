import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={setSearchText}
                value={searchText}
                placeholder="Enter search text"
            />
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
};

export default SearchBar;
