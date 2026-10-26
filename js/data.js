/**
 * REAL MADRID CF — OFFICIAL CLUB DATASET & ARCHIVE
 * Verified historical, squad, fixture, and trophy records.
 * Unofficial fan tribute & digital platform.
 */

window.REAL_MADRID_DATA = {
  club: {
    officialName: "Real Madrid Club de Fútbol",
    founded: "6 March 1902",
    foundingPresidents: "Juan Padrós & Carlos Padrós",
    honoraryPresident: "José Martínez 'Pirri'",
    president: "Florentino Pérez",
    headCoach: "Carlo Ancelotti",
    stadium: "Estadio Santiago Bernabéu",
    stadiumCapacity: "84,700",
    city: "Madrid, Spain",
    motto: "¡Hala Madrid! ...y nada más",
    fifaDistinction: "FIFA Best Club of the 20th Century",
    anthemLyrics: {
      title: "Hala Madrid y nada más",
      composed: "RedOne & Manuel Jabois (2014, La Décima)",
      verse1: "Historia que tú hiciste, historia por hacer, porque nadie resiste tus ganas de vencer.",
      chorus: "¡Hala Madrid!... ¡Hala Madrid!... Noble y bélico adalid, caballero del honor. ¡Hala Madrid!... ¡Hala Madrid!... A triunfar en buena lid, defendiendo tu color.",
      translation: "History you have made, history yet to be made, because no one can resist your desire to triumph. Hala Madrid and nothing more!"
    }
  },

  trophies: {
    totalMajorTrophies: 104,
    categories: [
      {
        id: "ucl",
        title: "UEFA Champions League / European Cup",
        count: 15,
        badge: "15x RECORD",
        icon: "assets/icons/trophy-ucl.svg",
        description: "The undisputed Kings of Europe. From the inception of the European Cup in 1955/56 to Wembley 2024, Real Madrid holds more than double the titles of any other club on earth.",
        years: [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024],
        milestones: [
          { name: "La Primera (1956)", desc: "4-3 vs Stade de Reims at Parc des Princes, Paris. The birth of European royalty." },
          { name: "The Five-in-a-Row (1956-1960)", desc: "Di Stéfano, Puskás, and Gento conquer Europe five times consecutively, culminating in the 7-3 Hampden Park masterclass." },
          { name: "La Séptima (1998)", desc: "1-0 vs Juventus in Amsterdam. Predrag Mijatović ends the 32-year European Cup wait." },
          { name: "La Novena (2002)", desc: "2-1 vs Bayer Leverkusen at Hampden Park. Zinedine Zidane's immortal left-footed volley." },
          { name: "La Décima (2014)", desc: "4-1 vs Atlético de Madrid in Lisbon. Sergio Ramos's header at 92:48 triggers glory." },
          { name: "The Three-Peat (2016-2018)", desc: "Milan (2016), Cardiff (2017), Kyiv (2018) under Zinedine Zidane — unprecedented in the modern Champions League era." },
          { name: "La Decimocuarta (2022)", desc: "1-0 vs Liverpool in Paris after legendary Bernabéu comebacks against PSG, Chelsea, and Manchester City." },
          { name: "La Decimoquinta (2024)", desc: "2-0 vs Borussia Dortmund at Wembley. Dani Carvajal and Vinicius Jr. seal European title number 15." }
        ]
      },
      {
        id: "laliga",
        title: "La Liga (Spanish Championship)",
        count: 36,
        badge: "36x RECORD",
        icon: "assets/icons/trophy-laliga.svg",
        description: "The most successful club in the history of Spanish football. Real Madrid has claimed the national crown across every era of professional football.",
        years: [
          1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 
          1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 
          1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 
          2020, 2022, 2024
        ],
        milestones: [
          { name: "La Quinta del Buitre (1986-1990)", desc: "5 consecutive league titles scored with attacking brilliance by home-grown Madridistas." },
          { name: "La Liga de los Récords (2011-12)", desc: "100 points and 121 league goals under José Mourinho — an all-time record in Spanish league history." },
          { name: "Champion 2023-24", desc: "A commanding 36th championship, secured with 95 points and only 1 defeat." }
        ]
      },
      {
        id: "copa",
        title: "Copa del Rey",
        count: 20,
        badge: "20x CHAMPIONS",
        icon: "assets/icons/trophy-copa.svg",
        description: "Spain's historic national cup competition. Real Madrid won the first four editions between 1905 and 1908.",
        years: [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023],
        milestones: [
          { name: "The Quadruple Beginnings (1905-1908)", desc: "Madrid FC won four consecutive Copa trophies, earning permanent ownership of the cup." },
          { name: "Mestalla 2014", desc: "Gareth Bale's iconic 85th-minute sprint outside the touchline to win 2-1 against Barcelona." },
          { name: "La Cartuja 2023", desc: "Rodrygo strikes twice in Seville to defeat Osasuna 2-1 and lift the 20th Copa del Rey." }
        ]
      },
      {
        id: "cwc",
        title: "World Championships (FIFA Club World Cup & Intercontinental)",
        count: 8,
        badge: "8x RECORD",
        icon: "assets/icons/trophy-cwc.svg",
        description: "Crown of the globe. Real Madrid is the most successful club in world championship history (5 FIFA Club World Cups + 3 Intercontinental Cups).",
        years: [1960, 1998, 2002, 2014, 2016, 2017, 2018, 2022],
        milestones: [
          { name: "Inaugural Intercontinental Cup (1960)", desc: "Real Madrid crushed Peñarol 5-1 at the Bernabéu after a 0-0 in Montevideo." },
          { name: "Raúl's Agualís (1998)", desc: "Raúl's iconic dummy in Tokyo against Vasco da Gama to win the Intercontinental Cup 2-1." },
          { name: "Morocco 2022", desc: "A thrilling 5-3 final victory over Al Hilal to claim their 5th FIFA Club World Cup." }
        ]
      },
      {
        id: "supercup",
        title: "UEFA Super Cup",
        count: 6,
        badge: "6x RECORD",
        icon: "assets/icons/trophy-supercup.svg",
        description: "Contested between Champions League and Europa League winners. Real Madrid stands alone as the sole 6-time champion in European history.",
        years: [2002, 2014, 2016, 2017, 2022, 2024],
        milestones: [
          { name: "Monaco 2002", desc: "3-1 over Feyenoord with Roberto Carlos and Guti dazzling." },
          { name: "Warsaw 2024", desc: "2-0 vs Atalanta with Kylian Mbappé scoring on his Real Madrid debut and Fede Valverde breaking the deadlock." }
        ]
      },
      {
        id: "supercopa",
        title: "Supercopa de España",
        count: 13,
        badge: "13x CHAMPIONS",
        icon: "assets/icons/trophy-laliga.svg",
        description: "The Spanish Super Cup, showcasing top league and cup contenders.",
        years: [1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, 2024],
        milestones: [
          { name: "Riyadh 2024", desc: "Vinicius Jr. scores a sensational first-half hat-trick in a 4-1 Clásico triumph over FC Barcelona." }
        ]
      }
    ]
  },

  firstTeam: [
    {
      id: "mbappe",
      name: "Kylian Mbappé",
      number: 9,
      position: "Forward",
      category: "forward",
      nationality: "France",
      flag: "🇫🇷",
      dob: "20 December 1998 (Age 25)",
      height: "1.78 m",
      preferredFoot: "Right",
      joined: "2024",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "assets/images/players/mbappe.jpg",
      quote: "Playing for Real Madrid is the fulfillment of a childhood dream. I want to write history with this crest.",
      stats: { appearances: 14, goals: 8, assists: 2, trophies: 1 },
      bio: "World Cup champion and one of football's premier attacking talents. Arrived in Madrid in the summer of 2024 to wear the legendary number 9 shirt, immediately scoring on his debut in the UEFA Super Cup final against Atalanta in Warsaw.",
      attributes: { pace: 97, shooting: 90, passing: 82, dribbling: 92, physical: 78 }
    },
    {
      id: "vinicius",
      name: "Vinícius Júnior",
      number: 7,
      position: "Forward",
      category: "forward",
      nationality: "Brazil",
      flag: "🇧🇷",
      dob: "12 July 2000 (Age 24)",
      height: "1.76 m",
      preferredFoot: "Right",
      joined: "2018",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      quote: "Baila, Vini. Real Madrid is about courage, smiling through pressure, and winning when everything is on the line.",
      stats: { appearances: 280, goals: 88, assists: 76, trophies: 13 },
      bio: "Scorer of the winning goals in the 2022 and 2024 Champions League finals against Liverpool and Borussia Dortmund. Named 2023/24 UEFA Champions League Player of the Season. The electrifying heartbeat of Real Madrid's attack.",
      attributes: { pace: 95, shooting: 86, passing: 81, dribbling: 94, physical: 72 }
    },
    {
      id: "bellingham",
      name: "Jude Bellingham",
      number: 5,
      position: "Midfielder",
      category: "midfielder",
      nationality: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      dob: "29 June 2003 (Age 21)",
      height: "1.86 m",
      preferredFoot: "Right",
      joined: "2023",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      quote: "When you put on the white shirt, you don't feel pressure — you feel privilege.",
      stats: { appearances: 54, goals: 25, assists: 15, trophies: 3 },
      bio: "Inherited Zinedine Zidane's legendary number 5 shirt. Won La Liga Player of the Season, Champions League Young Player of the Season, and the Kopa Trophy in a sensational debut campaign marked by dramatic stoppage-time winners in El Clásico.",
      attributes: { pace: 82, shooting: 87, passing: 88, dribbling: 89, physical: 84 }
    },
    {
      id: "modric",
      name: "Luka Modrić",
      number: 10,
      position: "Midfielder / Captain",
      category: "midfielder",
      nationality: "Croatia",
      flag: "🇭🇷",
      dob: "9 September 1985 (Age 39)",
      height: "1.72 m",
      preferredFoot: "Both",
      joined: "2012",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      quote: "Real Madrid is my family. To captain this team is the greatest honor of my professional life.",
      stats: { appearances: 546, goals: 39, assists: 86, trophies: 27 },
      bio: "2018 Ballon d'Or winner and the most decorated player in Real Madrid's 122-year history with 27 official trophies. Joint-holder of the all-time European Cup record with 6 Champions League winner medals. Maestro of the trivela pass.",
      attributes: { pace: 70, shooting: 80, passing: 94, dribbling: 88, physical: 68 }
    },
    {
      id: "valverde",
      name: "Federico Valverde",
      number: 8,
      position: "Midfielder",
      category: "midfielder",
      nationality: "Uruguay",
      flag: "🇺🇾",
      dob: "22 July 1998 (Age 26)",
      height: "1.82 m",
      preferredFoot: "Right",
      joined: "2016",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80",
      quote: "I would run until my legs gave out for Real Madrid. Toni Kroos entrusted me with the number 8.",
      stats: { appearances: 270, goals: 24, assists: 25, trophies: 12 },
      bio: "'El Halcón'. Engine of the Madrid midfield known for ferocious long-range strikes, tireless box-to-box stamina, and assisting Vinicius Jr.'s goal in the 2022 UCL final. He proudly inherited the number 8 jersey from Toni Kroos.",
      attributes: { pace: 90, shooting: 85, passing: 84, dribbling: 82, physical: 88 }
    },
    {
      id: "rodrygo",
      name: "Rodrygo Goes",
      number: 11,
      position: "Forward",
      category: "forward",
      nationality: "Brazil",
      flag: "🇧🇷",
      dob: "9 January 2001 (Age 23)",
      height: "1.74 m",
      preferredFoot: "Right",
      joined: "2019",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80",
      quote: "Champions League nights at the Bernabéu are magical. You never stop believing until the final whistle.",
      stats: { appearances: 226, goals: 57, assists: 42, trophies: 11 },
      bio: "Mr. Champions League. Famous for his miraculous 90th and 91st-minute brace against Manchester City in the 2022 semi-final that sparked one of football's greatest comebacks. Two-time European champion.",
      attributes: { pace: 89, shooting: 84, passing: 81, dribbling: 88, physical: 65 }
    },
    {
      id: "camavinga",
      name: "Eduardo Camavinga",
      number: 6,
      position: "Midfielder",
      category: "midfielder",
      nationality: "France",
      flag: "🇫🇷",
      dob: "10 November 2002 (Age 21)",
      height: "1.82 m",
      preferredFoot: "Left",
      joined: "2021",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
      quote: "Whatever the team needs — midfield, left back, bench or starter — I give 100% for the badge.",
      stats: { appearances: 150, goals: 2, assists: 8, trophies: 9 },
      bio: "At just 21 years of age, Camavinga has already lifted two Champions League trophies and every single club honour available. Exceptional ball recovery, agile dribbling under pressure, and positional versatility.",
      attributes: { pace: 83, shooting: 68, passing: 84, dribbling: 85, physical: 84 }
    },
    {
      id: "tchouameni",
      name: "Aurélien Tchouaméni",
      number: 14,
      position: "Defensive Midfielder / Center Back",
      category: "midfielder",
      nationality: "France",
      flag: "🇫🇷",
      dob: "27 January 2000 (Age 24)",
      height: "1.87 m",
      preferredFoot: "Right",
      joined: "2022",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      quote: "Defending this club requires tactical discipline and immense mental strength.",
      stats: { appearances: 98, goals: 3, assists: 5, trophies: 6 },
      bio: "Physical anchor and tactical linchpin. Equally comfortable breaking up opposition counter-attacks in midfield or dropping into central defense when called upon by Carlo Ancelotti.",
      attributes: { pace: 78, shooting: 72, passing: 83, dribbling: 79, physical: 89 }
    },
    {
      id: "carvajal",
      name: "Dani Carvajal",
      number: 2,
      position: "Right Back / Vice-Captain",
      category: "defender",
      nationality: "Spain",
      flag: "🇪🇸",
      dob: "11 January 1992 (Age 32)",
      height: "1.73 m",
      preferredFoot: "Right",
      joined: "2013 (Cantera since 2002)",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80",
      quote: "I laid the first foundation stone at Valdebebas with Alfredo Di Stéfano in 2004. Real Madrid is in my blood.",
      stats: { appearances: 427, goals: 13, assists: 64, trophies: 26 },
      bio: "6-time Champions League winner, scoring the breakthrough header in the 2024 Wembley Final against Dortmund. Pure Madridismo embodied; from laying the first stone of Ciudad Real Madrid as a 12-year-old to captaining the first team.",
      attributes: { pace: 80, shooting: 62, passing: 80, dribbling: 79, physical: 83 }
    },
    {
      id: "rudiger",
      name: "Antonio Rüdiger",
      number: 22,
      position: "Center Back",
      category: "defender",
      nationality: "Germany",
      flag: "🇩🇪",
      dob: "3 March 1993 (Age 31)",
      height: "1.90 m",
      preferredFoot: "Right",
      joined: "2022",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80",
      quote: "The Bernabéu expects warriors. You have to be fearless.",
      stats: { appearances: 110, goals: 5, assists: 3, trophies: 6 },
      bio: "The defensive warrior. Revered for his towering aerial supremacy, lightning recovery speed, and heroic defensive shutouts of Europe's most dangerous strikers in Champions League knockout stages.",
      attributes: { pace: 84, shooting: 55, passing: 74, dribbling: 70, physical: 91 }
    },
    {
      id: "militao",
      name: "Éder Militão",
      number: 3,
      position: "Center Back",
      category: "defender",
      nationality: "Brazil",
      flag: "🇧🇷",
      dob: "18 January 1998 (Age 26)",
      height: "1.86 m",
      preferredFoot: "Right",
      joined: "2019",
      image: "https://images.unsplash.com/photo-1529900244934-985fed5bb0df?auto=format&fit=crop&w=800&q=80",
      quote: "Defending with courage is the standard here.",
      stats: { appearances: 165, goals: 11, assists: 5, trophies: 11 },
      bio: "Elite modern defender blessed with blistering acceleration, aerial authority, and tactical composure. Key pillar in the 2022 and 2024 double-winning campaigns.",
      attributes: { pace: 86, shooting: 50, passing: 72, dribbling: 73, physical: 86 }
    },
    {
      id: "courtois",
      name: "Thibaut Courtois",
      number: 1,
      position: "Goalkeeper",
      category: "goalkeeper",
      nationality: "Belgium",
      flag: "🇧🇪",
      dob: "11 May 1992 (Age 32)",
      height: "2.00 m",
      preferredFoot: "Left",
      joined: "2018",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80",
      quote: "When you are on the good side of history, you don't concede.",
      stats: { appearances: 240, cleanSheets: 98, trophies: 11 },
      bio: "The giant between the posts. Man of the Match in the 2022 Champions League final with a record 9 saves against Liverpool. Kept a clean sheet in the 2024 Wembley Final against Dortmund.",
      attributes: { pace: 46, shooting: 20, passing: 76, dribbling: 50, physical: 85 }
    },
    {
      id: "guler",
      name: "Arda Güler",
      number: 15,
      position: "Attacking Midfielder",
      category: "midfielder",
      nationality: "Turkey",
      flag: "🇹🇷",
      dob: "25 February 2005 (Age 19)",
      height: "1.76 m",
      preferredFoot: "Left",
      joined: "2023",
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=80",
      quote: "I came to Real Madrid to learn from the best and win every trophy possible.",
      stats: { appearances: 22, goals: 7, assists: 2, trophies: 3 },
      bio: "Turkish prodigy endowed with sublime vision, lethal finishing from distance, and surgical playmaking instincts. Scored 6 goals in just 373 La Liga minutes in his debut season.",
      attributes: { pace: 74, shooting: 82, passing: 86, dribbling: 87, physical: 60 }
    },
    {
      id: "endrick",
      name: "Endrick",
      number: 16,
      position: "Forward",
      category: "forward",
      nationality: "Brazil",
      flag: "🇧🇷",
      dob: "21 July 2006 (Age 18)",
      height: "1.73 m",
      preferredFoot: "Left",
      joined: "2024",
      image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=800&q=80",
      quote: "I grew up watching Cristiano Ronaldo in this shirt. Now it is my turn to score for Madrid.",
      stats: { appearances: 10, goals: 2, assists: 1, trophies: 1 },
      bio: "The youngest non-European goalscorer in Real Madrid's Champions League history after scoring a breathtaking 30-yard laser against Stuttgart at the Santiago Bernabéu.",
      attributes: { pace: 89, shooting: 86, passing: 68, dribbling: 82, physical: 84 }
    },
    {
      id: "ancelotti",
      name: "Carlo Ancelotti",
      number: "MGR",
      position: "Head Coach / Mister",
      category: "staff",
      nationality: "Italy",
      flag: "🇮🇹",
      dob: "10 June 1959 (Age 65)",
      height: "1.79 m",
      preferredFoot: "Right",
      joined: "2013-2015, 2021-Present",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80",
      quote: "The quiet leadership. At Real Madrid, you manage greatness with respect, balance, and calm.",
      stats: { appearances: 295, winRate: "73%", trophies: 14 },
      bio: "The only manager in football history to win 5 UEFA Champions League titles (3 with Real Madrid: 2014, 2022, 2024) and the only coach to win league titles in all of Europe's top 5 leagues.",
      attributes: { tactics: 96, leadership: 99, calmness: 98, legacy: 100, charisma: 95 }
    }
  ],

  matches: {
    upcoming: [
      {
        id: "fix-1",
        competition: "La Liga • Matchday 11",
        stage: "El Clásico",
        homeTeam: "Real Madrid",
        awayTeam: "FC Barcelona",
        homeCrest: "assets/images/real-madrid-crest.svg",
        awayCrest: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        date: "Saturday, 26 October",
        time: "21:00 CET",
        venue: "Santiago Bernabéu, Madrid",
        ticketStatus: "Sold Out • VIP Hospitality Open",
        formGuide: ["W", "W", "W", "D", "W"]
      },
      {
        id: "fix-2",
        competition: "UEFA Champions League • League Phase",
        stage: "Matchday 4",
        homeTeam: "Real Madrid",
        awayTeam: "AC Milan",
        homeCrest: "assets/images/real-madrid-crest.svg",
        awayCrest: "https://upload.wikimedia.org/wikipedia/commons/d/d0/AC_Milan_crest.svg",
        date: "Tuesday, 5 November",
        time: "21:00 CET",
        venue: "Santiago Bernabéu, Madrid",
        ticketStatus: "Limited General Sale",
        formGuide: ["W", "W", "W", "W", "W"]
      },
      {
        id: "fix-3",
        competition: "UEFA Champions League • League Phase",
        stage: "Matchday 5",
        homeTeam: "Liverpool FC",
        awayTeam: "Real Madrid",
        homeCrest: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        awayCrest: "assets/images/real-madrid-crest.svg",
        date: "Wednesday, 27 November",
        time: "21:00 CET",
        venue: "Anfield, Liverpool",
        ticketStatus: "Away Allocation Distributed",
        formGuide: ["W", "W", "D", "W", "W"]
      }
    ],

    recent: [
      {
        id: "res-1",
        competition: "UEFA Champions League Final",
        date: "1 June 2024",
        venue: "Wembley Stadium, London",
        homeTeam: "Borussia Dortmund",
        awayTeam: "Real Madrid",
        homeScore: 0,
        awayScore: 2,
        homeCrest: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        awayCrest: "assets/images/real-madrid-crest.svg",
        status: "FT • La Decimoquinta",
        scorers: [
          { team: "Real Madrid", player: "Dani Carvajal", minute: "74'" },
          { team: "Real Madrid", player: "Vinícius Júnior", minute: "83'" }
        ],
        stats: { possession: "58% - 42%", shotsOnTarget: "6 - 4", corners: "8 - 9", fouls: "8 - 12" },
        lineup: "Courtois; Carvajal, Rüdiger, Nacho (C), Mendy; Valverde, Camavinga, Kroos; Bellingham; Rodrygo, Vinicius Jr."
      },
      {
        id: "res-2",
        competition: "UEFA Super Cup Final",
        date: "14 August 2024",
        venue: "National Stadium, Warsaw",
        homeTeam: "Real Madrid",
        awayTeam: "Atalanta",
        homeScore: 2,
        awayScore: 0,
        homeCrest: "assets/images/real-madrid-crest.svg",
        awayCrest: "https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg",
        status: "FT • 6th Super Cup Record",
        scorers: [
          { team: "Real Madrid", player: "Federico Valverde", minute: "59'" },
          { team: "Real Madrid", player: "Kylian Mbappé", minute: "68'" }
        ],
        stats: { possession: "53% - 47%", shotsOnTarget: "6 - 2", corners: "5 - 2", fouls: "13 - 18" },
        lineup: "Courtois; Carvajal, Militão, Rüdiger, Mendy; Valverde, Tchouaméni, Bellingham; Rodrygo, Mbappé, Vinicius Jr."
      },
      {
        id: "res-3",
        competition: "UEFA Champions League • League Phase",
        date: "22 October 2024",
        venue: "Santiago Bernabéu, Madrid",
        homeTeam: "Real Madrid",
        awayTeam: "Borussia Dortmund",
        homeScore: 5,
        awayScore: 2,
        homeCrest: "assets/images/real-madrid-crest.svg",
        awayCrest: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        status: "FT • Bernabéu Remontada",
        scorers: [
          { team: "Dortmund", player: "Malen", minute: "30'" },
          { team: "Dortmund", player: "Gittens", minute: "34'" },
          { team: "Real Madrid", player: "Antonio Rüdiger", minute: "60'" },
          { team: "Real Madrid", player: "Vinícius Júnior", minute: "62'" },
          { team: "Real Madrid", player: "Lucas Vázquez", minute: "83'" },
          { team: "Real Madrid", player: "Vinícius Júnior", minute: "86'" },
          { team: "Real Madrid", player: "Vinícius Júnior (Hat-trick)", minute: "90+3'" }
        ],
        stats: { possession: "52% - 48%", shotsOnTarget: "10 - 7", corners: "7 - 4", fouls: "9 - 10" },
        lineup: "Courtois; Vázquez, Militão, Rüdiger, Mendy; Valverde, Modrić (C), Bellingham; Rodrygo, Mbappé, Vinicius Jr."
      }
    ]
  },

  history: [
    {
      era: "1902 - 1920",
      title: "The Royal Foundation",
      subtitle: "From Sky Blue to Royal White",
      description: "On 6 March 1902, the Madrid Foot Ball Club was officially constituted under Juan Padrós. In 1920, King Alfonso XIII conferred the title 'Real' (Royal) onto the club along with permission to mount the royal crown atop the club crest.",
      stats: "4 Consecutive Copas del Rey (1905-1908)",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
      highlights: ["Official founding at Calle Alcalá", "Adoption of all-white kit inspired by London's Corinthian FC", "The granting of the Royal Crown in 1920"]
    },
    {
      era: "1953 - 1960",
      title: "The Five European Cups",
      subtitle: "Di Stéfano and the Golden Dynasty",
      description: "Under the visionary presidency of Santiago Bernabéu and the transcendent genius of Alfredo Di Stéfano, Real Madrid conquered the first five editions of the newly inaugurated European Champion Clubs' Cup, dazzling the world with attacking majesty.",
      stats: "5 Consecutive European Cups • 4 La Ligas",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      highlights: ["Arrival of Alfredo Di Stéfano in 1953", "1960 Hampden Park final: 7-3 vs Eintracht Frankfurt before 127,621 spectators", "Di Stéfano, Puskás, Gento, Kopa, and Santamaría"]
    },
    {
      era: "1966 - 1980",
      title: "El Madrid Ye-yé & The Bernabéu Legacy",
      subtitle: "Youth, Spirit, and Paco Gento's Record",
      description: "With an entirely Spanish starting eleven, Madrid captured its sixth European Cup in Brussels in 1966. Paco Gento etched his name in sports immortality by becoming the first and only player to win six European Cups.",
      stats: "European Cup #6 • 9 La Liga Titles",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      highlights: ["The Beatles-inspired 'Ye-yé' generation", "Paco Gento's sixth continental crown", "Passing of Don Santiago Bernabéu in 1978 during the Argentina World Cup"]
    },
    {
      era: "1981 - 1990",
      title: "La Quinta del Buitre",
      subtitle: "Pure Cantera Artistry",
      description: "Five home-grown academy prodigies—Emilio Butragueño, Míchel, Manuel Sanchís, Martín Vázquez, and Miguel Pardeza—redefined Spanish football with breathtaking flair and staged epic European comebacks at the Chamartín.",
      stats: "5 Consecutive La Ligas (1986-1990) • 2 UEFA Cups",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      highlights: ["Legendary Bernabéu European comebacks: Inter Milan, Anderlecht, Borussia Mönchengladbach", "Hugo Sánchez's 38 single-touch league goals in 1989/90", "107 league goals in a single season"]
    },
    {
      era: "1998 - 2002",
      title: "La Séptima, La Octava & La Novena",
      subtitle: "The Return of European Supremacy",
      description: "After 32 years of longing, Predrag Mijatović scored the historic goal in Amsterdam to capture La Séptima in 1998. Paris followed in 2000, and in 2002 at Hampden Park, Zinedine Zidane struck the greatest volley in Champions League history.",
      stats: "3 European Cups in 5 Seasons",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      highlights: ["Mijatović's 66th-minute strike in Amsterdam vs Juventus", "First all-country Champions League final: 3-0 vs Valencia in Paris", "Zidane's left-foot rocket in Glasgow vs Bayer Leverkusen"]
    },
    {
      era: "2014 - 2018",
      title: "La Décima & The Unprecedented Three-Peat",
      subtitle: "Ramos at 92:48 and Zidane's Masterclass",
      description: "Lisbon 2014 restored the myth. Sergio Ramos's header at 92:48 broke Atlético hearts and delivered La Décima. From 2016 to 2018, Zinedine Zidane engineered an unprecedented modern three-peat (Milan, Cardiff, Kyiv) powered by Cristiano Ronaldo's unmatched ruthlessness.",
      stats: "4 Champions Leagues in 5 Years • 3 Consecutive UCLs",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80",
      highlights: ["Sergio Ramos 92:48 header in Lisbon", "First team to defend the Champions League in the modern era (Cardiff 4-1 Juventus)", "Bale's bicycle kick and Kyiv triumph in 2018"]
    },
    {
      era: "2022 - Present",
      title: "The Bernabéu Rebirth & La Decimoquinta",
      subtitle: "Remontadas and European Crown #15",
      description: "The 2021/22 campaign produced football folklore: unforgettable comebacks against PSG, Chelsea, and Manchester City at the Bernabéu en route to Paris. In 2024, the newly remodeled Bernabéu propelled Real Madrid to their 15th European crown at Wembley and a 36th La Liga.",
      stats: "La 14ª & La 15ª • New Bernabéu Inauguration",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      highlights: ["Benzema and Rodrygo magical remontadas in 2022", "Wembley 2024: Carvajal & Vinicius seal European Cup #15", "Unveiling of the 360° Halo Board and Hypogeum greenhouse pitch"]
    }
  ],

  legends: [
    {
      id: "di-stefano",
      name: "Alfredo Di Stéfano",
      moniker: "La Saeta Rubia",
      years: "1953 – 1964",
      position: "Forward / All-Round Maestro",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      appearances: 396,
      goals: 308,
      uclTrophies: 5,
      honors: "Super Ballon d'Or winner (Only player in football history)",
      quote: "No player is as good as all of them put together.",
      legacy: "The father of modern Real Madrid. Di Stéfano revolutionized football by covering every blade of grass, inspiring the team that won five consecutive European Cups and establishing Madrid as the world's most prestigious club."
    },
    {
      id: "gento",
      name: "Francisco 'Paco' Gento",
      moniker: "La Galerna del Cantábrico",
      years: "1953 – 1971",
      position: "Left Winger",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      appearances: 600,
      goals: 182,
      uclTrophies: 6,
      honors: "6x European Champion (All-time world record)",
      quote: "To wear this white shirt was to know you represented millions of dreams.",
      legacy: "The fastest winger of his era and the only player in football history to win six European Cups. An enduring symbol of humility, loyalty, and blistering athletic excellence."
    },
    {
      id: "puskas",
      name: "Ferenc Puskás",
      moniker: "El Cañoncito Pum",
      years: "1958 – 1966",
      position: "Striker",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      appearances: 262,
      goals: 242,
      uclTrophies: 3,
      honors: "4x Pichichi Trophy • FIFA Puskás Award namesake",
      quote: "Football is about scoring goals and making the people leap out of their seats.",
      legacy: "Possessor of the most devastating left foot in sports history. Joined Madrid at age 31 and scored at an astonishing 0.92 goals-per-game ratio, including 4 goals in the 1960 European Cup Final."
    },
    {
      id: "zidane",
      name: "Zinedine Zidane",
      moniker: "Zizou",
      years: "2001 – 2006 (Player), 2016 – 2021 (Manager)",
      position: "Attacking Midfielder & Manager",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      appearances: 227,
      goals: 49,
      uclTrophies: 4, // 1 as player, 3 as manager
      honors: "Ballon d'Or, FIFA World Player of the Year, 3x UCL manager",
      quote: "Real Madrid is the pinnacle. Once you are here, there is nothing higher.",
      legacy: "Architect of the greatest goal in Champions League history with his Glasgow volley in 2002. Later returned to the dugout to manage the squad to three consecutive Champions League titles between 2016 and 2018."
    },
    {
      id: "raul",
      name: "Raúl González Blanco",
      moniker: "El Ángel de Madrid",
      years: "1994 – 2010",
      position: "Striker",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80",
      appearances: 741,
      goals: 323,
      uclTrophies: 3,
      honors: "All-time club appearances record holder (741 matches)",
      quote: "I am a Madridista first, player second.",
      legacy: "The eternal captain. Symbol of La Cantera, competitive grit, and tactical intelligence. Famous for kissing his wedding ring after scoring and silencing the Camp Nou in 1999."
    },
    {
      id: "casillas",
      name: "Iker Casillas",
      moniker: "San Iker",
      years: "1999 – 2015",
      position: "Goalkeeper",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80",
      appearances: 725,
      cleanSheets: 264,
      uclTrophies: 3,
      honors: "5x IFFHS World's Best Goalkeeper • Youngest GK to win UCL",
      quote: "Defending this goal is like defending the honor of the city.",
      legacy: "Hero of Glasgow 2002 with triple stoppage-time reflex saves. Captained Real Madrid to La Décima and Spain to World Cup and European glory."
    },
    {
      id: "cristiano",
      name: "Cristiano Ronaldo",
      moniker: "CR7",
      years: "2009 – 2018",
      position: "Forward",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80",
      appearances: 438,
      goals: 450,
      uclTrophies: 4,
      honors: "Real Madrid all-time top goalscorer • 4 Ballon d'Ors in white",
      quote: "Your love makes me strong, your hate makes me unstoppable. Hala Madrid!",
      legacy: "450 goals in 438 official games—more goals than matches played. The apex predator of European football, winning 4 Champions Leagues and 4 Ballons d'Or in the white shirt."
    },
    {
      id: "ramos",
      name: "Sergio Ramos",
      moniker: "El Capitán",
      years: "2005 – 2021",
      position: "Center Back",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80",
      appearances: 671,
      goals: 101,
      uclTrophies: 4,
      honors: "92:48 Hero • 22 Club Trophies",
      quote: "Until the final whistle sounds, Real Madrid is never beaten.",
      legacy: "The header at 92:48 in Lisbon that changed modern football history. A leader of unmatched passion, 101 goals from defense, and the spiritual warrior of the four Champions League titles."
    },
    {
      id: "benzema",
      name: "Karim Benzema",
      moniker: "KB9",
      years: "2009 – 2023",
      position: "Striker",
      image: "https://images.unsplash.com/photo-1529900244934-985fed5bb0df?auto=format&fit=crop&w=800&q=80",
      appearances: 648,
      goals: 354,
      uclTrophies: 5,
      honors: "2022 Ballon d'Or • 25 Club Trophies",
      quote: "I play for the people who understand football.",
      legacy: "The complete forward. Crowned with the 2022 Ballon d'Or after his miraculous Champions League campaign (15 goals, including hat-tricks vs PSG and Chelsea). 2nd highest goalscorer in club history."
    },
    {
      id: "roberto-carlos",
      name: "Roberto Carlos",
      moniker: "El Hombre Bala",
      years: "1996 – 2007",
      position: "Left Back",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80",
      appearances: 527,
      goals: 69,
      uclTrophies: 3,
      honors: "3x Champions League Winner • 11 Club Trophies",
      quote: "When you strike the ball with confidence, physics takes care of the rest.",
      legacy: "Redefined the full-back position worldwide with supersonic speed and thunderous free-kicks clocking over 140 km/h. Provided the cross for Zidane's volley in Glasgow."
    }
  ],

  stadiumExperience: {
    name: "Estadio Santiago Bernabéu",
    location: "Avenida de Concha Espina 1, 28036 Madrid",
    opened: "14 December 1947",
    inaugurationRemodel: "2024",
    capacity: 84700,
    architects: "GMP Architekten, L35 & Ribas & Ribas",
    features: [
      {
        id: "hypogeum",
        title: "Subterranean Agronomic Greenhouse (-30m)",
        desc: "A 30-meter-deep subterranean chamber equipped with automated climate control, LED agricultural lighting, ventilation, and misting systems. Six motorized trays retract and preserve the natural grass pitch in pristine condition when the stadium hosts other events."
      },
      {
        id: "roof",
        title: "Motorized Retractable Roof",
        desc: "Engineered with dual transverse sliding covers that open or seal in just 15 minutes, safeguarding spectators and enabling temperature-controlled football and acoustic concerts regardless of weather."
      },
      {
        id: "halo",
        title: "360-Degree Continuous Halo Video Board",
        desc: "A panoramic LED screen suspended above the pitch encircling the entire stadium perimeter, delivering high-definition statistics, player replays, and matchday visuals visible from every single seat."
      },
      {
        id: "skin",
        title: "Parametric Louvered Steel Facade",
        desc: "A futuristic envelope constructed from thousands of stainless steel curved bands. By day, it reflects the azure skies of Madrid; by night, dynamic LED illumination turns the stadium into an architectural sculpture on the Castellana."
      },
      {
        id: "skywalk",
        title: "Bernabéu Skywalk & VIP Ring",
        desc: "A 360-degree glass-walled skywalk terrace perched atop the 10th tier offering panoramic vistas across the skyline of Madrid, gourmet dining, and private hospitality lounges."
      },
      {
        id: "multipurpose",
        title: "365-Day Multipurpose Arena",
        desc: "Engineered to host international concerts (Taylor Swift, Karol G), NFL regular-season games, EuroLeague basketball showdowns, and major corporate exhibitions 365 days a year without damaging the football pitch."
      }
    ]
  },

  news: [
    {
      id: "news-1",
      category: "Match Report",
      title: "Epic European Night at the Bernabéu: 5-2 Comeback Against Dortmund",
      excerpt: "Trailing 0-2 at the break, Real Madrid ignited another legendary European remontada with a breathless second-half blitz headlined by a Vinicius Jr. hat-trick.",
      author: "Carlos Moreno",
      date: "23 October 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      content: `The Santiago Bernabéu bore witness to yet another chapter of its mystical European folklore on Tuesday night. Entering halftime trailing 0-2 to Borussia Dortmund, Carlo Ancelotti's men emerged from the tunnel transformed with fierce intensity.

Antonio Rüdiger sparked the recovery on 60 minutes with a thunderous header from Kylian Mbappé's pinpoint cross. Just two minutes later, Vinicius Júnior slotted home the equalizer into an empty net after a defensive scramble.

With the crowd roaring, Lucas Vázquez drove home the third from a tight angle on 83 minutes before Vinicius Júnior produced two moments of individual genius—a 70-yard solo gallop and a venomous near-post rocket—to complete a sensational European hat-trick.`
    },
    {
      id: "news-2",
      category: "Club News",
      title: "The Architectural Miracle: Inside the Subterranean Greenhouse of the Bernabéu",
      excerpt: "How Real Madrid's 30-meter subterranean greenhouse preserves Champions League grass while hosting world tours and global sporting spectacles.",
      author: "Beatriz Fernández",
      date: "18 October 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      content: `Thirty meters below the Paseo de la Castellana lies an engineering marvel unseen in any stadium on Earth: the Hypogeum.

Divided into six automated horizontal trays, Real Madrid's pitch can be retracted and lowered into the underground greenhouse within hours. Inside this cavern, customized LED lighting replicates sunlight, automated watering systems deliver exact hydration, and continuous airflow controls humidity.

This technical achievement allows the stadium to host major international music concerts, NBA-style basketball games, and NFL matchups during the week without degrading the playing surface for weekend La Liga matches.`
    },
    {
      id: "news-3",
      category: "Tactical Analysis",
      title: "The Orchestrator: How Jude Bellingham and Fede Valverde Dominate Modern Transitions",
      excerpt: "A deep dive into Carlo Ancelotti's hybrid midfield dynamics, box-to-box defensive recoveries, and attacking space exploitation.",
      author: "Álvaro De la Rosa",
      date: "12 October 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      content: `Following the retirement of Toni Kroos, Real Madrid's tactical blueprint evolved into a rapid vertical transition machine.

Federico Valverde has stepped into the number 8 jersey with commanding authority, leading the squad in ball recoveries (8.4 per 90) and sprint distance. Meanwhile, Jude Bellingham's deceptive positional fluidity allows him to oscillate between a central midfield double-pivot and a crashing forward in the penalty box.

The tactical result is devastating: opponent teams are pulled out of shape by Madrid's defensive stability, creating instant open corridors for Mbappé and Vinicius Jr. to exploit.`
    },
    {
      id: "news-4",
      category: "La Fábrica",
      title: "La Cantera Pride: The Next Generation Ready to Follow Carvajal and Raúl",
      excerpt: "Inside Ciudad Real Madrid in Valdebebas, where over 300 young prospects develop the values of discipline, sportsmanship, and hunger to win.",
      author: "Gonzalo Ruiz",
      date: "8 October 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
      content: `Since its inauguration in 2005, Ciudad Real Madrid in Valdebebas has served as the nursery of world football. With 12 pristine training pitches and cutting-edge performance laboratories, La Fábrica continues to produce elite players for the first team and top divisions across Europe.

Dani Carvajal, who laid the facility's first stone in 2004 alongside Don Alfredo Di Stéfano, remains the greatest inspiration for academy captains dreaming of one day hoisting the European Cup.`
    }
  ],

  gallery: [
    {
      id: "gal-1",
      category: "matchday",
      title: "Wembley Glory: La Decimoquinta",
      caption: "Dani Carvajal and Vinicius Jr. lift Real Madrid's 15th UEFA Champions League trophy at Wembley Stadium.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
      tag: "Champions League 2024"
    },
    {
      id: "gal-2",
      category: "stadium",
      title: "Bernabéu Under the Floodlights",
      caption: "The majestic curved louvered steel facade glowing in royal gold and azure along Paseo de la Castellana.",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
      tag: "Architecture"
    },
    {
      id: "gal-3",
      category: "celebrations",
      title: "Cibeles Cathedral of Joy",
      caption: "Hundreds of thousands of Madridistas assemble at Plaza de Cibeles to celebrate the 36th La Liga championship.",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
      tag: "Plaza de Cibeles"
    },
    {
      id: "gal-4",
      category: "matchday",
      title: "Vinicius Jr. Electrifying Pace",
      caption: "Vinicius Júnior celebrating in front of the Grada Fans after scoring at the Santiago Bernabéu.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
      tag: "First Team"
    },
    {
      id: "gal-5",
      category: "historic",
      title: "Zidane's Glasgow Masterpiece",
      caption: "Zinedine Zidane's legendary volley against Bayer Leverkusen in the 2002 Champions League Final.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      tag: "La Novena 2002"
    },
    {
      id: "gal-6",
      category: "stadium",
      title: "The 360° Halo Scoreboard",
      caption: "Spectacular sightlines looking onto the continuous circular halo video board during a Champions League fixture.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
      tag: "Bernabéu Tech"
    },
    {
      id: "gal-7",
      category: "celebrations",
      title: "Warsaw Super Cup Triumph",
      caption: "Kylian Mbappé celebrates with Jude Bellingham and Rodrygo after lifting the UEFA Super Cup.",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1200&q=80",
      tag: "Super Cup 2024"
    },
    {
      id: "gal-8",
      category: "historic",
      title: "Sergio Ramos 92:48 in Lisbon",
      caption: "The most famous header in modern football history, bringing La Décima within reach.",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1200&q=80",
      tag: "La Décima 2014"
    }
  ]
};
