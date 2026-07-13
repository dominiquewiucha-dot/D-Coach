/**
 * MuscleMapJS â€” Internationalization (i18n)
 * Ported from MuscleMap SwiftUI SDK Localizable.strings files.
 *
 * Supports all 11 locales from the original Swift SDK.
 */
import type { Muscle } from '../types';

/** Supported locale codes. */
export type Locale = 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt-BR' | 'ru' | 'tr' | 'zh-Hans';

/** All muscle display names per locale. */
const LOCALES: Record<Locale, Record<Muscle, string>> = {
  en: {
    'abs': 'Abs', 'adductors': 'Adductors', 'ankles': 'Ankles', 'biceps': 'Biceps',
    'calves': 'Calves', 'chest': 'Chest', 'deltoids': 'Deltoids', 'feet': 'Feet',
    'forearm': 'Forearm', 'gluteal': 'Gluteal', 'hamstring': 'Hamstring', 'hands': 'Hands',
    'head': 'Head', 'knees': 'Knees', 'lower-back': 'Lower Back', 'neck': 'Neck',
    'obliques': 'Obliques', 'quadriceps': 'Quadriceps', 'tibialis': 'Tibialis',
    'trapezius': 'Trapezius', 'triceps': 'Triceps', 'upper-back': 'Upper Back',
    'rotator-cuff': 'Rotator Cuff', 'hip-flexors': 'Hip Flexors', 'serratus': 'Serratus',
    'rhomboids': 'Rhomboids', 'upper-chest': 'Upper Chest', 'lower-chest': 'Lower Chest',
    'inner-quad': 'Inner Quad', 'outer-quad': 'Outer Quad', 'upper-abs': 'Upper Abs',
    'lower-abs': 'Lower Abs', 'front-deltoid': 'Front Deltoid', 'rear-deltoid': 'Rear Deltoid',
    'upper-trapezius': 'Upper Trapezius', 'lower-trapezius': 'Lower Trapezius',
  },
  ar: {
    'abs': 'Ø¹Ø¶Ù„Ø§Øª Ø§Ù„Ø¨Ø·Ù†', 'adductors': 'Ø§Ù„Ø¹Ø¶Ù„Ø§Øª Ø§Ù„Ù…Ù‚Ø±Ø¨Ø©', 'ankles': 'Ø§Ù„ÙƒØ§Ø­Ù„Ø§Ù†', 'biceps': 'Ø§Ù„Ø¹Ø¶Ù„Ø© Ø°Ø§Øª Ø§Ù„Ø±Ø£Ø³ÙŠÙ†',
    'calves': 'Ø±Ø¨Ù„Ø© Ø§Ù„Ø³Ø§Ù‚', 'chest': 'Ø§Ù„ØµØ¯Ø±', 'deltoids': 'Ø§Ù„Ø¯Ø§Ù„ÙŠØ©', 'feet': 'Ø§Ù„Ù‚Ø¯Ù…Ø§Ù†',
    'forearm': 'Ø§Ù„Ø³Ø§Ø¹Ø¯', 'gluteal': 'Ø§Ù„Ø£Ø±Ø¯Ø§Ù', 'hamstring': 'Ø£ÙˆØªØ§Ø± Ø§Ù„Ø±ÙƒØ¨Ø©', 'hands': 'Ø§Ù„ÙŠØ¯Ø§Ù†',
    'head': 'Ø§Ù„Ø±Ø£Ø³', 'knees': 'Ø§Ù„Ø±ÙƒØ¨ØªØ§Ù†', 'lower-back': 'Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø±', 'neck': 'Ø§Ù„Ø±Ù‚Ø¨Ø©',
    'obliques': 'Ø§Ù„Ù…Ø§Ø¦Ù„Ø©', 'quadriceps': 'Ø¹Ø¶Ù„Ø§Øª Ø§Ù„ÙØ®Ø° Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ©', 'tibialis': 'Ø§Ù„Ù‚ØµØ¨Ø©',
    'trapezius': 'Ø´Ø¨Ù‡ Ø§Ù„Ù…Ù†Ø­Ø±ÙØ©', 'triceps': 'Ø§Ù„Ø¹Ø¶Ù„Ø© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø±Ø¤ÙˆØ³', 'upper-back': 'Ø£Ø¹Ù„Ù‰ Ø§Ù„Ø¸Ù‡Ø±',
    'rotator-cuff': 'Ø§Ù„ÙƒÙØ© Ø§Ù„Ù…Ø¯ÙˆØ±Ø©', 'hip-flexors': 'Ø«Ù†ÙŠØ§Øª Ø§Ù„ÙˆØ±Ùƒ', 'serratus': 'Ø§Ù„Ù…Ù†Ø´Ø§Ø±ÙŠØ©',
    'rhomboids': 'Ø§Ù„Ù…Ø¹ÙŠÙ†ÙŠØ©', 'upper-chest': 'Ø£Ø¹Ù„Ù‰ Ø§Ù„ØµØ¯Ø±', 'lower-chest': 'Ø£Ø³ÙÙ„ Ø§Ù„ØµØ¯Ø±',
    'inner-quad': 'Ø§Ù„ÙØ®Ø° Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠ', 'outer-quad': 'Ø§Ù„ÙØ®Ø° Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ', 'upper-abs': 'Ø§Ù„Ø¨Ø·Ù† Ø§Ù„Ø¹Ù„ÙˆÙŠØ©',
    'lower-abs': 'Ø§Ù„Ø¨Ø·Ù† Ø§Ù„Ø³ÙÙ„ÙŠØ©', 'front-deltoid': 'Ø§Ù„Ø¯Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ©', 'rear-deltoid': 'Ø§Ù„Ø¯Ø§Ù„ÙŠØ© Ø§Ù„Ø®Ù„ÙÙŠØ©',
    'upper-trapezius': 'Ø´Ø¨Ù‡ Ø§Ù„Ù…Ù†Ø­Ø±ÙØ© Ø§Ù„Ø¹Ù„ÙˆÙŠØ©', 'lower-trapezius': 'Ø´Ø¨Ù‡ Ø§Ù„Ù…Ù†Ø­Ø±ÙØ© Ø§Ù„Ø³ÙÙ„ÙŠØ©',
  },
  de: {
    'abs': 'Bauchmuskeln', 'adductors': 'Adduktoren', 'ankles': 'KnÃ¶chel', 'biceps': 'Bizeps',
    'calves': 'Waden', 'chest': 'Brust', 'deltoids': 'Deltamuskeln', 'feet': 'FÃ¼ÃŸe',
    'forearm': 'Unterarm', 'gluteal': 'GesÃ¤ÃŸmuskeln', 'hamstring': 'OberschenkelrÃ¼ckseite', 'hands': 'HÃ¤nde',
    'head': 'Kopf', 'knees': 'Knie', 'lower-back': 'Unterer RÃ¼cken', 'neck': 'Nacken',
    'obliques': 'SchrÃ¤ge Bauchmuskeln', 'quadriceps': 'Quadrizeps', 'tibialis': 'Schienbeinmuskel',
    'trapezius': 'Trapezmuskel', 'triceps': 'Trizeps', 'upper-back': 'Oberer RÃ¼cken',
    'rotator-cuff': 'Rotatorenmanschette', 'hip-flexors': 'HÃ¼ftbeuger', 'serratus': 'SÃ¤gemuskel',
    'rhomboids': 'Rautenmuskeln', 'upper-chest': 'Obere Brust', 'lower-chest': 'Untere Brust',
    'inner-quad': 'Innerer Quadrizeps', 'outer-quad': 'Ã„uÃŸerer Quadrizeps', 'upper-abs': 'Obere Bauchmuskeln',
    'lower-abs': 'Untere Bauchmuskeln', 'front-deltoid': 'Vorderer Deltamuskel', 'rear-deltoid': 'Hinterer Deltamuskel',
    'upper-trapezius': 'Oberer Trapezmuskel', 'lower-trapezius': 'Unterer Trapezmuskel',
  },
  es: {
    'abs': 'Abdominales', 'adductors': 'Aductores', 'ankles': 'Tobillos', 'biceps': 'BÃ­ceps',
    'calves': 'Pantorrillas', 'chest': 'Pecho', 'deltoids': 'Deltoides', 'feet': 'Pies',
    'forearm': 'Antebrazo', 'gluteal': 'GlÃºteos', 'hamstring': 'Isquiotibiales', 'hands': 'Manos',
    'head': 'Cabeza', 'knees': 'Rodillas', 'lower-back': 'Espalda Baja', 'neck': 'Cuello',
    'obliques': 'Oblicuos', 'quadriceps': 'CuÃ¡driceps', 'tibialis': 'Tibial',
    'trapezius': 'Trapecio', 'triceps': 'TrÃ­ceps', 'upper-back': 'Espalda Alta',
    'rotator-cuff': 'Manguito Rotador', 'hip-flexors': 'Flexores de Cadera', 'serratus': 'Serrato',
    'rhomboids': 'Romboides', 'upper-chest': 'Pecho Superior', 'lower-chest': 'Pecho Inferior',
    'inner-quad': 'CuÃ¡driceps Interno', 'outer-quad': 'CuÃ¡driceps Externo', 'upper-abs': 'Abdominales Superiores',
    'lower-abs': 'Abdominales Inferiores', 'front-deltoid': 'Deltoides Anterior', 'rear-deltoid': 'Deltoides Posterior',
    'upper-trapezius': 'Trapecio Superior', 'lower-trapezius': 'Trapecio Inferior',
  },
  fr: {
    'abs': 'Abdominaux', 'adductors': 'Adducteurs', 'ankles': 'Chevilles', 'biceps': 'Biceps',
    'calves': 'Mollets', 'chest': 'Poitrine', 'deltoids': 'DeltoÃ¯des', 'feet': 'Pieds',
    'forearm': 'Avant-bras', 'gluteal': 'Fessiers', 'hamstring': 'Ischio-jambiers', 'hands': 'Mains',
    'head': 'TÃªte', 'knees': 'Genoux', 'lower-back': 'Bas du Dos', 'neck': 'Cou',
    'obliques': 'Obliques', 'quadriceps': 'Quadriceps', 'tibialis': 'Tibial',
    'trapezius': 'TrapÃ¨ze', 'triceps': 'Triceps', 'upper-back': 'Haut du Dos',
    'rotator-cuff': 'Coiffe des Rotateurs', 'hip-flexors': 'FlÃ©chisseurs de Hanche', 'serratus': 'DentelÃ©',
    'rhomboids': 'RhomboÃ¯des', 'upper-chest': 'Poitrine Haute', 'lower-chest': 'Poitrine Basse',
    'inner-quad': 'Quadriceps Interne', 'outer-quad': 'Quadriceps Externe', 'upper-abs': 'Abdominaux SupÃ©rieurs',
    'lower-abs': 'Abdominaux InfÃ©rieurs', 'front-deltoid': 'DeltoÃ¯de AntÃ©rieur', 'rear-deltoid': 'DeltoÃ¯de PostÃ©rieur',
    'upper-trapezius': 'TrapÃ¨ze SupÃ©rieur', 'lower-trapezius': 'TrapÃ¨ze InfÃ©rieur',
  },
  ja: {
    'abs': 'è…¹ç­‹', 'adductors': 'å†…è»¢ç­‹', 'ankles': 'è¶³é¦–', 'biceps': 'ä¸Šè…•äºŒé ­ç­‹',
    'calves': 'ãµãã‚‰ã¯ãŽ', 'chest': 'èƒ¸', 'deltoids': 'ä¸‰è§’ç­‹', 'feet': 'è¶³',
    'forearm': 'å‰è…•', 'gluteal': 'è‡€ç­‹', 'hamstring': 'ãƒãƒ ã‚¹ãƒˆãƒªãƒ³ã‚°', 'hands': 'æ‰‹',
    'head': 'é ­', 'knees': 'è†', 'lower-back': 'è…°', 'neck': 'é¦–',
    'obliques': 'è…¹æ–œç­‹', 'quadriceps': 'å¤§è…¿å››é ­ç­‹', 'tibialis': 'å‰è„›éª¨ç­‹',
    'trapezius': 'åƒ§å¸½ç­‹', 'triceps': 'ä¸Šè…•ä¸‰é ­ç­‹', 'upper-back': 'ä¸ŠèƒŒéƒ¨',
    'rotator-cuff': 'å›žæ—‹ç­‹è…±æ¿', 'hip-flexors': 'è‚¡é–¢ç¯€å±ˆç­‹', 'serratus': 'å‰é‹¸ç­‹',
    'rhomboids': 'è±å½¢ç­‹', 'upper-chest': 'å¤§èƒ¸ç­‹ä¸Šéƒ¨', 'lower-chest': 'å¤§èƒ¸ç­‹ä¸‹éƒ¨',
    'inner-quad': 'å†…å´åºƒç­‹', 'outer-quad': 'å¤–å´åºƒç­‹', 'upper-abs': 'ä¸Šè…¹éƒ¨',
    'lower-abs': 'ä¸‹è…¹éƒ¨', 'front-deltoid': 'ä¸‰è§’ç­‹å‰éƒ¨', 'rear-deltoid': 'ä¸‰è§’ç­‹å¾Œéƒ¨',
    'upper-trapezius': 'ä¸Šéƒ¨åƒ§å¸½ç­‹', 'lower-trapezius': 'ä¸‹éƒ¨åƒ§å¸½ç­‹',
  },
  ko: {
    'abs': 'ë³µê·¼', 'adductors': 'ë‚´ì „ê·¼', 'ankles': 'ë°œëª©', 'biceps': 'ì´ë‘ê·¼',
    'calves': 'ì¢…ì•„ë¦¬', 'chest': 'ê°€ìŠ´', 'deltoids': 'ì‚¼ê°ê·¼', 'feet': 'ë°œ',
    'forearm': 'ì „ì™„', 'gluteal': 'ë‘”ê·¼', 'hamstring': 'í–„ìŠ¤íŠ¸ë§', 'hands': 'ì†',
    'head': 'ë¨¸ë¦¬', 'knees': 'ë¬´ë¦Ž', 'lower-back': 'í•˜ë¶€ ë“±', 'neck': 'ëª©',
    'obliques': 'ë³µì‚¬ê·¼', 'quadriceps': 'ëŒ€í‡´ì‚¬ë‘ê·¼', 'tibialis': 'ì „ê²½ê³¨ê·¼',
    'trapezius': 'ìŠ¹ëª¨ê·¼', 'triceps': 'ì‚¼ë‘ê·¼', 'upper-back': 'ìƒë¶€ ë“±',
    'rotator-cuff': 'íšŒì „ê·¼ê°œ', 'hip-flexors': 'ê³ ê´€ì ˆ êµ´ê·¼', 'serratus': 'ì „ê±°ê·¼',
    'rhomboids': 'ëŠ¥í˜•ê·¼', 'upper-chest': 'ìƒë¶€ ê°€ìŠ´', 'lower-chest': 'í•˜ë¶€ ê°€ìŠ´',
    'inner-quad': 'ë‚´ì¸¡ê´‘ê·¼', 'outer-quad': 'ì™¸ì¸¡ê´‘ê·¼', 'upper-abs': 'ìƒë³µë¶€',
    'lower-abs': 'í•˜ë³µë¶€', 'front-deltoid': 'ì „ë©´ ì‚¼ê°ê·¼', 'rear-deltoid': 'í›„ë©´ ì‚¼ê°ê·¼',
    'upper-trapezius': 'ìƒë¶€ ìŠ¹ëª¨ê·¼', 'lower-trapezius': 'í•˜ë¶€ ìŠ¹ëª¨ê·¼',
  },
  'pt-BR': {
    'abs': 'Abdominais', 'adductors': 'Adutores', 'ankles': 'Tornozelos', 'biceps': 'BÃ­ceps',
    'calves': 'Panturrilhas', 'chest': 'Peito', 'deltoids': 'Deltoides', 'feet': 'PÃ©s',
    'forearm': 'AntebraÃ§o', 'gluteal': 'GlÃºteos', 'hamstring': 'Posteriores da Coxa', 'hands': 'MÃ£os',
    'head': 'CabeÃ§a', 'knees': 'Joelhos', 'lower-back': 'Lombar', 'neck': 'PescoÃ§o',
    'obliques': 'OblÃ­quos', 'quadriceps': 'QuadrÃ­ceps', 'tibialis': 'Tibial',
    'trapezius': 'TrapÃ©zio', 'triceps': 'TrÃ­ceps', 'upper-back': 'Costas Superiores',
    'rotator-cuff': 'Manguito Rotador', 'hip-flexors': 'Flexores do Quadril', 'serratus': 'SerrÃ¡til',
    'rhomboids': 'Romboides', 'upper-chest': 'Peito Superior', 'lower-chest': 'Peito Inferior',
    'inner-quad': 'QuadrÃ­ceps Interno', 'outer-quad': 'QuadrÃ­ceps Externo', 'upper-abs': 'Abdominais Superiores',
    'lower-abs': 'Abdominais Inferiores', 'front-deltoid': 'Deltoide Anterior', 'rear-deltoid': 'Deltoide Posterior',
    'upper-trapezius': 'TrapÃ©zio Superior', 'lower-trapezius': 'TrapÃ©zio Inferior',
  },
  ru: {
    'abs': 'ÐŸÑ€ÐµÑÑ', 'adductors': 'ÐŸÑ€Ð¸Ð²Ð¾Ð´ÑÑ‰Ð¸Ðµ Ð¼Ñ‹ÑˆÑ†Ñ‹', 'ankles': 'Ð›Ð¾Ð´Ñ‹Ð¶ÐºÐ¸', 'biceps': 'Ð‘Ð¸Ñ†ÐµÐ¿Ñ',
    'calves': 'Ð˜ÐºÑ€Ñ‹', 'chest': 'Ð“Ñ€ÑƒÐ´ÑŒ', 'deltoids': 'Ð”ÐµÐ»ÑŒÑ‚Ð¾Ð²Ð¸Ð´Ð½Ñ‹Ðµ', 'feet': 'Ð¡Ñ‚Ð¾Ð¿Ñ‹',
    'forearm': 'ÐŸÑ€ÐµÐ´Ð¿Ð»ÐµÑ‡ÑŒÐµ', 'gluteal': 'Ð¯Ð³Ð¾Ð´Ð¸Ñ‡Ð½Ñ‹Ðµ', 'hamstring': 'Ð‘Ð¸Ñ†ÐµÐ¿Ñ Ð±ÐµÐ´Ñ€Ð°', 'hands': 'ÐšÐ¸ÑÑ‚Ð¸',
    'head': 'Ð“Ð¾Ð»Ð¾Ð²Ð°', 'knees': 'ÐšÐ¾Ð»ÐµÐ½Ð¸', 'lower-back': 'ÐŸÐ¾ÑÑÐ½Ð¸Ñ†Ð°', 'neck': 'Ð¨ÐµÑ',
    'obliques': 'ÐšÐ¾ÑÑ‹Ðµ Ð¼Ñ‹ÑˆÑ†Ñ‹', 'quadriceps': 'ÐšÐ²Ð°Ð´Ñ€Ð¸Ñ†ÐµÐ¿Ñ', 'tibialis': 'Ð‘Ð¾Ð»ÑŒÑˆÐµÐ±ÐµÑ€Ñ†Ð¾Ð²Ð°Ñ Ð¼Ñ‹ÑˆÑ†Ð°',
    'trapezius': 'Ð¢Ñ€Ð°Ð¿ÐµÑ†Ð¸Ñ', 'triceps': 'Ð¢Ñ€Ð¸Ñ†ÐµÐ¿Ñ', 'upper-back': 'Ð’ÐµÑ€Ñ…Ð½ÑÑ Ñ‡Ð°ÑÑ‚ÑŒ ÑÐ¿Ð¸Ð½Ñ‹',
    'rotator-cuff': 'Ð Ð¾Ñ‚Ð°Ñ‚Ð¾Ñ€Ð½Ð°Ñ Ð¼Ð°Ð½Ð¶ÐµÑ‚Ð°', 'hip-flexors': 'Ð¡Ð³Ð¸Ð±Ð°Ñ‚ÐµÐ»Ð¸ Ð±ÐµÐ´Ñ€Ð°', 'serratus': 'Ð—ÑƒÐ±Ñ‡Ð°Ñ‚Ð°Ñ Ð¼Ñ‹ÑˆÑ†Ð°',
    'rhomboids': 'Ð Ð¾Ð¼Ð±Ð¾Ð²Ð¸Ð´Ð½Ñ‹Ðµ', 'upper-chest': 'Ð’ÐµÑ€Ñ…Ð½ÑÑ Ð³Ñ€ÑƒÐ´ÑŒ', 'lower-chest': 'ÐÐ¸Ð¶Ð½ÑÑ Ð³Ñ€ÑƒÐ´ÑŒ',
    'inner-quad': 'Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½Ð¸Ð¹ ÐºÐ²Ð°Ð´Ñ€Ð¸Ñ†ÐµÐ¿Ñ', 'outer-quad': 'Ð’Ð½ÐµÑˆÐ½Ð¸Ð¹ ÐºÐ²Ð°Ð´Ñ€Ð¸Ñ†ÐµÐ¿Ñ', 'upper-abs': 'Ð’ÐµÑ€Ñ…Ð½Ð¸Ð¹ Ð¿Ñ€ÐµÑÑ',
    'lower-abs': 'ÐÐ¸Ð¶Ð½Ð¸Ð¹ Ð¿Ñ€ÐµÑÑ', 'front-deltoid': 'ÐŸÐµÑ€ÐµÐ´Ð½ÑÑ Ð´ÐµÐ»ÑŒÑ‚Ð°', 'rear-deltoid': 'Ð—Ð°Ð´Ð½ÑÑ Ð´ÐµÐ»ÑŒÑ‚Ð°',
    'upper-trapezius': 'Ð’ÐµÑ€Ñ…Ð½ÑÑ Ñ‚Ñ€Ð°Ð¿ÐµÑ†Ð¸Ñ', 'lower-trapezius': 'ÐÐ¸Ð¶Ð½ÑÑ Ñ‚Ñ€Ð°Ð¿ÐµÑ†Ð¸Ñ',
  },
  tr: {
    'abs': 'KarÄ±n KaslarÄ±', 'adductors': 'AdduktÃ¶rler', 'ankles': 'Bilekler', 'biceps': 'Biseps',
    'calves': 'BaldÄ±rlar', 'chest': 'GÃ¶ÄŸÃ¼s', 'deltoids': 'Deltoidler', 'feet': 'Ayaklar',
    'forearm': 'Ã–n Kol', 'gluteal': 'KalÃ§a', 'hamstring': 'Arka Bacak', 'hands': 'Eller',
    'head': 'BaÅŸ', 'knees': 'Dizler', 'lower-back': 'Bel', 'neck': 'Boyun',
    'obliques': 'Oblikler', 'quadriceps': 'Kuadriseps', 'tibialis': 'Tibialis',
    'trapezius': 'Trapez', 'triceps': 'Triseps', 'upper-back': 'Ãœst SÄ±rt',
    'rotator-cuff': 'Rotator Kaf', 'hip-flexors': 'KalÃ§a FleksÃ¶rleri', 'serratus': 'Serratus',
    'rhomboids': 'Romboidler', 'upper-chest': 'Ãœst GÃ¶ÄŸÃ¼s', 'lower-chest': 'Alt GÃ¶ÄŸÃ¼s',
    'inner-quad': 'Ä°Ã§ Kuadriseps', 'outer-quad': 'DÄ±ÅŸ Kuadriseps', 'upper-abs': 'Ãœst KarÄ±n',
    'lower-abs': 'Alt KarÄ±n', 'front-deltoid': 'Ã–n Deltoid', 'rear-deltoid': 'Arka Deltoid',
    'upper-trapezius': 'Ãœst Trapez', 'lower-trapezius': 'Alt Trapez',
  },
  'zh-Hans': {
    'abs': 'è…¹è‚Œ', 'adductors': 'å†…æ”¶è‚Œ', 'ankles': 'è„šè¸', 'biceps': 'è‚±äºŒå¤´è‚Œ',
    'calves': 'å°è…¿è‚Œ', 'chest': 'èƒ¸éƒ¨', 'deltoids': 'ä¸‰è§’è‚Œ', 'feet': 'è¶³éƒ¨',
    'forearm': 'å‰è‡‚', 'gluteal': 'è‡€è‚Œ', 'hamstring': 'è…˜ç»³è‚Œ', 'hands': 'æ‰‹',
    'head': 'å¤´éƒ¨', 'knees': 'è†ç›–', 'lower-back': 'ä¸‹èƒŒ', 'neck': 'é¢ˆéƒ¨',
    'obliques': 'è…¹æ–œè‚Œ', 'quadriceps': 'è‚¡å››å¤´è‚Œ', 'tibialis': 'èƒ«éª¨å‰è‚Œ',
    'trapezius': 'æ–œæ–¹è‚Œ', 'triceps': 'è‚±ä¸‰å¤´è‚Œ', 'upper-back': 'ä¸ŠèƒŒ',
    'rotator-cuff': 'è‚©è¢–', 'hip-flexors': 'é«‹å±ˆè‚Œ', 'serratus': 'å‰é”¯è‚Œ',
    'rhomboids': 'è±å½¢è‚Œ', 'upper-chest': 'ä¸Šèƒ¸', 'lower-chest': 'ä¸‹èƒ¸',
    'inner-quad': 'è‚¡å†…ä¾§è‚Œ', 'outer-quad': 'è‚¡å¤–ä¾§è‚Œ', 'upper-abs': 'ä¸Šè…¹',
    'lower-abs': 'ä¸‹è…¹', 'front-deltoid': 'ä¸‰è§’è‚Œå‰æŸ', 'rear-deltoid': 'ä¸‰è§’è‚ŒåŽæŸ',
    'upper-trapezius': 'ä¸Šæ–œæ–¹è‚Œ', 'lower-trapezius': 'ä¸‹æ–œæ–¹è‚Œ',
  },
};

