import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  View,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Icons, Images } from '../../../assets';
import { Typography } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import { Theme } from '../../../constants/themes';
import { styles } from '../style';
import { Asset } from '../../../TracingStrategyAssets';

export interface ServiceOffScreenProps {
  header: Asset;
  subheader: Asset;
  button?: {
    label: Asset;
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };
}

export const ServiceOffScreen = ({
  header,
  subheader,
  button,
}: ServiceOffScreenProps): JSX.Element => {
  const size = Dimensions.get('window').height;

  const subheaderText: string = subheader as string;

  return (
    <Theme use='violet'>
      <ImageBackground
        source={Images.LaunchScreenBackground}
        style={styles.backgroundImage}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <View style={styles.pulseContainer}>
          <SvgXml
            xml={Icons.StateUnknown}
            width={size ? size : 80}
            height={size ? size : 80}
          />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.contentAbovePulse} />
          <View style={styles.contentBelowPulse}>
            <Text style={styles.mainTextBelow}>{header}</Text>
            <Typography style={styles.subheaderText}>
              {subheaderText}
            </Typography>
            {button && (
              <Button
                label={button.label}
                onPress={button.onPress}
                style={styles.buttonContainer}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </Theme>
  );
};
