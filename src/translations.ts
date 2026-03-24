
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
      extraDescription: 'Naša kancelarija je specijalizovana za prekogranične pravne izazove, pružajući sigurnost klijentima iz celog sveta koji posluju ili borave u Srbiji i Crnoj Gori.',
      items: [
        { 
          title: 'Međunarodna privreda', 
          desc: 'Pravna podrška za strane investicije, osnivanje firmi i međunarodne trgovinske ugovore u Srbiji.',
          details: [
            "Naša kancelarija pruža sveobuhvatnu pravnu podršku stranim investitorima koji žele da započnu ili prošire svoje poslovanje u Srbiji.",
            "Specijalizovani smo za proces osnivanja privrednih društava, odabir optimalne pravne forme i registraciju kod Agencije za privredne registre.",
            "Savetujemo klijente o svim aspektima međunarodnih trgovinskih ugovora, uključujući kupoprodaju, distribuciju i franšizing.",
            "Pomažemo u strukturiranju stranih direktnih investicija (FDI) kako bi se maksimizovale poreske olakšice i državni podsticaji.",
            "Vršimo detaljan pravni due diligence pre akvizicija ili spajanja kompanija na srpskom tržištu.",
            "Zastupamo interese klijenata u pregovorima sa lokalnim partnerima i državnim institucijama.",
            "Osiguravamo potpunu usklađenost poslovanja sa Zakonom o privrednim društvima i pratećim propisima."
          ]
        },
        { 
          title: 'Međunarodni sporovi', 
          desc: 'Zastupanje pred domaćim i međunarodnim sudovima i arbitražama u kompleksnim parnicama.',
          details: [
            "Zastupanje u međunarodnim sporovima zahteva duboko poznavanje kako domaćeg, tako i međunarodnog procesnog prava.",
            "Naša kancelarija ima bogato iskustvo u vođenju kompleksnih parnica sa stranim elementom pred sudovima u Srbiji.",
            "Specijalizovani smo za međunarodnu trgovinsku arbitražu (spoljnotrgovinska arbitraža) i alternativno rešavanje sporova.",
            "Pružamo usluge priznavanja i izvršenja stranih sudskih i arbitražnih odluka u Republici Srbiji.",
            "Savetujemo klijente o izboru nadležnog suda i merodavnog prava prilikom zaključivanja ugovora.",
            "Zastupamo strane kompanije u sporovima nastalim iz povrede ugovornih obaveza i naknade štete."
          ]
        },
        { 
          title: 'Pravo stranaca', 
          desc: 'Pomoć pri dobijanju boravišnih dozvola, radnih dozvola i državljanstva Republike Srbije.',
          details: [
            "Pravo stranaca je jedna od naših primarnih oblasti u kojoj pružamo svakodnevnu podršku klijentima iz celog sveta.",
            "Pomažemo stranim državljanima u procesu dobijanja viza za ulazak i boravak u Republici Srbiji.",
            "Specijalizovani smo za postupke odobrenja privremenog boravka po svim zakonskim osnovima (rad, spajanje porodice, školovanje).",
            "Pružamo kompletnu uslugu dobijanja radnih dozvola za strane radnike i upućena lica.",
            "Savetujemo klijente o uslovima za sticanje stalnog nastanjenja u Srbiji nakon višegodišnjeg boravka.",
            "Zastupamo klijente u postupcima sticanja državljanstva Republike Srbije putem prijema ili po poreklu."
          ]
        },
        { 
          title: 'Vaša prava u inostranstvu', 
          desc: 'Zaštita prava srpskih državljana i kompanija u inostranstvu kroz mrežu partnera.',
          details: [
            "Naša kancelarija pruža zaštitu prava srpskih državljana i kompanija u inostranstvu kroz razvijenu mrežu partnerskih kancelarija.",
            "Pomažemo u rešavanju pravnih problema u vezi sa imovinom, nasleđivanjem i porodičnim odnosima van granica Srbije.",
            "Zastupamo interese domaćih firmi u prekograničnim sporovima i naplati potraživanja u inostranstvu.",
            "Pružamo pravnu pomoć u vezi sa radnim pravima i socijalnim osiguranjem za naše građane koji rade u inostranstvu.",
            "Savetujemo o poreskim obavezama i statusu rezidentnosti u skladu sa međunarodnim ugovorima o izbegavanju dvostrukog oporezivanja."
          ]
        },
        { 
          title: 'EU pravo i integracije', 
          desc: 'Savetovanje o usklađenosti poslovanja sa regulativama Evropske unije i procesima pridruživanja.',
          details: [
            "Savetujemo kompanije o usklađivanju poslovanja sa standardima i regulativama Evropske unije.",
            "Pružamo podršku u razumevanju procesa pridruživanja Srbije EU i uticaja na specifične privredne grane.",
            "Specijalizovani smo za pravo konkurencije, zaštitu potrošača i ekološke standarde EU.",
            "Pomažemo u implementaciji GDPR i drugih direktiva o zaštiti podataka o ličnosti.",
            "Zastupamo interese klijenata u vezi sa korišćenjem EU fondova i projekata prekogranične saradnje."
          ]
        },
        { 
          title: 'Nekretnine za strance', 
          desc: 'Sigurna kupovina i prodaja nepokretnosti u Srbiji i Crnoj Gori za nerezidente.',
          details: [
            "Pružamo potpunu pravnu sigurnost strancima prilikom kupovine ili prodaje nekretnina u Srbiji i Crnoj Gori.",
            "Vršimo proveru vlasničke dokumentacije i tereta u katastru nepokretnosti.",
            "Izrađujemo predugovore i ugovore o kupoprodaji, osiguravajući zaštitu vašeg kapitala.",
            "Savetujemo o poreskim aspektima prenosa apsolutnih prava i porezu na imovinu.",
            "Pomažemo u procesu uknjižbe i regulisanja svih administrativnih obaveza nakon kupovine."
          ]
        },
        { 
          title: 'Poresko savetovanje', 
          desc: 'Optimizacija poreza za međunarodne klijente i izbegavanje dvostrukog oporezivanja.',
          details: [
            "Pružamo stručne savete o poreskoj optimizaciji za fizička i pravna lica sa međunarodnim prihodima.",
            "Savetujemo o primeni ugovora o izbegavanju dvostrukog oporezivanja između Srbije i drugih država.",
            "Pomažemo u rešavanju pitanja poreza na dobit, PDV-a i poreza na dohodak građana.",
            "Zastupamo klijente u postupcima poreske kontrole i pred poreskim organima.",
            "Pružamo podršku u vezi sa transfernim cenama i prekograničnim transakcijama unutar grupa kompanija."
          ]
        },
        { 
          title: 'Intelektualna svojina', 
          desc: 'Zaštita žigova, patenata i autorskih prava na globalnom nivou.',
          details: [
            "Štitimo vaše inovacije, brendove i autorska dela na domaćem i međunarodnom nivou.",
            "Vršimo registraciju žigova, patenata i industrijskog dizajna kod nadležnih zavoda.",
            "Zastupamo klijente u sporovima zbog povrede prava intelektualne svojine i piraterije.",
            "Izrađujemo ugovore o licenci, franšizi i prenosu autorskih prava.",
            "Savetujemo o zaštiti poslovne tajne i poverljivih informacija u digitalnom dobu."
          ]
        },
        { 
          title: 'Porodično pravo sa stranim elementom', 
          desc: 'Razvodi, starateljstvo i nasleđivanje u slučajevima gde su supružnici različitih državljanstava.',
          details: [
            "Rešavamo kompleksna pitanja porodičnog prava u kojima postoji međunarodni element.",
            "Zastupamo klijente u postupcima razvoda braka, podele imovine i starateljstva nad decom.",
            "Pružamo pravnu pomoć u vezi sa međunarodnom otmicom dece (Haška konvencija).",
            "Savetujemo o nasleđivanju imovine koja se nalazi u različitim državama.",
            "Pomažemo u priznavanju stranih sudskih odluka u porodičnim i statusnim stvarima."
          ]
        },
        { 
          title: 'Krivično pravo - ekstradicija', 
          desc: 'Zastupanje u postupcima ekstradicije i međunarodne pravne pomoći u krivičnim stvarima.',
          details: [
            "Specijalizovani smo za zastupanje u postupcima ekstradicije (izručenja) i pružanje međunarodne pravne pomoći.",
            "Štitimo prava klijenata u vezi sa Interpolovim poternicama i međunarodnim nalozima za hapšenje.",
            "Pružamo odbranu u krivičnim postupcima sa prekograničnim elementom (pranje novca, sajber kriminal).",
            "Savetujemo o transferu osuđenih lica i izvršenju stranih krivičnih presuda.",
            "Osiguravamo poštovanje ljudskih prava i međunarodnih standarda u krivičnim procesima."
          ]
        },
        { 
          title: 'Afričko pravo', 
          desc: 'Pravno savetovanje i zastupanje u vezi sa poslovanjem i pravnim sistemima afričkih država.',
          details: [
            "Pružamo jedinstvenu ekspertizu za poslovanje na afričkom kontinentu, posebno u zemljama sa frankofonim i anglofonim pravnim sistemima.",
            "Savetujemo o osnivanju firmi i investicijama u rudarski, energetski i građevinski sektor u Africi.",
            "Pomažemo u razumevanju OHADA prava i regionalnih ekonomskih integracija u Africi.",
            "Zastupamo interese srpskih kompanija u pregovorima sa afričkim državnim organima i partnerima.",
            "Pružamo pravnu pomoć u rešavanju sporova pred arbitražnim sudovima u Africi."
          ]
        },
        { 
          title: 'Južnoameričko pravo', 
          desc: 'Pravno savetovanje i zastupanje u vezi sa poslovanjem i pravnim sistemima država Južne Amerike.',
          details: [
            "Pružamo specijalizovanu pravnu pomoć za klijente koji posluju ili planiraju investicije u Južnoj Americi (Brazil, Argentina, Čile, Kolumbija).",
            "Savetujemo o lokalnim propisima o stranim ulaganjima i osnivanju preduzeća u zemljama članicama MERCOSUR-a.",
            "Pomažemo u navigaciji kroz kompleksne poreske sisteme i carinske regulative južnoameričkih država.",
            "Zastupamo interese klijenata u trgovinskim sporovima i arbitražama pred regionalnim institucijama.",
            "Pružamo podršku u razumevanju pravnih tradicija zasnovanih na građanskom pravu (Civil Law) u latinskoameričkom kontekstu."
          ]
        },
      ],
      features: [
        'Stručno savetovanje i analiza slučaja',
        'Zastupanje pred nadležnim organima',
        'Izrada pravne dokumentacije na više jezika'
      ],
      whyTitle: 'Zašto odabrati našu kancelariju za međunarodno pravo?',
      why1Title: 'Lokalna ekspertiza, globalni standardi',
      why1Desc: 'Poznajemo srpsko i crnogorsko pravo do detalja, ali razmišljamo globalno. Naši advokati su školovani na prestižnim evropskim univerzitetima i redovno prate promene u EU regulativi.',
      why2Title: 'Višejezična komunikacija',
      why2Desc: 'Komunikacija je ključ uspeha. Pružamo usluge na srpskom, engleskom, mađarskom, francuskom, španskom i italijanskom jeziku, što eliminiše barijere i nesporazume u kompleksnim pravnim stvarima.',
      practiceDetail: {
        backToPractice: 'Nazad na delatnosti',
        legalSecurity: 'Pravna Sigurnost',
        legalSecurityDesc: 'Maksimalna zaštita vaših interesa',
        globalReach: 'Globalni Doseg',
        globalReachDesc: 'Podrška u Srbiji i inostranstvu',
        expertise: 'Ekspertiza',
        expertiseDesc: 'Specijalizovani tim stručnjaka',
        bookConsultation: 'Zakažite konsultacije za ovu oblast',
      }
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
      description: 'Naš tim ne čine samo advokati i advokatski pripravnici, već i čitava mreža saradnika sa višegodišnjim iskustvom rada.',
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
      ],
      joinTitle: 'Pridružite se našem timu',
      joinDesc: 'Uvek smo u potrazi za talentovanim pravnicima koji dele našu strast prema međunarodnom pravu i izvrsnosti u pružanju pravnih usluga.',
      joinCta: 'Pošaljite CV',
    },
    home: {
      seoTitle: 'Vodeća advokatska kancelarija za međunarodno pravo u Srbiji i Crnoj Gori',
      seoText1: 'Naša kancelarija je prepoznata kao lider u oblasti međunarodnog privatnog prava i prava Evropske unije. Sa decenijskim iskustvom u zastupanju stranih klijenata, pružamo sigurnost u kompleksnom pravnom okruženju Balkana.',
      seoText2: 'Bilo da ste investitor koji traži pravni savet za ulaganje u Srbiji, ili pojedinac kojem je potreban advokat za pravo stranaca, naš tim nudi personalizovan pristup na šest svetskih jezika. Razumemo specifičnosti prekograničnih sporova i važnost usklađenosti sa EU regulativama.',
      seoText3: 'Specijalizovani smo za međunarodnu privredu, arbitražu, i zaštitu ljudskih prava. Naša misija je da budemo most između vaših poslovnih ciljeva i lokalnog zakonodavstva, osiguravajući maksimalnu pravnu zaštitu.',
      seoFeatures: [
        'Stručnost u EU integracijama',
        'Višejezična podrška (6 jezika)',
        'Zastupanje u Crnoj Gori',
        'Eksperti za arbitražu',
        'Poreska optimizacija',
        'Pravo nepokretnosti'
      ],
      experienceYears: '15+ Godina',
      experienceText: 'Iskustva u međunarodnim pravnim poslovima',
      learnMore: 'Saznajte više',
      viewAll: 'Pogledajte sve delatnosti',
    },
    common: {
      tagline: 'International & EU Law',
      allRightsReserved: 'Sva prava zadržana.',
      privacyPolicy: 'Politika privatnosti',
      termsOfService: 'Uslovi korišćenja',
      legalNotice: 'Pravno obaveštenje',
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
      extraDescription: 'Our office specializes in cross-border legal challenges, providing security to clients from all over the world operating or residing in Serbia and Montenegro.',
      items: [
        { 
          title: 'International Business', 
          desc: 'Legal support for foreign investments, company formation, and international trade agreements in Serbia.',
          details: [
            "Our office provides comprehensive legal support to foreign investors looking to start or expand their business in Serbia.",
            "We specialize in the process of establishing companies, selecting the optimal legal form, and registration with the Business Registers Agency.",
            "We advise clients on all aspects of international trade agreements, including sales, distribution, and franchising.",
            "We assist in structuring foreign direct investments (FDI) to maximize tax incentives and state subsidies.",
            "We perform detailed legal due diligence before acquisitions or mergers of companies on the Serbian market.",
            "We represent client interests in negotiations with local partners and state institutions.",
            "We ensure full business compliance with the Law on Companies and related regulations."
          ]
        },
        { 
          title: 'International Disputes', 
          desc: 'Representation before domestic and international courts and arbitrations in complex litigation.',
          details: [
            "Representation in international disputes requires deep knowledge of both domestic and international procedural law.",
            "Our office has extensive experience in conducting complex litigation with a foreign element before courts in Serbia.",
            "We specialize in international commercial arbitration and alternative dispute resolution.",
            "We provide services for the recognition and enforcement of foreign court and arbitral awards in the Republic of Serbia.",
            "We advise clients on the choice of competent court and applicable law when concluding contracts.",
            "We represent foreign companies in disputes arising from breach of contract and damages."
          ]
        },
        { 
          title: 'Immigration Law', 
          desc: 'Assistance in obtaining residence permits, work permits, and Serbian citizenship.',
          details: [
            "Immigration law is one of our primary areas where we provide daily support to clients from all over the world.",
            "We assist foreign nationals in the process of obtaining visas for entry and stay in the Republic of Serbia.",
            "We specialize in procedures for granting temporary residence on all legal grounds (work, family reunification, education).",
            "We provide a complete service for obtaining work permits for foreign workers and seconded persons.",
            "We advise clients on the conditions for acquiring permanent residence in Serbia after several years of stay.",
            "We represent clients in procedures for acquiring citizenship of the Republic of Serbia through admission or by origin."
          ]
        },
        { 
          title: 'Your Rights Abroad', 
          desc: 'Protection of rights for Serbian citizens and companies abroad through our partner network.',
          details: [
            "Our office provides protection of rights for Serbian citizens and companies abroad through a developed network of partner offices.",
            "We help in resolving legal problems related to property, inheritance, and family relations outside the borders of Serbia.",
            "We represent the interests of domestic firms in cross-border disputes and debt collection abroad.",
            "We provide legal assistance regarding labor rights and social security for our citizens working abroad.",
            "We advise on tax obligations and residency status in accordance with international double taxation avoidance agreements."
          ]
        },
        { 
          title: 'EU Law & Integration', 
          desc: 'Advising on business compliance with EU regulations and accession processes.',
          details: [
            "We advise companies on aligning their business with European Union standards and regulations.",
            "We provide support in understanding Serbia's EU accession process and its impact on specific economic sectors.",
            "We specialize in competition law, consumer protection, and EU environmental standards.",
            "We assist in the implementation of GDPR and other personal data protection directives.",
            "We represent client interests regarding the use of EU funds and cross-border cooperation projects."
          ]
        },
        { 
          title: 'Real Estate for Foreigners', 
          desc: 'Secure purchase and sale of real estate in Serbia and Montenegro for non-residents.',
          details: [
            "We provide full legal security to foreigners when buying or selling real estate in Serbia and Montenegro.",
            "We check ownership documentation and encumbrances in the real estate cadastre.",
            "We draft pre-contracts and sales contracts, ensuring the protection of your capital.",
            "We advise on tax aspects of absolute rights transfer and property tax.",
            "We assist in the process of registration and regulation of all administrative obligations after purchase."
          ]
        },
        { 
          title: 'Tax Consulting', 
          desc: 'Tax optimization for international clients and avoidance of double taxation.',
          details: [
            "We provide expert advice on tax optimization for individuals and legal entities with international income.",
            "We advise on the application of double taxation avoidance agreements between Serbia and other states.",
            "We assist in resolving issues of corporate income tax, VAT, and personal income tax.",
            "We represent clients in tax control procedures and before tax authorities.",
            "We provide support regarding transfer pricing and cross-border transactions within groups of companies."
          ]
        },
        { 
          title: 'Intellectual Property', 
          desc: 'Protection of trademarks, patents, and copyrights on a global level.',
          details: [
            "We protect your innovations, brands, and copyrights at domestic and international levels.",
            "We register trademarks, patents, and industrial designs with the competent offices.",
            "We represent clients in disputes over intellectual property rights infringement and piracy.",
            "We draft license, franchise, and copyright transfer agreements.",
            "We advise on the protection of business secrets and confidential information in the digital age."
          ]
        },
        { 
          title: 'Family Law with Foreign Element', 
          desc: 'Divorce, custody, and inheritance in cases involving different nationalities.',
          details: [
            "We resolve complex family law issues involving an international element.",
            "We represent clients in divorce proceedings, division of property, and child custody.",
            "We provide legal assistance regarding international child abduction (Hague Convention).",
            "We advise on the inheritance of property located in different countries.",
            "We assist in the recognition of foreign court decisions in family and status matters."
          ]
        },
        { 
          title: 'Criminal Law - Extradition', 
          desc: 'Representation in extradition proceedings and international legal assistance in criminal matters.',
          details: [
            "We specialize in representation in extradition proceedings and providing international legal assistance.",
            "We protect client rights regarding Interpol red notices and international arrest warrants.",
            "We provide defense in criminal proceedings with a cross-border element (money laundering, cybercrime).",
            "We advise on the transfer of sentenced persons and the execution of foreign criminal sentences.",
            "We ensure respect for human rights and international standards in criminal processes."
          ]
        },
        { 
          title: 'African Law', 
          desc: 'Legal consulting and representation regarding business and legal systems of African states.',
          details: [
            "We provide unique expertise for business on the African continent, especially in countries with francophone and anglophone legal systems.",
            "We advise on company formation and investments in the mining, energy, and construction sectors in Africa.",
            "We help in understanding OHADA law and regional economic integrations in Africa.",
            "We represent the interests of Serbian companies in negotiations with African state authorities and partners.",
            "We provide legal assistance in resolving disputes before arbitration courts in Africa."
          ]
        },
        { 
          title: 'South American Law', 
          desc: 'Legal consulting and representation regarding business and legal systems of South American states.',
          details: [
            "We provide specialized legal assistance for clients operating or planning investments in South America (Brazil, Argentina, Chile, Colombia).",
            "We advise on local regulations on foreign investment and company formation in MERCOSUR member countries.",
            "We help navigate through complex tax systems and customs regulations of South American states.",
            "We represent client interests in trade disputes and arbitrations before regional institutions.",
            "We provide support in understanding legal traditions based on Civil Law in the Latin American context."
          ]
        },
      ],
      features: [
        'Expert consulting and case analysis',
        'Representation before competent authorities',
        'Drafting legal documentation in multiple languages'
      ],
      whyTitle: 'Why Choose Our International Law Office?',
      why1Title: 'Local Expertise, Global Standards',
      why1Desc: 'We know Serbian and Montenegrin law in detail, but we think globally. Our lawyers are educated at prestigious European universities and regularly follow changes in EU regulations.',
      why2Title: 'Multilingual Communication',
      why2Desc: 'Communication is the key to success. We provide services in Serbian, English, Hungarian, French, Spanish, and Italian, eliminating barriers and misunderstandings in complex legal matters.',
      practiceDetail: {
        backToPractice: 'Back to Practice Areas',
        legalSecurity: 'Legal Security',
        legalSecurityDesc: 'Maximum protection of your interests',
        globalReach: 'Global Reach',
        globalReachDesc: 'Support in Serbia and abroad',
        expertise: 'Expertise',
        expertiseDesc: 'Specialized team of experts',
        bookConsultation: 'Book a consultation for this area',
      }
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
      description: 'Our team consists not only of lawyers and trainees, but also a network of associates with years of experience.',
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
      ],
      joinTitle: 'Join Our Team',
      joinDesc: 'We are always looking for talented lawyers who share our passion for international law and excellence in legal services.',
      joinCta: 'Send CV',
    },
    home: {
      seoTitle: 'Leading International Law Office in Serbia and Montenegro',
      seoText1: 'Our office is recognized as a leader in the field of private international law and European Union law. With decades of experience in representing foreign clients, we provide security in the complex legal environment of the Balkans.',
      seoText2: 'Whether you are an investor seeking legal advice for investing in Serbia, or an individual in need of an immigration lawyer, our team offers a personalized approach in six world languages. We understand the specifics of cross-border disputes and the importance of compliance with EU regulations.',
      seoText3: 'We specialize in international business, arbitration, and human rights protection. Our mission is to be a bridge between your business goals and local legislation, ensuring maximum legal protection.',
      seoFeatures: [
        'Expertise in EU integration',
        'Multilingual support (6 languages)',
        'Representation in Montenegro',
        'Arbitration experts',
        'Tax optimization',
        'Real estate law'
      ],
      experienceYears: '15+ Years',
      experienceText: 'Experience in international legal affairs',
      learnMore: 'Learn more',
      viewAll: 'View all practice areas',
    },
    common: {
      tagline: 'International & EU Law',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      legalNotice: 'Legal Notice',
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
      description: 'Notre bureau offre une large gamme de services juridiques axés sur les éléments internationaux et la conformité au droit de l\'UE.',
      extraDescription: 'Notre cabinet est spécialisé dans les défis juridiques transfrontaliers, offrant une sécurité aux clients du monde entier opérant ou résidant en Serbie et au Monténégro.',
      items: [
        { 
          title: 'Affaires Internationales', 
          desc: 'Soutien juridique pour les investissements étrangers et la création de sociétés en Serbie.',
          details: [
            "Notre cabinet offre un soutien juridique complet aux investisseurs étrangers souhaitant lancer ou étendre leurs activités en Serbie.",
            "Nous sommes spécialisés dans le processus de création de sociétés, le choix de la forme juridique optimale et l'enregistrement auprès de l'Agence des registres du commerce.",
            "Nous conseillons nos clients sur tous les aspects des accords commerciaux internationaux, y compris la vente, la distribution et le franchisage.",
            "Nous aidons à structurer les investissements directs étrangers (IDE) afin de maximiser les incitations fiscales et les subventions étatiques.",
            "Nous effectuons des audits juridiques détaillés (due diligence) avant les acquisitions ou fusions de sociétés sur le marché serbe.",
            "Nous représentons les intérêts de nos clients dans les négociations avec les partenaires locaux et les institutions étatiques.",
            "Nous assurons la pleine conformité des entreprises avec la loi sur les sociétés et les réglementations connexes."
          ]
        },
        { 
          title: 'Litiges Internationaux', 
          desc: 'Représentation devant les tribunaux nationaux et internationaux et les arbitrages dans des litiges complexes.',
          details: [
            "La représentation dans les litiges internationaux nécessite une connaissance approfondie du droit procédural national et international.",
            "Notre cabinet possède une vaste expérience dans la conduite de litiges complexes avec un élément étranger devant les tribunaux en Serbie.",
            "Nous sommes spécialisés dans l'arbitrage commercial international et la résolution alternative des litiges.",
            "Nous fournissons des services pour la reconnaissance et l'exécution des décisions judiciaires et arbitrales étrangères en République de Serbie.",
            "Nous conseillons nos clients sur le choix du tribunal compétent et de la loi applicable lors de la conclusion de contrats.",
            "Nous représentons des sociétés étrangères dans des litiges découlant de violations contractuelles et de dommages-intérêts."
          ]
        },
        { 
          title: 'Droit des Étrangers', 
          desc: 'Aide à l\'obtention de permis de séjour, de permis de travail et de la citoyenneté de la République de Serbie.',
          details: [
            "Le droit des étrangers est l'un de nos domaines principaux où nous fournissons un soutien quotidien à des clients du monde entier.",
            "Nous aidons les ressortissants étrangers dans le processus d'obtention de visas pour l'entrée et le séjour en République de Serbie.",
            "Nous sommes spécialisés dans les procédures d'octroi de résidence temporaire pour tous les motifs légaux (travail, regroupement familial, éducation).",
            "Nous fournissons un service complet pour l'obtention de permis de travail pour les travailleurs étrangers et les personnes détachées.",
            "Nous conseillons nos clients sur les conditions d'acquisition de la résidence permanente en Serbie après plusieurs années de séjour.",
            "Nous représentons nos clients dans les procédures d'acquisition de la citoyenneté de la République de Serbie par admission ou par origine."
          ]
        },
        { 
          title: 'Vos Droits à l\'Étranger', 
          desc: 'Protection des droits des citoyens et entreprises serbes à l\'étranger grâce à notre réseau de partenaires.',
          details: [
            "Notre cabinet assure la protection des droits des citoyens et entreprises serbes à l'étranger grâce à un réseau développé de cabinets partenaires.",
            "Nous aidons à résoudre les problèmes juridiques liés aux biens, aux successions et aux relations familiales hors des frontières de la Serbie.",
            "Nous représentons les intérêts des entreprises nationales dans les litiges transfrontaliers et le recouvrement de créances à l'étranger.",
            "Nous fournissons une assistance juridique concernant les droits du travail et la sécurité sociale pour nos citoyens travaillant à l'étranger.",
            "Nous conseillons sur les obligations fiscales et le statut de résidence conformément aux conventions internationales d'évitement de la double imposition."
          ]
        },
        { 
          title: 'Droit de l\'UE et Intégration', 
          desc: 'Conseil sur la conformité des entreprises aux réglementations de l\'UE et aux processus d\'adhésion.',
          details: [
            "Nous conseillons les entreprises sur l'alignement de leurs activités avec les normes et réglementations de l'Union européenne.",
            "Nous fournissons un soutien pour comprendre le processus d'adhésion de la Serbie à l'UE et son impact sur des secteurs économiques spécifiques.",
            "Nous sommes spécialisés dans le droit de la concurrence, la protection des consommateurs et les normes environnementales de l'UE.",
            "Nous aidons à la mise en œuvre du RGPD et d'autres directives sur la protection des données personnelles.",
            "Nous représentons les intérêts des clients concernant l'utilisation des fonds de l'UE et les projets de coopération transfrontalière."
          ]
        },
        { 
          title: 'Immobilier pour Étrangers', 
          desc: 'Achat et vente sécurisés de biens immobiliers en Serbie et au Monténégro pour les non-résidents.',
          details: [
            "Nous offrons une sécurité juridique totale aux étrangers lors de l'achat ou de la vente de biens immobiliers en Serbie et au Monténégro.",
            "Nous vérifions la documentation de propriété et les charges au cadastre immobilier.",
            "Nous rédigeons les compromis et les contrats de vente, assurant la protection de votre capital.",
            "Nous conseillons sur les aspects fiscaux du transfert de droits absolus et sur la taxe foncière.",
            "Nous aidons dans le processus d'enregistrement et de régularisation de toutes les obligations administratives après l'achat."
          ]
        },
        { 
          title: 'Conseil Fiscal', 
          desc: 'Optimisation fiscale pour les clients internationaux et évitement de la double imposition.',
          details: [
            "Nous fournissons des conseils d'experts sur l'optimisation fiscale pour les particuliers et les entités juridiques ayant des revenus internationaux.",
            "Nous conseillons sur l'application des conventions d'évitement de la double imposition entre la Serbie et d'autres États.",
            "Nous aidons à résoudre les questions d'impôt sur les sociétés, de TVA et d'impôt sur le revenu des personnes physiques.",
            "Nous représentons nos clients dans les procédures de contrôle fiscal et devant les autorités fiscales.",
            "Nous fournissons un soutien concernant les prix de transfert et les transactions transfrontalières au sein des groupes de sociétés."
          ]
        },
        { 
          title: 'Propriété Intellectuelle', 
          desc: 'Protection des marques, brevets et droits d\'auteur au niveau mondial.',
          details: [
            "Nous protégeons vos innovations, marques et droits d'auteur aux niveaux national et international.",
            "Nous enregistrons les marques, brevets et dessins industriels auprès des offices compétents.",
            "Nous représentons nos clients dans les litiges relatifs à la violation des droits de propriété intellectuelle et au piratage.",
            "Nous rédigeons des contrats de licence, de franchise et de transfert de droits d'auteur.",
            "Nous conseillons sur la protection des secrets d'affaires et des informations confidentielles à l'ère numérique."
          ]
        },
        { 
          title: 'Droit de la Famille avec Élément Étranger', 
          desc: 'Divorce, garde d\'enfants et succession dans les cas impliquant différentes nationalités.',
          details: [
            "Nous résolvons les questions complexes de droit de la famille impliquant un élément international.",
            "Nous représentons nos clients dans les procédures de divorce, de partage des biens et de garde d'enfants.",
            "Nous fournissons une assistance juridique concernant l'enlèvement international d'enfants (Convention de La Haye).",
            "Nous conseillons sur la succession de biens situés dans différents pays.",
            "Nous aidons à la reconnaissance des décisions judiciaires étrangères en matière familiale et de statut."
          ]
        },
        { 
          title: 'Droit Pénal - Extradition', 
          desc: 'Représentation dans les procédures d\'extradition et assistance juridique internationale en matière pénale.',
          details: [
            "Nous sommes spécialisés dans la représentation dans les procédures d'extradition et la fourniture d'une assistance juridique internationale.",
            "Nous protégeons les droits des clients concernant les notices rouges d'Interpol et les mandats d'arrêt internationaux.",
            "Nous assurons la défense dans les procédures pénales avec un élément transfrontalier (blanchiment d'argent, cybercriminalité).",
            "Nous conseillons sur le transfert des personnes condamnées et l'exécution des peines pénales étrangères.",
            "Nous veillons au respect des droits de l'homme et des normes internationales dans les processus pénaux."
          ]
        },
        { 
          title: 'Droit Africain', 
          desc: 'Conseil juridique et représentation concernant les affaires et les systèmes juridiques des États africains.',
          details: [
            "Nous offrons une expertise unique pour les affaires sur le continent africain, en particulier dans les pays aux systèmes juridiques francophones et anglophones.",
            "Nous conseillons sur la création de sociétés et les investissements dans les secteurs minier, énergétique et de la construction en Afrique.",
            "Nous aidons à comprendre le droit OHADA et les intégrations économiques régionales en Afrique.",
            "Nous représentons les intérêts des entreprises serbes dans les négociations avec les autorités étatiques et les partenaires africains.",
            "Nous fournissons une assistance juridique pour la résolution de litiges devant les tribunaux d'arbitrage en Afrique."
          ]
        },
        { 
          title: 'Droit Sud-Américain', 
          desc: 'Conseil juridique et représentation concernant les affaires et les systèmes juridiques des États d\'Amérique du Sud.',
          details: [
            "Nous fournissons une assistance juridique spécialisée aux clients opérant ou prévoyant des investissements en Amérique du Sud (Brésil, Argentine, Chili, Colombie).",
            "Nous conseillons sur les réglementations locales relatives aux investissements étrangers et à la création de sociétés dans les pays membres du MERCOSUR.",
            "Nous aidons à naviguer dans les systèmes fiscaux complexes et les réglementations douanières des États sud-américains.",
            "Nous représentons les intérêts des clients dans les litiges commerciaux et les arbitrages devant les institutions régionales.",
            "Nous apportons un soutien à la compréhension des traditions juridiques fondées sur le droit civil dans le contexte latino-américain."
          ]
        },
      ],
      features: [
        'Conseil expert et analyse de cas',
        'Représentation devant les autorités compétentes',
        'Rédaction de documentation juridique en plusieurs langues'
      ],
      whyTitle: 'Pourquoi choisir notre cabinet de droit international ?',
      why1Title: 'Expertise locale, standards mondiaux',
      why1Desc: 'Nous connaissons le droit serbe et monténégrin en détail, mais nous pensons globalement. Nos avocats sont formés dans de prestigieuses universités européennes et suivent régulièrement les évolutions de la réglementation européenne.',
      why2Title: 'Communication multilingue',
      why2Desc: 'La communication est la clé du succès. Nous fournissons des services en serbe, anglais, hongrois, français, espagnol et italien, éliminant les barrières et les malentendus dans les affaires juridiques complexes.',
      practiceDetail: {
        backToPractice: 'Retour aux domaines d\'activité',
        legalSecurity: 'Sécurité Juridique',
        legalSecurityDesc: 'Protection maximale de vos intérêts',
        globalReach: 'Portée Mondiale',
        globalReachDesc: 'Soutien en Serbie et à l\'étranger',
        expertise: 'Expertise',
        expertiseDesc: 'Équipe spécialisée d\'experts',
        bookConsultation: 'Prendre rendez-vous pour ce domaine',
      }
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
      description: 'Notre équipe n\'est pas seulement composée d\'avocats et de stagiaires, mais aussi d\'un réseau de collaborateurs possédant des années d\'expérience.',
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
      ],
      joinTitle: 'Rejoignez notre équipe',
      joinDesc: 'Nous sommes toujours à la recherche de juristes talentueux qui partagent notre passion pour le droit international et l\'excellence des services juridiques.',
      joinCta: 'Envoyez votre CV',
    },
    home: {
      seoTitle: 'Cabinet de droit international de premier plan en Serbie et au Monténégro',
      seoText1: 'Notre cabinet est reconnu comme un leader dans le domaine du droit international privé et du droit de l\'Union européenne. Avec des décennies d\'expérience dans la représentation de clients étrangers, nous offrons une sécurité dans l\'environnement juridique complexe des Balkans.',
      seoText2: 'Que vous soyez un investisseur cherchant des conseils juridiques pour investir en Serbie, ou un particulier ayant besoin d\'un avocat pour le droit des étrangers, notre équipe propose une approche personnalisée en six langues mondiales. Nous comprenons les spécificités des litiges transfrontaliers et l\'importance de la conformité aux réglementations de l\'UE.',
      seoText3: 'Nous sommes spécialisés dans le commerce international, l\'arbitrage et la protection des droits de l\'homme. Notre mission est d\'être un pont entre vos objectifs commerciaux et la législation locale, en assurant une protection juridique maximale.',
      seoFeatures: [
        'Expertise en intégration européenne',
        'Support multilingue (6 langues)',
        'Représentation au Monténégro',
        'Experts en arbitrage',
        'Optimisation fiscale',
        'Droit immobilier'
      ],
      experienceYears: '15+ Ans',
      experienceText: 'D\'expérience dans les affaires juridiques internationales',
      learnMore: 'En savoir plus',
      viewAll: 'Voir tous les domaines d\'activité',
    },
    common: {
      tagline: 'Droit International & UE',
      allRightsReserved: 'Tous droits réservés.',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions d\'utilisation',
      legalNotice: 'Mentions légales',
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
      subtitle: 'Prémium jogi segítségnyújtás külföldieknek és vállalatoknak Szerbiában és Montenegróban. Nemzetközi vitákra és határokon átnyúló üzletekre szakosodva.',
      cta: 'Konzultáció foglalása',
    },
    practice: {
      title: 'Szakterületek és Specializációk',
      description: 'Irodánk széles körű jogi szolgáltatásokat kínál, különös tekintettel a nemzetközi elemekre és az Európai Uniós jognak való megfelelésre.',
      extraDescription: 'Irodánk a határokon átnyúló jogi kihívásokra szakosodott, biztonságot nyújtva a világ minden tájáról érkező, Szerbiában és Montenegróban tevékenykedő vagy tartózkodó ügyfeleknek.',
      items: [
        { 
          title: 'Nemzetközi Gazdaság', 
          desc: 'Jogi támogatás külföldi befektetésekhez, cégalapításhoz és nemzetközi kereskedelmi szerződésekhez Szerbiában.',
          details: [
            "Irodánk átfogó jogi támogatást nyújt a Szerbiában vállalkozást indítani vagy bővíteni kívánó külföldi befektetőknek.",
            "Szakterületünk a gazdasági társaságok alapítása, az optimális jogi forma kiválasztása és a Gazdasági Nyilvántartási Ügynökségnél történő bejegyzés.",
            "Tanácsot adunk ügyfeleinknek a nemzetközi kereskedelmi szerződések minden aspektusában, beleértve az adásvételt, a forgalmazást és a franchisingot.",
            "Segítünk a közvetlen külföldi tőkebefektetések (FDI) strukturálásában az adókedvezmények és állami támogatások maximalizálása érdekében.",
            "Részletes jogi átvilágítást (due diligence) végzünk a szerbiai piacon történő cégfelvásárlások vagy egyesülések előtt.",
            "Képviseljük ügyfeleink érdekeit a helyi partnerekkel és állami intézményekkel folytatott tárgyalások során.",
            "Biztosítjuk a vállalkozás teljes körű megfelelését a gazdasági társaságokról szóló törvénynek és a kapcsolódó szabályozásoknak."
          ]
        },
        { 
          title: 'Nemzetközi Jogviták', 
          desc: 'Képviselet hazai és nemzetközi bíróságok és választottbíróságok előtt összetett perekben.',
          details: [
            "A nemzetközi vitákban való képviselet mind a hazai, mind a nemzetközi eljárásjog mélyreható ismeretét igényli.",
            "Irodánk gazdag tapasztalattal rendelkezik a külföldi elemet tartalmazó összetett perek vezetésében a szerbiai bíróságok előtt.",
            "Szakterületünk a nemzetközi kereskedelmi választottbíráskodás és az alternatív vitarendezés.",
            "Szolgáltatásokat nyújtunk külföldi bírósági és választottbírósági határozatok elismeréséhez és végrehajtásához a Szerb Köztársaságban.",
            "Tanácsot adunk ügyfeleinknek az illetékes bíróság és az alkalmazandó jog megválasztásában a szerződések megkötésekor.",
            "Képviselünk külföldi cégeket szerződésszegésből és kártérítésből eredő jogvitákban."
          ]
        },
        { 
          title: 'Idegenrendészeti Jog', 
          desc: 'Segítségnyújtás tartózkodási és munkavállalási engedélyek, valamint a Szerb Köztársaság állampolgárságának megszerzésében.',
          details: [
            "Az idegenrendészeti jog az egyik elsődleges területünk, ahol napi szintű támogatást nyújtunk a világ minden tájáról érkező ügyfeleknek.",
            "Segítünk a külföldi állampolgároknak a Szerb Köztársaságba való belépéshez és tartózkodáshoz szükséges vízumok megszerzésében.",
            "Szakterületünk az ideiglenes tartózkodási engedélyek beszerzése minden jogcímen (munka, családegyesítés, tanulmányok).",
            "Teljes körű szolgáltatást nyújtunk munkavállalási engedélyek megszerzéséhez külföldi munkavállalók és kiküldött személyek részére.",
            "Tanácsot adunk ügyfeleinknek a szerbiai letelepedési engedély megszerzésének feltételeiről többéves tartózkodás után.",
            "Képviseljük ügyfeleinket a Szerb Köztársaság állampolgárságának honosítással vagy származás alapján történő megszerzése iránti eljárásokban."
          ]
        },
        { 
          title: 'Jogai külföldön', 
          desc: 'Szerb állampolgárok és cégek jogainak védelme külföldön partnerhálózatunkon keresztül.',
          details: [
            "Irodánk védelmet nyújt a szerb állampolgárok és cégek jogainak külföldön kiterjedt partnerirodai hálózatunkon keresztül.",
            "Segítünk az ingatlanokkal, örökléssel és családi kapcsolatokkal kapcsolatos jogi problémák megoldásában Szerbia határain kívül.",
            "Képviseljük a hazai cégek érdekeit a határokon átnyúló vitákban és a külföldi követeléskezelésben.",
            "Jogi segítséget nyújtunk a külföldön dolgozó állampolgáraink munkajogi és társadalombiztosítási ügyeiben.",
            "Tanácsot adunk az adókötelezettségekről és az illetékességről a nemzetközi kettős adóztatás elkerüléséről szóló egyezményekkel összhangban."
          ]
        },
        { 
          title: 'EU Jog és Integráció', 
          desc: 'Tanácsadás a vállalkozások EU-s szabályozásoknak való megfeleléséről és a csatlakozási folyamatokról.',
          details: [
            "Tanácsot adunk a vállalatoknak tevékenységük Európai Uniós szabványokhoz és szabályozásokhoz való igazításában.",
            "Támogatást nyújtunk Szerbia EU-csatlakozási folyamatának megértéséhez és annak az egyes gazdasági ágazatokra gyakorolt hatásaihoz.",
            "Szakterületünk a versenyjog, a fogyasztóvédelem és az EU környezetvédelmi szabványai.",
            "Segítünk a GDPR és más személyes adatvédelmi irányelvek implementálásában.",
            "Képviseljük az ügyfelek érdekeit az EU-s alapok felhasználásával és a határokon átnyúló együttműködési projektekkel kapcsolatban."
          ]
        },
        { 
          title: 'Ingatlan külföldieknek', 
          desc: 'Biztonságos ingatlanvásárlás Szerbiában és Montenegróban nem-rezidenseknek.',
          details: [
            "Teljes körű jogi biztonságot nyújtunk külföldieknek ingatlanvásárlás vagy -eladás során Szerbiában és Montenegróban.",
            "Ellenőrizzük a tulajdonjogi dokumentációt és a terheket az ingatlan-nyilvántartásban.",
            "Előszerződéseket és adásvételi szerződéseket készítünk, biztosítva tőkéje védelmét.",
            "Tanácsot adunk a vagyonátruházási illeték és az ingatlanadó adózási szempontjairól.",
            "Segítünk a bejegyzési folyamatban és a vásárlás utáni összes adminisztratív kötelezettség rendezésében."
          ]
        },
        { 
          title: 'Adótanácsadás', 
          desc: 'Adóoptimalizálás nemzetközi ügyfeleknek és a kettős adóztatás elkerülése.',
          details: [
            "Szakértői tanácsokat adunk az adóoptimalizáláshoz nemzetközi jövedelemmel rendelkező magánszemélyek és jogi személyek részére.",
            "Tanácsot adunk a Szerbia és más államok közötti kettős adóztatás elkerüléséről szóló egyezmények alkalmazásáról.",
            "Segítünk a társasági adóval, az ÁFA-val és a személyi jövedelemadóval kapcsolatos kérdések megoldásában.",
            "Képviseljük ügyfeleinket az adóellenőrzési eljárásokban és az adóhatóságok előtt.",
            "Támogatást nyújtunk a transzferárazással és a vállalatcsoportokon belüli határokon átnyúló tranzakciókkal kapcsolatban."
          ]
        },
        { 
          title: 'Szellemi Tulajdon', 
          desc: 'Védjegyek, szabadalmak és szerzői jogok védelme globális szinten.',
          details: [
            "Védjük innovációit, márkáit és szerzői műveit hazai és nemzetközi szinten.",
            "Védjegyek, szabadalmak és ipari minták bejegyzését végezzük az illetékes hivataloknál.",
            "Képviseljük ügyfeleinket a szellemi tulajdonjogok megsértésével és a kalózkodással kapcsolatos jogvitákban.",
            "Licenc-, franchise- és szerzői jogátruházási szerződéseket készítünk.",
            "Tanácsot adunk az üzleti titkok és a bizalmas információk védelméről a digitális korban."
          ]
        },
        { 
          title: 'Nemzetközi Családjog', 
          desc: 'Válás, gyermekelhelyezés és öröklés különböző állampolgárságú felek esetén.',
          details: [
            "Megoldjuk a nemzetközi elemet tartalmazó összetett családjogi kérdéseket.",
            "Képviseljük ügyfeleinket válási eljárásokban, vagyonmegosztásban és gyermekelhelyezési ügyekben.",
            "Jogi segítséget nyújtunk a gyermekek nemzetközi jogellenes elvitelével kapcsolatban (Hágai Egyezmény).",
            "Tanácsot adunk a különböző országokban található vagyon örökléséről.",
            "Segítünk a külföldi bírósági határozatok elismerésében családi és személyiségi jogi ügyekben."
          ]
        },
        { 
          title: 'Büntetőjog - Kiadatás', 
          desc: 'Képviselet kiadatási eljárásokban és nemzetközi jogsegély ügyekben bűnügyekben.',
          details: [
            "Szakterületünk a kiadatási eljárásokban való képviselet és a nemzetközi jogsegély nyújtása.",
            "Védjük az ügyfelek jogait az Interpol körözésekkel és a nemzetközi elfogatóparancsokkal kapcsolatban.",
            "Védelmet nyújtunk határokon átnyúló elemet tartalmazó büntetőeljárásokban (pénzmosás, kiberbűnözés).",
            "Tanácsot adunk az elítélt személyek átszállításáról és a külföldi büntetőítéletek végrehajtásáról.",
            "Biztosítjuk az emberi jogok és a nemzetközi sztenderdek tiszteletben tartását a büntetőeljárások során."
          ]
        },
        { 
          title: 'Afrikai jog', 
          desc: 'Jogi tanácsadás és képviselet az afrikai államok üzleti és jogi rendszereivel kapcsolatban.',
          details: [
            "Egyedülálló szakértelmet kínálunk az afrikai kontinensen való üzletkötéshez, különösen a francia és angol nyelvű jogrendszerrel rendelkező országokban.",
            "Tanácsot adunk cégalapítással és befektetésekkel kapcsolatban az afrikai bányászati, energetikai és építőipari szektorban.",
            "Segítünk az OHADA-jog és az afrikai regionális gazdasági integrációk megértésében.",
            "Képviseljük a szerb cégek érdekeit az afrikai állami szervekkel és partnerekkel folytatott tárgyalások során.",
            "Jogi segítséget nyújtunk az afrikai választottbíróságok előtti vitarendezésben."
          ]
        },
        { 
          title: 'Dél-amerikai jog', 
          desc: 'Jogi tanácsadás és képviselet a dél-amerikai államok üzleti és jogi rendszereivel kapcsolatban.',
          details: [
            "Speciális jogi segítséget nyújtunk a Dél-Amerikában (Brazília, Argentína, Chile, Kolumbia) tevékenykedő vagy befektetést tervező ügyfeleknek.",
            "Tanácsot adunk a külföldi befektetésekre és a cégalapításra vonatkozó helyi szabályozásokról a MERCOSUR tagországaiban.",
            "Segítünk eligazodni a dél-amerikai államok összetett adórendszereiben és vámszabályozásaiban.",
            "Képviseljük az ügyfelek érdekeit a regionális intézmények előtti kereskedelmi vitákban és választottbíráskodásban.",
            "Támogatást nyújtunk a latin-amerikai kontextusban a polgári jogon (Civil Law) alapuló jogi hagyományok megértéséhez."
          ]
        },
      ],
      features: [
        'Szakértői tanácsadás és ügyelemzés',
        'Képviselet az illetékes hatóságok előtt',
        'Jogi dokumentáció készítése több nyelven'
      ],
      whyTitle: 'Miért válassza nemzetközi ügyvédi irodánkat?',
      why1Title: 'Helyi szakértelem, globális sztenderdek',
      why1Desc: 'Részletesen ismerjük a szerb és montenegrói jogot, de globálisan gondolkodunk. Ügyvédeink neves európai egyetemeken végeztek, és rendszeresen követik az EU-s szabályozás változásait.',
      why2Title: 'Többnyelvű kommunikáció',
      why2Desc: 'A kommunikáció a siker kulcsa. Szerb, angol, magyar, francia, spanyol és olasz nyelven nyújtunk szolgáltatásokat, kiküszöbölve az akadályokat és félreértéseket az összetett jogi ügyekben.',
      practiceDetail: {
        backToPractice: 'Vissza a szakterületekhez',
        legalSecurity: 'Jogi Biztonság',
        legalSecurityDesc: 'Érdekeinek maximális védelme',
        globalReach: 'Globális Elérés',
        globalReachDesc: 'Támogatás Szerbiában és külföldön',
        expertise: 'Szakértelem',
        expertiseDesc: 'Specializált szakértői csapat',
        bookConsultation: 'Konzultáció foglalása ehhez a területhez',
      }
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
      description: 'Csapatunk nemcsak ügyvédekből és gyakornokokból áll, hanem több éves tapasztalattal rendelkező munkatársak hálózatából is.',
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
      ],
      joinTitle: 'Csatlakozzon csapatunkhoz',
      joinDesc: 'Mindig keresünk tehetséges jogászokat, akik osztoznak a nemzetközi jog iránti szenvedélyünkben és a jogi szolgáltatások kiválóságában.',
      joinCta: 'Önéletrajz küldése',
    },
    home: {
      seoTitle: 'Vezető nemzetközi ügyvédi iroda Szerbiában és Montenegróban',
      seoText1: 'Irodánk elismert vezető a nemzetközi magánjog és az Európai Unió joga területén. Több évtizedes tapasztalattal a külföldi ügyfelek képviseletében biztonságot nyújtunk a Balkán összetett jogi környezetében.',
      seoText2: 'Legyen Ön befektető, aki jogi tanácsot keres szerbiai befektetéséhez, vagy magánszemély, akinek bevándorlási ügyvédre van szüksége, csapatunk személyre szabott megközelítést kínál hat világnyelven. Értjük a határokon átnyúló viták sajátosságait és az EU-s szabályozásoknak való megfelelés fontosságát.',
      seoText3: 'Szakterületünk a nemzetközi üzlet, a választottbíráskodás és az emberi jogok védelme. Küldetésünk, hogy hidat képezzünk az Ön üzleti céljai és a helyi jogszabályok között, biztosítva a maximális jogi védelmet.',
      seoFeatures: [
        'Szakértelem az EU-integrációban',
        'Többnyelvű támogatás (6 nyelv)',
        'Képviselet Montenegróban',
        'Választottbírósági szakértők',
        'Adóoptimalizálás',
        'Ingatlanjog'
      ],
      experienceYears: '15+ Év',
      experienceText: 'Tapasztalat nemzetközi jogi ügyekben',
      learnMore: 'Tudjon meg többet',
      viewAll: 'Összes szakterület megtekintése',
    },
    common: {
      tagline: 'Nemzetközi & EU Jog',
      allRightsReserved: 'Minden jog fenntartva.',
      privacyPolicy: 'Adatvédelmi irányelvek',
      termsOfService: 'Felhasználási feltételek',
      legalNotice: 'Jogi nyilatkozat',
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
      extraDescription: 'Nuestra firma se especializa en desafíos legales transfronterizos, brindando seguridad a clientes de todo el mundo que operan o residen en Serbia y Montenegro.',
      items: [
        { 
          title: 'Negocios Internacionales', 
          desc: 'Soporte legal para inversiones extranjeras, creación de empresas y contratos comerciales internacionales en Serbia.',
          details: [
            "Nuestra oficina brinda apoyo legal integral a inversores extranjeros que desean iniciar o expandir sus negocios en Serbia.",
            "Nos especializamos en el proceso de constitución de sociedades, selección de la forma jurídica óptima y registro ante la Agencia de Registros Mercantiles.",
            "Asesoramos a clientes en todos los aspectos de los acuerdos comerciales internacionales, incluidos venta, distribución y franquicia.",
            "Ayudamos en la estructuración de inversiones extranjeras directas (IED) para maximizar los incentivos fiscales y los subsidios estatales.",
            "Realizamos una debida diligencia legal detallada antes de adquisiciones o fusiones de empresas en el mercado serbio.",
            "Representamos los intereses de los clientes en negociaciones con socios locales e instituciones estatales.",
            "Aseguramos el pleno cumplimiento empresarial con la Ley de Sociedades y las regulaciones relacionadas."
          ]
        },
        { 
          title: 'Disputas Internacionales', 
          desc: 'Representación ante tribunales nacionales e internacionales y arbitrajes en litigios complejos.',
          details: [
            "La representación en disputas internacionales requiere un conocimiento profundo del derecho procesal tanto nacional como internacional.",
            "Nuestra oficina tiene una amplia experiencia en la conducción de litigios complejos con un elemento extranjero ante los tribunales en Serbia.",
            "Nos especializamos en arbitraje comercial internacional y resolución alternativa de disputas.",
            "Brindamos servicios para el reconocimiento y ejecución de sentencias judiciales y laudos arbitrales extranjeros en la República de Serbia.",
            "Asesoramos a los clientes sobre la elección del tribunal competente y la ley aplicable al celebrar contratos.",
            "Representamos a empresas extranjeras en disputas derivadas de incumplimiento de contrato y daños."
          ]
        },
        { 
          title: 'Derecho de Extranjería', 
          desc: 'Ayuda con permisos de residencia, trabajo y ciudadanía de la República de Serbia.',
          details: [
            "El derecho de extranjería es una de nuestras áreas principales donde brindamos apoyo diario a clientes de todo el mundo.",
            "Ayudamos a los ciudadanos extranjeros en el proceso de obtención de visas para entrada y estancia en la República de Serbia.",
            "Nos especializamos en procedimientos para otorgar residencia temporal por todos los motivos legales (trabajo, reunificación familiar, educación).",
            "Brindamos un servicio completo para la obtención de permisos de trabajo para trabajadores extranjeros y personas desplazadas.",
            "Asesoramos a los clientes sobre las condiciones para adquirir la residencia permanente en Serbia después de varios años de estancia.",
            "Representamos a clientes en procedimientos para adquirir la ciudadanía de la República de Serbia por admisión o por origen."
          ]
        },
        { 
          title: 'Sus Derechos en el Extranjero', 
          desc: 'Protección de derechos para ciudadanos y empresas serbias en el exterior a través de nuestra red de socios.',
          details: [
            "Nuestra oficina brinda protección de derechos para ciudadanos y empresas serbias en el extranjero a través de una red desarrollada de oficinas asociadas.",
            "Ayudamos a resolver problemas legales relacionados con la propiedad, la herencia y las relaciones familiares fuera de las fronteras de Serbia.",
            "Representamos los intereses de empresas nacionales en disputas transfronterizas y cobro de deudas en el extranjero.",
            "Brindamos asistencia legal con respecto a los derechos laborales y la seguridad social para nuestros ciudadanos que trabajan en el extranjero.",
            "Asesoramos sobre obligaciones fiscales y estado de residencia de acuerdo con los acuerdos internacionales para evitar la doble imposición."
          ]
        },
        { 
          title: 'Derecho de la UE e Integración', 
          desc: 'Asesoramiento sobre el cumplimiento empresarial con las regulaciones de la UE y los procesos de adhesión.',
          details: [
            "Asesoramos a las empresas sobre la alineación de sus negocios con los estándares y regulaciones de la Unión Europea.",
            "Brindamos apoyo para comprender el proceso de adhesión de Serbia a la UE y su impacto en sectores económicos específicos.",
            "Nos especializamos en derecho de la competencia, protección al consumidor y estándares ambientales de la UE.",
            "Ayudamos en la implementación de GDPR y otras directivas de protección de datos personales.",
            "Representamos los intereses de los clientes con respecto al uso de fondos de la UE y proyectos de cooperación transfronteriza."
          ]
        },
        { 
          title: 'Inmuebles para Extranjeros', 
          desc: 'Compra y venta segura de propiedades en Serbia y Montenegro para no residentes.',
          details: [
            "Brindamos total seguridad legal a los extranjeros al comprar o vender bienes raíces en Serbia y Montenegro.",
            "Verificamos la documentación de propiedad y gravámenes en el catastro inmobiliario.",
            "Redactamos precontratos y contratos de compraventa, asegurando la protección de su capital.",
            "Asesoramos sobre aspectos fiscales de la transferencia de derechos absolutos e impuesto sobre la propiedad.",
            "Ayudamos en el proceso de registro y regulación de todas las obligaciones administrativas después de la compra."
          ]
        },
        { 
          title: 'Consultoría Fiscal', 
          desc: 'Optimización de impuestos para clientes internacionales y evitación de la doble imposición.',
          details: [
            "Brindamos asesoramiento experto sobre optimización fiscal para personas físicas y jurídicas con ingresos internacionales.",
            "Asesoramos sobre la aplicación de acuerdos para evitar la doble imposición entre Serbia y otros estados.",
            "Ayudamos a resolver problemas de impuesto sobre sociedades, IVA e impuesto sobre la renta de las personas físicas.",
            "Representamos a clientes en procedimientos de control fiscal y ante las autoridades fiscales.",
            "Brindamos apoyo con respecto a los precios de transferencia y las transacciones transfronterizas dentro de grupos de empresas."
          ]
        },
        { 
          title: 'Propiedad Intelectual', 
          desc: 'Protección de marcas, patentes y derechos de autor a nivel global.',
          details: [
            "Protegemos sus innovaciones, marcas y derechos de autor a nivel nacional e internacional.",
            "Registramos marcas, patentes y diseños industriales ante las oficinas competentes.",
            "Representamos a clientes en disputas por infracción de derechos de propiedad intelectual y piratería.",
            "Redactamos contratos de licencia, franquicia y transferencia de derechos de autor.",
            "Asesoramos sobre la protección de secretos comerciales e información confidencial en la era digital."
          ]
        },
        { 
          title: 'Derecho de Familia con Elemento Extranjero', 
          desc: 'Divorcio, custodia y herencia en casos que involucran diferentes nacionalidades.',
          details: [
            "Resolvemos problemas complejos de derecho de familia que involucran un elemento internacional.",
            "Representamos a clientes en procesos de divorcio, división de bienes y custodia de hijos.",
            "Brindamos asistencia legal con respecto al secuestro internacional de niños (Convención de La Haya).",
            "Asesoramos sobre la herencia de bienes ubicados en diferentes países.",
            "Ayudamos en el reconocimiento de decisiones judiciales extranjeras en asuntos familiares y de estado."
          ]
        },
        { 
          title: 'Derecho Penal - Extradición', 
          desc: 'Representación en procesos de extradición y asistencia legal internacional en materia penal.',
          details: [
            "Nos especializamos en la representación en procedimientos de extradición y en la prestación de asistencia jurídica internacional.",
            "Protegemos los derechos de los clientes con respecto a las notificaciones rojas de Interpol y las órdenes de arresto internacionales.",
            "Brindamos defensa en procesos penales con un elemento transfronterizo (lavado de dinero, delitos cibernéticos).",
            "Asesoramos sobre el traslado de personas sentenciadas y la ejecución de sentencias penales extranjeras.",
            "Aseguramos el respeto de los derechos humanos y los estándares internacionales en los procesos penales."
          ]
        },
        { 
          title: 'Derecho Africano', 
          desc: 'Asesoramiento legal y representación en relación con los negocios y los sistemas legales de los estados africanos.',
          details: [
            "Brindamos una experiencia única para los negocios en el continente africano, especialmente en países con sistemas legales francófonos y anglófonos.",
            "Asesoramos sobre la creación de empresas e inversiones en los sectores de minería, energía y construcción en África.",
            "Ayudamos a comprender la ley OHADA y las integraciones económicas regionales en África.",
            "Representamos los intereses de las empresas serbias en negociaciones con autoridades estatales y socios africanos.",
            "Brindamos asistencia legal en la resolución de disputas ante tribunales de arbitraje en África."
          ]
        },
        { 
          title: 'Derecho Sudamericano', 
          desc: 'Asesoramiento legal y representación en relación con los negocios y los sistemas legales de los estados de América del Sur.',
          details: [
            "Brindamos asistencia legal especializada para clientes que operan o planean inversiones en América del Sur (Brasil, Argentina, Chile, Colombia).",
            "Asesoramos sobre regulaciones locales de inversión extranjera y creación de empresas en los países miembros del MERCOSUR.",
            "Ayudamos a navegar a través de los complejos sistemas fiscales y regulaciones aduaneras de los estados sudamericanos.",
            "Representamos los intereses de los clientes en disputas comerciales y arbitrajes ante instituciones regionales.",
            "Brindamos apoyo para comprender las tradiciones legales basadas en el Derecho Civil en el contexto latinoamericano."
          ]
        },
      ],
      features: [
        'Consultoría experta y análisis de casos',
        'Representación ante autoridades competentes',
        'Redacción de documentación legal en varios idiomas'
      ],
      whyTitle: '¿Por qué elegir nuestro bufete de abogados internacional?',
      why1Title: 'Experiencia local, estándares globales',
      why1Desc: 'Conocemos el derecho serbio y montenegrino en detalle, pero pensamos globalmente. Nuestros abogados se han formado en prestigiosas universidades europeas y siguen regularmente los cambios en las regulaciones de la UE.',
      why2Title: 'Comunicación multilingüe',
      why2Desc: 'La comunicación es la clave del éxito. Brindamos servicios en serbio, inglés, húngaro, francés, español e italiano, eliminando barreras y malentendidos en asuntos legales complejos.',
      practiceDetail: {
        backToPractice: 'Volver a áreas de práctica',
        legalSecurity: 'Seguridad Jurídica',
        legalSecurityDesc: 'Máxima protección de sus intereses',
        globalReach: 'Alcance Global',
        globalReachDesc: 'Soporte en Serbia y el extranjero',
        expertise: 'Experiencia',
        expertiseDesc: 'Equipo especializado de expertos',
        bookConsultation: 'Solicitar consulta para esta área',
      }
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
      description: 'Nuestro equipo no solo está formado por abogados y pasantes, sino también por una red de asociados con años de experiencia.',
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
      ],
      joinTitle: 'Únase a nuestro equipo',
      joinDesc: 'Siempre buscamos abogados talentosos que compartan nuestra pasión por el derecho internacional y la excelencia en los servicios legales.',
      joinCta: 'Enviar CV',
    },
    home: {
      seoTitle: 'Bufete de abogados internacional líder en Serbia y Montenegro',
      seoText1: 'Nuestra oficina es reconocida como líder en el campo del derecho internacional privado y el derecho de la Unión Europea. Con décadas de experiencia en la representación de clientes extranjeros, brindamos seguridad en el complejo entorno legal de los Balcanes.',
      seoText2: 'Ya sea que sea un inversor que busca asesoramiento legal para invertir en Serbia, o un individuo que necesita un abogado de inmigración, nuestro equipo ofrece un enfoque personalizado en seis idiomas mundiales. Entendemos las especificidades de las disputas transfronterizas y la importancia del cumplimiento de las regulaciones de la UE.',
      seoText3: 'Nos especializamos en negocios internacionales, arbitraje y protección de los derechos humanos. Nuestra misión es ser un puente entre sus objetivos comerciales y la legislación local, asegurando la máxima protección legal.',
      seoFeatures: [
        'Experiencia en integración de la UE',
        'Soporte multilingue (6 idiomas)',
        'Representación en Montenegro',
        'Expertos en arbitraje',
        'Optimización fiscal',
        'Derecho inmobiliario'
      ],
      experienceYears: '15+ Años',
      experienceText: 'Experiencia en asuntos legales internacionales',
      learnMore: 'Saber más',
      viewAll: 'Ver todas las áreas de práctica',
    },
    common: {
      tagline: 'Derecho Internacional & UE',
      allRightsReserved: 'Todos los derechos reservados.',
      privacyPolicy: 'Política de privacidad',
      termsOfService: 'Términos de servicio',
      legalNotice: 'Aviso legal',
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
      extraDescription: 'Il nostro studio è specializzato in sfide legali transfrontaliere, offrendo sicurezza ai clienti di tutto il mondo che operano o risiedono in Serbia e Montenegro.',
      items: [
        { 
          title: 'Affari Internazionali', 
          desc: 'Supporto legale per investimenti esteri, costituzione di società e contratti commerciali internazionali in Serbia.',
          details: [
            "Il nostro studio fornisce un supporto legale completo agli investitori stranieri che desiderano avviare o espandere le proprie attività in Serbia.",
            "Siamo specializzati nel processo di costituzione di società, nella scelta della forma giuridica ottimale e nella registrazione presso l'Agenzia dei Registri delle Imprese.",
            "Consigliamo i clienti su tutti gli aspetti degli accordi commerciali internazionali, inclusi vendita, distribuzione e franchising.",
            "Assistiamo nella strutturazione degli investimenti diretti esteri (IDE) per massimizzare gli incentivi fiscali e i sussidi statali.",
            "Effettuiamo una due diligence legale dettagliata prima di acquisizioni o fusioni di società sul mercato serbo.",
            "Rappresentiamo gli interessi dei clienti nelle trattative con i partner locali e le istituzioni statali.",
            "Garantiamo la piena conformità aziendale alla Legge sulle Società e alle normative correlate."
          ]
        },
        { 
          title: 'Controversie Internazionali', 
          desc: 'Rappresentanza dinanzi a tribunali nazionali e internazionali e arbitrati in controversie complesse.',
          details: [
            "La rappresentanza nelle controversie internazionali richiede una profonda conoscenza del diritto processuale sia nazionale che internazionale.",
            "Il nostro studio vanta una vasta esperienza nella conduzione di controversie complesse con un elemento di estraneità dinanzi ai tribunali in Serbia.",
            "Siamo specializzati nell'arbitrato commerciale internazionale e nella risoluzione alternativa delle controversie.",
            "Forniamo servizi per il riconoscimento e l'esecuzione di sentenze straniere e lodi arbitrali nella Repubblica di Serbia.",
            "Consigliamo i clienti sulla scelta del tribunale competente e della legge applicabile al momento della conclusione dei contratti.",
            "Rappresentiamo società straniere in controversie derivanti da violazioni contrattuali e risarcimento danni."
          ]
        },
        { 
          title: 'Diritto degli Stranieri', 
          desc: 'Assistenza per permessi di soggiorno, lavoro e cittadinanza della Repubblica di Serbia.',
          details: [
            "Il diritto degli stranieri è una delle nostre aree primarie in cui forniamo supporto quotidiano a clienti provenienti da tutto il mondo.",
            "Assistiamo i cittadini stranieri nel processo di ottenimento dei visti per l'ingresso e il soggiorno nella Repubblica di Serbia.",
            "Siamo specializzati nelle procedure per la concessione della residenza temporanea per tutti i motivi legali (lavoro, ricongiungimento familiare, istruzione).",
            "Forniamo un servizio completo per l'ottenimento dei permessi di lavoro per lavoratori stranieri e personale distaccato.",
            "Consigliamo i clienti sulle condizioni per l'acquisizione della residenza permanente in Serbia dopo diversi anni di soggiorno.",
            "Rappresentiamo i clienti nelle procedure per l'acquisizione della cittadinanza della Repubblica di Serbia per ammissione o per origine."
          ]
        },
        { 
          title: 'I Vostri Diritti all\'Estero', 
          desc: 'Tutela dei diritti di cittadini e imprese serbe all\'estero attraverso la nostra rete di partner.',
          details: [
            "Il nostro studio fornisce protezione dei diritti per i cittadini e le imprese serbe all'estero attraverso una rete sviluppata di uffici partner.",
            "Aiutiamo a risolvere problemi legali relativi a proprietà, eredità e relazioni familiari al di fuori dei confini della Serbia.",
            "Rappresentiamo gli interessi di aziende nazionali in controversie transfrontaliere e recupero crediti all'estero.",
            "Forniamo assistenza legale in merito ai diritti del lavoro e alla previdenza sociale per i nostri cittadini che lavorano all'estero.",
            "Consigliamo sugli obblighi fiscali e sullo stato di residenza in conformità con gli accordi internazionali per evitare la doppia imposizione."
          ]
        },
        { 
          title: 'Diritto UE e Integrazione', 
          desc: 'Consulenza sulla conformità aziendale alle normative UE e ai processi di adesione.',
          details: [
            "Consigliamo le aziende sull'allineamento delle loro attività agli standard e alle normative dell'Unione Europea.",
            "Forniamo supporto nella comprensione del processo di adesione della Serbia all'UE e del suo impatto su specifici settori economici.",
            "Siamo specializzati in diritto della concorrenza, tutela dei consumatori e standard ambientali UE.",
            "Assistiamo nell'implementazione del GDPR e di altre direttive sulla protezione dei dati personali.",
            "Rappresentiamo gli interessi dei clienti in merito all'uso dei fondi UE e ai progetti di cooperazione transfrontaliera."
          ]
        },
        { 
          title: 'Immobiliare per Stranieri', 
          desc: 'Acquisto e vendita sicura di immobili in Serbia e Montenegro per i non residenti.',
          details: [
            "Forniamo piena sicurezza legale agli stranieri durante l'acquisto o la vendita di immobili in Serbia e Montenegro.",
            "Verifichiamo la documentazione di proprietà e i gravami nel catasto immobiliare.",
            "Redigiamo preliminari e contratti di compravendita, garantendo la protezione del vostro capitale.",
            "Consigliamo sugli aspetti fiscali del trasferimento di diritti assoluti e sull'imposta immobiliare.",
            "Assistiamo nel processo di registrazione e regolamentazione di tutti gli obblighi amministrativi dopo l'acquisto."
          ]
        },
        { 
          title: 'Consulenza Fiscale', 
          desc: 'Ottimizzazione fiscale per i clienti internazionali e prevenzione della doppia imposizione.',
          details: [
            "Forniamo consulenza esperta sull'ottimizzazione fiscale per persone fisiche e giuridiche con redditi internazionali.",
            "Consigliamo sull'applicazione degli accordi per evitare la doppia imposizione tra la Serbia e altri stati.",
            "Assistiamo nella risoluzione di questioni relative all'imposta sulle società, all'IVA e all'imposta sul reddito delle persone fisiche.",
            "Rappresentiamo i clienti nelle procedure di controllo fiscale e dinanzi alle autorità fiscali.",
            "Forniamo supporto in merito ai prezzi di trasferimento e alle transazioni transfrontaliere all'interno di gruppi di società."
          ]
        },
        { 
          title: 'Proprietà Intellettuale', 
          desc: 'Protezione di marchi, brevetti e diritti d\'autore a livello globale.',
          details: [
            "Proteggiamo le vostre innovazioni, marchi e diritti d'autore a livello nazionale e internazionale.",
            "Registriamo marchi, brevetti e disegni industriali presso gli uffici competenti.",
            "Rappresentiamo i clienti in controversie per violazione dei diritti di proprietà intellettuale e pirateria.",
            "Redigiamo contratti di licenza, franchising e trasferimento di diritti d'autore.",
            "Consigliamo sulla protezione dei segreti commerciali e delle informazioni riservate nell'era digitale."
          ]
        },
        { 
          title: 'Diritto di Famiglia con Elemento di Estraneità', 
          desc: 'Divorzio, affidamento e successione in casi che coinvolgono diverse nazionalità.',
          details: [
            "Risolviamo complesse questioni di diritto di famiglia che coinvolgono un elemento internazionale.",
            "Rappresentiamo i clienti in procedimenti di divorzio, divisione dei beni e affidamento dei figli.",
            "Forniamo assistenza legale in merito alla sottrazione internazionale di minori (Convenzione dell'Aia).",
            "Consigliamo sulla successione di beni situati in diversi paesi.",
            "Assistiamo nel riconoscimento delle decisioni giudiziarie straniere in materia familiare e di stato."
          ]
        },
        { 
          title: 'Diritto Penale - Estradizione', 
          desc: 'Rappresentanza in procedimenti di estradizione e assistenza legale internazionale in materia penalale.',
          details: [
            "Siamo specializzati nella rappresentanza in procedimenti di estradizione e nella fornitura di assistenza legale internazionale.",
            "Tuteliamo i diritti dei clienti in merito alle notifiche rosse Interpol e ai mandati di arresto internazionali.",
            "Forniamo difesa in procedimenti penali con un elemento transfrontaliere (riciclaggio di denaro, criminalità informatica).",
            "Consigliamo sul trasferimento delle persone condannate e sull'esecuzione di sentenze penali straniere.",
            "Garantiamo il rispetto dei diritti umani e degli standard internazionali nei processi penali."
          ]
        },
        { 
          title: 'Diritto Africano', 
          desc: 'Consulenza legale e rappresentanza in merito agli affari e ai sistemi giuridici degli stati africani.',
          details: [
            "Forniamo un'esperienza unica per gli affari nel continente africano, specialmente nei paesi con sistemi legali francofoni e anglofoni.",
            "Consigliamo sulla costituzione di società e investimenti nei settori minerario, energetico e delle costruzioni in Africa.",
            "Aiutiamo a comprendere il diritto OHADA e le integrazioni economiche regionali in Africa.",
            "Rappresentiamo gli interessi delle aziende serbe nelle trattative con le autorità statali e i partner africani.",
            "Forniamo assistenza legale nella risoluzione delle controversie dinanzi ai tribunali arbitrali in Africa."
          ]
        },
        { 
          title: 'Diritto Sudamericano', 
          desc: 'Consulenza legale e rappresentanza in merito agli affari e ai sistemi giuridici degli stati del Sud America.',
          details: [
            "Forniamo assistenza legale specializzata per i clienti che operano o pianificano investimenti in Sud America (Brasile, Argentina, Cile, Colombia).",
            "Consigliamo sulle normative locali in materia di investimenti esteri e costituzione di società nei paesi membri del MERCOSUR.",
            "Aiutiamo a navigare attraverso i complessi sistemi fiscali e le normative doganali degli stati sudamericani.",
            "Rappresentiamo gli interessi dei clienti in controversie commerciali e arbitrati dinanzi alle istituzioni regionali.",
            "Forniamo supporto nella comprensione delle tradizioni legali basate sul Diritto Civile nel contesto latinoamericano."
          ]
        },
      ],
      features: [
        'Consulenza esperta e analisi dei casi',
        'Rappresentanza dinanzi alle autorità competenti',
        'Redazione di documentazione legale in più lingue'
      ],
      whyTitle: 'Perché scegliere il nostro studio legale internazionale?',
      why1Title: 'Esperienza locale, standard globali',
      why1Desc: 'Conosciamo in dettaglio il diritto serbo e montenegrino, ma pensiamo globalmente. I nostri avvocati si sono formati in prestigiose università europee e seguono regolarmente le evoluzioni delle normative UE.',
      why2Title: 'Comunicazione multilingue',
      why2Desc: 'La comunicazione è la chiave del successo. Forniamo servizi in serbo, inglese, ungherese, francese, spagnolo e italiano, eliminando barriere e malintesi in questioni legali complesse.',
      practiceDetail: {
        backToPractice: 'Torna alle aree di attività',
        legalSecurity: 'Sicurezza Legale',
        legalSecurityDesc: 'Massima tutela dei vostri interessi',
        globalReach: 'Portata Globale',
        globalReachDesc: 'Supporto in Serbia e all\'estero',
        expertise: 'Esperienza',
        expertiseDesc: 'Team specializzato di esperti',
        bookConsultation: 'Prenota una consulenza per quest\'area',
      }
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
      description: 'Il nostro team non è composto solo da avvocati e praticanti, ma anche da una rete di associati con anni di esperienza.',
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
      ],
      joinTitle: 'Unisciti al nostro team',
      joinDesc: 'Siamo sempre alla ricerca di avvocati di talento che condividano la nostra passione per il diritto internazionale e l\'eccellenza nei servizi legali.',
      joinCta: 'Invia CV',
    },
    home: {
      seoTitle: 'Studio legale internazionale leader in Serbia e Montenegro',
      seoText1: 'Il nostro studio è riconosciuto come leader nel campo del diritto internazionale privato e del diritto dell\'Unione Europea. Con decenni di esperienza nella rappresentanza di clienti stranieri, offriamo sicurezza nel complesso ambiente legale dei Balcani.',
      seoText2: 'Che tu sia un investitore in cerca di consulenza legale per investire in Serbia, o un individuo che necessita di un avvocato per l\'immigrazione, il nostro team offre un approccio personalizzato in sei lingue mondiali. Comprendiamo le specificità delle controversie transfrontaliere e l\'importanza della conformità alle normative UE.',
      seoText3: 'Siamo specializzati in affari internazionali, arbitrato e protezione dei diritti umani. La nostra missione è essere un ponte tra i vostri obiettivi commerciali e la legislazione locale, garantendo la massima protezione legale.',
      seoFeatures: [
        'Esperienza nell\'integrazione UE',
        'Supporto multilingue (6 lingue)',
        'Rappresentanza in Montenegro',
        'Esperti in arbitrato',
        'Ottimizzazione fiscale',
        'Diritto immobiliare'
      ],
      experienceYears: '15+ Anni',
      experienceText: 'Esperienza in affari legali internazionali',
      learnMore: 'Scopri di più',
      viewAll: 'Visualizza tutte le aree di attività',
    },
    common: {
      tagline: 'Diritto Internazionale & UE',
      allRightsReserved: 'Tutti i diritti riservati.',
      privacyPolicy: 'Informativa sulla privacy',
      termsOfService: 'Termini di servizio',
      legalNotice: 'Note legali',
    }
  }
};
