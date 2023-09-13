import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';

export const translationGetters = {
    en: () => require('./en.json'),
    es: () => require('./es.json'),
    pt: () => require('./pt.json')
};

export const AvailableLanguages = {
    en: {
        localeLanguageTag: 'en',
        name: 'english',
        isRTL: false,
    },
    es: {
        localeLanguageTag: 'es',
        name: 'spanish',
        isRTL: false,
    },
    pt: {
        localeLanguageTag: 'pt',
        name: 'portuguese',
        isRTL: false,
    },
};

export const IMLocalized = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = _languageTag => {
    // fallback if no available language fits
    const fallback = { localeLanguageTag: 'en', isRTL: false };

    if (_languageTag == null) {
        _languageTag = 'en'
    }
    var { localeLanguageTag, isRTL } = AvailableLanguages[_languageTag] || fallback;
    // clear translation cache
    IMLocalized.cache.clear();

    // update layout direction
    I18nManager.forceRTL(isRTL);

    // set i18n-js config
    i18n.translations = { [localeLanguageTag]: translationGetters[localeLanguageTag]() };
    i18n.locale = localeLanguageTag;

};