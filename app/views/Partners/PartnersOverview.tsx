import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
  Switch,
  Dimensions,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { Images, Icons } from '../../assets';
import { NavigationBarWrapper } from '../../components/NavigationBarWrapper';
import { Typography } from '../../components/Typography';
import Colors from '../../constants/colors';

import { SvgXml } from 'react-native-svg';
import colors from '../../constants/colors';

// For fixing image width issues
const win = Dimensions.get('window');

type PartnersScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const PartnersScreen = ({ navigation }: PartnersScreenProps): JSX.Element => {
  const { t } = useTranslation();
  const [toggleActive, setToggleActive] = useState(false); // mocked
  const navigateToViewHAs = () => navigation.navigate('PartnersEdit');

  return (
    <NavigationBarWrapper
      title={t('authorities.title')}
      includeBackButton={false}
      onBackPress={() => {}}>
      <ScrollView
        style={styles.backgroundWrapper}
        alwaysBounceVertical={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          // Hard code to the dimensions of the image. Fixes ScrollView issues
          style={{ width: win.width, height: (win.width * 900) / 1125 }}
          resizeMode={'contain'}
          source={Images.Doctors}
        />
        <View style={{ height: 20 }} />
        <View style={styles.horizontalPadding}>
          <Typography use={'headline2'}>{t('authorities.title')}</Typography>
          <View style={{ height: 8 }} />
          <Typography use={'body1'}>{t('authorities.info_body')}</Typography>
        </View>
        <View style={{ height: 20 }} />
        {/* Outside horizontal padding so touchable is full width */}
        <View style={styles.divider} />
        <TouchableHighlight
          underlayColor={Colors.UNDERLAY}
          onPress={navigateToViewHAs}>
          <View
            style={[
              styles.horizontalPadding,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20,
              },
            ]}>
            <Typography use={'body1'} style={{ fontWeight: '500' }}>
              {t('authorities.view_button_label')}
            </Typography>
            <SvgXml xml={Icons.ChevronRight} height={20} />
          </View>
        </TouchableHighlight>
        <View style={[styles.divider, { marginHorizontal: 24 }]} />
      </ScrollView>
      <View style={styles.bottomSheet}>
        <Typography
          style={{
            // Prevent from forcing overflow on parent
            flex: 1,
          }}>
          {t('authorities.automatically_follow')}
        </Typography>
        <View style={{ width: 16 }} />
        <Switch
          trackColor={{ true: Colors.PRIMARY_50, false: Colors.WHITE }}
          value={toggleActive}
          onValueChange={setToggleActive}
        />
      </View>
    </NavigationBarWrapper>
  );
};
export default PartnersScreen;

const styles = StyleSheet.create({
  backgroundWrapper: {
    backgroundColor: Colors.INTRO_WHITE_BG,
    flex: 1,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: Colors.VIOLET_BUTTON_LIGHT,
    marginHorizontal: 24,
  },
  horizontalPadding: {
    paddingHorizontal: 24,
  },
  bottomSheet: {
    backgroundColor: colors.WHITE,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // TODO: Standardize bottom sheets. We mix shadows & borders.
    // Since this is on a main tab, borders are consistent.
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.VIOLET_BUTTON_LIGHT,
  },
});
