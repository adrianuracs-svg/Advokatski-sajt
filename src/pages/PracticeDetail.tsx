
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Globe2, ShieldCheck, Building2 } from 'lucide-react';

export const PracticeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const practiceIndex = parseInt(id || '0');
  const practice = t.practice.items[practiceIndex];

  if (!practice) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold">Practice area not found.</h1>
        <Link to="/practice" className="text-stone-600 hover:underline mt-4 inline-block">Back to Practice Areas</Link>
      </div>
    );
  }

  // Image mapping for each practice area
  const practiceImages: Record<number, string> = {
    0: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Privreda
    1: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200", // Sporovi
    2: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200", // Stranci
    3: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200", // Inostranstvo
    4: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200", // EU
    5: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", // Nekretnine
    6: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200", // Porezi
    7: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200", // Intelektualna svojina
    8: "https://images.unsplash.com/photo-1591115765373-520b7a217157?auto=format&fit=crop&q=80&w=1200", // Porodica
    9: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200", // Krivično
  };

  const currentImage = practiceImages[practiceIndex] || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200";

  // Detailed content generation (simulated 30 sentences per area in Serbian)
  const getDetailedContent = (index: number) => {
    const contents: Record<number, string[]> = {
      0: [ // Međunarodna privreda
        "Naša kancelarija pruža sveobuhvatnu pravnu podršku stranim investitorima koji žele da započnu ili prošire svoje poslovanje u Srbiji.",
        "Specijalizovani smo za proces osnivanja privrednih društava, odabir optimalne pravne forme i registraciju kod Agencije za privredne registre.",
        "Savetujemo klijente o svim aspektima međunarodnih trgovinskih ugovora, uključujući kupoprodaju, distribuciju i franšizing.",
        "Pomažemo u strukturiranju stranih direktnih investicija (FDI) kako bi se maksimizovale poreske olakšice i državni podsticaji.",
        "Vršimo detaljan pravni due diligence pre akvizicija ili spajanja kompanija na srpskom tržištu.",
        "Zastupamo interese klijenata u pregovorima sa lokalnim partnerima i državnim institucijama.",
        "Osiguravamo potpunu usklađenost poslovanja sa Zakonom o privrednim društvima i pratećim propisima.",
        "Pružamo usluge korporativnog upravljanja i sekretarske poslove za međunarodne korporacije.",
        "Savetujemo o prekograničnim transakcijama i deviznom poslovanju u skladu sa lokalnim regulativama.",
        "Pomažemo u rešavanju kompleksnih pitanja konkurencije i antimonopolskog prava na tržištu Srbije.",
        "Naš tim izrađuje sve vrste internih akata kompanije, pravilnika i ugovora o radu sa menadžmentom.",
        "Pružamo podršku u procesima likvidacije i stečaja sa međunarodnim elementom.",
        "Fokusirani smo na zaštitu prava manjinskih akcionara u stranim kompanijama.",
        "Savetujemo o primeni međunarodnih računovodstvenih standarda u pravnom kontekstu.",
        "Pomažemo u dobijanju svih neophodnih licenci i dozvola za specifične privredne delatnosti.",
        "Zastupamo klijente u sporovima pred Privrednim sudovima širom Srbije.",
        "Pružamo pravnu pomoć u vezi sa lizingom, faktoringom i drugim oblicima finansiranja privrede.",
        "Savetujemo o odgovornosti direktora i članova uprave u međunarodnim grupama.",
        "Osiguravamo zaštitu poslovne tajne i poverljivih informacija u prekograničnoj saradnji.",
        "Pomažemo u implementaciji ESG standarda i društveno odgovornog poslovanja.",
        "Savetujemo o pravnim aspektima digitalne transformacije i e-trgovine za strane firme.",
        "Pružamo podršku u vezi sa carinskim propisima i međunarodnom špedicijom.",
        "Zastupamo klijente u postupcima pred deviznom inspekcijom i Narodnom bankom Srbije.",
        "Pomažemo u strukturiranju holding kompanija i optimizaciji vlasničke strukture.",
        "Savetujemo o zaštiti investicija kroz bilateralne i multilateralne sporazume.",
        "Pružamo pravnu pomoć u vezi sa javnim nabavkama i projektima javno-privatnog partnerstva.",
        "Savetujemo o radnopravnim aspektima preuzimanja zaposlenih u procesima akvizicija.",
        "Pomažemo u rešavanju sporova između osnivača i akcionara u međunarodnim kompanijama.",
        "Naša ekspertiza obuhvata i savetovanje o kriptovalutama i blockchain tehnologiji u privredi.",
        "Naš cilj je da budemo vaš pouzdan partner u svakom koraku vašeg poslovnog uspeha u Srbiji."
      ],
      1: [ // Međunarodni sporovi
        "Zastupanje u međunarodnim sporovima zahteva duboko poznavanje kako domaćeg, tako i međunarodnog procesnog prava.",
        "Naša kancelarija ima bogato iskustvo u vođenju kompleksnih parnica sa stranim elementom pred sudovima u Srbiji.",
        "Specijalizovani smo za međunarodnu trgovinsku arbitražu (spoljnotrgovinska arbitraža) i alternativno rešavanje sporova.",
        "Pružamo usluge priznavanja i izvršenja stranih sudskih i arbitražnih odluka u Republici Srbiji.",
        "Savetujemo klijente o izboru nadležnog suda i merodavnog prava prilikom zaključivanja ugovora.",
        "Zastupamo strane kompanije u sporovima nastalim iz povrede ugovornih obaveza i naknade štete.",
        "Pružamo pravnu pomoć u postupcima privremenih mera i obezbeđenja potraživanja sa međunarodnim elementom.",
        "Naš tim je obučen za vođenje postupaka pred međunarodnim arbitražnim institucijama kao što su ICC, LCIA i VIAC.",
        "Savetujemo o imunitetu država i međunarodnih organizacija u sudskim postupcima.",
        "Pružamo podršku u prekograničnom prikupljanju dokaza i saslušanju svedoka u inostranstvu.",
        "Zastupamo klijente u sporovima vezanim za međunarodni transport robe i osiguranje.",
        "Pomažemo u rešavanju investicionih sporova između država i stranih investitora (ISDS).",
        "Naša ekspertiza obuhvata i sporove iz oblasti intelektualne svojine sa globalnim dosegom.",
        "Pružamo pravne savete o jurisdikciji u digitalnom prostoru i sporovima u vezi sa e-trgovinom.",
        "Zastupamo interese klijenata u postupcima pred Evropskim sudom za ljudska prava u Strazburu.",
        "Analiziramo rizike od nastanka sporova i predlažemo strategije za njihovo izbegavanje.",
        "Pružamo usluge medijacije kao efikasnog načina za rešavanje međunarodnih poslovnih konflikata.",
        "Naš tim sarađuje sa vodećim svetskim advokatskim kancelarijama u koordinaciji globalnih parnica.",
        "Savetujemo o primeni Haških konvencija u pogledu dostavljanja pismena u inostranstvo.",
        "Pružamo pravnu pomoć u vezi sa međunarodnim stečajnim postupcima i restrukturiranjem.",
        "Zastupamo klijente u sporovima pred Stalnom arbitražom pri Privrednoj komori Srbije.",
        "Pomažemo u izvršenju domaćih presuda u inostranstvu kroz našu mrežu saradnika.",
        "Savetujemo o troškovima međunarodnih sudskih postupaka i mogućnostima finansiranja parnica.",
        "Pružamo podršku u vezi sa odgovornošću za proizvod u prekograničnom prometu.",
        "Zastupamo klijente u sporovima nastalim iz međunarodnih bankarskih garancija i akreditiva.",
        "Savetujemo o pravnim lekovima protiv odluka međunarodnih sportskih arbitraža.",
        "Pružamo pravnu pomoć u vezi sa diplomatskom zaštitom i konzularnim intervencijama.",
        "Analiziramo uticaj sankcija i međunarodnih restriktivnih mera na tekuće sporove.",
        "Osiguravamo da se interesi naših klijenata štite uz maksimalnu diskreciju i profesionalizam.",
        "Vaš uspeh u sporu je naš prioritet, bez obzira na granice i pravne sisteme."
      ],
      2: [ // Pravo stranaca
        "Pravo stranaca je jedna od naših primarnih oblasti u kojoj pružamo svakodnevnu podršku klijentima iz celog sveta.",
        "Pomažemo stranim državljanima u procesu dobijanja viza za ulazak i boravak u Republici Srbiji.",
        "Specijalizovani smo za postupke odobrenja privremenog boravka po svim zakonskim osnovima (rad, spajanje porodice, školovanje).",
        "Pružamo kompletnu uslugu dobijanja radnih dozvola za strane radnike i upućena lica.",
        "Savetujemo klijente o uslovima za sticanje stalnog nastanjenja u Srbiji nakon višegodišnjeg boravka.",
        "Zastupamo klijente u postupcima sticanja državljanstva Republike Srbije putem prijema ili po poreklu.",
        "Pružamo pravnu pomoć u vezi sa prijavom boravišta (beli karton) i obavezama stranaca prema MUP-u.",
        "Savetujemo o pravima i obavezama stranaca u pogledu posedovanja nepokretnosti i obavljanja delatnosti.",
        "Pružamo podršku u postupcima azila i međunarodne zaštite za lica kojima je to neophodno.",
        "Zastupamo strance u upravnim sporovima protiv odluka o odbijanju boravka ili deportaciji.",
        "Pomažemo u procesu nostrifikacije stranih diploma i sertifikata radi zapošljavanja u Srbiji.",
        "Savetujemo o poreskom statusu stranaca i obavezama socijalnog osiguranja u prekograničnim situacijama.",
        "Pružamo pravnu pomoć digitalnim nomadima i stranim preduzetnicima koji biraju Srbiju za svoju bazu.",
        "Savetujemo o pravima stranaca na zdravstvenu zaštitu i obrazovanje u lokalnom sistemu.",
        "Pomažemo u rešavanju statusnih pitanja dece rođene u braku stranih državljana na teritoriji Srbije.",
        "Zastupamo klijente u postupcima pred graničnom policijom i inspekcijskim organima.",
        "Pružamo informacije o viznim olakšicama za državljane određenih zemalja u skladu sa međunarodnim ugovorima.",
        "Savetujemo o posledicama kršenja imigracionih propisa i načinima za njihovu sanaciju.",
        "Pomažemo u dobijanju JMBG broja za strance i registraciji u sistemu socijalnog osiguranja.",
        "Savetujemo o pravnim aspektima uvoza ličnih stvari i motornih vozila prilikom preseljenja u Srbiju.",
        "Pružamo podršku stranim penzionerima koji žele da provedu svoje penzionerske dane u Srbiji.",
        "Zastupamo klijente u postupcima pred ambasadama i konzulatima Srbije u inostranstvu.",
        "Savetujemo o pravima stranaca na učešće u privrednom životu i osnivanje udruženja.",
        "Pomažemo u dobijanju dozvola za nošenje oružja ili bavljenje specifičnim hobijima za strance.",
        "Pružamo pravnu pomoć u vezi sa međunarodnim vozačkim dozvolama i zamenom stranih dozvola.",
        "Savetujemo o pravnim posledicama sklapanja braka stranca sa državljaninom Srbije.",
        "Pomažemo u rešavanju problema sa zabranom ulaska u Šengen zonu ili Srbiju.",
        "Pružamo usluge sudskog tumača i prevoda dokumentacije neophodne za statusna pitanja.",
        "Naš cilj je da vaš boravak i rad u Srbiji budu potpuno legalni i bez administrativnih prepreka.",
        "Pružamo sigurnost vama i vašoj porodici u novom životnom i poslovnom okruženju."
      ],
    };

    return contents[index] || [
      `${practice.title} predstavlja ključni stub naše pravne prakse sa fokusom na međunarodne standarde.`,
      "Naš pristup podrazumeva dubinsku analizu svakog pojedinačnog slučaja i identifikaciju svih pravnih rizika.",
      "Pružamo savetodavne usluge koje su usklađene sa najnovijim trendovima u globalnom zakonodavstvu.",
      "Zastupamo klijente pred svim relevantnim državnim organima i institucijama u Srbiji.",
      "Naša kancelarija osigurava da su svi vaši interesi zaštićeni kroz precizno definisane ugovore.",
      "Pomažemo u premošćivanju razlika između različitih pravnih sistema i kultura poslovanja.",
      "Savetujemo o primeni međunarodnih konvencija i bilateralnih sporazuma koje je Srbija ratifikovala.",
      "Pružamo podršku u pregovorima sa trećim stranama radi postizanja najpovoljnijih ishoda.",
      "Naš tim kontinuirano prati promene u zakonodavstvu kako bismo vam pružili ažurne informacije.",
      "Specijalizovani smo za rešavanje kompleksnih situacija koje zahtevaju multidisciplinarni pristup.",
      "Osiguravamo poverljivost i integritet u svakom koraku pravnog procesa.",
      "Pružamo usluge na više svetskih jezika kako bismo olakšali komunikaciju sa klijentima.",
      "Naša mreža partnera u inostranstvu omogućava nam da pružimo podršku i van granica Srbije.",
      "Fokusirani smo na efikasnost i postizanje rezultata u najkraćem mogućem roku.",
      "Savetujemo o preventivnim merama koje mogu sprečiti nastanak budućih pravnih sporova.",
      "Pružamo edukaciju klijentima o njihovim pravima i obavezama u specifičnim oblastima.",
      "Zastupamo interese kako fizičkih lica, tako i velikih korporativnih sistema.",
      "Naša reputacija je izgrađena na poverenju i uspešno rešenim međunarodnim slučajevima.",
      "Verujemo u transparentnost i redovno izveštavanje klijenata o toku njihovih predmeta.",
      "Analiziramo uticaj globalnih ekonomskih kretanja na vašu pravnu poziciju.",
      "Pružamo podršku u vezi sa digitalnom imovinom i modernim tehnologijama.",
      "Savetujemo o etičkim standardima i usklađenosti sa međunarodnim kodeksima ponašanja.",
      "Pomažemo u dobijanju svih potrebnih sertifikata za međunarodno poslovanje.",
      "Zastupamo klijente u postupcima pred nezavisnim regulatornim telima.",
      "Savetujemo o pravnim aspektima održivog razvoja i zelene agende.",
      "Pružamo podršku u vezi sa zaštitom podataka o ličnosti u prekograničnom kontekstu.",
      "Savetujemo o pravima potrošača u međunarodnoj trgovini.",
      "Pomažemo u strukturiranju kompleksnih finansijskih transakcija.",
      "Naša misija je da budemo vaš glas u pravnom sistemu Srbije i šire.",
      "Vaša pravna sigurnost u međunarodnom okruženju je naša misija i obaveza."
    ];
  };

  const sentences = getDetailedContent(practiceIndex);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/practice" className="inline-flex items-center text-stone-500 hover:text-stone-900 mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t.nav.practice}
          </Link>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 bg-stone-100 rounded-2xl text-stone-900">
              <Building2 className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900">{practice.title}</h1>
          </div>

          {/* New Image Section */}
          <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video relative">
            <img 
              src={currentImage} 
              alt={practice.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <div className="bg-stone-50 p-8 md:p-16 rounded-[3rem] border border-stone-100 shadow-sm mb-12">
              <p className="text-2xl text-stone-800 font-semibold leading-relaxed italic mb-12 border-l-8 border-stone-900 pl-8">
                {practice.desc}
              </p>
              
              <div className="space-y-6">
                {sentences.map((sentence, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed text-justify">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">Pravna Sigurnost</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Maksimalna zaštita vaših interesa</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <Globe2 className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">Globalni Doseg</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Podrška u Srbiji i inostranstvu</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <CheckCircle2 className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">Ekspertiza</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Specijalizovani tim stručnjaka</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all shadow-lg">
              Zakažite konsultacije za ovu oblast
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
