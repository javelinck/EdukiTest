import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

interface SearchBarProps {
  searchText: string;
  handleSearch: () => void;
  setSearchText: (value: string) => void;
}

const SearchBar = ({
  searchText,
  handleSearch,
  setSearchText,
}: SearchBarProps) => (
  <View style={styles.wrapper}>
    <TextInput
      placeholder="Search..."
      value={searchText}
      onChangeText={text => setSearchText(text)}
      onEndEditing={handleSearch}
      style={styles.input}
    />
    <TouchableOpacity onPress={handleSearch} style={styles.button}>
      <Icon name="search" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

export {SearchBar};
