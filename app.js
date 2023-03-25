const replace = {
    'ru-RU': 'ru',
    'en-US': 'en',
    'fr-FR': 'fr',
    'de-AT': 'de',
    'de-CH': 'de',
    'de-DE': 'de',
    'de-LI': 'de',
    'de-LU': 'de',
    'pl-PL': 'pl',
    'pt-PT': 'pt',
    'pt-BR': 'pt_br'
}

const defaultLang = {
  en: {
    start_title: 'Loading',
    start_desc: 'Please wait',

    main_error_title: 'It looks like we can\'t load the main data',
    main_error_description: 'We\'ll try to update later...',

    server_down_title: 'The server replied that it was not ready to work',
    server_down_description: 'Please check later, if this is our mistake, we will fix it soon',

    server_closed_title: 'A little more and Furry Map will be here',
    server_closed_description: 'At the moment we are already preparing the project for a public beta test and will try to do it as soon as possible\nDo you want more news ? We are waiting u in the discord !',

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

    server_closed_title: 'Трохи більше і FurryMap буде тут',
    server_closed_description: 'На даний момент ми вже готуємо проект до публічного бета-тесту і постараємося зробити це якомога швидше \nХотите більше новин ? Чекаємо в дискорді !',

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

    server_closed_title: 'Ещё немного и Furry Map будет здесь',
    server_closed_description: 'На данный момент мы уже подготавливаем проект к публичному бета-тесту и постараемся сделать это как можно быстрее\nХотите больше новостей ? Ждём в дискорде !',

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

    server_closed_title: 'Un peu plus et FurryMap sera là',
    server_closed_description: 'En ce moment, nous préparons le projet pour la bêta publique et nous allons essayer de le faire le plus rapidement possible\nVoulez-vous plus de nouvelles ? Nous attendons à discord !',

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

    server_closed_title: 'Noch ein bisschen mehr und FurryMap wird hier sein',
    server_closed_description: 'Wir bereiten das Projekt derzeit bereits auf den öffentlichen Beta-Test vor und werden versuchen, es so schnell wie möglich zu machen.\nWünschen Sie mehr Neuigkeiten ? Wir warten im discord !',

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
  pl: {
    start_title: 'Ładowanie',
    start_desc: 'Proszę czekać',

    main_error_title: 'Wygląda na to, że nie możemy załadować główne dane',
    main_error_description: 'Postaramy się zaktualizować później...',

    server_down_title: 'Serwer odpowiedział, że nie jest gotowy do pracy',
    server_down_description: "Sprawdź później, jeśli to nasz błąd, wkrótce go naprawimy",

    server_closed_title: "Trochę więcej i będzie tu Futrzana Mapa",
    server_closed_description: 'W tej chwili przygotowujemy już projekt do publicznego testu beta i postaramy się to zrobić jak najszybciej\nCzy chcesz więcej wiadomości ? Czekamy na Ciebie z niecierpliwością !',

    server_limit_title: 'Serwer nie wydaje się odpowiadać',
    server_limit_description: 'Spróbuj wrócić później',

    lang_error_title: 'Nie można załadować języka',
    lang_error_description: 'Postaramy się zaktualizować później...',

    app_error_title: 'Błąd',
    app_error_desc: 'Proszę czekać, wysyłamy raport o błędzie',

    app_error_sended_title: 'Wysłaliśmy raport o błędzie',
    app_error_sended_desc: 'Proszę poczekać kilka sekund',

    app_error_sending_error_title: "Błąd podczas wysyłania raportu",
    app_error_sending_error_desc: "Ponowne ładowanie..."
  },
  pt: {
    start_title:'Carregando',
    start_desc: 'Aguarde',

    main_error_title: 'Parece que não podemos carregar os dados principais',
    main_error_description: 'Vamos tentar atualizar mais tarde...',

    server_down_title: 'O servidor não está de momento pronto para funcionar',
    server_down_description: 'Por favor, verifique mais tarde, se este erro é nosso, vamos corrigi-lo em breve',

    server_closed_title: 'Um pouco mais e um mapa furry estará aqui',
    server_closed_description: 'Neste momento já estamos a preparar o projecto para um teste beta público e tentaremos fazê-lo o mais rapidamente possível\nVocê quer mais notícias? Esperamos por você no discord!',

    server_limit_title:'O servidor parece não estar a responder',
    server_limit_description: 'Tente voltar mais tarde',

    lang_error_title: 'Parece que não consigo carregar a língua',
    lang_error_description: 'Vamos tentar atualizar mais tarde...',

    app_error_title:'Erro',
    app_error_desc: 'Aguarde, enviámos um relatório de bug',

    app_error_sended_title: 'Enviámos um relatório de erro',
    app_error_sended_desc: 'Aguarde alguns segundos',

    app_error_sending_error_title: "Erro ao enviar o relatório",
    app_error_sending_error_desc: "Recarregar..."
  },
  pt_br: {
    start_title: 'Carregando',
    start_desc: 'Aguarde',
    
    main_error_title:'Não foi possível carregar os dados principais',
    main_error_description: 'Tentaremos atualizar mais tarde...',
    
    server_down_title: 'O servidor respondeu que não estava pronto para funcionar',
    server_down_description: 'Por favor, tente novamente mais tarde. Caso o erro seja nosso, iremos corrigir o mais breve possível',
    
    server_closed_title:'Aguarde um pouco mais e o Furry Map já estará disponível',
    server_closed_description: 'No momento já estamos preparando o projeto para um teste beta público e tentaremos fazê-lo o quanto antes\nVocê quer mais novidades ? Estamos te esperando no Discord !',
    
    server_limit_title:'O servidor não está respondendo',
    server_limit_description: 'Tente novamente mais tarde',
    
    lang_error_title: 'Não foi possível carregar o idioma',
    lang_error_description: 'Tentaremos atualizar mais tarde...',
    
    app_error_title: 'Erro',
    app_error_desc:'Aguarde, estamos enviando um relatório de bug',
    
    app_error_sended_title:'Enviamos um relatório de erro',
    app_error_sended_desc: 'Aguarde alguns segundos',
    
    app_error_sending_error_title:"Erro no envio do relatório",
    app_error_sending_error_desc: "Recarregando..."
  }
}
