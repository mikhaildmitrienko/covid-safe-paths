import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackHandler,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import fontFamily from '../constants/fonts';
import { Images } from '../assets';
import { NavigationBarWrapper } from '../components/NavigationBarWrapper';
import { Typography } from '../components/Typography';
import { useAssets } from '../TracingStrategyAssets';
import { NavigationProp } from '../navigation';

import { Colors } from '../styles';

type LicensesScreenProps = {
  navigation: NavigationProp;
};

const PRIVACY_POLICY_URL =
  'https://docs.google.com/document/d/17u0f8ni9S0D4w8RCUlMMqxAlXKJAd2oiYGP8NUwkINo/edit';

export const LicensesScreen = ({
  navigation,
}: LicensesScreenProps): JSX.Element => {
  const { t } = useTranslation();
  const { legalHeader } = useAssets();

  const legalHeaderText: string = legalHeader as string;

  const backToMain = () => {
    navigation.goBack();
  };

  const handleBackPress = () => {
    backToMain();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const infoAddress = 'info@pathcheck.org';
  const pathCheckAddress = 'covidsafepaths.org';

  const handleOnPressOpenUrl = (url: string) => {
    return () => Linking.openURL(url);
  };

  return (
    <NavigationBarWrapper
      title={t('screen_titles.legal')}
      onBackPress={backToMain}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Typography style={styles.heading} use='headline2'>
            {legalHeaderText}
          </Typography>
          <Typography style={styles.body} use='body1'>
            {t('label.legal_page_address')}
          </Typography>
          <TouchableOpacity
            onPress={handleOnPressOpenUrl('mailto:info@pathcheck.org')}>
            <Typography style={styles.hyperlink}>{infoAddress}</Typography>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOnPressOpenUrl('covidsafepaths.org')}>
            <Typography style={styles.hyperlink}>{pathCheckAddress}</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.termsInfoRow}
        onPress={handleOnPressOpenUrl(PRIVACY_POLICY_URL)}>
        <Typography use='body1'>{t('label.privacy_policy')}</Typography>
        <View style={styles.arrowContainer}>
          <Image source={Images.ForeArrow} />
        </View>
      </TouchableOpacity>
    </NavigationBarWrapper>
  );
};

const styles = StyleSheet.create({
  body: {
    color: Colors.black,
    marginBottom: 24,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: Colors.primaryBackgroundFaintShade,
    paddingHorizontal: 26,
    paddingVertical: 40,
  },
  heading: {
    color: Colors.black,
    marginBottom: 12,
  },
  hyperlink: {
    color: Colors.violetText,
    fontSize: 16,
    marginBottom: 12,
    fontFamily: fontFamily.primaryRegular,
    textDecorationLine: 'underline',
  },
  termsInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryViolet,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  arrowContainer: {
    alignSelf: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
});
