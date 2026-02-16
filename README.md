# BilliardSoftware Website

Website voor BilliardSoftware - Gratis biljartsoftware voor clubs.

## ⚠️ Onderhoudsstatusmededeling

**BilliardScore en BilliardAdmin worden momenteel niet meer actief onderhouden.** De software blijft beschikbaar voor download en gebruik, maar er worden geen updates of nieuwe functies meer toegevoegd. Mogelijk wordt er in de toekomst nieuwe software ontwikkeld.

## Overzicht

Deze website promoot BilliardScore en BilliardAdmin, twee gratis Windows applicaties die samen een complete oplossing vormen voor het beheren van biljartcompetities:

- **BilliardScore (Front Office)**: Scorebord software voor het tonen en bijhouden van scores tijdens wedstrijden
- **BilliardAdmin (Back Office)**: Beheersoftware voor het voorbereiden van competities, ledenbestanden en ploegen

De twee applicaties werken naadloos samen en delen gegevensbestanden.

## Project Structuur

```
billiardsoftware/
├── index.html              # Home page
├── nieuws.html            # Latest news/updates
├── billiardscore.html     # BilliardScore product page
├── billiardadmin.html     # BilliardAdmin product page
├── videos.html            # Video tutorials
├── help.html              # Help and support
├── contact.html           # Contact information
├── README.md              # This file
├── ANALYSIS.md            # Technical analysis and refactoring plan
├── .gitignore             # Git ignore configuration
├── assets/
│   └── css/
│       └── style.css      # External stylesheet
├── images/                # Logo's and afbeeldingen
├── video/                 # Tutorial video's
└── download/              # Software installers

```

## Recent Refactored (Februari 2026)

De website is gemoderniseerd met de volgende verbeteringen:

### ✅ Voltooid
- **HTML5 Modernisatie**: Correcte DOCTYPE, lang attribuut, viewport meta tag
- **Externe CSS**: Inline styles geëxtraheerd naar externe stylesheet
- **Responsive Design**: Basis responsive CSS toegevoegd
- **Multi-page Structure**: Website gesplitst in logische pagina's (Home, Nieuws, BilliardScore, BilliardAdmin, Video's, Hulp, Contact)
- **Toegankelijkheid**: 
  - Skip-to-content link
  - Semantic HTML (nav, main, role attributes)
  - ARIA labels
  - Verbeterde focus states
- **Video Optimalisatie**:
  - Preload metadata voor sneller laden
  - Responsive video scaling
  - Verbeterde fallback berichten
  - ARIA labels
- **Code Kwaliteit**:
  - .gitignore bijgewerkt
  - Nederlandse comments vertaald
  - IE6 workarounds verwijderd
  - Mailto protocol gecorrigeerd

### 🔄 Te Doen
- Inline styles volledig verwijderen (na verificatie)
- CSS Grid/Flexbox layout implementeren
- Content updaten (laatste nieuws is van 2022)
- Contact formulier toevoegen
- Checksum bestanden voor downloads
- SEO verbeteringen (Open Graph tags)

## Technologie

- **HTML5**: Semantic markup
- **CSS3**: External stylesheet met responsive design
- **Geen JavaScript**: Eenvoudige statische website
- **Video**: MP4 formaat met native HTML5 controls

## Browser Ondersteuning

- Chrome/Edge (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Mobile browsers (iOS Safari, Chrome Android)

## Licentie

Website content © BilliardSoftware  
Software is gratis voor clubs

## Contact

Jean Godeyne  
Brunehildeweg 1, B-3700 Tongeren  
Tel: +32 475 237906  
Email: jean.godeyne@telenet.be

## Sponsor

Website gesponsord door [Lingo bvba](http://www.lingo-translations.be)
