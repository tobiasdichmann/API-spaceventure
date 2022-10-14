

VIGTIGT: 
HUSK at notere i rapporten, hvis du ændrer i backend/API - hvad du ændrer og hvorfor. 
- Og HUSK så også at aflevere din version af backenden.

----------------------------------------------------------------------------------------------------------------
------ START BACKEND: ------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

Produktion (hvis du ikke retter i backend/API): 
    npm run start

Developer (foretrukken hvis du skal rettes i backend - trækker på nodemon): 
    npm run devStart

Projektet kører på PORT 4444 - dvs. http://localhost:4444

Projektet benytter MongoDB - tjek .env-filen for at tilrette evt. path/sti til din MongoDB


----------------------------------------------------------------------------------------------------------------
------ API - POSTMAN -------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

BRUG POSTMAN: til at teste API'et - både GET, POST, PUT, PATCH og DELETE
    - brug især Postman når du når til POST, PUT, DELETE - da det er her, du aflæser hvordan API'et forventer at modtage data

Filer til import i din egen Postman kan hentes i mappen: _INSTALLATION/Postman til import

----------------------------------------------------------------------------------------------------------------
------ BILLEDER --------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

UPLOAD: Alle uploadede (post og put) image-filer sendes til en af mapperne (afhæng af route) 

    /public/images/banner
    /public/images/gallery
    /public/images/spacecraft
    /public/images/team
    /public/images/tours

REQUEST: Billederne hentes fra frontend fx med følgende adresse (hvis du ikke har ændret på PORT'en):

    Banner:
    http://localhost:4444/images/banner/xxxxxxx.jpg

    Gallery:
    http://localhost:4444/images/gallery/xxxxxxx.jpg

    Spacecraft:
    http://localhost:4444/images/spacecraft/xxxxxxx.jpg

    Team:
    http://localhost:4444/images/team/xxxxxxx.jpg

    Tours:
    http://localhost:4444/images/tours/xxxxxxx.jpg


