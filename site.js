(() => {
  const translations = {
    fi: {
      pageTitle: "Salamatutka – AspByte",
      pageDescription: "Salamatutka näyttää tuoreet salamahavainnot kartalla ja ilmoittaa valitsemallasi alueella havaituista salamoista.",
      skipLink: "Siirry sisältöön", brandName: "Salamatutka", mainNavLabel: "Päävalikko", languageLabel: "Kieli",
      navFeatures: "Ominaisuudet", navPlans: "Free ja Pro", navData: "Tietolähteet", navContact: "Yhteys",
      heroEyebrow: "Android-sovellus · Google Play", heroTitle: "Salamat lähelläsi, selkeästi kartalla.",
      heroLead: "Valitse paikka haulla tai GPS:llä, määritä 3–20 kilometrin hälytysalue ja käynnistä salamavahti.",
      heroPrimary: "Tutustu ominaisuuksiin", privacyPolicy: "Tietosuojakäytäntö", heroFactsLabel: "Sovelluksen perustiedot",
      heroFactOne: "Useita kieliä · Google Play", heroFactTwo: "FMI Open Data", heroFactThree: "Ei käyttäjätiliä",
      previewLabel: "Salamatutkan karttanäkymän havainnekuva", previewSubtitle: "Salamat kartalla", previewStatus: "Tuoreet salamahavainnot · 15 min",
      previewPlace: "Paikka: Helsinki · 10 km", previewWatch: "Salamavahti käytössä", settings: "Asetukset",
      featuresKicker: "Suunniteltu nopeaan käyttöön", featuresTitle: "Oleellinen näkyy yhdellä silmäyksellä",
      featuresLead: "Salamatutka keskittyy yhteen asiaan: missä tuoreimmat salamat on havaittu ja osuuko havainto valitsemallesi alueelle.",
      featureMapTitle: "Tuoreet salamat kartalla", featureMapText: "Kartalla näkyvät enintään 15 minuuttia vanhat havainnot. Uusimmat iskut erottuvat selkeimmin.",
      featurePlaceTitle: "Paikka haulla tai GPS:llä", featurePlaceText: "Hae kaupunkia tai osoitetta tai käytä laitteen sijaintia seurantapaikan valintaan.",
      featureRadiusTitle: "Sopiva hälytysalue", featureRadiusText: "Valitse helposti 3, 5, 10 tai 20 kilometrin säde oman tarpeesi mukaan.",
      featureAlertTitle: "Salamavahti ilmoittaa", featureAlertText: "Android-ilmoitus kertoo, kun tallennetulla alueella havaitaan uusi salama.",
      featureFocusTitle: "Palaa valittuun paikkaan", featureFocusText: "Kartan kohdistuspainike palauttaa näkymän nopeasti tallennettuun hälytysalueeseen.",
      featureLanguageTitle: "Laitteen kieli", featureLanguageText: "Sovellus käyttää laitteen kieltä Google Playn tarjoamien käännösten mukaan.",
      stepsKicker: "Kolme vaihetta", stepsTitle: "Näin salamavahti otetaan käyttöön", stepOneTitle: "Valitse paikka",
      stepOneText: "Käytä hakua tai GPS:ää. Sijaintilupa on vapaaehtoinen.", stepTwoTitle: "Määritä alue", stepTwoText: "Valitse hälytyssäteeksi 3, 5, 10 tai 20 kilometriä.",
      stepThreeTitle: "Käynnistä salamavahti", stepThreeText: "Salli ilmoitukset ja anna sovelluksen tarkistaa tallennettua aluetta.",
      plansKicker: "Valitse sinulle sopiva tapa", plansTitle: "Free tai Salamatutka Pro",
      plansLead: "Molemmissa versioissa ovat kartta, paikan valinta ja salamavahti. Pro tekee käytöstä mainoksettoman ja nopeamman sovelluksen ollessa auki.",
      freeName: "Salamatutka Free", freePrice: "0 €", freePricePeriod: " aina", freeBenefitOne: "Salamat kartalla ja hälytysalue",
      freeBenefitTwo: "Salamavahti ja Android-ilmoitukset", freeBenefitThree: "Mainos sovelluksen alareunassa", freeBenefitFour: "Aktiivinen tarkistus noin minuutin välein",
      recommended: "Pro", proName: "Salamatutka Pro", monthlyPrice: "1,19 €", yearlyPrice: "12,99 €", perMonth: " / kk", or: "tai", perYear: " / vuosi",
      trial: "Vuositilauksessa 1 kuukausi maksutta uusille tilaajille", proBenefitOne: "Kaikki Free-version ominaisuudet", proBenefitTwo: "Ei mainoksia",
      taxNote: "Hinnat vaihtelevat maittain. Google Play näyttää lopullisen paikallisen hinnan ja verot ennen ostoa.",
      proBenefitThree: "Lähes reaaliaikainen salamaseuranta sovelluksen ollessa auki", proBenefitFour: "Pro-widget kotinäytölle", proBenefitFive: "Tilaus Google Playn kautta",
      backgroundNote: "Kun Salamavahti on käytössä, palvelin lähettää ilmoituksen suoraan valitun alueen uudesta salamasta. Ilmoituksia rajoitetaan enintään yhteen tunnissa, ja käyttäjä voi hiljentää ne kolmeksi tunniksi. Androidin noin 15 minuutin tarkistus toimii varajärjestelmänä; toimitusaikaa ei voida taata.",
      dataKicker: "Avoimet ja tunnetut tietolähteet", dataTitle: "Salamahavainnot Ilmatieteen laitokselta",
      dataText: "AspByten Google Cloud -palvelu hakee FMI Open Datan yhteisen salamahavaintosyötteen normaalisti kerran minuutissa ja tekee uuden toimitettavan salaman jälkeen tarvittaessa yhden lisähaun noin 30 sekunnin kuluttua. Kartta käyttää ensisijaisesti Google Mapsia; Leaflet ja OpenStreetMap toimivat vararatkaisuna.",
      fmiLink: "FMI Open Data ↗", googlePrivacyLink: "Googlen tietosuoja ↗", osmLink: "OpenStreetMap-lisenssi ↗", queryLabel: "Käytetty FMI-kysely", dataWindow: "Kartalla viimeiset 15 minuuttia",
      privacyKicker: "Tietosuoja selkeästi", privacyTitle: "Ei käyttäjätiliä · palvelin käsittelee vain Salamavahdin tarvitsemat tiedot",
      privacyPointOne: "Valittu piste ja säde tallennetaan laitteelle. Salamavahdin ollessa käytössä tarkat koordinaatit, säde ja ilmoituksen toimitustunniste tallennetaan suojatusti palvelimelle.",
      privacyPointTwo: "GPS on vapaaehtoinen. Sovellus ei seuraa liikkeitäsi jatkuvasti eikä palvelin muodosta sijaintihistoriaa. Rekisteröinti poistetaan, kun Salamavahti pysäytetään, ja se vanhenee viimeistään 180 päivässä ilman päivitystä.",
      privacyPointThree: "Ilmainen versio käyttää Google AdMobia. Mainosvalintoja hallitaan Googlen suostumusnäkymällä.", readPrivacy: "Lue koko tietosuojakäytäntö →",
      safetyTitle: "Turvallisuushuomautus", safetyText: "Salamatutka ei ole virallinen vaaravaroitus- tai turvallisuuspalvelu. Havainnoissa ja päivityksissä voi olla viivettä. Noudata aina viranomaisten sää- ja vaaratiedotteita.",
      contactKicker: "AspByte", contactTitle: "Kysyttävää Salamatutkasta?", contactText: "Palautteet, virheilmoitukset ja yhteistyöehdotukset voi lähettää sähköpostitse.", footerMade: "Tehty Suomessa",
      policyPageTitle: "Salamatutkan tietosuojakäytäntö – AspByte", policyTitle: "Salamatutkan tietosuojakäytäntö", policyUpdated: "Voimassa 13.7.2026 alkaen · Viimeksi päivitetty 1.8.2026", backHome: "← Takaisin Salamatutkan etusivulle"
    },
    sv: {
      pageTitle: "Blixtradar – AspByte", pageDescription: "Blixtradar visar färska blixtobservationer på kartan och meddelar om blixtar i det valda området.",
      skipLink: "Gå till innehållet", brandName: "Blixtradar", mainNavLabel: "Huvudmeny", languageLabel: "Språk",
      navFeatures: "Funktioner", navPlans: "Gratis och Pro", navData: "Datakällor", navContact: "Kontakt",
      heroEyebrow: "Android-app · Google Play", heroTitle: "Blixtar nära dig, tydligt på kartan.",
      heroLead: "Välj en plats med sökning eller GPS, ange ett varningsområde på 3–20 kilometer och starta blixtvakten.",
      heroPrimary: "Se funktionerna", privacyPolicy: "Integritetspolicy", heroFactsLabel: "Grundläggande appinformation",
      heroFactOne: "Flera språk · Google Play", heroFactTwo: "FMI Open Data", heroFactThree: "Inget användarkonto",
      previewLabel: "Illustration av Blixtradars kartvy", previewSubtitle: "Blixtar på kartan", previewStatus: "Färska blixtobservationer · 15 min",
      previewPlace: "Plats: Helsingfors · 10 km", previewWatch: "Blixtvakten är aktiv", settings: "Inställningar",
      featuresKicker: "Utformad för snabb användning", featuresTitle: "Det viktigaste syns direkt",
      featuresLead: "Blixtradar fokuserar på en sak: var de senaste blixtarna har observerats och om de finns inom ditt valda område.",
      featureMapTitle: "Färska blixtar på kartan", featureMapText: "Kartan visar observationer som är högst 15 minuter gamla. De nyaste nedslagen syns tydligast.",
      featurePlaceTitle: "Plats via sökning eller GPS", featurePlaceText: "Sök efter en stad eller adress eller använd enhetens position för att välja bevakningsplats.",
      featureRadiusTitle: "Lämpligt varningsområde", featureRadiusText: "Välj enkelt en radie på 3, 5, 10 eller 20 kilometer.",
      featureAlertTitle: "Blixtvakten meddelar", featureAlertText: "En Android-avisering berättar när en ny blixt observeras inom det sparade området.",
      featureFocusTitle: "Återgå till vald plats", featureFocusText: "Kartans centreringsknapp återställer snabbt vyn till det sparade varningsområdet.",
      featureLanguageTitle: "Enhetens språk", featureLanguageText: "Appen använder enhetens språk enligt de översättningar som Google Play erbjuder.",
      stepsKicker: "Tre steg", stepsTitle: "Så aktiverar du blixtvakten", stepOneTitle: "Välj en plats", stepOneText: "Använd sökning eller GPS. Platsbehörighet är valfri.",
      stepTwoTitle: "Ange området", stepTwoText: "Välj en varningsradie på 3, 5, 10 eller 20 kilometer.", stepThreeTitle: "Starta blixtvakten", stepThreeText: "Tillåt aviseringar och låt appen kontrollera det sparade området.",
      plansKicker: "Välj det som passar dig", plansTitle: "Gratis eller Blixtradar Pro",
      plansLead: "Båda versionerna har karta, platsval och blixtvakt. Pro är annonsfri och snabbare när appen är öppen.",
      freeName: "Blixtradar Gratis", freePrice: "0 €", freePricePeriod: " alltid", freeBenefitOne: "Blixtar på kartan och varningsområde",
      freeBenefitTwo: "Blixtvakt och Android-aviseringar", freeBenefitThree: "Annons längst ned i appen", freeBenefitFour: "Aktiv kontroll ungefär varje minut",
      recommended: "Pro", proName: "Blixtradar Pro", monthlyPrice: "14 kr", yearlyPrice: "139 kr", perMonth: " / mån", or: "eller", perYear: " / år",
      trial: "1 månad gratis för nya årsprenumeranter", proBenefitOne: "Alla funktioner i gratisversionen", proBenefitTwo: "Inga annonser",
      taxNote: "Priserna varierar mellan länder. Google Play visar det slutliga lokala priset och skatterna före köpet.",
      proBenefitThree: "Nästan realtidsbaserad blixtövervakning när appen är öppen", proBenefitFour: "Pro-widget på startskärmen", proBenefitFive: "Prenumeration via Google Play",
      backgroundNote: "När Blixtvakten är aktiv skickar servern en direkt avisering om nya blixtar i det valda området. Aviseringar begränsas till högst en per timme, och användaren kan pausa dem i tre timmar. Androids kontroll ungefär var 15:e minut fungerar som reserv; leveranstiden kan inte garanteras.",
      dataKicker: "Öppna och välkända datakällor", dataTitle: "Blixtobservationer från Meteorologiska institutet",
      dataText: "AspBytes Google Cloud-tjänst hämtar det gemensamma blixtflödet från FMI Open Data normalt en gång per minut och gör vid behov en extra hämtning cirka 30 sekunder efter en ny levererbar blixt. Kartan använder främst Google Maps; Leaflet och OpenStreetMap fungerar som reserv.",
      fmiLink: "FMI Open Data ↗", googlePrivacyLink: "Googles integritet ↗", osmLink: "OpenStreetMap-licens ↗", queryLabel: "FMI-fråga som används", dataWindow: "De senaste 15 minuterna på kartan",
      privacyKicker: "Tydlig integritet", privacyTitle: "Inget användarkonto · servern behandlar endast uppgifter som Blixtvakten behöver",
      privacyPointOne: "Den valda punkten och radien sparas på enheten. När Blixtvakten är aktiv lagras exakta koordinater, radie och aviseringsidentifierare säkert på servern.", privacyPointTwo: "GPS är valfritt. Appen följer inte dina rörelser kontinuerligt och servern skapar ingen platshistorik. Registreringen raderas när Blixtvakten stoppas och upphör senast efter 180 dagar utan uppdatering.",
      privacyPointThree: "Gratisversionen använder Google AdMob. Annonsval hanteras i Googles samtyckesvy.", readPrivacy: "Läs hela integritetspolicyn →",
      safetyTitle: "Säkerhetsinformation", safetyText: "Blixtradar är inte en officiell varnings- eller säkerhetstjänst. Observationer och uppdateringar kan vara fördröjda. Följ alltid myndigheternas väder- och faromeddelanden.",
      contactKicker: "AspByte", contactTitle: "Frågor om Blixtradar?", contactText: "Feedback, felrapporter och samarbetsförslag kan skickas via e-post.", footerMade: "Skapad i Finland",
      policyPageTitle: "Blixtradars integritetspolicy – AspByte", policyTitle: "Blixtradars integritetspolicy", policyUpdated: "Gäller från 13.7.2026 · Senast uppdaterad 1.8.2026", backHome: "← Tillbaka till Blixtradars startsida"
    },
    en: {
      pageTitle: "Lightning Radar – AspByte", pageDescription: "Lightning Radar shows recent lightning observations on the map and alerts you to lightning in your selected area.",
      skipLink: "Skip to content", brandName: "Lightning Radar", mainNavLabel: "Main navigation", languageLabel: "Language",
      navFeatures: "Features", navPlans: "Free and Pro", navData: "Data sources", navContact: "Contact",
      heroEyebrow: "Android app · Google Play", heroTitle: "Nearby lightning, clearly shown on the map.",
      heroLead: "Choose a place by search or GPS, set a 3–20 kilometre alert area, and start Lightning Watch.",
      heroPrimary: "Explore features", privacyPolicy: "Privacy policy", heroFactsLabel: "Basic app information",
      heroFactOne: "Multiple languages · Google Play", heroFactTwo: "FMI Open Data", heroFactThree: "No user account",
      previewLabel: "Illustration of the Lightning Radar map view", previewSubtitle: "Lightning on the map", previewStatus: "Recent lightning observations · 15 min",
      previewPlace: "Place: Helsinki · 10 km", previewWatch: "Lightning Watch is active", settings: "Settings",
      featuresKicker: "Designed for quick use", featuresTitle: "The essentials at a glance",
      featuresLead: "Lightning Radar focuses on one thing: where the latest lightning was detected and whether it falls inside your selected area.",
      featureMapTitle: "Recent lightning on the map", featureMapText: "The map shows observations up to 15 minutes old. The newest strikes stand out most clearly.",
      featurePlaceTitle: "Place by search or GPS", featurePlaceText: "Search for a city or address, or use your device location to choose the monitored place.",
      featureRadiusTitle: "A suitable alert area", featureRadiusText: "Easily choose a radius of 3, 5, 10, or 20 kilometres.",
      featureAlertTitle: "Lightning Watch alerts you", featureAlertText: "An Android notification lets you know when new lightning is detected inside the saved area.",
      featureFocusTitle: "Return to the selected place", featureFocusText: "The map focus button quickly returns the view to the saved alert area.",
      featureLanguageTitle: "Device language", featureLanguageText: "The app uses the device language based on translations provided through Google Play.",
      stepsKicker: "Three steps", stepsTitle: "How to start Lightning Watch", stepOneTitle: "Choose a place", stepOneText: "Use search or GPS. Location permission is optional.",
      stepTwoTitle: "Set the area", stepTwoText: "Choose an alert radius of 3, 5, 10, or 20 kilometres.", stepThreeTitle: "Start Lightning Watch", stepThreeText: "Allow notifications and let the app check the saved area.",
      plansKicker: "Choose what suits you", plansTitle: "Free or Lightning Radar Pro",
      plansLead: "Both versions include the map, place selection, and Lightning Watch. Pro is ad-free and faster while the app is open.",
      freeName: "Lightning Radar Free", freePrice: "€0", freePricePeriod: " forever", freeBenefitOne: "Lightning map and alert area",
      freeBenefitTwo: "Lightning Watch and Android notifications", freeBenefitThree: "An ad at the bottom of the app", freeBenefitFour: "Active checks about once a minute",
      recommended: "Pro", proName: "Lightning Radar Pro", monthlyPrice: "from €1.19", yearlyPrice: "from €11.99", perMonth: " / month", or: "or", perYear: " / year",
      trial: "1 month free for new annual subscribers", proBenefitOne: "Everything in the Free version", proBenefitTwo: "No ads",
      taxNote: "Prices vary by country. Google Play shows the final local price and taxes before purchase.",
      proBenefitThree: "Near-real-time lightning monitoring while the app is open", proBenefitFour: "Pro home-screen widget", proBenefitFive: "Subscription through Google Play",
      backgroundNote: "When Lightning Watch is active, the server sends a direct alert for new lightning in the selected area. Alerts are limited to at most one per hour, and the user can mute them for three hours. Android’s approximately 15-minute check acts as a fallback; delivery time cannot be guaranteed.",
      dataKicker: "Open and established data sources", dataTitle: "Lightning observations from the Finnish Meteorological Institute",
      dataText: "AspByte's Google Cloud service normally retrieves the shared lightning feed from FMI Open Data once per minute and, when needed, makes one extra request about 30 seconds after a new deliverable strike. The map primarily uses Google Maps; Leaflet and OpenStreetMap act as a fallback.",
      fmiLink: "FMI Open Data ↗", googlePrivacyLink: "Google privacy ↗", osmLink: "OpenStreetMap licence ↗", queryLabel: "FMI query used", dataWindow: "The latest 15 minutes on the map",
      privacyKicker: "Privacy made clear", privacyTitle: "No user account · the server processes only the data Lightning Watch needs",
      privacyPointOne: "The selected point and radius are stored on the device. While Lightning Watch is active, exact coordinates, radius and a notification delivery identifier are securely stored on the server.", privacyPointTwo: "GPS is optional. The app does not continuously track your movements, and the server does not build location history. Registration is deleted when Lightning Watch is stopped and expires within 180 days without an update.",
      privacyPointThree: "The Free version uses Google AdMob. Ad choices are managed through Google's consent interface.", readPrivacy: "Read the full privacy policy →",
      safetyTitle: "Safety notice", safetyText: "Lightning Radar is not an official hazard warning or safety service. Observations and updates may be delayed. Always follow official weather and hazard warnings.",
      contactKicker: "AspByte", contactTitle: "Questions about Lightning Radar?", contactText: "Feedback, bug reports, and partnership enquiries are welcome by email.", footerMade: "Made in Finland",
      policyPageTitle: "Lightning Radar Privacy Policy – AspByte", policyTitle: "Lightning Radar Privacy Policy", policyUpdated: "Effective 13 July 2026 · Last updated 1 August 2026", backHome: "← Back to the Lightning Radar home page"
    }
  };

  const supported = ["fi", "sv", "en"];
  const getSavedLanguage = () => {
    try {
      const saved = localStorage.getItem("aspbyte-language");
      if (supported.includes(saved)) return saved;
    } catch (_) {}
    const browserLanguage = (navigator.language || "fi").toLowerCase();
    if (browserLanguage.startsWith("sv")) return "sv";
    if (browserLanguage.startsWith("en")) return "en";
    return "fi";
  };

  const setLanguage = (language) => {
    const lang = supported.includes(language) ? language : "fi";
    const dictionary = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-lang-section]").forEach((section) => {
      section.hidden = section.dataset.langSection !== lang;
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langButton === lang));
    });

    const isPolicy = document.body.dataset.page === "privacy";
    document.title = isPolicy ? dictionary.policyPageTitle : dictionary.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description && !isPolicy) description.setAttribute("content", dictionary.pageDescription);
    try { localStorage.setItem("aspbyte-language", lang); } catch (_) {}
  };

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });
  setLanguage(getSavedLanguage());
})();
