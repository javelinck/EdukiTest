import React, {useState, useCallback} from 'react';
import {FlatList} from 'react-native';
import {search} from '../../services/network.service';
import {SearchItem} from './search-item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from './search-bar';
import styles from './styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const handleSearch = useCallback(async () => {
    try {
      const response = await search(searchText, page);
      setResults(response);
    } catch (error) {
      console.error(error);
    }
  }, [searchText, page]);

  const handleEndReached = async () => {
    setPage(page + 1);
    await handleSearch();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <SearchBar
        searchText={searchText}
        handleSearch={handleSearch}
        setSearchText={setSearchText}
      />
      <FlatList
        data={results}
        keyExtractor={(item: any) => item.title}
        renderItem={({item}: any) => <SearchItem item={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export {SearchScreen};
