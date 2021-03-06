import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export type NavigationProp = NavigationScreenProp<
  NavigationState,
  NavigationParams
>;

export type Screen =
  | 'ExportStart'
  | 'ExportIntro'
  | 'ExportSelectHA'
  | 'ExportCodeInput'
  | 'ExportLocationConsent'
  | 'ExportPublishConsent'
  | 'ExportConfirmUpload'
  | 'ExportDone'
  | 'ExportComplete'
  | 'ExposureHistory'
  | 'NextSteps'
  | 'ENDebugMenu'
  | 'ENLocalDiagnosisKey'
  | 'Settings'
  | 'About'
  | 'Licenses'
  | 'FeatureFlags'
  | 'Import'
  | 'Onboarding1'
  | 'Onboarding2'
  | 'Onboarding3'
  | 'Onboarding4'
  | 'OnboardingPermissions'
  | 'EnableExposureNotifications'
  | 'ExportFlow'
  | 'SelfAssessment'
  | 'PartnersOverview'
  | 'PartnersEdit';

export const Screens: { [key in Screen]: Screen } = {
  ExportStart: 'ExportStart',
  ExportIntro: 'ExportIntro',
  ExportSelectHA: 'ExportSelectHA',
  ExportCodeInput: 'ExportCodeInput',
  ExportLocationConsent: 'ExportLocationConsent',
  ExportPublishConsent: 'ExportPublishConsent',
  ExportConfirmUpload: 'ExportConfirmUpload',
  ExportDone: 'ExportDone',
  ExportComplete: 'ExportComplete',
  ExposureHistory: 'ExposureHistory',
  NextSteps: 'NextSteps',
  ENDebugMenu: 'ENDebugMenu',
  ENLocalDiagnosisKey: 'ENLocalDiagnosisKey',
  Settings: 'Settings',
  About: 'About',
  Licenses: 'Licenses',
  FeatureFlags: 'FeatureFlags',
  Import: 'Import',
  Onboarding1: 'Onboarding1',
  Onboarding2: 'Onboarding2',
  Onboarding3: 'Onboarding3',
  Onboarding4: 'Onboarding4',
  OnboardingPermissions: 'OnboardingPermissions',
  EnableExposureNotifications: 'EnableExposureNotifications',
  ExportFlow: 'ExportFlow',
  SelfAssessment: 'SelfAssessment',
  PartnersOverview: 'PartnersOverview',
  PartnersEdit: 'PartnersEdit',
};

export type Stack =
  | 'Main'
  | 'Onboarding'
  | 'ExposureHistory'
  | 'SelfAssessment'
  | 'Export'
  | 'More'
  | 'Partners';

export const Stacks: { [key in Stack]: Stack } = {
  Main: 'Main',
  Onboarding: 'Onboarding',
  ExposureHistory: 'ExposureHistory',
  SelfAssessment: 'SelfAssessment',
  Export: 'Export',
  More: 'More',
  Partners: 'Partners',
};
