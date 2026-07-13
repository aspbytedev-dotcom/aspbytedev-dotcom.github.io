(() => {
  const translations = {
    fi: {
      pageTitle: "Salamatutka – AspByte",
      pageDescription: "Salamatutka näyttää tuoreet salamahavainnot kartalla ja ilmoittaa valitsemallasi alueella havaituista salamoista.",
      skipLink: "Siirry sisältöön", brandName: "Salamatutka", mainNavLabel: "Päävalikko", languageLabel: "Kieli",
      navFeatures: "Ominaisuudet", navPlans: "Free ja Pro", navData: "Tietolähteet", navContact: "Yhteys",
      heroEyebrow: "Android-sovellus · suljettu testaus", heroTitle: "Salamat lähelläsi, selkeästi kartalla.",
      heroLead: "Valitse paikka haulla tai GPS:llä, määritä 3–20 kilometrin hälytysalue ja käynnistä salamavahti.",
      heroPrimary: "Tutustu ominaisuuksiin", privacyPolicy: "Tietosuojakäytäntö", heroFactsLabel: "Sovelluksen perustiedot",
      heroFactOne: "Suomi · Ruotsi · Englanti", heroFactTwo: "FMI Open Data", heroFactThree: "Ei käyttäjätiliä",
      previewLabel: "Salamatutkan karttanäkymän havainnekuva", previewSubtitle: "Salamat kartalla", previewStatus: "Tuoreet salamahavainnot · 15 min",
      previewPlace: "Paikka: Helsinki · 10 km", previewWatch: "Salamavahti käytössä", settings: "Asetukset",
      featuresKicker: "Suunniteltu nopeaan käyttöön", featuresTitle: "Oleellinen näkyy yhdellä silmäyksellä",
      featuresLead: "Salamatutka keskittyy yhteen asiaan: missä tuoreimmat salamat on havaittu ja osuuko havainto valitsemallesi alueelle.",
      featureMapTitle: "Tuoreet salamat kartalla", featureMapText: "Kartalla näkyvät enintään 15 minuuttia vanhat havainnot. Uusimmat iskut erottuvat selkeimmin.",
      featurePlaceTitle: "Paikka haulla tai GPS:llä", featurePlaceText: "Hae kaupunkia tai osoitetta tai käytä laitteen sijaintia seurantapaikan valintaan.",
      featureRadiusTitle: "Sopiva hälytysalue", featureRadiusText: "Valitse helposti 3, 5, 10 tai 20 kilometrin säde oman tarpeesi mukaan.",
      featureAlertTitle: "Salamavahti ilmoittaa", featureAlertText: "Android-ilmoitus kertoo, kun tallennetulla alueella havaitaan uusi salama.",
      featureFocusTitle: "Palaa valittuun paikkaan", featureFocusText: "Kartan kohdistuspainike palauttaa näkymän nopeasti tallennettuun hälytysalueeseen.",
      featureLanguageTitle: "Kolme kieltä", featureLanguageText: "Sovellus toimii suomeksi, ruotsiksi ja englanniksi valitun kieliasetuksen mukaan.",
      stepsKicker: "Kolme vaihetta", stepsTitle: "Näin salamavahti otetaan käyttöön", stepOneTitle: "Valitse paikka",
      stepOneText: "Käytä hakua tai GPS:ää. Sijaintilupa on vapaaehtoinen.", stepTwoTitle: "Määritä alue", stepTwoText: "Valitse hälytyssäteeksi 3, 5, 10 tai 20 kilometriä.",
      stepThreeTitle: "Käynnistä salamavahti", stepThreeText: "Salli ilmoitukset ja anna sovelluksen tarkistaa tallennettua aluetta.",
      plansKicker: "Valitse sinulle sopiva tapa", plansTitle: "Free tai Salamatutka Pro",
      plansLead: "Molemmissa versioissa ovat kartta, paikan valinta ja salamavahti. Pro tekee käytöstä mainoksettoman ja nopeamman sovelluksen ollessa auki.",
      freeName: "Salamatutka Free", freePrice: "0 €", freePricePeriod: " aina", freeBenefitOne: "Salamat kartalla ja hälytysalue",
      freeBenefitTwo: "Salamavahti ja Android-ilmoitukset", freeBenefitThree: "Mainos sovelluksen alareunassa", freeBenefitFour: "Aktiivinen tarkistus noin minuutin välein",
      recommended: "Pro", proName: "Salamatutka Pro", monthlyPrice: "0,99 € + ALV", yearlyPrice: "9,99 € + ALV", perMonth: " / kk", or: "tai", perYear: " / vuosi",
      trial: "Vuositilauksessa 1 kuukausi maksutta uusille tilaajille", proBenefitOne: "Kaikki Free-version ominaisuudet", proBenefitTwo: "Ei mainoksia",
      taxNote: "Google Play näyttää lopullisen hinnan sovellettavine veroineen ennen ostoa.",
      proBenefitThree: "Lähes reaaliaikainen salamaseuranta sovelluksen ollessa auki", proBenefitFour: "Tilaus Google Playn kautta",
      backgroundNote: "Taustalla Android ajoittaa tarkistukset akun ja laitteen asetusten mukaan, tavallisesti noin 15 minuutin välein. Taustatoiminta ei ole reaaliaikainen.",
      dataKicker: "Avoimet ja tunnetut tietolähteet", dataTitle: "Salamahavainnot Ilmatieteen laitokselta",
      dataText: "Sovellus hakee havaitut salamat Ilmatieteen laitoksen avoimesta WFS-palvelusta. Karttapohja on OpenStreetMapista. Havaintoja suodatetaan ajan, kartta-alueen ja valitsemasi säteen perusteella.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap-lisenssi ↗", queryLabel: "Käytetty FMI-kysely", dataWindow: "Kartalla viimeiset 15 minuuttia",
      privacyKicker: "Tietosuoja selkeästi", privacyTitle: "Ei käyttäjätiliä eikä AspByten omaa taustapalvelinta",
      privacyPointOne: "Valittu paikka, säde ja salamavahdin asetukset tallennetaan laitteellesi.",
      privacyPointTwo: "GPS on vapaaehtoinen eikä sovellus seuraa sijaintiasi taustalla.",
      privacyPointThree: "Ilmainen versio käyttää Google AdMobia. Mainosvalintoja hallitaan Googlen suostumusnäkymällä.", readPrivacy: "Lue koko tietosuojakäytäntö →",
      safetyTitle: "Turvallisuushuomautus", safetyText: "Salamatutka ei ole virallinen vaaravaroitus- tai turvallisuuspalvelu. Havainnoissa ja päivityksissä voi olla viivettä. Noudata aina viranomaisten sää- ja vaaratiedotteita.",
      contactKicker: "AspByte", contactTitle: "Kysyttävää Salamatutkasta?", contactText: "Palautteet, virheilmoitukset ja yhteistyöehdotukset voi lähettää sähköpostitse.", footerMade: "Tehty Suomessa",
      policyPageTitle: "Salamatutkan tietosuojakäytäntö – AspByte", policyTitle: "Salamatutkan tietosuojakäytäntö", policyUpdated: "Voimassa 13.7.2026 alkaen · Viimeksi päivitetty 13.7.2026", backHome: "← Takaisin Salamatutkan etusivulle"
    },
    sv: {
      pageTitle: "Blixtradar – AspByte", pageDescription: "Blixtradar visar färska blixtobservationer på kartan och meddelar om blixtar i det valda området.",
      skipLink: "Gå till innehållet", brandName: "Blixtradar", mainNavLabel: "Huvudmeny", languageLabel: "Språk",
      navFeatures: "Funktioner", navPlans: "Gratis och Pro", navData: "Datakällor", navContact: "Kontakt",
      heroEyebrow: "Android-app · sluten testning", heroTitle: "Blixtar nära dig, tydligt på kartan.",
      heroLead: "Välj en plats med sökning eller GPS, ange ett varningsområde på 3–20 kilometer och starta blixtvakten.",
      heroPrimary: "Se funktionerna", privacyPolicy: "Integritetspolicy", heroFactsLabel: "Grundläggande appinformation",
      heroFactOne: "Finska · Svenska · Engelska", heroFactTwo: "FMI Open Data", heroFactThree: "Inget användarkonto",
      previewLabel: "Illustration av Blixtradars kartvy", previewSubtitle: "Blixtar på kartan", previewStatus: "Färska blixtobservationer · 15 min",
      previewPlace: "Plats: Helsingfors · 10 km", previewWatch: "Blixtvakten är aktiv", settings: "Inställningar",
      featuresKicker: "Utformad för snabb användning", featuresTitle: "Det viktigaste syns direkt",
      featuresLead: "Blixtradar fokuserar på en sak: var de senaste blixtarna har observerats och om de finns inom ditt valda område.",
      featureMapTitle: "Färska blixtar på kartan", featureMapText: "Kartan visar observationer som är högst 15 minuter gamla. De nyaste nedslagen syns tydligast.",
      featurePlaceTitle: "Plats via sökning eller GPS", featurePlaceText: "Sök efter en stad eller adress eller använd enhetens position för att välja bevakningsplats.",
      featureRadiusTitle: "Lämpligt varningsområde", featureRadiusText: "Välj enkelt en radie på 3, 5, 10 eller 20 kilometer.",
      featureAlertTitle: "Blixtvakten meddelar", featureAlertText: "En Android-avisering berättar när en ny blixt observeras inom det sparade området.",
      featureFocusTitle: "Återgå till vald plats", featureFocusText: "Kartans centreringsknapp återställer snabbt vyn till det sparade varningsområdet.",
      featureLanguageTitle: "Tre språk", featureLanguageText: "Appen fungerar på finska, svenska och engelska enligt den valda språkinställningen.",
      stepsKicker: "Tre steg", stepsTitle: "Så aktiverar du blixtvakten", stepOneTitle: "Välj en plats", stepOneText: "Använd sökning eller GPS. Platsbehörighet är valfri.",
      stepTwoTitle: "Ange området", stepTwoText: "Välj en varningsradie på 3, 5, 10 eller 20 kilometer.", stepThreeTitle: "Starta blixtvakten", stepThreeText: "Tillåt aviseringar och låt appen kontrollera det sparade området.",
      plansKicker: "Välj det som passar dig", plansTitle: "Gratis eller Blixtradar Pro",
      plansLead: "Båda versionerna har karta, platsval och blixtvakt. Pro är annonsfri och snabbare när appen är öppen.",
      freeName: "Blixtradar Gratis", freePrice: "0 €", freePricePeriod: " alltid", freeBenefitOne: "Blixtar på kartan och varningsområde",
      freeBenefitTwo: "Blixtvakt och Android-aviseringar", freeBenefitThree: "Annons längst ned i appen", freeBenefitFour: "Aktiv kontroll ungefär varje minut",
      recommended: "Pro", proName: "Blixtradar Pro", monthlyPrice: "0,99 € + moms", yearlyPrice: "9,99 € + moms", perMonth: " / mån", or: "eller", perYear: " / år",
      trial: "1 månad gratis för nya årsprenumeranter", proBenefitOne: "Alla funktioner i gratisversionen", proBenefitTwo: "Inga annonser",
      taxNote: "Google Play visar slutpriset inklusive tillämpliga skatter före köpet.",
      proBenefitThree: "Nästan realtidsbaserad blixtövervakning när appen är öppen", proBenefitFour: "Prenumeration via Google Play",
      backgroundNote: "I bakgrunden schemalägger Android kontroller enligt batteri- och enhetsinställningarna, vanligtvis ungefär var 15:e minut. Bakgrundsfunktionen är inte i realtid.",
      dataKicker: "Öppna och välkända datakällor", dataTitle: "Blixtobservationer från Meteorologiska institutet",
      dataText: "Appen hämtar observerade blixtar från Meteorologiska institutets öppna WFS-tjänst. Kartunderlaget kommer från OpenStreetMap. Observationerna filtreras efter tid, kartområde och vald radie.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap-licens ↗", queryLabel: "FMI-fråga som används", dataWindow: "De senaste 15 minuterna på kartan",
      privacyKicker: "Tydlig integritet", privacyTitle: "Inget användarkonto och ingen egen AspByte-server",
      privacyPointOne: "Vald plats, radie och blixtvaktens inställningar lagras på din enhet.", privacyPointTwo: "GPS är valfritt och appen följer inte din position i bakgrunden.",
      privacyPointThree: "Gratisversionen använder Google AdMob. Annonsval hanteras i Googles samtyckesvy.", readPrivacy: "Läs hela integritetspolicyn →",
      safetyTitle: "Säkerhetsinformation", safetyText: "Blixtradar är inte en officiell varnings- eller säkerhetstjänst. Observationer och uppdateringar kan vara fördröjda. Följ alltid myndigheternas väder- och faromeddelanden.",
      contactKicker: "AspByte", contactTitle: "Frågor om Blixtradar?", contactText: "Feedback, felrapporter och samarbetsförslag kan skickas via e-post.", footerMade: "Skapad i Finland",
      policyPageTitle: "Blixtradars integritetspolicy – AspByte", policyTitle: "Blixtradars integritetspolicy", policyUpdated: "Gäller från 13.7.2026 · Senast uppdaterad 13.7.2026", backHome: "← Tillbaka till Blixtradars startsida"
    },
    en: {
      pageTitle: "Lightning Radar – AspByte", pageDescription: "Lightning Radar shows recent lightning observations on the map and alerts you to lightning in your selected area.",
      skipLink: "Skip to content", brandName: "Lightning Radar", mainNavLabel: "Main navigation", languageLabel: "Language",
      navFeatures: "Features", navPlans: "Free and Pro", navData: "Data sources", navContact: "Contact",
      heroEyebrow: "Android app · closed testing", heroTitle: "Nearby lightning, clearly shown on the map.",
      heroLead: "Choose a place by search or GPS, set a 3–20 kilometre alert area, and start Lightning Watch.",
      heroPrimary: "Explore features", privacyPolicy: "Privacy policy", heroFactsLabel: "Basic app information",
      heroFactOne: "Finnish · Swedish · English", heroFactTwo: "FMI Open Data", heroFactThree: "No user account",
      previewLabel: "Illustration of the Lightning Radar map view", previewSubtitle: "Lightning on the map", previewStatus: "Recent lightning observations · 15 min",
      previewPlace: "Place: Helsinki · 10 km", previewWatch: "Lightning Watch is active", settings: "Settings",
      featuresKicker: "Designed for quick use", featuresTitle: "The essentials at a glance",
      featuresLead: "Lightning Radar focuses on one thing: where the latest lightning was detected and whether it falls inside your selected area.",
      featureMapTitle: "Recent lightning on the map", featureMapText: "The map shows observations up to 15 minutes old. The newest strikes stand out most clearly.",
      featurePlaceTitle: "Place by search or GPS", featurePlaceText: "Search for a city or address, or use your device location to choose the monitored place.",
      featureRadiusTitle: "A suitable alert area", featureRadiusText: "Easily choose a radius of 3, 5, 10, or 20 kilometres.",
      featureAlertTitle: "Lightning Watch alerts you", featureAlertText: "An Android notification lets you know when new lightning is detected inside the saved area.",
      featureFocusTitle: "Return to the selected place", featureFocusText: "The map focus button quickly returns the view to the saved alert area.",
      featureLanguageTitle: "Three languages", featureLanguageText: "The app works in Finnish, Swedish, and English according to the selected language setting.",
      stepsKicker: "Three steps", stepsTitle: "How to start Lightning Watch", stepOneTitle: "Choose a place", stepOneText: "Use search or GPS. Location permission is optional.",
      stepTwoTitle: "Set the area", stepTwoText: "Choose an alert radius of 3, 5, 10, or 20 kilometres.", stepThreeTitle: "Start Lightning Watch", stepThreeText: "Allow notifications and let the app check the saved area.",
      plansKicker: "Choose what suits you", plansTitle: "Free or Lightning Radar Pro",
      plansLead: "Both versions include the map, place selection, and Lightning Watch. Pro is ad-free and faster while the app is open.",
      freeName: "Lightning Radar Free", freePrice: "€0", freePricePeriod: " forever", freeBenefitOne: "Lightning map and alert area",
      freeBenefitTwo: "Lightning Watch and Android notifications", freeBenefitThree: "An ad at the bottom of the app", freeBenefitFour: "Active checks about once a minute",
      recommended: "Pro", proName: "Lightning Radar Pro", monthlyPrice: "€0.99 + applicable VAT", yearlyPrice: "€9.99 + applicable VAT", perMonth: " / month", or: "or", perYear: " / year",
      trial: "1 month free for new annual subscribers", proBenefitOne: "Everything in the Free version", proBenefitTwo: "No ads",
      taxNote: "Google Play shows the final price including applicable taxes before purchase.",
      proBenefitThree: "Near-real-time lightning monitoring while the app is open", proBenefitFour: "Subscription through Google Play",
      backgroundNote: "In the background, Android schedules checks according to battery and device settings, usually about every 15 minutes. Background operation is not real-time.",
      dataKicker: "Open and established data sources", dataTitle: "Lightning observations from the Finnish Meteorological Institute",
      dataText: "The app retrieves detected lightning from the Finnish Meteorological Institute's open WFS service. The map base comes from OpenStreetMap. Observations are filtered by time, map area, and your selected radius.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap licence ↗", queryLabel: "FMI query used", dataWindow: "The latest 15 minutes on the map",
      privacyKicker: "Privacy made clear", privacyTitle: "No user account and no AspByte backend server",
      privacyPointOne: "Your selected place, radius, and Lightning Watch settings are stored on your device.", privacyPointTwo: "GPS is optional, and the app does not track your location in the background.",
      privacyPointThree: "The Free version uses Google AdMob. Ad choices are managed through Google's consent interface.", readPrivacy: "Read the full privacy policy →",
      safetyTitle: "Safety notice", safetyText: "Lightning Radar is not an official hazard warning or safety service. Observations and updates may be delayed. Always follow official weather and hazard warnings.",
      contactKicker: "AspByte", contactTitle: "Questions about Lightning Radar?", contactText: "Feedback, bug reports, and partnership enquiries are welcome by email.", footerMade: "Made in Finland",
      policyPageTitle: "Lightning Radar Privacy Policy – AspByte", policyTitle: "Lightning Radar Privacy Policy", policyUpdated: "Effective 13 July 2026 · Last updated 13 July 2026", backHome: "← Back to the Lightning Radar home page"
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
