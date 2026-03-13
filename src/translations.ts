
export type Language = 'SR' | 'EN' | 'HU' | 'FR' | 'ES' | 'IT';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'SR', label: 'Srpski', flag: '🇷🇸' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'HU', label: 'Magyar', flag: '🇭🇺' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
];

export const translations = {
  SR: {
    nav: {
      home: 'Početna',
      team: 'Naš tim',
      practice: 'Delatnost',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Advokat za međunarodno pravo i EU pravo u Srbiji',
      subtitle: 'Pružamo vrhunsku pravnu pomoć strancima i kompanijama u Srbiji i Crnoj Gori. Specijalizovani za kompleksne međunarodne sporove i prekogranično poslovanje.',
      cta: 'Zakažite konsultacije',
    },
    practice: {
      title: 'Oblasti rada i specijalizacije',
      description: 'Naša kancelarija nudi širok spektar pravnih usluga sa fokusom na međunarodni element i usklađenost sa pravom Evropske unije.',
      items: [
        { title: 'Međunarodna privreda', desc: 'Pravna podrška za strane investicije, osnivanje firmi i međunarodne trgovinske ugovore u Srbiji.' },
        { title: 'Međunarodni sporovi', desc: 'Zastupanje pred domaćim i međunarodnim sudovima i arbitražama u kompleksnim parnicama.' },
        { title: 'Pravo stranaca', desc: 'Pomoć pri dobijanju boravišnih dozvola, radnih dozvola i državljanstva Republike Srbije.' },
        { title: 'Vaša prava u inostranstvu', desc: 'Zaštita prava srpskih državljana i kompanija u inostranstvu kroz mrežu partnera.' },
        { title: 'EU pravo i integracije', desc: 'Savetovanje o usklađenosti poslovanja sa regulativama Evropske unije i procesima pridruživanja.' },
        { title: 'Nekretnine za strance', desc: 'Sigurna kupovina i prodaja nepokretnosti u Srbiji i Crnoj Gori za nerezidente.' },
        { title: 'Poresko savetovanje', desc: 'Optimizacija poreza za međunarodne klijente i izbegavanje dvostrukog oporezivanja.' },
        { title: 'Intelektualna svojina', desc: 'Zaštita žigova, patenata i autorskih prava na globalnom nivou.' },
        { title: 'Porodično pravo sa stranim elementom', desc: 'Razvodi, starateljstvo i nasleđivanje u slučajevima gde su supružnici različitih državljanstava.' },
        { title: 'Krivično pravo - ekstradicija', desc: 'Zastupanje u postupcima ekstradicije i međunarodne pravne pomoći u krivičnim stvarima.' },
      ]
    },
    blog: {
      title: 'Pravni blog i novosti',
      posts: [
        { title: 'Kako osnovati firmu u Srbiji kao stranac?', excerpt: 'Detaljan vodič kroz proces registracije preduzeća u Srbiji za nerezidentna lica...' },
        { title: 'Prava stranaca na kupovinu nekretnina u Crnoj Gori', excerpt: 'Sve što treba da znate o zakonskim okvirima za kupovinu stana ili kuće na primorju...' },
        { title: 'Međunarodna arbitraža: Prednosti i proces', excerpt: 'Zašto je arbitraža često bolji izbor od klasičnog suda za međunarodne ugovore...' },
        { title: 'Usklađivanje sa GDPR u Srbiji', excerpt: 'Kako se srpski Zakon o zaštiti podataka o ličnosti odnosi na evropske standarde...' },
        { title: 'Radne dozvole u Srbiji: Novi zakonski okvir', excerpt: 'Pregled najnovijih izmena zakona koji olakšavaju zapošljavanje stranih stručnjaka...' },
      ]
    },
    contact: {
      title: 'Kontaktirajte nas',
      address: 'Adresa: Knez Mihailova, Beograd, Srbija',
      phone: 'Telefon: +381 11 123 4567',
      email: 'Email: office@advokat-medjunarodno.rs',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Osnivač / Advokat',
          bio: 'Magistar prava osiguranja (Univerzitet u Kelnu). Specijalizovan za poslovno, trgovinsko i građansko pravo sa dugogodišnjim iskustvom u zastupanju domaćih i stranih klijenata.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Advokat',
          bio: 'Master pravnik sa fokusom na obligaciono, prekršajno i ekološko pravo. Član tima od 2013. godine, sa bogatim iskustvom u sudskim postupcima.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Konsultant / Vanredni profesor',
          bio: 'Doktor pravnih nauka (Univerzitet u Beogradu) i magistar (Münster). Ekspert za pravo EU, bankarsko i berzansko pravo.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Advokatski saradnik',
          bio: 'Master pravnik sa izuzetnim znanjem mađarskog, engleskog i nemačkog jezika. Specijalizovana za građansko i upravno pravo.',
        },
        {
          name: 'Adrian Urač',
          role: 'Advokatski pripravnik',
          bio: 'Master pravnik (Sorbona, Pariz) i komunikolog (Sciences Po). Govori srpski, mađarski, francuski, engleski, španski i italijanski.',
        },
      ]
    }
  },
  EN: {
    nav: {
      home: 'Home',
      team: 'Our Team',
      practice: 'Practice Areas',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'International Lawyer Serbia & EU Law Expert',
      subtitle: 'Providing premium legal assistance to foreigners and companies in Serbia and Montenegro. Specialized in complex international disputes and cross-border business.',
      cta: 'Book a Consultation',
    },
    practice: {
      title: 'Practice Areas & Specializations',
      description: 'Our office offers a wide range of legal services with a focus on international elements and compliance with European Union law.',
      items: [
        { title: 'International Business', desc: 'Legal support for foreign investments, company formation, and international trade agreements in Serbia.' },
        { title: 'International Disputes', desc: 'Representation before domestic and international courts and arbitrations in complex litigation.' },
        { title: 'Immigration Law', desc: 'Assistance in obtaining residence permits, work permits, and Serbian citizenship.' },
        { title: 'Your Rights Abroad', desc: 'Protection of rights for Serbian citizens and companies abroad through our partner network.' },
        { title: 'EU Law & Integration', desc: 'Advising on business compliance with EU regulations and accession processes.' },
        { title: 'Real Estate for Foreigners', desc: 'Secure purchase and sale of real estate in Serbia and Montenegro for non-residents.' },
        { title: 'Tax Consulting', desc: 'Tax optimization for international clients and avoidance of double taxation.' },
        { title: 'Intellectual Property', desc: 'Protection of trademarks, patents, and copyrights on a global level.' },
        { title: 'Family Law with Foreign Element', desc: 'Divorce, custody, and inheritance in cases involving different nationalities.' },
        { title: 'Criminal Law - Extradition', desc: 'Representation in extradition proceedings and international legal assistance in criminal matters.' },
      ]
    },
    blog: {
      title: 'Legal Blog & News',
      posts: [
        { title: 'How to start a company in Serbia as a foreigner?', excerpt: 'A detailed guide through the business registration process in Serbia for non-residents...' },
        { title: 'Rights of foreigners to buy real estate in Montenegro', excerpt: 'Everything you need to know about the legal framework for buying an apartment or house on the coast...' },
        { title: 'International Arbitration: Benefits and Process', excerpt: 'Why arbitration is often a better choice than traditional courts for international contracts...' },
        { title: 'GDPR Compliance in Serbia', excerpt: 'How the Serbian Law on Personal Data Protection relates to European standards...' },
        { title: 'Work Permits in Serbia: New Legal Framework', excerpt: 'An overview of the latest legal changes facilitating the employment of foreign experts...' },
      ]
    },
    contact: {
      title: 'Contact Us',
      address: 'Address: Knez Mihailova, Belgrade, Serbia',
      phone: 'Phone: +381 11 123 4567',
      email: 'Email: office@international-lawyer-serbia.com',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Founder / Lawyer',
          bio: 'Master of Insurance Law (University of Cologne). Specialized in business, commercial, and civil law with extensive experience in representing domestic and foreign clients.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Lawyer',
          bio: 'Master of Law with a focus on obligations, misdemeanors, and environmental law. Team member since 2013, with rich experience in court proceedings.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Consultant / Associate Professor',
          bio: 'Doctor of Legal Sciences (University of Belgrade) and Master of Laws (Münster). Expert in EU law, banking, and stock exchange law.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Legal Associate',
          bio: 'Master of Law with exceptional knowledge of Hungarian, English, and German. Specialized in civil and administrative law.',
        },
        {
          name: 'Adrian Urač',
          role: 'Trainee Lawyer',
          bio: 'Master of Law (Sorbonne, Paris) and Communicologist (Sciences Po). Speaks Serbian, Hungarian, French, English, Spanish, and Italian.',
        },
      ]
    }
  },
  FR: {
    nav: {
      home: 'Accueil',
      team: 'Notre Équipe',
      practice: 'Domaines d\'Activité',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Avocat francophone en Serbie - Droit International et UE',
      subtitle: 'Assistance juridique de premier ordre pour les étrangers et les entreprises en Serbie et au Monténégro. Spécialisé dans les litiges internationaux complexes.',
      cta: 'Prendre Rendez-vous',
    },
    practice: {
      title: 'Domaines d\'Expertise',
      description: 'Notre cabinet propose une large gamme de services juridiques axés sur les éléments internationaux et la conformité au droit de l\'Union européenne.',
      items: [
        { title: 'Affaires Internationales', desc: 'Soutien juridique pour les investissements étrangers et la création de sociétés en Serbie.' },
        { title: 'Litiges Internationaux', desc: 'Représentation devant les tribunaux nationaux et internationaux et les arbitrages.' },
        { title: 'Droit des Étrangers', desc: 'Aide à l\'obtention de permis de séjour, de permis de travail et de la citoyenneté serbe.' },
        { title: 'Vos Droits à l\'Étranger', desc: 'Protection des droits des citoyens et entreprises serbes à l\'étranger.' },
        { title: 'Droit de l\'UE', desc: 'Conseil sur la conformité aux réglementations de l\'UE et aux processus d\'adhésion.' },
        { title: 'Immobilier pour Étrangers', desc: 'Achat et vente sécurisés de biens immobiliers en Serbie et au Monténégro.' },
        { title: 'Conseil Fiscal', desc: 'Optimisation fiscale pour les clients internationaux et évitement de la double imposition.' },
        { title: 'Propriété Intellectuelle', desc: 'Protection des marques et brevets au niveau mondial.' },
        { title: 'Droit de la Famille International', desc: 'Divorce et succession impliquant différentes nationalités.' },
        { title: 'Droit Pénal - Extradition', desc: 'Représentation dans les procédures d\'extradition internationale.' },
      ]
    },
    blog: {
      title: 'Blog Juridique',
      posts: [
        { title: 'Comment créer une entreprise en Serbie en tant qu\'étranger ?', excerpt: 'Guide détaillé sur l\'enregistrement des entreprises pour les non-résidents...' },
        { title: 'Droits des étrangers à l\'achat immobilier au Monténégro', excerpt: 'Tout ce qu\'il faut savoir sur le cadre légal pour l\'achat d\'un appartement...' },
        { title: 'Arbitrage International : Avantages', excerpt: 'Pourquoi l\'arbitrage est souvent préférable aux tribunaux classiques...' },
        { title: 'Conformité RGPD en Serbie', excerpt: 'Relation entre la loi serbe et les standards européens...' },
        { title: 'Permis de travail en Serbie : Nouveau cadre', excerpt: 'Aperçu des changements facilitant l\'emploi d\'experts étrangers...' },
      ]
    },
    contact: {
      title: 'Contactez-nous',
      address: 'Adresse : Knez Mihailova, Belgrade, Serbie',
      phone: 'Tél : +381 11 123 4567',
      email: 'Email : office@avocat-serbie.fr',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Fondateur / Avocat',
          bio: 'Master en droit des assurances (Université de Cologne). Spécialisé en droit des affaires, commercial et civil.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Avocat',
          bio: 'Master en droit. Membre de l\'équipe depuis 2013, avec une riche expérience dans les procédures judiciaires.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Consultante / Professeure associée',
          bio: 'Docteur en sciences juridiques. Experte en droit de l\'UE, droit bancaire et boursier.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Associée juridique',
          bio: 'Master en droit avec une connaissance exceptionnelle du hongrois, de l\'anglais et de l\'allemand.',
        },
        {
          name: 'Adrian Urač',
          role: 'Avocat stagiaire',
          bio: 'Master en droit (Sorbonne) et communicologue (Sciences Po). Parle plusieurs langues dont le français.',
        },
      ]
    }
  },
  HU: {
    nav: {
      home: 'Főoldal',
      team: 'Csapatunk',
      practice: 'Szakterületek',
      blog: 'Blog',
      contact: 'Kapcsolat',
    },
    hero: {
      title: 'Magyarajkú ügyvéd Szerbia - Nemzetközi és EU jog',
      subtitle: 'Prémium jogi segítségnyújtás külföldieknek és vállalatoknak Szerbiában és Montenegróban. Speciális szaktudás nemzetközi vitákban.',
      cta: 'Konzultáció foglalása',
    },
    practice: {
      title: 'Szakterületek és specializációk',
      description: 'Irodánk széleskörű jogi szolgáltatásokat kínál, különös tekintettel a nemzetközi elemekre és az EU-s megfelelőségre.',
      items: [
        { title: 'Nemzetközi Gazdaság', desc: 'Jogi támogatás külföldi befektetésekhez és cégalapításhoz Szerbiában.' },
        { title: 'Nemzetközi Jogviták', desc: 'Képviselet hazai és nemzetközi bíróságok és választottbíróságok előtt.' },
        { title: 'Idegenrendészeti Jog', desc: 'Segítségnyújtás tartózkodási és munkavállalási engedélyek, valamint állampolgárság megszerzésében.' },
        { title: 'Jogai külföldön', desc: 'Szerb állampolgárok és cégek jogainak védelme külföldön partnerhálózatunkon keresztül.' },
        { title: 'EU Jog és Integráció', desc: 'Tanácsadás az EU-s szabályozásoknak való megfelelésről.' },
        { title: 'Ingatlan külföldieknek', desc: 'Biztonságos ingatlanvásárlás Szerbiában és Montenegróban nem-rezidenseknek.' },
        { title: 'Adótanácsadás', desc: 'Adóoptimalizálás nemzetközi ügyfeleknek és a kettős adóztatás elkerülése.' },
        { title: 'Szellemi Tulajdon', desc: 'Védjegyek és szabadalmak védelme globális szinten.' },
        { title: 'Nemzetközi Családjog', desc: 'Válás és öröklés különböző állampolgárságú felek esetén.' },
        { title: 'Büntetőjog - Kiadatás', desc: 'Képviselet kiadatási eljárásokban és nemzetközi jogsegély ügyekben.' },
      ]
    },
    blog: {
      title: 'Jogi Blog',
      posts: [
        { title: 'Hogyan alapítsunk céget Szerbiában külföldiként?', excerpt: 'Részletes útmutató a cégbejegyzési folyamathoz Szerbiában...' },
        { title: 'Külföldiek ingatlanvásárlási jogai Montenegróban', excerpt: 'Minden, amit a tengerparti lakásvásárlás jogi kereteiről tudni kell...' },
        { title: 'Nemzetközi Választottbíráskodás előnyei', excerpt: 'Miért jobb választás gyakran a választottbíróság a klasszikus bíróságnál...' },
        { title: 'GDPR megfelelőség Szerbiában', excerpt: 'Hogyan viszonyul a szerb adatvédelmi törvény az európai normákhoz...' },
        { title: 'Munkavállalási engedélyek Szerbiában', excerpt: 'Áttekintés a külföldi szakemberek alkalmazását segítő változásokról...' },
      ]
    },
    contact: {
      title: 'Kapcsolat',
      address: 'Cím: Knez Mihailova, Belgrád, Szerbia',
      phone: 'Tel: +381 11 123 4567',
      email: 'Email: office@ugyved-szerbia.hu',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Alapító / Ügyvéd',
          bio: 'Biztosítási jogi mester (Kölni Egyetem). Gazdasági, kereskedelmi és polgári jogra szakosodott.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Ügyvéd',
          bio: 'Mesterjogász. 2013 óta a csapat tagja, széleskörű tapasztalattal a bírósági eljárásokban.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Tanácsadó / Egyetemi docens',
          bio: 'A jogtudományok doktora. Az EU-jog, a bank- és tőzsdejog szakértője.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Jogi munkatárs',
          bio: 'Mesterjogász, kiváló magyar, angol és német nyelvtudással. Polgári és közigazgatási jogra szakosodott.',
        },
        {
          name: 'Adrian Urač',
          role: 'Ügyvédjelölt',
          bio: 'Mesterjogász (Sorbonne) és kommunikációs szakember (Sciences Po). Beszél magyarul, szerbül, franciául, angolul, spanyolul és olaszul.',
        },
      ]
    }
  },
  ES: {
    nav: {
      home: 'Inicio',
      team: 'Equipo',
      practice: 'Áreas de Práctica',
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      title: 'Abogado de habla hispana en Serbia - Derecho Internacional',
      subtitle: 'Asistencia legal de primer nivel para extranjeros y empresas en Serbia y Montenegro. Especialistas en disputas internacionales complejas.',
      cta: 'Solicitar Consulta',
    },
    practice: {
      title: 'Áreas de Práctica',
      description: 'Nuestra oficina ofrece una amplia gama de servicios legales con enfoque en elementos internacionales y cumplimiento con el derecho de la UE.',
      items: [
        { title: 'Negocios Internacionales', desc: 'Soporte legal para inversiones extranjeras y creación de empresas en Serbia.' },
        { title: 'Disputas Internacionales', desc: 'Representación ante tribunales nacionales e internacionales y arbitrajes.' },
        { title: 'Derecho de Extranjería', desc: 'Ayuda con permisos de residencia, trabajo y ciudadanía serbia.' },
        { title: 'Sus Derechos en el Extranjero', desc: 'Protección de derechos para ciudadanos y empresas serbias en el exterior.' },
        { title: 'Derecho de la UE', desc: 'Asesoramiento sobre cumplimiento de regulaciones de la UE.' },
        { title: 'Inmuebles para Extranjeros', desc: 'Compra y venta segura de propiedades en Serbia y Montenegro.' },
        { title: 'Consultoría Fiscal', desc: 'Optimización de impuestos para clientes internacionales.' },
        { title: 'Propiedad Intelectual', desc: 'Protección de marcas y patentes a nivel global.' },
        { title: 'Derecho de Familia Internacional', desc: 'Divorcio y herencia con elementos extranjeros.' },
        { title: 'Derecho Penal - Extradición', desc: 'Representación en procesos de extradición internacional.' },
      ]
    },
    blog: {
      title: 'Blog Jurídico',
      posts: [
        { title: '¿Cómo fundar una empresa en Serbia siendo extranjero?', excerpt: 'Guía detallada del proceso de registro para no residentes...' },
        { title: 'Derechos de extranjeros para comprar inmuebles en Montenegro', excerpt: 'Todo lo que necesita saber sobre el marco legal...' },
        { title: 'Arbitraje Internacional: Ventajas', excerpt: 'Por qué el arbitraje es a menudo mejor que los tribunales clásicos...' },
        { title: 'Cumplimiento de GDPR en Serbia', excerpt: 'Relación entre la ley serbia y los estándares europeos...' },
        { title: 'Permisos de trabajo en Serbia', excerpt: 'Resumen de los cambios legales para expertos extranjeros...' },
      ]
    },
    contact: {
      title: 'Contacto',
      address: 'Dirección: Knez Mihailova, Belgrado, Serbia',
      phone: 'Tel: +381 11 123 4567',
      email: 'Email: office@abogado-serbia.es',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Fundador / Abogado',
          bio: 'Máster en Derecho de Seguros (Universidad de Colonia). Especializado en derecho comercial y civil.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Abogado',
          bio: 'Máster en Derecho. Miembro del equipo od 2013, con amplia experiencia en procesos judiciales.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Consultora / Profesora Asociada',
          bio: 'Doctora en Ciencias Jurídicas. Experta en derecho de la UE, derecho bancario y bursátil.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Asociada Legal',
          bio: 'Máster en Derecho con conocimientos excepcionales de húngaro, inglés y alemán.',
        },
        {
          name: 'Adrian Urač',
          role: 'Abogado en Prácticas',
          bio: 'Máster en Derecho (Sorbona) y Comunicólogo (Sciences Po). Habla español con fluidez.',
        },
      ]
    }
  },
  IT: {
    nav: {
      home: 'Home',
      team: 'Il Team',
      practice: 'Aree di Attività',
      blog: 'Blog',
      contact: 'Contatti',
    },
    hero: {
      title: 'Avvocato di lingua italiana in Serbia - Diritto Internazionale',
      subtitle: 'Assistenza legale d\'eccellenza per stranieri e imprese in Serbia e Montenegro. Specializzati in controversie internazionali complesse.',
      cta: 'Prenota una Consulenza',
    },
    practice: {
      title: 'Aree di Specializzazione',
      description: 'Il nostro studio offre una vasta gamma di servizi legali focalizzati su elementi internazionali e conformità al diritto UE.',
      items: [
        { title: 'Affari Internazionali', desc: 'Supporto legale per investimenti esteri e costituzione di società in Serbia.' },
        { title: 'Controversie Internazionali', desc: 'Rappresentanza dinanzi a tribunali nazionali e internazionali e arbitrati.' },
        { title: 'Diritto degli Stranieri', desc: 'Assistenza per permessi di soggiorno, lavoro e cittadinanza serba.' },
        { title: 'I Vostri Diritti all\'Estero', desc: 'Tutela dei diritti di cittadini e imprese serbe all\'estero.' },
        { title: 'Diritto UE', desc: 'Consulenza sulla conformità alle normative dell\'Unione Europea.' },
        { title: 'Immobiliare per Stranieri', desc: 'Acquisto e vendita sicura di immobili in Serbia e Montenegro.' },
        { title: 'Consulenza Fiscale', desc: 'Ottimizzazione fiscale per clienti internazionali.' },
        { title: 'Proprietà Intellettuale', desc: 'Protezione di marchi e brevetti a livello globale.' },
        { title: 'Diritto di Famiglia Internazionale', desc: 'Divorzio e successione con elementi di estraneità.' },
        { title: 'Diritto Penale - Estradizione', desc: 'Rappresentanza in procedimenti di estradizione internazionale.' },
      ]
    },
    blog: {
      title: 'Blog Legale',
      posts: [
        { title: 'Come fondare una società in Serbia come straniero?', excerpt: 'Guida dettagliata al processo di registrazione per i non residenti...' },
        { title: 'Diritti degli stranieri all\'acquisto di immobili in Montenegro', excerpt: 'Tutto quello che c\'è da sapere sul quadro legale...' },
        { title: 'Arbitrato Internazionale: Vantaggi', excerpt: 'Perché l\'arbitrato è spesso preferibile ai tribunali classici...' },
        { title: 'Conformità GDPR in Serbia', excerpt: 'Relazione tra la legge serba e gli standard europei...' },
        { title: 'Permessi di lavoro in Serbia', excerpt: 'Panoramica dei cambiamenti legali per esperti stranieri...' },
      ]
    },
    contact: {
      title: 'Contatti',
      address: 'Indirizzo: Knez Mihailova, Belgrado, Serbia',
      phone: 'Tel: +381 11 123 4567',
      email: 'Email: office@avvocato-serbia.it',
    },
    team: {
      members: [
        {
          name: 'Vuk Vučković',
          role: 'Fondatore / Avvocato',
          bio: 'Master in Diritto delle Assicurazioni (Università di Colonia). Specializzato in diritto commerciale e civile.',
        },
        {
          name: 'Milan Šogorov',
          role: 'Avvocato',
          bio: 'Master in Giurisprudenza. Membro del team dal 2013, con ricca esperienza in procedimenti giudiziari.',
        },
        {
          name: 'Prof. Dr Jelena Šogorov Vučković',
          role: 'Consulente / Professore Associato',
          bio: 'Dottore in Scienze Giuridiche. Esperta in diritto UE, diritto bancario e borsistico.',
        },
        {
          name: 'Margareta Petrović',
          role: 'Associata Legale',
          bio: 'Master in Giurisprudenza con eccezionale conoscenza di ungherese, inglese i tedesco.',
        },
        {
          name: 'Adrian Urač',
          role: 'Praticante Avvocato',
          bio: 'Master in Giurisprudenza (Sorbona) e Comunicatore (Sciences Po). Parla diverse lingue tra cui l\'italiano.',
        },
      ]
    }
  }
};