/** UI string keys (accessibility, legend labels, etc.). */
const UI_STRINGS: Record<Locale, {
  selected: string;
  notSelected: string;
  hintTap: string;
  hintLongPress: string;
  bodyMap: string;
  legendLow: string;
  legendHigh: string;
  heatmapLegend: string;
}> = {
  en: { selected: 'Selected', notSelected: 'Not selected', hintTap: 'Double tap to select', hintLongPress: 'Long press for details', bodyMap: 'Body muscle map', legendLow: 'Low', legendHigh: 'High', heatmapLegend: 'Heatmap intensity legend' },
  ar: { selected: 'Ù…Ø­Ø¯Ø¯', notSelected: 'ØºÙŠØ± Ù…Ø­Ø¯Ø¯', hintTap: 'Ø§Ø¶ØºØ· Ù…Ø±ØªÙŠÙ† Ù„Ù„ØªØ­Ø¯ÙŠØ¯', hintLongPress: 'Ø§Ø¶ØºØ· Ù…Ø·ÙˆÙ„Ø§Ù‹ Ù„Ù„ØªÙØ§ØµÙŠÙ„', bodyMap: 'Ø®Ø±ÙŠØ·Ø© Ø¹Ø¶Ù„Ø§Øª Ø§Ù„Ø¬Ø³Ù…', legendLow: 'Ù…Ù†Ø®ÙØ¶', legendHigh: 'Ù…Ø±ØªÙØ¹', heatmapLegend: 'Ù…Ù‚ÙŠØ§Ø³ Ø§Ù„ÙƒØ«Ø§ÙØ© Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ©' },
  de: { selected: 'AusgewÃ¤hlt', notSelected: 'Nicht ausgewÃ¤hlt', hintTap: 'Doppeltippen zum AuswÃ¤hlen', hintLongPress: 'Lange drÃ¼cken fÃ¼r Details', bodyMap: 'KÃ¶rpermuskelkarte', legendLow: 'Niedrig', legendHigh: 'Hoch', heatmapLegend: 'Heatmap-IntensitÃ¤tslegende' },
  es: { selected: 'Seleccionado', notSelected: 'No seleccionado', hintTap: 'Toca dos veces para seleccionar', hintLongPress: 'MantÃ©n presionado para detalles', bodyMap: 'Mapa muscular del cuerpo', legendLow: 'Bajo', legendHigh: 'Alto', heatmapLegend: 'Leyenda de intensidad del mapa de calor' },
  fr: { selected: 'SÃ©lectionnÃ©', notSelected: 'Non sÃ©lectionnÃ©', hintTap: 'Appuyez deux fois pour sÃ©lectionner', hintLongPress: 'Appui long pour les dÃ©tails', bodyMap: 'Carte musculaire du corps', legendLow: 'Faible', legendHigh: 'Ã‰levÃ©', heatmapLegend: 'LÃ©gende d\'intensitÃ© de la carte thermique' },
  ja: { selected: 'é¸æŠžä¸­', notSelected: 'æœªé¸æŠž', hintTap: 'ãƒ€ãƒ–ãƒ«ã‚¿ãƒƒãƒ—ã§é¸æŠž', hintLongPress: 'é•·æŠ¼ã—ã§è©³ç´°', bodyMap: 'èº«ä½“ç­‹è‚‰ãƒžãƒƒãƒ—', legendLow: 'ä½Ž', legendHigh: 'é«˜', heatmapLegend: 'ãƒ’ãƒ¼ãƒˆãƒžãƒƒãƒ—å¼·åº¦å‡¡ä¾‹' },
  ko: { selected: 'ì„ íƒë¨', notSelected: 'ì„ íƒ ì•ˆë¨', hintTap: 'ë‘ ë²ˆ íƒ­í•˜ì—¬ ì„ íƒ', hintLongPress: 'ê¸¸ê²Œ ëˆŒëŸ¬ ìƒì„¸ ë³´ê¸°', bodyMap: 'ê·¼ìœ¡ ì§€ë„', legendLow: 'ë‚®ìŒ', legendHigh: 'ë†’ìŒ', heatmapLegend: 'ížˆíŠ¸ë§µ ê°•ë„ ë²”ë¡€' },
  'pt-BR': { selected: 'Selecionado', notSelected: 'NÃ£o selecionado', hintTap: 'Toque duas vezes para selecionar', hintLongPress: 'Pressione e segure para detalhes', bodyMap: 'Mapa muscular do corpo', legendLow: 'Baixo', legendHigh: 'Alto', heatmapLegend: 'Legenda de intensidade do mapa de calor' },
  ru: { selected: 'Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾', notSelected: 'ÐÐµ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð¾', hintTap: 'ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð´Ð²Ð°Ð¶Ð´Ñ‹ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°', hintLongPress: 'Ð£Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°Ð¹Ñ‚Ðµ Ð´Ð»Ñ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚ÐµÐ¹', bodyMap: 'ÐšÐ°Ñ€Ñ‚Ð° Ð¼Ñ‹ÑˆÑ† Ñ‚ÐµÐ»Ð°', legendLow: 'ÐÐ¸Ð·ÐºÐ¾', legendHigh: 'Ð’Ñ‹ÑÐ¾ÐºÐ¾', heatmapLegend: 'Ð›ÐµÐ³ÐµÐ½Ð´Ð° Ð¸Ð½Ñ‚ÐµÐ½ÑÐ¸Ð²Ð½Ð¾ÑÑ‚Ð¸ Ñ‚ÐµÐ¿Ð»Ð¾Ð²Ð¾Ð¹ ÐºÐ°Ñ€Ñ‚Ñ‹' },
  tr: { selected: 'SeÃ§ildi', notSelected: 'SeÃ§ilmedi', hintTap: 'SeÃ§mek iÃ§in Ã§ift dokunun', hintLongPress: 'AyrÄ±ntÄ±lar iÃ§in uzun basÄ±n', bodyMap: 'VÃ¼cut kas haritasÄ±', legendLow: 'DÃ¼ÅŸÃ¼k', legendHigh: 'YÃ¼ksek', heatmapLegend: 'IsÄ± haritasÄ± yoÄŸunluk gÃ¶stergesi' },
  'zh-Hans': { selected: 'å·²é€‰æ‹©', notSelected: 'æœªé€‰æ‹©', hintTap: 'åŒå‡»é€‰æ‹©', hintLongPress: 'é•¿æŒ‰æŸ¥çœ‹è¯¦æƒ…', bodyMap: 'èº«ä½“è‚Œè‚‰å›¾', legendLow: 'ä½Ž', legendHigh: 'é«˜', heatmapLegend: 'çƒ­åŠ›å›¾å¼ºåº¦å›¾ä¾‹' },
};

/** Current active locale. */
let _currentLocale: Locale = 'en';

/** Set the active locale. */
export function setLocale(locale: Locale): void {
  _currentLocale = locale;
}

/** Get the current active locale. */
export function getLocale(): Locale {
  return _currentLocale;
}

/** Get all available locales. */
export function getAvailableLocales(): Locale[] {
  return Object.keys(LOCALES) as Locale[];
}

/** Get the display name for a muscle in the current (or specified) locale. */
export function getMuscleName(muscle: Muscle, locale?: Locale): string {
  const l = locale ?? _currentLocale;
  return LOCALES[l]?.[muscle] ?? LOCALES.en[muscle] ?? muscle;
}

/** Get all muscle display names for the current (or specified) locale. */
export function getAllMuscleNames(locale?: Locale): Record<Muscle, string> {
  const l = locale ?? _currentLocale;
  return LOCALES[l] ?? LOCALES.en;
}

/** Get a UI string in the current (or specified) locale. */
export function getUIString(key: keyof typeof UI_STRINGS['en'], locale?: Locale): string {
  const l = locale ?? _currentLocale;
  return UI_STRINGS[l]?.[key] ?? UI_STRINGS.en[key] ?? key;
}
