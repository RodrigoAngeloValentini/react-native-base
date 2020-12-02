import {Platform, NativeModules} from 'react-native';

export const getLanguageByDevice = () => {
  const lang =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  let normalizeLang = lang ? String(lang).slice(0, 2) : 'pt';
  if (
    normalizeLang !== 'pt' &&
    normalizeLang !== 'es' &&
    normalizeLang !== 'en'
  ) {
    normalizeLang = 'pt';
  }
  return normalizeLang;
};
