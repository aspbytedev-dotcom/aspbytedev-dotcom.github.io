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
      heroFactOne: "Suomi + 7 kieliversiota", heroFactTwo: "FMI Open Data", heroFactThree: "Ei käyttäjätiliä",
      previewLabel: "Salamatutkan karttanäkymän havainnekuva", previewSubtitle: "Salamat kartalla", previewStatus: "Tuoreet salamahavainnot · 15 min",
      previewPlace: "Paikka: Helsinki · 10 km", previewWatch: "Salamavahti käytössä", settings: "Asetukset",
      featuresKicker: "Suunniteltu nopeaan käyttöön", featuresTitle: "Oleellinen näkyy yhdellä silmäyksellä",
      featuresLead: "Salamatutka keskittyy yhteen asiaan: missä tuoreimmat salamat on havaittu ja osuuko havainto valitsemallesi alueelle.",
      featureMapTitle: "Tuoreet salamat kartalla", featureMapText: "Kartalla näkyvät enintään 15 minuuttia vanhat havainnot. Uusimmat iskut erottuvat selkeimmin.",
      featurePlaceTitle: "Paikka haulla tai GPS:llä", featurePlaceText: "Hae kaupunkia tai osoitetta tai käytä laitteen sijaintia seurantapaikan valintaan.",
      featureRadiusTitle: "Sopiva hälytysalue", featureRadiusText: "Valitse helposti 3, 5, 10 tai 20 kilometrin säde oman tarpeesi mukaan.",
      featureAlertTitle: "Salamavahti ilmoittaa", featureAlertText: "Android-ilmoitus kertoo, kun tallennetulla alueella havaitaan uusi salama.",
      featureFocusTitle: "Palaa valittuun paikkaan", featureFocusText: "Kartan kohdistuspainike palauttaa näkymän nopeasti tallennettuun hälytysalueeseen.",
      featureLanguageTitle: "Useita kieliä", featureLanguageText: "Google Play tarjoaa sovelluksen suomeksi ja seitsemällä muulla kielellä laitteen kieliasetuksen mukaan.",
      stepsKicker: "Kolme vaihetta", stepsTitle: "Näin salamavahti otetaan käyttöön", stepOneTitle: "Valitse paikka",
      stepOneText: "Käytä hakua tai GPS:ää. Sijaintilupa on vapaaehtoinen.", stepTwoTitle: "Määritä alue", stepTwoText: "Valitse hälytyssäteeksi 3, 5, 10 tai 20 kilometriä.",
      stepThreeTitle: "Käynnistä salamavahti", stepThreeText: "Salli ilmoitukset. Palvelin lähettää varoituksen, kun alueella havaitaan uusi salama.",
      plansKicker: "Valitse sinulle sopiva tapa", plansTitle: "Free tai Salamatutka Pro",
      plansLead: "Molemmissa versioissa ovat kartta, paikan valinta ja salamavahti. Pro tekee käytöstä mainoksettoman ja nopeamman sovelluksen ollessa auki.",
      freeName: "Salamatutka Free", freePrice: "0 €", freePricePeriod: " aina", freeBenefitOne: "Salamat kartalla ja hälytysalue",
      freeBenefitTwo: "Salamavahti ja Android-ilmoitukset", freeBenefitThree: "Mainos sovelluksen alareunassa", freeBenefitFour: "Aktiivinen tarkistus noin minuutin välein",
      recommended: "Pro", proName: "Salamatutka Pro", monthlyPrice: "1,19 €", yearlyPrice: "12,99 €", perMonth: " / kk", or: "tai", perYear: " / vuosi",
      trial: "Vuositilauksessa 1 kuukausi maksutta uusille tilaajille", proBenefitOne: "Kaikki Free-version ominaisuudet", proBenefitTwo: "Ei mainoksia",
      taxNote: "Hinnat vaihtelevat maittain. Google Play näyttää lopullisen paikallisen hinnan ja verot ennen ostoa.",
      proBenefitThree: "Lähes reaaliaikainen salamaseuranta sovelluksen ollessa auki", proBenefitFour: "Tilaus Google Playn kautta",
      backgroundNote: "Salamavahti vastaanottaa palvelinvaroituksia myös taustalla. Ilmoituksia rajoitetaan enintään yhteen tunnissa, ja käyttäjä voi hiljentää ne kolmeksi tunniksi. Androidin noin 15 minuutin tarkistus toimii varajärjestelmänä; toimitusaikaa ei voida taata.",
      dataKicker: "Avoimet ja tunnetut tietolähteet", dataTitle: "Salamahavainnot Ilmatieteen laitokselta",
      dataText: "Salamatutkan pilvipalvelu hakee Ilmatieteen laitoksen avoimen salamasyötteen noin kerran minuutissa ja tekee tarvittaessa yhden lisähaun 30 sekunnin kuluttua. Sovellus näyttää viimeisten 15 minuutin havainnot. Google Maps on ensisijainen kartta ja OpenStreetMap/Leaflet varavaihtoehto.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap-lisenssi ↗", queryLabel: "Käytetty FMI-kysely", dataWindow: "Kartalla viimeiset 15 minuuttia",
      privacyKicker: "Tietosuoja selkeästi", privacyTitle: "Ei käyttäjätiliä eikä jatkuvaa sijainnin seurantaa",
      privacyPointOne: "Kun salamavahti on päällä, palvelin säilyttää yhden valitun seurantapisteen ja säteen suoran varoituksen toimittamista varten.",
      privacyPointTwo: "GPS on vapaaehtoinen eikä sovellus seuraa sijaintiasi taustalla.",
      privacyPointThree: "Uusi valinta korvaa edellisen. Palvelin ei muodosta liike- tai sijaintihistoriaa, ja rekisteröinti vanhenee viimeistään 180 vuorokaudessa.", readPrivacy: "Lue koko tietosuojakäytäntö →",
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
      heroFactOne: "Finska + 7 språkversioner", heroFactTwo: "FMI Open Data", heroFactThree: "Inget användarkonto",
      previewLabel: "Illustration av Blixtradars kartvy", previewSubtitle: "Blixtar på kartan", previewStatus: "Färska blixtobservationer · 15 min",
      previewPlace: "Plats: Helsingfors · 10 km", previewWatch: "Blixtvakten är aktiv", settings: "Inställningar",
      featuresKicker: "Utformad för snabb användning", featuresTitle: "Det viktigaste syns direkt",
      featuresLead: "Blixtradar fokuserar på en sak: var de senaste blixtarna har observerats och om de finns inom ditt valda område.",
      featureMapTitle: "Färska blixtar på kartan", featureMapText: "Kartan visar observationer som är högst 15 minuter gamla. De nyaste nedslagen syns tydligast.",
      featurePlaceTitle: "Plats via sökning eller GPS", featurePlaceText: "Sök efter en stad eller adress eller använd enhetens position för att välja bevakningsplats.",
      featureRadiusTitle: "Lämpligt varningsområde", featureRadiusText: "Välj enkelt en radie på 3, 5, 10 eller 20 kilometer.",
      featureAlertTitle: "Blixtvakten meddelar", featureAlertText: "En Android-avisering berättar när en ny blixt observeras inom det sparade området.",
      featureFocusTitle: "Återgå till vald plats", featureFocusText: "Kartans centreringsknapp återställer snabbt vyn till det sparade varningsområdet.",
      featureLanguageTitle: "Flera språk", featureLanguageText: "Google Play erbjuder appen på finska och sju andra språk enligt enhetens språkinställning.",
      stepsKicker: "Tre steg", stepsTitle: "Så aktiverar du blixtvakten", stepOneTitle: "Välj en plats", stepOneText: "Använd sökning eller GPS. Platsbehörighet är valfri.",
      stepTwoTitle: "Ange området", stepTwoText: "Välj en varningsradie på 3, 5, 10 eller 20 kilometer.", stepThreeTitle: "Starta blixtvakten", stepThreeText: "Tillåt aviseringar. Servern skickar en varning när en ny blixt observeras inom området.",
      plansKicker: "Välj det som passar dig", plansTitle: "Gratis eller Blixtradar Pro",
      plansLead: "Båda versionerna har karta, platsval och blixtvakt. Pro är annonsfri och snabbare när appen är öppen.",
      freeName: "Blixtradar Gratis", freePrice: "0 €", freePricePeriod: " alltid", freeBenefitOne: "Blixtar på kartan och varningsområde",
      freeBenefitTwo: "Blixtvakt och Android-aviseringar", freeBenefitThree: "Annons längst ned i appen", freeBenefitFour: "Aktiv kontroll ungefär varje minut",
      recommended: "Pro", proName: "Blixtradar Pro", monthlyPrice: "14 kr", yearlyPrice: "139 kr", perMonth: " / mån", or: "eller", perYear: " / år",
      trial: "1 månad gratis för nya årsprenumeranter", proBenefitOne: "Alla funktioner i gratisversionen", proBenefitTwo: "Inga annonser",
      taxNote: "Priserna varierar mellan länder. Google Play visar det slutliga lokala priset och skatterna före köpet.",
      proBenefitThree: "Nästan realtidsbaserad blixtövervakning när appen är öppen", proBenefitFour: "Prenumeration via Google Play",
      backgroundNote: "Blixtvakten tar emot servervarningar även i bakgrunden. Aviseringar begränsas till högst en per timme, och användaren kan pausa dem i tre timmar. Androids kontroll ungefär var 15:e minut fungerar som reserv; leveranstiden kan inte garanteras.",
      dataKicker: "Öppna och välkända datakällor", dataTitle: "Blixtobservationer från Meteorologiska institutet",
      dataText: "Blixtradars molntjänst hämtar Meteorologiska institutets öppna blixtdata ungefär en gång per minut och gör vid behov en extra hämtning efter 30 sekunder. Appen visar observationerna från de senaste 15 minuterna. Google Maps är primärkarta och OpenStreetMap/Leaflet är reservalternativ.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap-licens ↗", queryLabel: "FMI-fråga som används", dataWindow: "De senaste 15 minuterna på kartan",
      privacyKicker: "Tydlig integritet", privacyTitle: "Inget användarkonto och ingen kontinuerlig platsspårning",
      privacyPointOne: "När blixtvakten är aktiv lagrar servern en vald bevakningspunkt och radie för att leverera direkta varningar.", privacyPointTwo: "GPS är valfritt och appen följer inte din position i bakgrunden.",
      privacyPointThree: "Ett nytt val ersätter det föregående. Servern skapar ingen rörelse- eller platshistorik, och registreringen upphör senast efter 180 dagar.", readPrivacy: "Läs hela integritetspolicyn →",
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
      heroFactOne: "Finnish + 7 language versions", heroFactTwo: "FMI Open Data", heroFactThree: "No user account",
      previewLabel: "Illustration of the Lightning Radar map view", previewSubtitle: "Lightning on the map", previewStatus: "Recent lightning observations · 15 min",
      previewPlace: "Place: Helsinki · 10 km", previewWatch: "Lightning Watch is active", settings: "Settings",
      featuresKicker: "Designed for quick use", featuresTitle: "The essentials at a glance",
      featuresLead: "Lightning Radar focuses on one thing: where the latest lightning was detected and whether it falls inside your selected area.",
      featureMapTitle: "Recent lightning on the map", featureMapText: "The map shows observations up to 15 minutes old. The newest strikes stand out most clearly.",
      featurePlaceTitle: "Place by search or GPS", featurePlaceText: "Search for a city or address, or use your device location to choose the monitored place.",
      featureRadiusTitle: "A suitable alert area", featureRadiusText: "Easily choose a radius of 3, 5, 10, or 20 kilometres.",
      featureAlertTitle: "Lightning Watch alerts you", featureAlertText: "An Android notification lets you know when new lightning is detected inside the saved area.",
      featureFocusTitle: "Return to the selected place", featureFocusText: "The map focus button quickly returns the view to the saved alert area.",
      featureLanguageTitle: "Multiple languages", featureLanguageText: "Google Play offers the app in Finnish and seven other languages based on the device language.",
      stepsKicker: "Three steps", stepsTitle: "How to start Lightning Watch", stepOneTitle: "Choose a place", stepOneText: "Use search or GPS. Location permission is optional.",
      stepTwoTitle: "Set the area", stepTwoText: "Choose an alert radius of 3, 5, 10, or 20 kilometres.", stepThreeTitle: "Start Lightning Watch", stepThreeText: "Allow notifications. The server sends an alert when new lightning is detected inside the area.",
      plansKicker: "Choose what suits you", plansTitle: "Free or Lightning Radar Pro",
      plansLead: "Both versions include the map, place selection, and Lightning Watch. Pro is ad-free and faster while the app is open.",
      freeName: "Lightning Radar Free", freePrice: "€0", freePricePeriod: " forever", freeBenefitOne: "Lightning map and alert area",
      freeBenefitTwo: "Lightning Watch and Android notifications", freeBenefitThree: "An ad at the bottom of the app", freeBenefitFour: "Active checks about once a minute",
      recommended: "Pro", proName: "Lightning Radar Pro", monthlyPrice: "from €1.19", yearlyPrice: "from €11.99", perMonth: " / month", or: "or", perYear: " / year",
      trial: "1 month free for new annual subscribers", proBenefitOne: "Everything in the Free version", proBenefitTwo: "No ads",
      taxNote: "Prices vary by country. Google Play shows the final local price and taxes before purchase.",
      proBenefitThree: "Near-real-time lightning monitoring while the app is open", proBenefitFour: "Subscription through Google Play",
      backgroundNote: "Lightning Watch receives server alerts in the background. Alerts are limited to at most one per hour, and the user can mute them for three hours. Android's approximately 15-minute check remains as a fallback; delivery time cannot be guaranteed.",
      dataKicker: "Open and established data sources", dataTitle: "Lightning observations from the Finnish Meteorological Institute",
      dataText: "The Lightning Radar cloud service retrieves the Finnish Meteorological Institute's open lightning feed about once per minute and, when needed, makes one additional request after 30 seconds. The app shows observations from the latest 15 minutes. Google Maps is primary, with OpenStreetMap/Leaflet as a fallback.",
      fmiLink: "FMI Open Data ↗", osmLink: "OpenStreetMap licence ↗", queryLabel: "FMI query used", dataWindow: "The latest 15 minutes on the map",
      privacyKicker: "Privacy made clear", privacyTitle: "No user account and no continuous location tracking",
      privacyPointOne: "While Lightning Watch is active, the server stores one selected watch point and radius to deliver direct warnings.", privacyPointTwo: "GPS is optional, and the app does not track your location in the background.",
      privacyPointThree: "A new selection replaces the previous one. The server creates no movement or location history, and the registration expires within 180 days.", readPrivacy: "Read the full privacy policy →",
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
