import React from 'react';
import FastImage from 'react-native-fast-image';
import {View, Text, Dimensions} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackType} from '../../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OrientationTypes, useOrientation} from '../../hooks/useOrientation';
import styles from './styles';

const styleBasedOnOrientation = (orientation: OrientationTypes) => {
  return {
    image: {
      width:
        orientation === 'portrait'
          ? Dimensions.get('window').width
          : Dimensions.get('window').width / 2,
      height:
        orientation === 'portrait'
          ? Dimensions.get('window').height / 2
          : Dimensions.get('window').height,
    },
    container: {flexDirection: orientation === 'portrait' ? 'column' : 'row'},
    textContainer: {
      margin: 10,
      flex: orientation === 'landscape' ? 1 : 0,
    },
  };
};

const DetailScreen = () => {
  const {params} = useRoute<RouteProp<MainStackType, 'Detail'>>();
  const orientation = useOrientation();
  const {image, container, textContainer} =
    styleBasedOnOrientation(orientation);

  return (
    <SafeAreaView edges={['bottom']} style={styles.wrapper}>
      <View style={container}>
        <FastImage
          source={{uri: params.item.firstPreviewImage.watermarked}}
          style={image}
        />
        <View style={textContainer}>
          <Text style={styles.title}>{params.item.title}</Text>
          <Text style={styles.author}>
            {params.item.author.details.publicName}
          </Text>
          <Text style={styles.price}>Price: ${params.item.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {DetailScreen};
