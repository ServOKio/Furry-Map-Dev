const replace = {
  'ru-RU': 'ru',
  'en-US': 'en',
  'fr-FR': 'fr',
  'de-AT': 'de',
  'de-CH': 'de',
  'de-DE': 'de',
  'de-LI': 'de',
  'de-LU': 'de'
}

const defaultLang = {
  en: {
    start_title: 'Loading',
    start_desc: 'Please wait',

    main_error_title: 'It looks like we can\'t load the main data',
    main_error_description: 'We\'ll try to update later...',

    server_down_title: 'The server replied that it was not ready to work',
    server_down_description: 'Please check later, if this is our mistake, we will fix it soon',

    server_closed_title: 'Welcome to Furry Map',
    server_closed_description: 'We believe in the power of the community and hope that you also believe in us and give us some more time to finish this project. Stay tuned',

    server_limit_title: 'The server doesn\'t seem to be responding',
    server_limit_description: 'Try coming back later',

    lang_error_title: 'I can\'t seem to load the language',
    lang_error_description: 'We\'ll try to update later...',

    app_error_title: 'ERROR',
    app_error_desc: 'Please wait, we send a bug report',

    app_error_sended_title: 'We sent an error report',
    app_error_sended_desc: 'Please wait a few seconds',

    app_error_sending_error_title: "Error in sending the report",
    app_error_sending_error_desc: "Reloading..."
  },
  uk: {
    start_title: 'Завантаження',
    start_desc: ' будь ласка почекайте',

    main_error_title: 'схоже, ми не можемо отримати основні дані',
    main_error_description: 'ми спробуємо завантажити їх трохи пізніше...',

    server_down_title: 'Упс, схоже, ми ще не готові',
    server_down_description: 'будь ласка, зайдіть пізніше, якщо це наша помилка, ми скоро її виправимо',

    server_closed_title: 'Ласкаво просимо на Furry Map',
    server_closed_description: 'Ми віримо з силу спільноти і сподіваємося що Ви так-же вірите в нас і дасте нам ще деякий час щоб закінчити цей проект. Залишайтеся з нами',

    server_limit_title: 'здається, сервер не відповідає',
    server_limit_description: 'спробуйте зайти пізніше',

    lang_error_title: 'схоже, не вдається отримати мовний пакет',
    lang_error_description: 'ми спробуємо завантажити трохи пізніше...',

    app_error_title: 'помилка',
    app_error_desc: 'Будь ласка, почекайте, ми відправимо повідомлення про помилку',

    app_error_sended_title: "Ми надіслали повідомлення про помилку",
    app_error_sended_desc: "Будь ласка, зачекайте кілька секунд",

    app_error_sending_error_title: "Помилка при відправці звіту",
    app_error_sending_error_desc: "Перезавантаження..."
  },
  ru: {
    start_title: 'Загрузка',
    start_desc: 'Пожалуйста подождите',

    main_error_title: 'Похоже, мы не можем получить главные данные',
    main_error_description: 'Мы попробуем загрузить их чуть позже...',

    server_down_title: 'Упс, похоже, мы ещё не готовы',
    server_down_description: 'Пожалуйста, зайдите позже, если это наша ошибка, мы скоро ее исправим',

    server_closed_title: 'Добро пожаловать на Furry Map',
    server_closed_description: 'Мы верим в силу сообщества и надеемся что вы так-же верите в нас и дадите нам ещё некоторое время чтобы закончить этот проект. Оставайтесь с нами',

    server_limit_title: 'Кажется, сервер не отвечает',
    server_limit_description: 'Попробуйте зайти позже',

    lang_error_title: 'Похоже, не удаётся получить языковой пакет',
    lang_error_description: 'Мы попробуем загрузить чуть позже...',

    app_error_title: 'ОШИБКА',
    app_error_desc: 'Пожалуйста, подождите, мы отправим сообщение об ошибке',

    app_error_sended_title: "Мы отправили сообщение об ошибке",
    app_error_sended_desc: "Пожалуйста, подождите несколько секунд",

    app_error_sending_error_title: "Ошибка при отправке отчета",
    app_error_sending_error_desc: "Перезагрузка..."

  },
  fr: {
    start_title: 'Chargement',
    start_desc: 'veuillez patienter',

    main_error_title: 'il Semble que nous ne pouvons pas obtenir les données principales',
    main_error_description: 'nous allons essayer de les télécharger un peu plus tard...',

    server_down_title: 'Oups, on dirait que nous ne sommes pas encore prêts',
    server_down_description: 'Veuillez revenir plus tard, si c\'est notre erreur, nous la corrigerons bientôt',

    server_closed_title: 'Bienvenue sur Furry Map',
    server_closed_description: 'Nous croyons avec la force de la communauté et espérons que vous croyez aussi en nous et nous donnerez un peu plus de temps pour terminer ce projet. Restez à l\'écoute',

    server_limit_title: 'Le serveur Ne semble pas répondre',
    server_limit_description: 'Essayez de vous connecter plus tard',

    lang_error_title: 'Impossible d\'obtenir le module Linguistique',
    lang_error_description: 'Nous allons essayer de télécharger un peu plus tard...',

    app_error_title: 'ERREUR',
    app_error_desc: 'Veuillez patienter, nous envoyons un rapport de bogue',

    app_error_sended_title: 'Nous avons envoyé un rapport d\'erreur',
    app_error_sended_desc: 'Veuillez patienter quelques secondes',

    app_error_sending_error_title: "Erreur dans l'envoi du rapport",
    app_error_sending_error_desc: "Rechargement..."
  },
  de: {
    start_title: 'Wird geladen',
    start_desc: 'Bitte warten',

    main_error_title: 'Es sieht so aus, als könnten wir die Hauptdaten nicht laden',
    main_error_description: 'Wir werden versuchen, später zu aktualisieren...',

    server_down_title: 'Der Server hat geantwortet, dass er nicht betriebsbereit ist',
    server_down_description: 'Bitte überprüfen Sie später, ob dies unser Fehler ist, wir werden ihn bald beheben',

    server_closed_title: 'Willkommen auf der Furry Map',
    server_closed_description: 'Wir glauben an die Kraft der Community und hoffen, dass Sie auch an uns glauben und uns etwas mehr Zeit geben, um dieses Projekt abzuschließen. Bleib dran',

    server_limit_title: 'Der Server scheint nicht zu antworten',
    server_limit_description: 'Versuche später wiederzukommen',

    lang_error_title: 'Ich kann die Sprache scheinbar nicht laden',
    lang_error_description: 'Wir werden versuchen, später zu aktualisieren...',

    app_error_title: 'FEHLER',
    app_error_desc: 'Bitte warten, wir senden einen Fehlerbericht',

    app_error_sended_title: 'Wir haben einen Fehlerbericht gesendet',
    app_error_sended_desc: 'Bitte warte ein paar Sekunden',

    app_error_sending_error_title: "Fehler beim Senden des Berichts",
    app_error_sending_error_desc: "Neu laden..."
  },
}
