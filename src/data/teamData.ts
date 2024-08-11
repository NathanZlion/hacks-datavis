/// This is the data about the quarterfinals teams
/**
TeamSchema : {
    TeamName: string,
    TeamSize: number,
    TeamMembers: List of Names,
    Countries: List of Countries,
}
*/

/*
"AI Driven Artistry and Innovation",
"Legal",
"Communication and Accessibility",
"Data Analysis and Desicion Making",
"Healthcare",
"Agriculture and Farming",
"Education and Learning",
"Personalized Assistance",
"Environmental Monitoring and Conservation",
"Other"
*/


export type Team = {
    TeamName: string;
    TeamSize: number;
    TeamMembers: string[];
    Countries: string[];
    category: string;
};

export const Teams: Team[] = [
    {
        "TeamName": "ACCULITE",
        "TeamSize": 3,
        "TeamMembers": [
            "KENNETH KIMOSOP",
            "BENARD CHERUIYOT",
            "JOSEMARIA ESCRIVA"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Adimi Alaa Dania",
        "TeamSize": 5,
        "TeamMembers": [
            "Alaa Dania Adimi",
            "Romaissa Medjkoune",
            "Mohammad Ali",
            "Nasiha Abdella",
            "Chala Olani"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "ADM",
        "TeamSize": 3,
        "TeamMembers": [
            "Mwansa mwelwa",
            "DIdiana kalobwe",
            "Aaron Mbuzi"
        ],
        "Countries": [
            "Zambia",
            "Zambia",
            "Zambia"
        ],
        "category": ""
    },
    {
        "TeamName": "Africore AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Okitta Ongaye",
            "Aymen Eliyas",
            "Mikiyas Alemu",
            "Naol Tamrat",
            "Natan Mekbib"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ], "category": "Education and Learning"
    },
    {
        "TeamName": "AfroTech",
        "TeamSize": 3,
        "TeamMembers": [
            "Hiwot Derese",
            "Christina Solomon",
            "Hayat Tofik"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "AgriAlert tech",
        "TeamSize": 5,
        "TeamMembers": [
            "Meron temesgen welu",
            "JORDAN KASSA AYELE",
            "Joel Okang",
            "Willy Angole",
            "Memory Sinkhonde"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "ghana",
            "Kenya",
            "malawi"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "AI Mavericks",
        "TeamSize": 5,
        "TeamMembers": [
            "Beverly Katandawa",
            "Tafadzwa Mhuriyengwe",
            "Saya Mubiana",
            "Eilla Nghifewa",
            "Patrick Mateus"
        ],
        "Countries": [
            "Namibia",
            "Namibia",
            "Namibia",
            "Namibia", "Namibia"
        ], "category": "Education and Learning"
    },
    {
        "TeamName": "AI To Save Lives",
        "TeamSize": 5,
        "TeamMembers": [
            "Lati Tibabu Gamachu",
            "Kemeriya Mohammed Abdulkerim",
            "Alpha Jallow",
            "Akoe Richard Kofi",
            "Ayobami Ogunjemilusi"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Gambia",
            "Ghana", "Nigeria"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "AI Whisperers",
        "TeamSize": 3,
        "TeamMembers": [
            "Selim Thabet",
            "Elyes Thabet",
            "Khalil Thabet"
        ],
        "Countries": [
            "Tunisia",
            "Tunisia",
            "Tunisia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "AI4INNOV",
        "TeamSize": 5,
        "TeamMembers": [
            "Tadiyos Banti",
            "Euael Mekonen",
            "Samiya Hamid",
            "Bereket Lingerew",
            "Abel Kidanemariam"
        ], "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Kenya",
            "Kenya",
            "Nigeria"
        ], "category": "Personalized Assistance"
    },
    {
        "TeamName": "Alet",
        "TeamSize": 4,
        "TeamMembers": [
            "Tadiwos Anegagregn",
            "Abel Bekele",
            "Betselot Bezuayehu",
            "Abenezer Tesfaye"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Amigos",
        "TeamSize": 5,
        "TeamMembers": [
            "Yonas Ayele",
            "Yohannes Leulseged",
            "Samuel Genetu",
            "Samrawit Asfaw",
            "Yohannes Taddese"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "APOCALYPSE",
        "TeamSize": 5,
        "TeamMembers": [
            "Amine Salamani",
            "Mohcen Taher Chouireb",
            "Wafaa Mers",
            "Haroune Rezki",
            "Ouahioune Raid Abderrezak"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria"
        ], "category": "Personalized Assistance"
    },
    {
        "TeamName": "Aquasense AI",
        "TeamSize": 5,
        "TeamMembers": [
            "James Mngandu",
            "Razana",
            "Chiyembekezo Chilembwe",
            "Hamad Kamorudeen",
            "Unathi Linda"
        ],
        "Countries": [
            "Kenya",
            "Madagascar",
            "Malawi",
            "Nigeria",
            "South Africa"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Arga Lengz",
        "TeamSize": 4,
        "TeamMembers": [
            "Abubkar Abubakar Sulaiman",
            "Abusufyan Muhammad",
            "Habiba Abdulrahman Umar",
            "Mohammed Abdurahman Umar"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria",
            "Nigeria"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Atlas Innovators",
        "TeamSize": 3,
        "TeamMembers": [
            "Hicham maghraoui",
            "Othman moussaoui",
            "Ismail Hamdach"
        ],
        "Countries": [
            "Morocco",
            "Morocco",
            "Morocco"
        ],
        "category": "Personalized Assistance"
    },
    {
        "TeamName": "AWDS AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Tinsae Alako",
            "Alvin Mutuma",
            "Richard Mazinde",
            "Rebai Mohamed",
            "Harmony Murombo"
        ],
        "Countries": [
            "Ethiopia",
            "Kenya",
            "Tanzania",
            "Tunisia", "Zimbabwe"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Bank AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Amani SEDRAT",
            "Sanyi Diriba",
            "Eyu Birhanu",
            "Kenean Milion",
            "Samuel Diriba"
        ],
        "Countries": [
            "Algeria",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "BETA TECH AI",
        "TeamSize": 4,
        "TeamMembers": [
            "James Mungai",
            "Moureen Mwikali",
            "Lorraine Mitchelle",
            "Collins Mwangi"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": "Personalized Assistance"
    },
    {
        "TeamName": "BitByBit",
        "TeamSize": 6,
        "TeamMembers": [
            "Alazar Ashabir",
            "Emanuel Solomon",
            "Estifanos Behailu",
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Black Hole",
        "TeamSize": 5,
        "TeamMembers": [
            "Wendmageg Tajura",
            "Masresha Alemu",
            "Samrawit Tesfahun",
            "Henok Husen",
            "Firaif lenjisa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Bright minds",
        "TeamSize": 3,
        "TeamMembers": [
            "Okechuwku Joshua Uche",
            "Ugbodaga David",
            "Ilegieuno Justus"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria"
        ],
        "category": "Personalized Assistance"
    },
    {
        "TeamName": "BrightMinds AI",
        "TeamSize": 1,
        "TeamMembers": [
            ""
        ],
        "Countries": [
            ""
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Bruh",
        "TeamSize": 3,
        "TeamMembers": [
            "Hamza Shehabu",
            "Abdulaziz Shehabu",
            "Abdurahman Sheh Anwar"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Bytesavvy",
        "TeamSize": 4,
        "TeamMembers": [
            "Korichi anfal",
            "Anfal Achouri",
            "Khezzane dina",
            "Arab sarra"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria"
        ],
        "category": "Personalized Assistance"
    },
    {
        "TeamName": "C0de crusaders",
        "TeamSize": 5,
        "TeamMembers": [
            "Alpha Jallow",
            "Lati Tibabu Gamachu",
            "Akoe Richard Kofi",
            "Kemeriya Mohammed Abdulkerim",
            "Ayobami Ogunjemilusi"
        ],
        "Countries": [
            "Gambia",
            "Ethiopia",
            "Ghana",
            "Ethiopia", "Nigeria"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "CacheDev",
        "TeamSize": 5,
        "TeamMembers": [
            "Ikram Awol",
            "Adane Moges",
            "Kenean Biru",
            "Mikiyas Endalew",
            "Agumas Desalew"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Center city",
        "TeamSize": 5,
        "TeamMembers": [
            "Samuel kifle",
            "Hassen muhammad",
            "Kidist dejene",
            "Bereket birhanu",
            "Abel merete"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Personalized Assistance"
    },
    {
        "TeamName": "ChatAfrica-AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Fillemon Meki",
            "Dondou Abiyi",
            "Michael Ndhlukula",
            "Rebeca Joshua",
            "Sita Ngwesa"
        ],
        "Countries": [
            "Namibia",
            "Rwanda",
            "Namibia",
            "Tanzania", "Tanzania"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Code8",
        "TeamSize": 5,
        "TeamMembers": [
            "Benjamin Asamoah Boafo",
            "Jeffery Offei Darko",
            "Jacinda Biney",
            "Sam Patrick",
            "Lakhdari Abdallah"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana",
            "Ghana", "Algeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "CodeCrafters 2", "TeamSize": 5, "TeamMembers": [
            "Amon Aiyabei Sawe", "Paul Mutuma", "TerryAnne Wanjiru", "Risper Mukiri", "Kevin Kinyajui"
        ], "Countries": [
            "Kenya", "Kenya", "Kenya", "Kenya", "Kenya"
        ], "category": "Personalized Assistance"
    },
    {
        "TeamName": "CodeCrafters2",
        "TeamSize": 5,
        "TeamMembers": [
            "Amon Aiyabei",
            "Kevin Kinyajui",
            "TerryAnne Wanjiru",
            "Paul Mutuma",
            "Risper Mukiriri"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya", "Kenya"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "CodeLight",
        "TeamSize": 5,
        "TeamMembers": [
            "Bisrat Kebere",
            "Biyaol Mesay",
            "Biruk Mesfin",
            "Birhanu Worku",
            "Duresa Feyisa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "CodePoint Creatives",
        "TeamSize": 5,
        "TeamMembers": [
            "Peneal Feleke",
            "Simon Asaye",
            "Yoftahe Dereje",
            "Tahir Abdulrahman",
            "Hawariaw Paulos"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Personalized Assistance"
    },
    {
        "TeamName": "CoDoctor",
        "TeamSize": 4,
        "TeamMembers": [
            "Habtamu Asefa",
            "Brook Work",
            "Sarah Abera",
            "Samuel Adeyemi"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Nigeria"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Codology",
        "TeamSize": 5,
        "TeamMembers": [
            "Naol Kasinet",
            "Naol Ketema",
            "Abdulwahid Hussen",
            "Webi Muleta",
            "Samuel Tolossa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Creative minds",
        "TeamSize": 5,
        "TeamMembers": [
            "Brian Yegon",
            "Wadegu Petty",
            "Samson Maluku",
            "Anderson Juma",
            "Rebeca Joshua"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Malawi",
            "Malawi", "Tanzania"
        ], "category": "Personalized AssistancePersonalized Assistance"
    }, {
        "TeamName": "CropIntel Ai",
        "TeamSize": 3,
        "TeamMembers": [
            "Abla hagani", "Prince Chris Mazimpaka",
            "Mercy Diana Namumbya"
        ],
        "Countries": [
            "Algeria",
            "Rwanda",
            "Uganda"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "CYBERCODERS TEAM", "TeamSize": 4, "TeamMembers": [
            "Godwin S.Aruga", "Zephania James", "Dinaless Mdollo", "Davis Marandu"
        ], "Countries": [
            "Tanzania", "Tanzania", "Tanzania", "Tanzania"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Cydescape",
        "TeamSize": 4,
        "TeamMembers": [
            "Jacob Kebaso",
            "Javan Otieno",
            "Naomi Kuria",
            "Dalton Omondi"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": "Education and Learning"
    },
    {
        "TeamName": "DevLab TTO-UG",
        "TeamSize": 3,
        "TeamMembers": [
            "Mohamed Amine Benkhoud",
            "Ahmed Bensalem",
            "Alaa Naili"
        ],
        "Countries": [
            "Tunisia",
            "Tunisia",
            "Tunisia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "DevTribe",
        "TeamSize": 3,
        "TeamMembers": [
            "Tjarirove Kahuike",
            "Brito Manuel",
            "Ronia Ndjuluwa"
        ],
        "Countries": ["Namibia",
            "Namibia",
            "Namibia"],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "DIACARE",
        "TeamSize": 5,
        "TeamMembers": ["Dennis Sammy",
            "Leah Mokami",
            "Lenny Mwangi Ruo",
            "LIMO KIPLAGAT DUKE",
            "Abol Ger"],
        "Countries": ["Kenya",
            "Kenya",
            "Kenya",
            "Kenya", "Kenya"], "category": "Education and Learning"
    },
    {
        "TeamName": "Eagles",
        "TeamSize": 5,
        "TeamMembers": ["Aschalew Mathewos\nDamtew",
            "Adoniyas Tesfaye",
            "Kaleab Mekonen",
            "Endekalu\nZemenu",
            "Darel Oballa"],
        "Countries": ["Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Kenya"], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Edushollar",
        "TeamSize": 5,
        "TeamMembers": ["Kelvin mukaria",
            "Ombui Mark",
            "Samiya Hamid",
            "Brian kiplagat",
            "Kelvin Ogachi"],
        "Countries": ["Kenya",
            "Kenya",
            "Kenya",
            "Kenya", "Kenya"], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Elite coders",
        "TeamSize": 5,
        "TeamMembers": ["Tadiyos Banti",
            "Euael Mekonen",
            "Samiya Hamid",
            "Bereket Lingerew",
            "Abel Kidanemariam"],
        "Countries": ["Ethiopia",
            "Ethiopia",
            "Kenya",
            "Kenya", "Nigeria"], "category": "Education and Learning"
    },
    {
        "TeamName": "enigmahackers",
        "TeamSize": 5,
        "TeamMembers": ["Amanuel Bekele",
            "Daniel Asfaw",
            "Daniel Endaylalu",
            "Eyob Tesfaye",
            "Naol Tena"],
        "Countries": ["Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "ERROR404",
        "TeamSize": 5,
        "TeamMembers": ["Eric Karimi",
            "Ephy Kimotho",
            "Jeremy Bosire",
            "Denis Syengo",
            "Rukiah Mwari"],
        "Countries": ["Kenya",
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya"], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Farmlynco",
        "TeamSize": 3,
        "TeamMembers": [
            "Albert Essilfie",
            "Mawuli Zigah",
            "Felix Sam"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana"
        ],
        "category": "Education and Learning"
    },
    {
        "TeamName": "FEKSA",
        "TeamSize": 5,
        "TeamMembers": [
            "Euael Mekonen",
            "Samiya Hamid",
            "Bereket Lingerew",
            "Abel Kidanemariam",
            "Ajiferuke Samuel Gbenga"
        ],
        "Countries": [
            "Ethiopia",
            "Kenya",
            "Kenya",
            "Nigeria", "Nigeria"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Fortitude Force",
        "TeamSize": 4,
        "TeamMembers": [
            "Bokang Tladi",
            "Kamogelo Makwela",
            "Tumelo Sebothoma",
            "Thobane Sithole"
        ],
        "Countries": [
            "South Africa",
            "South Africa",
            "South Africa",
            "South Africa"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "GebereVision AI",
        "TeamSize": 3,
        "TeamMembers": [
            "Dabala Yonas",
            "Eyob Belayneh",
            "Bonsa Asafa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "Education and Learning"
    },
    {
        "TeamName": "GenAI wizards",
        "TeamSize": 5,
        "TeamMembers": ["Raymond Munguti",
            "Jerome Nanuseb",
            "Lungile Magubane",
            "Makhosini Maphanga",
            "Mufunwaini Mufhumudzi"
        ],
        "Countries": [
            "Kenya",
            "Namibia",
            "South Africa",
            "South Africa", "South Africa"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Get AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Ismael Muzemil Mohammed",
            "Stephen Kwaku Azongo",
            "Obimba Joshua",
            "Adeniran Owolabi",
            "Asya haji"
        ],
        "Countries": [
            "Ethiopia",
            "Ghana",
            "Nigeria",
            "Nigeria",
            "Tanzania"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Golden Minds AI",
        "TeamSize": 1,
        "TeamMembers": [""],
        "Countries": [""],
        "category": "Education and Learning"
    },
    {
        "TeamName": "GridGuard AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Rukundo Benjamin",
            "Mukiibi Peter Rogers",
            "Akol Ivan Collins",
            "Mbalire Shawal",
            "Achuka Simon Allan"
        ],
        "Countries": [
            "Uganda",
            "Uganda",
            "Uganda",
            "Uganda",
            "Uganda"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Hackernomix",
        "TeamSize": 5,
        "TeamMembers": [
            "Dagim Mesfin",
            "Ermias Ayele",
            "Meron Weldu",
            "Meron Kiflay",
            "Ermias Endale"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "HARAWKAN",
        "TeamSize": 5,
        "TeamMembers": [
            "Tadiyos Banti",
            "Euael Mekonen",
            "Samiya Hamid",
            "Bereket Lingerew",
            "Abel Kidanemariam"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Kenya",
            "Kenya", "Nigeria"
        ],
        "category": "Education and Learning"
    },
    {
        "TeamName": "Harissa",
        "TeamSize": 4,
        "TeamMembers": ["Malek Gharsallah",
            "Nour Ben Ammar",
            "Eya Ben Moulehem",
            "Nadia Trabelsi"],
        "Countries": ["Tunisia",
            "Tunisia",
            "Tunisia",
            "Tunisia"],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Harvestify",
        "TeamSize": 5,
        "TeamMembers": ["Amira Seid",
            "Lencho Yadeta",
            "Chisomo Sadick",
            "Simeon Alfeus",
            "Amuda Rashed"],
        "Countries": ["Ethiopia",
            "Ethiopia",
            "Malawi",
            "Namibia", "Nigeria"], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Hidden Expert",
        "TeamSize": 5,
        "TeamMembers": ["Ismael Kiprop",
            "Abdulqoyyum Aileru",
            "Daniju Farouq",
            "Atoyebi Oluwakemi",
            "Ekarika Nsemeke"],
        "Countries": ["Kenya",
            "Nigeria",
            "Nigeria",
            "Nigeria", "Nigeria"], "category": ""
    },
    {
        "TeamName": "Hruyan Coder",
        "TeamSize": 5,
        "TeamMembers": ["Tsehay Goremes",
            "Eliud Arum Obure",
            "Richard Mlambuzi",
            "Daniel Tesfu",
            "Ezra Yigremachew"],
        "Countries": ["Ethiopia",
            "Kenya",
            "Malawi",
            "Ethiopia", "Ethiopia"], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "HULU CODE",
        "TeamSize": 5,
        "TeamMembers": ["Roza Kassa",
            "Tseganesh Yifru",
            "Fenet Shewarega",
            "Melat Mesele",
            "Ekram Kedir"],
        "Countries": ["Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Hurudza AI",
        "TeamSize": 4,
        "TeamMembers": ["Frank Makeba",
            "Delroy Mashonganyika",
            "Tatenda Bako",
            "Blessing Chandiwana"],
        "Countries": ["Zimbabwe",
            "Zimbabwe",
            "Zimbabwe",
            "Zimbabwe"],
        "category": ""
    },
    {
        "TeamName": "iHealth",
        "TeamSize": 2,
        "TeamMembers": ["William Nnamani",
            "Rasheed Yekini"],
        "Countries": ["Nigeria",
            "Nigeria"],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Infinity",
        "TeamSize": 1,
        "TeamMembers": [""],
        "Countries": [""],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "InnoPulse",
        "TeamSize": 4,
        "TeamMembers": ["NDE HURICH DILAN",
            "Mbah Atangana David",
            "Fonguh Joy Akwi",
            "Feupa Heumou Fraidy"],
        "Countries": ["Cameroon",
            "Cameroon",
            "Cameroon",
            "Cameroon"],
        "category": "Healthcare"
    },
    {
        "TeamName": "Inventive Alliance",
        "TeamSize": 5,
        "TeamMembers": ["Shamiso Vushe",
            "Orilio Naobeb",
            "Simeon Makili",
            "Edna da Silva Alexandre",
            "Olavi Kamati"],
        "Countries": ["Namibia",
            "Namibia",
            "Namibia",
            "Namibia", "Namibia"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "K3A",
        "TeamSize": 5,
        "TeamMembers": [
            "YEKENE Sofiane",
            "BENGHERBIA Abdelkarim",
            "AKEB Aziz",
            "ZOUAMBIA Sohaib",
            "ALLAOUA Okba"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria", "Algeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "KenteKoders",
        "TeamSize": 5,
        "TeamMembers": [
            "Edem K. Anagbah",
            "Elikem Yaw Hamenoo",
            "Edward Ofosu Mensah",
            "Madiba Hudson-Quansah",
            "Welile N Dlamini"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana",
            "Ghana", "Ghana"
        ], "category": "Healthcare"
    },
    {
        "TeamName": "KilimoGuard AI",
        "TeamSize": 3,
        "TeamMembers": [
            "Michael Khanda",
            "Neema Rhonnah Mkenda",
            "Keegan Odege Mboya"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "maarifa",
        "TeamSize": 4,
        "TeamMembers": [
            "Muhigiri Ashuza Albin",
            "Bazene Serge Amos",
            "Muhya Mutabazi Rosalie",
            "Muhire Christian"
        ],
        "Countries": [
            "DRC",
            "DRC",
            "DRC",
            "DRC"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Mela Geeks",
        "TeamSize": 5,
        "TeamMembers": [
            "Nahom Tamirat",
            "Naod Mulugeta",
            "Kidus Asebe",
            "Kalkidan Yishak",
            "Kalkidan Amare"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": "Healthcare"
    },
    {
        "TeamName": "Milto",
        "TeamSize": 2,
        "TeamMembers": [
            "Tamirat Guda",
            "Atnabon Deresa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "mubabaddies",
        "TeamSize": 5,
        "TeamMembers": [
            "Tadiyos Banti",
            "Euael Mekonen",
            "Samiya Hamid",
            "Bereket Lingerew",
            "Abel Kidanemariam"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Kenya",
            "Kenya", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "N7 Team",
        "TeamSize": 4,
        "TeamMembers": [
            "Ahmed Houssam BOUZINE",
            "Brahim Elhoube",
            "Hamza El Ghazouani",
            "Mohamed-Amine BENHIMA"
        ],
        "Countries": [
            "Morocco",
            "Morocco",
            "Morocco",
            "Morocco"
        ],
        "category": "Healthcare"
    },
    {
        "TeamName": "Neural Innovator",
        "TeamSize": 3,
        "TeamMembers": [
            "Henry GOSSOU",
            "Abraham GBEGNON",
            "Safoura AMANDA"
        ],
        "Countries": [
            "Benin",
            "Benin",
            "Benin"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Neural Ninjas",
        "TeamSize": 3,
        "TeamMembers": [
            "Elvis Kinyua",
            "Frank Orji",
            "David Gondo"
        ],
        "Countries": [
            "Kenya",
            "Nigeria",
            "Zimbabwe"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "NeuSirens",
        "TeamSize": 5,
        "TeamMembers": [
            "Zebboudj Samah",
            "Bouazza Ayat",
            "Mohand Ouali Manel",
            "Karim Batoul Meryem",
            "GUERROUACHE Hiba"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria", "Algeria"
        ], "category": "Healthcare"
    },
    {
        "TeamName": "Nimbus",
        "TeamSize": 3,
        "TeamMembers": [
            "Bildad Otieno",
            "Aloys Aboge Jnr",
            "Michael Wekesa"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Okaluli ChatBot",
        "TeamSize": 4,
        "TeamMembers": [
            "Tangeni Matheus",
            "Wilbard Lazarus",
            "Lasarus Iithete",
            "Petrus Katambo"
        ],
        "Countries": [
            "Namibia",
            "Namibia",
            "Namibia",
            "Namibia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Open-TechZ",
        "TeamSize": 5,
        "TeamMembers": [
            "Wisdom Kalima",
            "Philip Maulidi",
            "Chrispin Jossam",
            "Emmanuel Bester",
            "Mohamed Rayen Bouzaabia"
        ],
        "Countries": [
            "Malawi",
            "Malawi",
            "Malawi",
            "Malawi", "Tunisia"
        ], "category": "Healthcare"
    },
    {
        "TeamName": "P for Positivity",
        "TeamSize": 5,
        "TeamMembers": [
            "Mahdi Ben Ameur",
            "Dhia Ben Hamouda",
            "Nour el houda Majdoub",
            "Yosr Ghanmy",
            "Ahmed Chebbi"
        ],
        "Countries": [
            "Tunisia",
            "Tunisia",
            "Tunisia",
            "Tunisia", "Tunisia"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "packAlpha",
        "TeamSize": 4,
        "TeamMembers": [
            "Ocholi Gideon Ocholi",
            "Abel Amifofum Gideon",
            "John ebah echi",
            "Ogbeyi Mark Ameh"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria",
            "Nigeria"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Pear Softwares",
        "TeamSize": 5,
        "TeamMembers": [
            "Ayoub Chalabi",
            "Omega Msimuko",
            "Okafor Peter chukwuemeka",
            "Oluwaseyi Emmanuel Ogundipe",
            "HADIL haffouz"
        ],
        "Countries": [
            "algeria",
            "Malawi",
            "NIGERIA",
            "Nigeria", "Tunisia"
        ], "category": "Healthcare"
    },
    {
        "TeamName": "PhoenixDevs",
        "TeamSize": 4,
        "TeamMembers": [
            "Katende Jericho",
            "Rusoke Marvin",
            "Paul Aineruhanga",
            "Ssekyanzi Joel"
        ],
        "Countries": [
            "Uganda",
            "Uganda",
            "Uganda",
            "Uganda"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Ram",
        "TeamSize": 5,
        "TeamMembers": [
            "Arthur Nkhoma",
            "Moses\rSamuel",
            "Sangwani\rPhiri",
            "Emmanuel\rOnyeali",
            "Enoch\rEpekipolu"
        ],
        "Countries": [
            "Malawi",
            "Malawi",
            "Malawi",
            "Nigeria", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "RF AI",
        "TeamSize": 4,
        "TeamMembers": [
            "Rediet Solomon",
            "Fennet Kassaye",
            "Nouhaila Farajy",
            "ABDELMOUNIM BENBOUCHTA"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Morocco",
            "Morocco"
        ],
        "category": "Healthcare"
    },
    {
        "TeamName": "Sahara AI Warriors (SAW)",
        "TeamSize": 5,
        "TeamMembers": [
            "Amel FEDDAG",
            "Abderraouf FELLAHI",
            "Insaf Meriem Krim",
            "Ines bencherif",
            "Ryma racha felkir"
        ],
        "Countries": [
            "Algeria",
            "Algeria",
            "Algeria",
            "Algeria", "Algeria"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Salama AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Julius Boakye",
            "Njuki Nestor Mugambi",
            "Joseph Maluka",
            "Halmiton Phiri",
            "Opaleye Solihat"
        ],
        "Countries": [
            "Ghana",
            "Kenya",
            "Malawi",
            "Malawi", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "The Sema AI",
        "TeamSize": 3,
        "TeamMembers": [
            "Shawn Phillip Oyuga",
            "Emmanuel Magero",
            "Anthony Nyaga"
        ],
        "Countries": [
            "",
            "",
            ""
        ],
        "category": "Healthcare"
    },
    {
        "TeamName": "Si24",
        "TeamSize": 3,
        "TeamMembers": [
            "Kival Mahadew",
            "Akshay Maharaj",
            "Dylan Govender"
        ],
        "Countries": [
            "South Africa",
            "South Africa",
            "South Africa"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Sigma AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Sunday Agabaidu Abraham",
            "Daniel Ukoha",
            "Eniola Eunice Alao",
            "Aaron Emmanuel Enejo",
            "Oladipo Dolapo Evangel"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria",
            "Nigeria", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Soma AI",
        "TeamSize": 4,
        "TeamMembers": [
            "Elvis Preye Kerebi",
            "Goodluck Ogbonna",
            "Justice Chukwuonye",
            "Talent Mundwa"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria",
            "Zimbabwe"
        ],
        "category": ""
    },
    {
        "TeamName": "Squad",
        "TeamSize": 5,
        "TeamMembers": [
            "Christopher Ndungu",
            "Braeson Nyahera",
            "Sammy Focus",
            "Daniel Edgar",
            "Timothy Tarus"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya", "Kenya"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Survive?",
        "TeamSize": 4,
        "TeamMembers": [
            "Sadam Husen",
            "Jaefer Muhammed",
            "Abdallah Abdurazak",
            "Abdulaziz Isa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "survivors",
        "TeamSize": 4,
        "TeamMembers": [
            "Ayoub Amiria",
            "Alaa Yousfi",
            "Molka Abdennadher",
            "Anas Mhiri"
        ],
        "Countries": [
            "Tunisia",
            "Tunisia",
            "Tunisia",
            "Tunisia"
        ],
        "category": ""
    },
    {
        "TeamName": "Synapse Squad",
        "TeamSize": 4,
        "TeamMembers": [
            "Noella Polie Vicia Ishemezwe",
            "Nelly Gloria Ndikumana",
            "Yvette Uwimana",
            "Erica-Livia Ingabire"
        ],
        "Countries": [
            "Burundi",
            "Burundi",
            "Burundi",
            "Burundi"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Tanzanite Innovators",
        "TeamSize": 5,
        "TeamMembers": [
            "Godson Ntungi",
            "Edgar Gulay",
            "Karim Nyumba",
            "Anen Isaac",
            "Daniel Mawalla"
        ],
        "Countries": [
            "Tanzania",
            "Tanzania",
            "Tanzania",
            "Tanzania", "Tanzania"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Team elite",
        "TeamSize": 5,
        "TeamMembers": [
            "Natnael Birhanu Regasa",
            "Shadrack Agyei Nti",
            "Andrianarisata Fenitriniaina",
            "Gomezgani Shaba",
            "Teffo Maphuti Movious"
        ],
        "Countries": [
            "Ethiopia",
            "Ghana",
            "Madagascar",
            "Malawi", "South Africa"
        ], "category": ""
    },
    {
        "TeamName": "Team Quantum",
        "TeamSize": 2,
        "TeamMembers": [
            "Suliat Saka",
            "David Fadeyi"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Team Synergy",
        "TeamSize": 5,
        "TeamMembers": [
            "Aquilas KIKISSAGBE",
            "AYIWAHOUN Codjo Espérance",
            "Joana Promise Mhone",
            "Brilliant Malepe",
            "Luyimbaazi Moses"
        ],
        "Countries": [
            "Benin",
            "Benin",
            "Malawi",
            "South Africa", "Uganda"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Team32",
        "TeamSize": 5,
        "TeamMembers": [
            "Fenan Yosef",
            "Rediet Muluken",
            "Nahom Habtamu",
            "Bereket Meles",
            "Nahom Dereje"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": ""
    },
    {
        "TeamName": "Tech Titans",
        "TeamSize": 5,
        "TeamMembers": [
            "Ahmed Lukman",
            "Joan Kori",
            "Fredrick Mweu",
            "Sarah Kamau",
            "Ahmed Nule"
        ],
        "Countries": [
            "kenya",
            "Kenya",
            "Kenya",
            "kenya", "Kenya"
        ], "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "TechMate",
        "TeamSize": 5,
        "TeamMembers": [
            "Sergius Justus Chesami Nyah",
            "Tataw Clarkson",
            "Quinn Aboh",
            "Adriel Mwofoh",
            "Testimony Adio"
        ],
        "Countries": [
            "Cameroon",
            "Cameroon",
            "Cameroon",
            "Cameroon", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Teknon",
        "TeamSize": 4,
        "TeamMembers": [
            "Nana Akua Osafo Amoabea",
            "Elda Amankwata Maku",
            "Joshua Tettey Teye",
            "Shallom Ezekiel"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana",
            "Ghana"
        ],
        "category": ""
    },
    {
        "TeamName": "The boys.",
        "TeamSize": 3,
        "TeamMembers": [
            "Simphiwe Sithebe",
            "Ellias Thema",
            "Neo Netshivanga"
        ],
        "Countries": [
            "South Africa",
            "South Africa",
            "South Africa"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "the champs",
        "TeamSize": 4,
        "TeamMembers": [
            "Tijani Boujdaria",
            "Walid Jlassi",
            "Minyar Meksi",
            "Mohamed Rouini"
        ],
        "Countries": [
            "Tunisia",
            "Tunisia",
            "Tunisia",
            "Tunisia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "The GPTs",
        "TeamSize": 4,
        "TeamMembers": [
            "Mounsef Litniti",
            "Akram Litniti",
            "Sohaib Soussi",
            "Othman Sadiki"
        ],
        "Countries": [
            "Morocco",
            "Morocco",
            "Morocco",
            "Morocco"
        ],
        "category": ""
    },
    {
        "TeamName": "The Nerds Team",
        "TeamSize": 3,
        "TeamMembers": [
            "Seyi Ogundipe",
            "Oluwasegun Ojo",
            "Oyebo Hasbiyallah"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "The Pressure",
        "TeamSize": 4,
        "TeamMembers": [
            "Binyam Mulat",
            "Afomia Dugassa",
            "Aryam Ezra",
            "Robel Daba"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "The-Elite-Space (TEA)",
        "TeamSize": 5,
        "TeamMembers": [
            "Alpheus Festus",
            "Simeon Tuyoleni",
            "Barkias Shapaka",
            "Tashinga Ryan Manunure",
            "Owen Chilwalo"
        ],
        "Countries": [
            "Namibia",
            "Namibia",
            "Namibia",
            "Namibia", "Namibia"
        ], "category": ""
    },
    {
        "TeamName": "TransitTrack",
        "TeamSize": 4,
        "TeamMembers": [
            "Kalkidan Dereje Mengistu",
            "Sura Itana Wage",
            "Tinsae Tadesse Anteneh",
            "Melkishi Tesfaye Angassa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": "AI Driven Artistry and Innovation"
    },
    {
        "TeamName": "Tros",
        "TeamSize": 5,
        "TeamMembers": [
            "Daniel Oke",
            "Chibuzor Nwachukwu",
            "Freda Efod",
            "Adebayo Obikoya",
            "Anuoluwasubomi Ake-John"
        ],
        "Countries": [
            "Nigeria",
            "Nigeria",
            "Nigeria",
            "Nigeria", "Nigeria"

        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Ultimatum Fundraising",
        "TeamSize": 4,
        "TeamMembers": [
            "Abenezer Nigussie",
            "Kedist Shigute",
            "Yohannes Walle",
            "Yared Bitewlign"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": ""
    },
    {
        "TeamName": "Unity-Software",
        "TeamSize": 5,
        "TeamMembers": [
            "Natnael Desalegn",
            "Natnael Wondimagegnehu",
            "Anteneh Addisu",
            "Samson Demessie",
            "Tinsae Daniel"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": ""
    },
    {
        "TeamName": "Unlimited AI",
        "TeamSize": 5,
        "TeamMembers": [
            "Amira Bahanni",
            "Aboubacar Youssif",
            "Abdulsobur Oyewale",
            "Abdulazeez Isah",
            "Azeezah Olamide Akinola"
        ],
        "Countries": [
            "Morocco",
            "Niger",
            "Nigeria",
            "Nigeria", "Nigeria"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Utopia Tech",
        "TeamSize": 5,
        "TeamMembers": [
            "Maedot Asrat",
            "Fenet Girma",
            "Maeza Tadele",
            "Daniel Ababu",
            "Mahlet Assefa"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia",
            "Ethiopia", "Ethiopia"
        ], "category": ""
    },
    {
        "TeamName": "Vision",
        "TeamSize": 5,
        "TeamMembers": [
            "Emmanuel Osei Mensah",
            "Duut Emmanuel",
            "Priscilla Amoah-Mensah",
            "Atampugre Martin",
            "Abdul Malik"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana",
            "Ghana", "Ghana"
        ], "category": ""
    },
    {
        "TeamName": "Vision-X",
        "TeamSize": 5,
        "TeamMembers": [
            "Wilfred Mutwiri",
            "Ekariorama Magaleta",
            "Joseph Kapalamula",
            "Idajili John Ojochegbe",
            "Honore Mugiraneza"
        ],
        "Countries": [
            "Kenya",
            "Malawi",
            "Malawi",
            "Nigeria", "Rwanda"
        ], "category": "Communication and Accessibility"
    },
    {
        "TeamName": "VULTURE",
        "TeamSize": 5,
        "TeamMembers": [
            "Hilaire Ntibashima",
            "Lesego Fortune Sefala",
            "Meisie Kgaugelo Mathipa",
            "Mboyane david makua",
            "Koketso mopai"
        ],
        "Countries": [
            "South Africa",
            "South Africa",
            "South Africa",
            "South Africa", "South Africa"
        ], "category": ""
    },
    {
        "TeamName": "White-Hats",
        "TeamSize": 4,
        "TeamMembers": [
            "Zivai E Karenga",
            "Jubal Chabanga",
            "Kevin Mugura",
            "Richmond Mpofu"
        ],
        "Countries": [
            "Zimbabwe",
            "Zimbabwe",
            "Zimbabwe",
            "Zimbabwe"
        ],
        "category": ""
    },
    {
        "TeamName": "Young engaged in the revolution of Africa",
        "TeamSize": 3,
        "TeamMembers": [
            "Danny KIKWAYA",
            "Adonis RWABIRA",
            "MULISYA Faith"
        ],
        "Countries": [
            "DRC",
            "DRC",
            "DRC"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "YoungSolver",
        "TeamSize": 5,
        "TeamMembers": [
            "Nathan lukamba",
            "Dan Mukambilwa",
            "Joviale kipulu",
            "Néhémie Lwatumba",
            "Winner Tshunza"
        ],
        "Countries": [
            "Democratic Republic of Congo",
            "Democratic Republic of Congo",
            "Democratic Republic of Congo",
            "Democratic Republic of Congo",
            "Democratic Republic of Congo"
        ],
        "category": ""
    },
    {
        "TeamName": "z-titans",
        "TeamSize": 5,
        "TeamMembers": [
            "Purity Mumbi",
            "Tony Kanyamuka",
            "Samson Mhango",
            "Peter Isulu",
            "Gift Chris Zulu"
        ],
        "Countries": [
            "Kenya",
            "Malawi",
            "Malawi",
            "Malawi",
            "Malawi"
        ], "category": ""
    },
    {
        "TeamName": "ZAS",
        "TeamSize": 3,
        "TeamMembers": [
            "Gabriel Agana Anongwin",
            "Zippora Appiah-Kubi",
            "Solomon Kennedy Dzramado"
        ],
        "Countries": [
            "Ghana",
            "Ghana",
            "Ghana"
        ],
        "category": "Communication and Accessibility"
    },
    {
        "TeamName": "Zebo",
        "TeamSize": 3,
        "TeamMembers": [
            "Natnael Mitiku",
            "Yohannes wakuma",
            "Nahom Mitiku"
        ],
        "Countries": [
            "Ethiopia",
            "Ethiopia",
            "Ethiopia"
        ],
        "category": ""
    },
    {
        "TeamName": "Zerobionic",
        "TeamSize": 4,
        "TeamMembers": [
            "Salome Makasi",
            "Maxwell Opondo",
            "Norah Kimathi",
            "Winstone Were"
        ],
        "Countries": [
            "Kenya",
            "Kenya",
            "Kenya",
            "Kenya"
        ],
        "category": ""
    }
]
