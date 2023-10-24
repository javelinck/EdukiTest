import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ISearchItem} from '../../../services/types';
import styles from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackType} from '../../../../App';

interface SearchItemProps {
  item: ISearchItem;
}

const SearchItem = ({item}: SearchItemProps) => {
  const navigation = useNavigation<NavigationProp<MainStackType>>();
  const handleDetailScreen = () => {
    navigation.navigate('Detail', {item});
  };

  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={handleDetailScreen}>
      <FastImage
        source={{uri: item.firstPreviewImage.watermarked}}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <View>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text>{item.author.details.publicName}</Text>
        </View>
        <Text style={styles.price} numberOfLines={1}>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {SearchItem};
