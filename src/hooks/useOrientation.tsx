import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export enum OrientationTypes {
  portrait = 'portrait',
  landscape = 'landscape',
}
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export function useOrientation() {
  const [orientation, setOrientation] = useState<OrientationTypes>(
    isPortrait() ? OrientationTypes.portrait : OrientationTypes.landscape,
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(
        isPortrait() ? OrientationTypes.portrait : OrientationTypes.landscape,
      );

    Dimensions.addEventListener('change', callback);
  }, []);

  return orientation;
}
