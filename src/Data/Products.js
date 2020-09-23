const products = [
  {
    price: "price_1HRbBCHt5cjb9PVzdGVa4Gh2",
    pric: "2000",
    name: "Kurs HTML + CSS",
    color: "#54B3B5",
    img: 'https://miro.medium.com/max/675/1*dqLV7KjUtg57JPBCilqxSQ.jpeg',
    id: 1,
    description: `Podczas tego kursu opanujesz techniki, które pozwolą Ci tworzyć proste, ale fajne strony internetowe, które będą dobrze wyglądać również na urządzeniach mobilnych - pod koniec kursu zbudujesz taką stronę-wizytówkę.
     Nauczysz się od podstaw tworzyć strukturę strony w HTML i stylować ją przy pomocy CSS. Poznasz również przydatne narzędzia usprawniające pracę związaną z tworzeniem stron. Zrobimy bardzo dużo w kierunku zostania przez Ciebie dobrym web developerem.`,
    stage: "Programowanie od podstaw w HTML+CSS + podstawy JS. (Etap 1)",
    popular: "1291",
    who: [
        "Osoby będące na początku drogi do zostania front-end developerem i rozpoczęcia kariery w branży IT.",
        "Osoby, które chcą nauczyć się tworzenia stron, aby wykorzystać to w obecnej pracy/działalności.",
        "Osoby, które znają podstawy HTML i CSS, ale chcą je sobie powtórzyć i utrwalić.",
    ],
    nickName: "Andrzej Struga",
    numberOpinon: "19",
    descriptionOpinion: "Dobry! Powoli, ale pewnie wszystko wyjaśnił. Długie, rozdziały zrobione na temat. Wszystko, co jest potrzebne, zostało powiedziane. Miałem już pewne doświadczenie z HTML5 i CSS, ale zdecydowałem się pójść na kolejny kurs, aby być może zobaczyć kilka nowych rzeczy lub uzyskać więcej wyjaśnień. Nie żałuję, zbudowałem Omnifood z Mateuszem i ponownie, przebudowałem go sam, z Grid & Sass. Świetnie się bawiłem i zdobyłem dużo wiedzy. Dzięki i do zobaczenia w następnym. "
},

  {
    price: "price_1HRbASHt5cjb9PVzgPERHRWL",
    pric: "1500",
    name: "Kurs JavaScript",
    color: "#FB9C1C",
    id: 2,
    img: "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2016/04/javascript-encode-.png",
    description: `Ten kurs pomoże Ci uzyskać biegłość w posługiwaniu się kluczowymi właściwościami CSS a także sprawnie wykorzystywać JavaScript i jQuery w celu uatrakcyjnienia (ożywienia) tworzonego projektu. Nauczysz się korzystać z nowoczesnych, bardziej zaawansowanych technik i rozwiązań CSS, takich jak Flexbox czy CSS Animation. Poznasz też preprocesor Sass. Podczas kursu zrobimy mnóstwo projektów, np. galeria, slajder, modal/popup, menu hamburger, animacje, efekty związane z kliknięciem, najechaniem czy skrolowaniem strony.` ,
    stage: `Naucz się tworzyć atrakcyjne strony internetowe z wykorzystaniem bardziej zaawansowanych technik CSS i JavaScript (Etap 2)`,
    popular: "1891",
    who: [
        "osoby, które uczyły się już CSS i HTML, znają fundamenty tworzenia stron internetowych",
        "osoby, które ukończyły mój kurs HTML + CSS i chcą dalej rozwijać swoje umiejętności",
    ],
    nickName: 'Patryk Nosal',
    numberOpinon: '12',
    descriptionOpinion: "Mateusz bardzo się stara, aby naprawdę wyjaśnić, jak rzeczy działają pod maską, więc nie masz wrażenia, że ​​tylko kopiujesz kod - tak naprawdę rozumiesz, co piszesz i dlaczego. W szczególności doceniam to, że Mateusz nie usuwa drobnych błędów po drodze. Zamiast tego wykorzystuje każdą z nich jako okazję, aby pokazać uczniom, jak rozwiązywać problemy jak programista: co wpisać w Google, gdy utkniesz, jak dotrzeć do końca komunikatu o błędzie itp. "
  },
  {
    price: "price_1HS7wIHt5cjb9PVzxrjFsi1M",
    pric: "2200",
    name: "Kurs Node",
    color: "#3F863A",
    id: 4,
    img: "https://blog.aftermarket.pl/content/images/2019/11/instalacja_ghost-1.jpg",
    description:`Kompletny kurs programisty Node.js obejmuje podstawy Node, zanim zagłębimy się w świetne narzędzia, takie jak Express, Mongoose i MongoDB.

    Cały kurs opiera się na jednym celu: uczynieniu z Ciebie profesjonalnego programisty Node zdolnego do opracowywania, testowania i wdrażania aplikacji produkcyjnych w świecie rzeczywistym.
    
    Najlepszym sposobem nauki Node jest tworzenie aplikacji Node.
    
    Od samego początku będziesz programować każdy projekt i pracować nad wyzwaniami, które zaprojektowałem, aby wzmocnić to, czego się nauczyłeś. Zapewni to praktyczne doświadczenie niezbędne do stworzenia i uruchomienia własnego projektu, gdy skończysz. ` ,
    stage: "Kompletny kurs programisty Node.js obejmuje podstawy Node, Express, Mongoose i MongoDB (Etap4)" ,
    popular: "3812",
    who: [
        "Każdy, kto chce uruchamiać własne aplikacje Node, zmieniać karierę lub pracować jako niezależny programista Node ",
        "Ci, którzy chcą rozpocząć karierę jako programista NodeJS",
        "Ci, którzy chcą zostać programistami stosów MEAN",
        "Ci, którzy nie mają doświadczenia w technologii serwerowej, ale chcą zdobyć tę umiejętność",
        "Ci, którzy pochodzą z innych technologii serwerowych (takich jak PHP, ASP.NET czy Ruby on Rails) i chcą się uczyć Node",
        "Ci, którzy chcą tylko napisać kod klienta i serwera w jednym języku: Javascript",
        "Ci, którzy chcą pojąć Express ",
    ],
    nickName: 'Michał Markiewicz',
    numberOpinon: '24',
    descriptionOpinion: 'Mateusz jest energicznym i kompetentnym nauczycielem. Lekcje podzielone są na mniejsze części, co pozwala wybrać własne tempo podczas nauki. Części teoretyczne są przeplatane praktycznymi wyzwaniami, które ładnie je uzupełniają. Wreszcie, sekcja pytań i odpowiedzi jest dobrze utrzymana i zawierała wiele pomocnych tematów podczas kursu. Nauka Node z Mateuszem jako przewodnikiem była przyjemnością! ',
  },
  {
    price: "price_1HRb9AHt5cjb9PVzaiohV7LI",
    pric: "1000",
    name: "Kurs React",
    color: "#18BCEE",
    id: 3,
    img: 'https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png',
    description: `Biblioteka React to jedno z najpopularniejszych rozwiązań w pracy front-end developera.  React to nowe podejście do tworzenia interfejsów użytkownika. Ten kurs ma dać Ci mocne fundamenty teoretyczne, ale także, poprzez wiele przykładów, nauczyć cię praktycznego wykorzystania React. To nie jest chwilowa moda czy przypadek, że mnóstwo ogłoszeń o pracę na stanowisku front-end developera wymaga znajomości Reacta. Jeśli poznałaś/poznałeś już JavaScript, to kolejnym krokiem w Twojej nauce może być React.`,
    stage: "Naucz się frameworka React, jest to najpopularniejsza biblioteka JavaScript! (Etap3)" ,
    popular: '2971' ,
    who: [
        "Osoby, które szukają pracy jako front-end developerzy",
        "Osoby, których obecna praca wymaga znajomości React",
        "Osoby, które chcą tworzyć własne projekty w oparciu o React",
        "Freelancerzy, którzy chcą tworzyć nowoczesne strony typu Single Page Application",
    ],
    nickName: 'Marcin Tyszka',
    numberOpinon: '7',
    descriptionOpinion: 'Niesamowity kurs na rozpoczęcie budowania aplikacji React, instruktor jest niesamowicie świetny, wyjaśnia wszystko na różne sposoby i pokazuje nam wszystkie możliwe sposoby pracy z Reactem. Jeśli myślisz o przeniesieniu swojej kariery na wyższy poziom i nauczysz się czegoś modnego, naprawdę radzę ci na tym kursie. Na koniec chciałbym podziękować instruktorowi za tak piękny kurs, życzę wszystkiego najlepszego. pozdrowienia ',
  },



  {
    price: "price_1HTZUCHt5cjb9PVzcfCnYSg6",
    pric: "24000",
    name: "Kurs Java!",
    color: "#E82F2E",
    id: 5,
    img: 'https://miro.medium.com/max/620/1*Pb47wnmlN201inlk7FnT7A.jpeg',
    description: `W moim kursie Javy nie musisz znać podstaw programowania. Nauczysz się wszystkiego od zera. Obal mit, że programowanie jest dla nielicznych. Pisz własne programy! :)
    Java jest językiem zorientowanym obiektowo. Jego główną zaletą jest to, że może być odpalony wszędzie na Windowsie, Linuksie, Uniksie, Macintoshu, w tel. komórkowym itd.
    Java jest jednym z najbardziej pożądanych języków przez pracodawców - poznając Jave na pewno łatwo znajdziesz pracę. W Javie możesz tworzyć aplikacje mobilne na Androida, gry komputerowe (Minecraft), aplikacje pulpitowe i wiele innych.
    `,
    stage: "Stworzony z myślą o osobach, które nie wiedzą nic na temat programowania w Java. Stań się ekspertem w Javie już dziś! (Etap rozszerzony!)",
    popular: "831",
    who: [
    "Weź udział w tym kursie, jeśli chcesz dobrze zrozumieć najpopularniejszy język programowania na świecie: JavaScript.",
    "Weź udział w tym kursie, jeśli ukończyłeś inne kursy JavaScript, ale: 1) nadal nie rozumiesz języka JavaScript lub 2) nadal nie czujesz się pewnie w programowaniu aplikacji w świecie rzeczywistym. Ten kurs jest dla Ciebie idealny!",
    "Weź udział w tym kursie, jeśli interesuje Cię korzystanie z popularnych bibliotek / frameworków, takich jak React, Angular lub Node.",
    "Weź udział w tym kursie, jeśli chcesz zacząć od programowania w ogóle: JavaScript to świetny język do nauki programowania. ",
    ],
    nickName: "Mirosław Miłosz",
    numberOpinon: "26",
    descriptionOpinion: "Mateusz bardzo się stara, aby naprawdę wyjaśnić, jak rzeczy działają pod maską, więc nie masz wrażenia, że ​​tylko kopiujesz kod - tak naprawdę rozumiesz, co piszesz i dlaczego. W szczególności doceniam to, że Jonas nie usuwa drobnych błędów po drodze. Zamiast tego wykorzystuje każdą z nich jako okazję, aby pokazać uczniom, jak rozwiązywać problemy jak programista: co wpisać w Google, gdy utkniesz, jak dotrzeć do końca komunikatu o błędzie itp. "
},



  {
    price: "price_1HTZaXHt5cjb9PVzIjdrSXzv",
    pric: "24000",
    name: "Kurs Java Spring",
    color: "#6CB33E",
    id: 6,
    img: "https://spring.io/images/OG-Spring.png",
    description: `Chcesz zostać ekspertem w Spring Framework? Chcesz zostać Modern Spring Developer ? Dołącz do kursu, aby nauczyć się Spring Framework w nowoczesny sposób - sposób, w jaki projekty Java w świecie rzeczywistym go używają!
    Poznaj magię Spring Framework . Od IOC (Inversion of Control), DI (Dependency Injection), Application Context do świata Java Spring Boot, Spring AOP , Spring JDBC i JPA. Przygotuj się na niesamowitą podróż. 
    `,
    stage: "Stworzony z myślą o osobach, które nie wiedzą nic na temat programowania w Java. Stań się ekspertem w Javie już dziś! (Etap rozszerzony!)",
    popular: "831",
    who: [
      "Podstawy Spring Framework - Dependency Injection, IOC Container, Application Context i Bean Factory",
      "Wiosenne adnotacje - @Autowired, @Component, @Service, @Repository, @Configuration, @Primary",
      "Szczegółowe omówienie Spring MVC - DispatcherServlet, Model, Controllers i ViewResolver",
      "Spring Boot Starters - Spring Boot Starter Web, Starter Data Jpa, Starter Test",
      "Podstawy Spring Boot, Spring AOP, Spring JDBC i JPA",
      "Podstawy Eclipse, Maven, JUnit i Mockito",
      "Podstawowa koncepcja aplikacji WWW krok po kroku z wykorzystaniem serwletów JSP i Spring MVC",
      "Testowanie jednostkowe za pomocą JUnit i Mockito przy użyciu kontekstów aplikacji XML i Java Spring" ,
    ],
    nickName: "Adrian Bożek",
    numberOpinon: "17",
    descriptionOpinion: "Ten kurs zmienił sposób myślenia o kodzie i jego przetwarzania. Zawsze chciałem spróbować zbudować własną aplikację internetową, co dało mi pewność, że to zrobię! Stephen naprawdę dokłada wszelkich starań, aby pomóc Ci zrozumieć trudne koncepcje, zachowując jednocześnie świeżość. Bardzo polecam każdemu ten kurs.  "
},
];
export default products;
