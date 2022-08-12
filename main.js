

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* ------------------------- Brenda code starts here--------------------------------------- */
const bookdb =
  [
    {
      "ISBN": "044310073X",
      "FILENAME": "044310073X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41kSLEoswsL.jpg",
      "TITLE": "Oral and Maxillofacial Surgery: An Objective-Based Textbook, 2e",
      "AUTHOR": "",
      "CATEGORY_ID": 16,
      "CATEGORY": "Medical Books"
    },
    {
      "ISBN": " 1438005687",
      "FILENAME": "1438005687.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/510l0qhi01L.jpg",
      "TITLE": "Barron's GRE, 21st Edition",
      "AUTHOR": "Sharon Weiner Green M.A.",
      "CATEGORY_ID": 28,
      "CATEGORY": "Test Preparation"
    },
    {
      "ISBN": 60750715,
      "FILENAME": "0060750715.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51p5aUY%2BOKL.jpg",
      "TITLE": "George Balanchine: The Ballet Maker (Eminent Lives)",
      "AUTHOR": "Robert Gottlieb",
      "CATEGORY_ID": 1,
      "CATEGORY": "biography"
    },
    {
      "ISBN": 1580237959,
      "FILENAME": "1580237959.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51pum0eWe4L.jpg",
      "TITLE": "A Partner in Holiness: Deepening Mindfulness, Practicing Compassion and Enriching Our Lives Through the Wisdom of R. Levi Yitzhak of Berdichev's, Vol. 2  (Institute for Jewish Spirituality)",
      "AUTHOR": "Rabbi Jonathan P. Slater DMin",
      "CATEGORY_ID": 21,
      "CATEGORY": "Religion & Spirituality"
    },
    {
      "ISBN": 135137829,
      "FILENAME": "0135137829.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51PuTPPCxaL.jpg",
      "TITLE": "Construction Scheduling: Principles and Practices (2nd Edition)",
      "AUTHOR": "Jay S. Newitt",
      "CATEGORY_ID": 0,
      "CATEGORY": "Arts & Photography"
    },
    {
      "ISBN": 312556411,
      "FILENAME": "0312556411.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51uNnIlIwrL.jpg",
      "TITLE": "Literature and Its Writers: A Compact Introduction to Fiction, Poetry, and Drama",
      "AUTHOR": "Ann Charters",
      "CATEGORY_ID": 15,
      "CATEGORY": "Literature"
    },
    {
      "ISBN": 393339157,
      "FILENAME": "0393339157.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51VIlqRy-VL.jpg",
      "TITLE": "Straight on Till Morning: The Life of Beryl Markham",
      "AUTHOR": "Mary S. Lovell",
      "CATEGORY_ID": 10,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 521456924,
      "FILENAME": "0521456924.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41n7iZq-0jL.jpg",
      "TITLE": "Diagrammatica: The Path to Feynman Diagrams (Cambridge Lecture Notes in Physics)",
      "AUTHOR": "Martinus Veltman",
      "CATEGORY_ID": 23,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 898699223,
      "FILENAME": "0898699223.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41xLYt-v6nL.jpg",
      "TITLE": "Book of Common Prayer 1979: Large Print edition",
      "AUTHOR": "",
      "CATEGORY_ID": 9,
      "CATEGORY": "Christian Books & Bibles"
    },
    {
      "ISBN": 545700272,
      "FILENAME": "0545700272.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51KyLXczCqL.jpg",
      "TITLE": "A Handful of Stars",
      "AUTHOR": "Cynthia Lord",
      "CATEGORY_ID": 4,
      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": 1616494441,
      "FILENAME": "1616494441.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51Jku59B9CL.jpg",
      "TITLE": "Almost Anorexic: Is My (or My Loved One's) Relationship with Food a Problem? (The Almost Effect)",
      "AUTHOR": "Ph.D. Jennifer J Thomas",
      "CATEGORY_ID": 25,
      "CATEGORY": "Self-Help"
    },
    {
      "ISBN": 1627227318,
      "FILENAME": "1627227318.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41LkijoCvuL.jpg",
      "TITLE": "Pre-ANDA Litigation: Strategies and Tactics for Developing a Drug Product and Patent Portfolio",
      "AUTHOR": "",
      "CATEGORY_ID": 14,
      "CATEGORY": "Law"
    },
    {
      "ISBN": 1849056536,
      "FILENAME": "1849056536.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51Tjv23guEL.jpg",
      "TITLE": "Creative, Successful, Dyslexic: 23 High Achievers Share Their Stories",
      "AUTHOR": "",
      "CATEGORY_ID": 19,
      "CATEGORY": "Politics & Social Sciences"
    },
    {
      "ISBN": 313335427,
      "FILENAME": "0313335427.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51C16779N8L.jpg",
      "TITLE": "Organ Transplantation (Health and Medical Issues Today)",
      "AUTHOR": "David Petechuk",
      "CATEGORY_ID": 11,
      "CATEGORY": "health and fitness"
    },
    {
      "ISBN": 316185434,
      "FILENAME": "0316185434.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51JFeqcU96L.jpg",
      "TITLE": "The Age of Acquiescence: The Life and Death of American Resistance to Organized Wealth and Power",
      "AUTHOR": "Steve Fraser",
      "CATEGORY_ID": 2,
      "CATEGORY": "business"
    },
    {
      "ISBN": 972467637,
      "FILENAME": "0972467637.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51kOYa-LHML.jpg",
      "TITLE": "The Multiples Manual: Preparing and Caring for Twins or Triplets",
      "AUTHOR": "Lynn Lorenz",
      "CATEGORY_ID": 18,
      "CATEGORY": "other"
    },
    {
      "ISBN": 962904201,
      "FILENAME": "0962904201.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51bWdcsbX0L.jpg",
      "TITLE": "Oregon High: A Climbing Guide to Nine Cascade Volcanoes",
      "AUTHOR": "Jeff Thomas",
      "CATEGORY_ID": 26,
      "CATEGORY": "Sports & Outdoors"
    },
    {
      "ISBN": 596527322,
      "FILENAME": "0596527322.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/5159f7hqJjL.jpg",
      "TITLE": "HTML & XHTML: The Definitive Guide (6th Edition)",
      "AUTHOR": "Chuck Musciano",
      "CATEGORY_ID": 6,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 1514196239,
      "FILENAME": "1514196239.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/5178fq2DV3L.jpg",
      "TITLE": "Anti Inflammatory Cookbook - 50 Slow Cooker Recipes With Anti - Inflammatory Ingredients: Great For Gout! (Slow Cooker Cookbooks)",
      "AUTHOR": "Kate Marsh",
      "CATEGORY_ID": 7,
      "CATEGORY": "health and fitness"
    },
    {
      "ISBN": "079382883X",
      "FILENAME": "079382883X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51zi2q5JfbL.jpg",
      "TITLE": "Leopard Geckos (Complete Herp Care)",
      "AUTHOR": "Gerald Merker",
      "CATEGORY_ID": 8,
      "CATEGORY": "Crafts, Hobbies & Home"
    },
    {
      "ISBN": 1907732837,
      "FILENAME": "1907732837.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51AdbQZwDuL.jpg",
      "TITLE": "Botswana & Its National Heritage",
      "AUTHOR": "Sandy Grant",
      "CATEGORY_ID": 29,
      "CATEGORY": "Travel"
    },
    {
      "ISBN": 871137607,
      "FILENAME": "0871137607.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51EdPM0rHkL.jpg",
      "TITLE": "Eat the Rich: A Treatise on Economics",
      "AUTHOR": "P.  J. O'Rourke",
      "CATEGORY_ID": 13,
      "CATEGORY": "Humor & Entertainment"
    },
    {
      "ISBN": 553508784,
      "FILENAME": "0553508784.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51V7y865BxL.jpg",
      "TITLE": "Paw Patrol Phonics Box Set (PAW Patrol) (Step into Reading)",
      "AUTHOR": "Jennifer Liberts",
      "CATEGORY_ID": 20,
      "CATEGORY": "Reference"
    },
    {
      "ISBN": 1780548273,
      "FILENAME": "1780548273.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61Yudxp-yeL.jpg",
      "TITLE": "The Official Doctor Who2016 Square Calendar",
      "AUTHOR": "",
      "CATEGORY_ID": 3,
      "CATEGORY": "Calendars"
    },
    {
      "ISBN": 1888216468,
      "FILENAME": "1888216468.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51t0aUEe0tL.jpg",
      "TITLE": "Battlefields of the Civil War Map",
      "AUTHOR": "National Geographic Society",
      "CATEGORY_ID": 12,
      "CATEGORY": "History"
    },
    {
      "ISBN": 1932234969,
      "FILENAME": "1932234969.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51IybjClfrL.jpg",
      "TITLE": "5 Centimeters per Second",
      "AUTHOR": "",
      "CATEGORY_ID": 5,
      "CATEGORY": "Comics & Graphic Novels"
    },
    {
      "ISBN": 1583419543,
      "FILENAME": "1583419543.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51AiMilDWpL.jpg",
      "TITLE": "The Story of the New Orleans Hornets (The NBA: a History of Hoops)",
      "AUTHOR": "Tyler Omoth",
      "CATEGORY_ID": 27,
      "CATEGORY": "Teen & Young Adult"
    },
    {
      "ISBN": 871272407,
      "FILENAME": "0871272407.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51t2uBEMp3L.jpg",
      "TITLE": "Love in Provence: Romantic Adventures in the South of France",
      "AUTHOR": "Yvone Lenard",
      "CATEGORY_ID": 22,
      "CATEGORY": "Romance"
    },
    {
      "ISBN": 471041386,
      "FILENAME": "0471041386.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41aVeVvefKL.jpg",
      "TITLE": "Polymeric Multicomponent Materials: An Introduction",
      "AUTHOR": "L. H. Sperling",
      "CATEGORY_ID": 23,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 147514940,
      "FILENAME": "0147514940.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51TI3FwVa%2BL.jpg",
      "TITLE": "Fantasy League",
      "AUTHOR": "Mike Lupica",
      "CATEGORY_ID": 4,
      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": 976326817,
      "FILENAME": "0976326817.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/31VJtBTmfvL.jpg",
      "TITLE": "Be the Ultimate Assistant: A celebrity assistant's secrets to working with any high-powered employer",
      "AUTHOR": "Bonnie Low-Kramen",
      "CATEGORY_ID": 2,
      "CATEGORY": "business"
    },
    {
      "ISBN": 830830375,
      "FILENAME": "0830830375.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51pnw9xXOtL.jpg",
      "TITLE": "Parables: The Greatest Stories Ever Told (Lifeguide Bible Studies)",
      "AUTHOR": "John White",
      "CATEGORY_ID": 9,
      "CATEGORY": "Christian Books & Bibles"
    },
    {
      "ISBN": 4041673410,
      "FILENAME": "4041673410.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51pqgSj8YoL.jpg",
      "TITLE": "Bali Travels Maldives [Japanese Edition]",
      "AUTHOR": "Giniro Natsuo",
      "CATEGORY_ID": 29,
      "CATEGORY": "Travel"
    },
    {
      "ISBN": "111801684X",
      "FILENAME": "111801684X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/518VXqYR27L.jpg",
      "TITLE": "Microsoft Windows Security Essentials",
      "AUTHOR": "Darril Gibson",
      "CATEGORY_ID": 6,
      "CATEGORY": "Computers & Technology"
    },
    {
      "ISBN": 1932564462,
      "FILENAME": "1932564462.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51TLjyIjU%2BL.jpg",
      "TITLE": "Shadowrun: Third Edition (FPR25000)",
      "AUTHOR": "FanPro",
      "CATEGORY_ID": 24,
      "CATEGORY": "Science Fiction & Fantasy"
    },
    {
      "ISBN": 982565062,
      "FILENAME": "0982565062.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51uJz4Jd-hL.jpg",
      "TITLE": "The Crime Wave: Collected Nonfiction (The Ace Performer Collection series)",
      "AUTHOR": "Dashiell Hammett",
      "CATEGORY_ID": 17,
      "CATEGORY": "Mystery, Thriller & Suspense"
    },
    {
      "ISBN": 711232997,
      "FILENAME": "0711232997.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61c4EZtdtNL.jpg",
      "TITLE": "The English Country House Garden",
      "AUTHOR": "Marcus Harpur",
      "CATEGORY_ID": 8,
      "CATEGORY": "Crafts, Hobbies & Home"
    },
    {
      "ISBN": 153003804,
      "FILENAME": "0153003804.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51JXp76wG1L.jpg",
      "TITLE": "Diary of Anne Frank",
      "AUTHOR": "Frances Goodrich",
      "CATEGORY_ID": 12,
      "CATEGORY": "History"
    },
    {
      "ISBN": 1622020758,
      "FILENAME": "1622020758.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41uPslzVRgL.jpg",
      "TITLE": "ICD-10-CM 2015: The Complete Official Codebook",
      "AUTHOR": "",
      "CATEGORY_ID": 16,
      "CATEGORY": "Medical Books"
    },
    {
      "ISBN": 1557044686,
      "FILENAME": "1557044686.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/410oYwwjssL.jpg",
      "TITLE": "The Words of Gandhi (Newmarket Words Of Series)",
      "AUTHOR": "Mahatma Gandhi",
      "CATEGORY_ID": 21,
      "CATEGORY": "Religion & Spirituality"
    },
    {
      "ISBN": 688135765,
      "FILENAME": "0688135765.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61gCGr0YMzL.jpg",
      "TITLE": "Shortcut",
      "AUTHOR": "Donald Crews",
      "CATEGORY_ID": 4,
      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": 470019239,
      "FILENAME": "0470019239.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41LiDBXEC-L.jpg",
      "TITLE": "Medical Mycology: Cellular and Molecular Techniques",
      "AUTHOR": "",
      "CATEGORY_ID": 11,
      "CATEGORY": "health and fitness "
    },
    {
      "ISBN": 872860051,
      "FILENAME": "0872860051.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51ssxbQig9L.jpg",
      "TITLE": "The First Third",
      "AUTHOR": "Neal Cassady",
      "CATEGORY_ID": 29,
      "CATEGORY": "Travel"
    },
    {
      "ISBN": 385349297,
      "FILENAME": "0385349297.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41hJGXQAq%2BL.jpg",
      "TITLE": "Reasons Mommy Drinks",
      "AUTHOR": "Lyranda Martin-Evans",
      "CATEGORY_ID": 13,
      "CATEGORY": "Humor & Entertainment"
    },
    {
      "ISBN": 323072534,
      "FILENAME": "0323072534.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41eD1Ln0KlL.jpg",
      "TITLE": "Manual of High Risk Pregnancy and Delivery, 5e (Manual of High Risk Pregnancy & Delivery)",
      "AUTHOR": "Elizabeth S. Gilbert RNC  MS  FNPc",
      "CATEGORY_ID": 16,
      "CATEGORY": "Medical Books"
    },
    {
      "ISBN": 1466566086,
      "FILENAME": "1466566086.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41XfKAnD%2BgL.jpg",
      "TITLE": "Oscillations and Waves: An Introduction",
      "AUTHOR": "Richard Fitzpatrick",
      "CATEGORY_ID": 23,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 1416594914,
      "FILENAME": "1416594914.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51hCxlTZ5EL.jpg",
      "TITLE": "DAMAGES",
      "AUTHOR": "Barry Werth",
      "CATEGORY_ID": 14,
      "CATEGORY": "Law"
    },
    {
      "ISBN": 851513743,
      "FILENAME": "0851513743.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41oo7KfL5ML.jpg",
      "TITLE": "Sermons on Timothy and Titus (16th-17th Century Facsimile Edition)",
      "AUTHOR": "John Calvin",
      "CATEGORY_ID": 9,
      "CATEGORY": "Christian Books & Bibles"
    },
    {
      "ISBN": 1849752621,
      "FILENAME": "1849752621.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51U6eq7vu4L.jpg",
      "TITLE": "Oils and Vinegars: Discovering and Enjoying Gourmet Oils and Vinegars",
      "AUTHOR": "Liz Franklin",
      "CATEGORY_ID": 7,
      "CATEGORY": "Cookbooks, Food & Wine"
    },
    {
      "ISBN": 393730018,
      "FILENAME": "0393730018.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51BLmSCM6dL.jpg",
      "TITLE": "The Handbook of Painted Decoration: The Tools, Materials, and Step-by-Step Techniques of Trompe L'Oeil Painting",
      "AUTHOR": "Yannick Guegan",
      "CATEGORY_ID": 0,
      "CATEGORY": "Arts & Photography"
    },
    {
      "ISBN": 823802817,
      "FILENAME": "0823802817.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41ANPWYHPBL.jpg",
      "TITLE": "Stage Plays from the Classics: One-Act Adaptations from Famous Short Stories, Novels, and Plays",
      "AUTHOR": "Joellen Bland",
      "CATEGORY_ID": 27,
      "CATEGORY": "Teen & Young Adult"
    },
    {
      "ISBN": "162336583X",
      "FILENAME": "162336583X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61INLFujcpL.jpg",
      "TITLE": "Runner's World Meals on the Run: 150 energy-packed recipes in 30 minutes or less",
      "AUTHOR": "Joanna Sayago Golub",
      "CATEGORY_ID": 7,
      "CATEGORY": "Cookbooks, Food & Wine"
    },
    {
      "ISBN": 1564967425,
      "FILENAME": "1564967425.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61zJetR%2BnFL.jpg",
      "TITLE": "Mosaics Inside & Out: Patterns and Inspirations for 17 Mosaic Projects",
      "AUTHOR": "Doreen Mastandrea",
      "CATEGORY_ID": 8,
      "CATEGORY": "Crafts, Hobbies & Home"
    },
    {
      "ISBN": 983346666,
      "FILENAME": "0983346666.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61Yo1Mi1JOL.jpg",
      "TITLE": "She Appears! Encounters with Kwan Yin, Goddess of Compassion",
      "AUTHOR": "Sandy Boucher",
      "CATEGORY": "Religion & Spirituality"
    },
    {
      "ISBN": 1444334050,
      "FILENAME": "1444334050.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41OSYKAWwFL.jpg",
      "TITLE": "A Companion to Museum Studies",
      "AUTHOR": "",

      "CATEGORY": "business"
    },
    {
      "ISBN": 618428852,
      "FILENAME": "0618428852.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51N4hEjfIyL.jpg",
      "TITLE": "United States History  Early Years (Level 5): Houghton Mifflin Social Studies",
      "AUTHOR": "HOUGHTON MIFFLIN",

      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": 1878823299,
      "FILENAME": "1878823299.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51EU06TQR0L.jpg",
      "TITLE": "Indoor Marijuana Horticulture: The Indoor Bible",
      "AUTHOR": "Jorge Cervantes",
      "CATEGORY_ID": 23,
      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 1250036658,
      "FILENAME": "1250036658.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51-RntCdC-L.jpg",
      "TITLE": "This Book Is Full of Spiders: Seriously, Dude, Don't Touch It (John Dies at the End)",
      "AUTHOR": "David Wong",

      "CATEGORY": "Literature"
    },
    {
      "ISBN": 1594772592,
      "FILENAME": "1594772592.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51HI3R5ucDL.jpg",
      "TITLE": "The Secret to Long Life in Your DNA: The Beljanski Approach to Cellular Health",
      "AUTHOR": "Hervé Janecek Ph.D.",

      "CATEGORY": "health and fitness"
    },
    {
      "ISBN": 827604386,
      "FILENAME": "0827604386.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41LS0LgettL.jpg",
      "TITLE": "Rabbi Israel Salanter and the Mussar Movement: Seeking the Torah of Truth",
      "AUTHOR": "Immanuel Etkes",
      "CATEGORY": "Biographies & Memoirs"
    },
    {
      "ISBN": 299151646,
      "FILENAME": "0299151646.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51WTCse4XRL.jpg",
      "TITLE": "The Healthiest City: Milwaukee and the Politics of Health Reform",
      "AUTHOR": "Judith W. Leavitt",
      "CATEGORY": "Travel"
    },
    {
      "ISBN": "162972095X",
      "FILENAME": "162972095X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51T3GSdb4hL.jpg",
      "TITLE": "My Fair Gentleman (Proper Romance) (A Proper Romance)",
      "AUTHOR": "Nancy Campbell Allen",
      "CATEGORY": "Romance"
    },
    {
      "ISBN": 1594852537,
      "FILENAME": "1594852537.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51fgYDde-zL.jpg",
      "TITLE": "Stand Up Paddling: Flatwater to Surf and Rivers (Mountaineering Outdoor Experts) (Moes)",
      "AUTHOR": "Rob Casey",
      "CATEGORY": "Sports & Outdoors"
    },
    {
      "ISBN": 890515808,
      "FILENAME": "0890515808.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51SCBOPtu0L.jpg",
      "TITLE": "Your Guide to Zion and Bryce Canyon (True North Series)",
      "AUTHOR": "Mike Oard",

      "CATEGORY": "Christian Books & Bibles"
    },
    {
      "ISBN": 1493758292,
      "FILENAME": "1493758292.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51rpRrPuNwL.jpg",
      "TITLE": "Unnatural Talent: Creating, Printing and Selling Your Comic in the Digital Age",
      "AUTHOR": "Jason Brubaker",

      "CATEGORY": "Comics & Graphic Novels"
    },
    {
      "ISBN": 399168834,
      "FILENAME": "0399168834.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41TQKcxPcIL.jpg",
      "TITLE": "Brainstorm: The Power and Purpose of the Teenage Brain",
      "AUTHOR": "Daniel J. Siegel MD",

      "CATEGORY": "Parenting & Relationships"
    },
    {
      "ISBN": 1495944336,
      "FILENAME": "1495944336.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51b4r8w9r7L.jpg",
      "TITLE": "E-Commerce Concepts",
      "AUTHOR": "Dr Randall J Dyck",

      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 1594483809,
      "FILENAME": "1594483809.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61lX5yjQf%2BL.jpg",
      "TITLE": "Well Enough Alone: A Cultural History of My Hypochondria",
      "AUTHOR": "Jennifer Traig",

      "CATEGORY": "Humor & Entertainment"
    },
    {
      "ISBN": 71825053,
      "FILENAME": "0071825053.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61x8Dfxs9CL.jpg",
      "TITLE": "Basic and Clinical Pharmacology 13 E",
      "AUTHOR": "Bertram Katzung",
      "CATEGORY_ID": 16,
      "CATEGORY": "Medical Books"
    },
    {
      "ISBN": "B003YCQCYE",
      "FILENAME": "B003YCQCYE.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51F1112Q6ML.jpg",
      "TITLE": "How to Have a Big Wedding on a Small Budget",
      "AUTHOR": "Diane Warner",
      "CATEGORY_ID": 8,
      "CATEGORY": "Crafts, Hobbies & Home"
    },
    {
      "ISBN": 1572226986,
      "FILENAME": "1572226986.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51bazlq7u6L.jpg",
      "TITLE": "Russian Grammar (Quickstudy: Academic)",
      "AUTHOR": "Inc. BarCharts",
      "CATEGORY_ID": 20,
      "CATEGORY": "Reference"
    },
    {
      "ISBN": 975395114,
      "FILENAME": "0975395114.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51DMugmdAuL.jpg",
      "TITLE": "Responsible Travel Guide Cambodia",
      "AUTHOR": "Pujita Nanette Mayeda",
      "CATEGORY": "Travel"
    },
    {
      "ISBN": 133795020,
      "FILENAME": "0133795020.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51MyuNfkVGL.jpg",
      "TITLE": "Principles of Marketing (16th Edition) (Newest Edition)",
      "AUTHOR": "Philip T Kotler",
      "CATEGORY": "business "
    },
    {
      "ISBN": 1608874257,
      "FILENAME": "1608874257.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51O2-prLrML.jpg",
      "TITLE": "Halo: The Poster Collection",
      "AUTHOR": "",
      "CATEGORY": "Arts & Photography"
    },
    {
      "ISBN": 763652326,
      "FILENAME": "0763652326.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51gO81UQHXL.jpg",
      "TITLE": "Mercy Watson: Something Wonky this Way Comes",
      "AUTHOR": "Kate DiCamillo",

      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": "161620463X",
      "FILENAME": "161620463X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51moAp8QXyL.jpg",
      "TITLE": "If You're Lucky",
      "AUTHOR": "Yvonne Prinz",

      "CATEGORY": "Teen & Young Adult"
    },
    {
      "ISBN": 1605537071,
      "FILENAME": "1605537071.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51jnErh-u9L.jpg",
      "TITLE": "Great-Tasting Potatoes Cookbook",
      "AUTHOR": "Editors of Favorite Name Brand Recipes",

      "CATEGORY": "Cookbooks, Food & Wine"
    },
    {
      "ISBN": 816057583,
      "FILENAME": "0816057583.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/512NdDiYqZL.jpg",
      "TITLE": "The Kuwaiti Oil Fires (Environmental Disasters)",
      "AUTHOR": "Kristine Hirschmann",

      "CATEGORY": "History"
    },
    {
      "ISBN": 1591200172,
      "FILENAME": "1591200172.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51F3KTDSSRL.jpg",
      "TITLE": "Healing Without Medication: A Comprehensive Guide to the Complementary Techniques Anyone Can Use to Achieve Real Healing",
      "AUTHOR": "Robert S. Rister",

      "CATEGORY": "health and fitness"
    },
    {
      "ISBN": 300200676,
      "FILENAME": "0300200676.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51QRtiFZJtL.jpg",
      "TITLE": "Eternity's Sunrise: The Imaginative World of William Blake",
      "AUTHOR": "Leo Damrosch",

      "CATEGORY": "Literature & Fiction"
    },
    {
      "ISBN": 1841625612,
      "FILENAME": "1841625612.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51VnUTL5nKL.jpg",
      "TITLE": "Paraguay (Bradt Travel Guide)",
      "AUTHOR": "Margaret Hebblethwaite",

      "CATEGORY": "Travel"
    },
    {
      "ISBN": 1593853084,
      "FILENAME": "1593853084.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41I2zm6GAyL.jpg",
      "TITLE": "Treating Trauma and Traumatic Grief in Children and Adolescents",
      "AUTHOR": "Judith A. Cohen",

      "CATEGORY": "Medical Books"
    },
    {
      "ISBN": 1403973083,
      "FILENAME": "1403973083.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/419TDqP99jL.jpg",
      "TITLE": "A Terrible Revenge: The Ethnic Cleansing of the East European Germans",
      "AUTHOR": "Alfred-Maurice de Zayas",

      "CATEGORY": "Law"
    },
    {
      "ISBN": 1559630620,
      "FILENAME": "1559630620.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51Y2pTdUbLL.jpg",
      "TITLE": "Plastics: America's Packaging Dilemma (Island Press Critical Issues Series)",
      "AUTHOR": "Ellen Feldman",

      "CATEGORY": "Science & Math"
    },
    {
      "ISBN": "047005333X",
      "FILENAME": "047005333X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/519W7i65J%2BL.jpg",
      "TITLE": "Microbiologically Safe Foods",
      "AUTHOR": "Jose Santos Garcia",

      "CATEGORY": "health and fitness "
    },
    {
      "ISBN": 1609949323,
      "FILENAME": "1609949323.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41d0t0efHaL.jpg",
      "TITLE": "Life Reimagined: Discovering Your New Life Possibilities",
      "AUTHOR": "Richard J. Leider",
      "CATEGORY_ID": 25,
      "CATEGORY": "Self-Help"
    },
    {
      "ISBN": 613721209,
      "FILENAME": "0613721209.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51lXAnDj5RL.jpg",
      "TITLE": "It's St. Patrick's Day (Turtleback School & Library Binding Edition) (Scholastic Reader: Level 1 (Pb))",
      "AUTHOR": "Rebecca Gomez",

      "CATEGORY": "Children's Books"
    },
    {
      "ISBN": 1476736952,
      "FILENAME": "1476736952.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61HmWM642cL.jpg",
      "TITLE": "Strands of Sorrow (Black Tide Rising)",
      "AUTHOR": "John Ringo",

      "CATEGORY": "fiction"
    },
    {
      "ISBN": "075756383X",
      "FILENAME": "075756383X.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51U5u9K%2BABL.jpg",
      "TITLE": "Analytic Philosophy",
      "AUTHOR": "John-Michael Kuczynski",

      "CATEGORY": "Politics & Social Sciences"
    },
    {
      "ISBN": 3928819232,
      "FILENAME": "3928819232.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/714CGZPM6WL.gif",
      "TITLE": "The Modern Coral Reef Aquarium, Volume 2 (v. 2)",
      "AUTHOR": "Svein A. Fossa",

      "CATEGORY": "Crafts, Hobbies & Home"
    },
    {
      "ISBN": 883165635,
      "FILENAME": "0883165635.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51HdaoFLOpL.jpg",
      "TITLE": "Promises Kept: The Life of an Issei Man",
      "AUTHOR": "Akemi Kikumura-Yano",
      "CATEGORY_ID": 1,
      "CATEGORY": "biography"
    },
    {
      "ISBN": 1567651046,
      "FILENAME": "1567651046.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/513K01ND32L.jpg",
      "TITLE": "Vocabulary for the College Bound Student",
      "AUTHOR": "Harold Levine",
      "CATEGORY_ID": 27,
      "CATEGORY": "Teen & Young Adult"
    },
    {
      "ISBN": 961482125,
      "FILENAME": "0961482125.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41MXQ3Z8AVL.jpg",
      "TITLE": "Hunting the Rockies: Home of the Giants",
      "AUTHOR": "Kirt I. Darner",
      "CATEGORY_ID": 29,
      "CATEGORY": "Travel"
    },
    {
      "ISBN": 1479834769,
      "FILENAME": "1479834769.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/61tWZaKGBUL.jpg",
      "TITLE": "The Slums of Aspen: Immigrants vs. the Environment in America's Eden (Nation of Nations)",
      "AUTHOR": "Lisa  Sun-Hee Park",
      "CATEGORY_ID": 2,
      "CATEGORY": "business"
    },
    {
      "ISBN": 735588341,
      "FILENAME": "0735588341.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41-nm-fpWmL.jpg",
      "TITLE": "Disaster Law and Policy, Second Edition (Aspen Elective)",
      "AUTHOR": "Daniel A. Farber",

      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 1466598689,
      "FILENAME": "1466598689.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51wRE04dZ9L.jpg",
      "TITLE": "Mobile & Social Game Design: Monetization Methods and Mechanics, Second Edition",
      "AUTHOR": "Tim Fields",

      "CATEGORY": "science and technology"
    },
    {
      "ISBN": 545130484,
      "FILENAME": "0545130484.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51A2z8I-4DL.jpg",
      "TITLE": "Ready, Freddy! #22: Science Fair Flop",
      "AUTHOR": "Abby Klein",

      "CATEGORY": "other"
    },
    {
      "ISBN": 1609718682,
      "FILENAME": "1609718682.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51i%2Beq1ghKL.jpg",
      "TITLE": "HSPT Flashcard Study System: HSPT Exam Practice Questions & Review for the High School Placement Test (Cards)",
      "AUTHOR": "HSPT Exam Secrets Test Prep Team",

      "CATEGORY": "other"
    },
    {
      "ISBN": 801870895,
      "FILENAME": "0801870895.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/41oTzSlSYuL.jpg",
      "TITLE": "On the Backroad to Heaven: Old Order Hutterites, Mennonites, Amish, and Brethren (Center Books in Anabaptist Studies)",
      "AUTHOR": "Donald B. Kraybill",
      "CATEGORY": "other"
    },
    {
      "ISBN": 1416599517,
      "FILENAME": "1416599517.jpg",
      "IMAGE_URL": "http://ecx.images-amazon.com/images/I/51PtnNC45mL.jpg",
      "TITLE": "Spiritual Astrology: A Path to Divine Awakening",
      "AUTHOR": "Jan Spiller",
      "CATEGORY": "Religion & Spirituality"
    }
  ]

function book() { //stores items in the localStorage
  var category = document.getElementById('category').value;
  var author = document.getElementById('author').value;
  var title = document.getElementById('title').value;
  var edition = document.getElementById('edition').value;
  var isbn = document.getElementById('isbn').value;
  var description = document.getElementById('description').value;
  var key = document.getElementById('key').value;



  const book = {
    CATEGORY: category,
    AUTHOR: author,
    TITLE: title,
    DESCRIPTION: description,
    ISBN: isbn,
    EDITION: edition,

  }
  console.log(bookdb.length)
  bookdb.push(book)
  console.log(bookdb.length)
  window.localStorage.setItem(key, JSON.stringify(book));
  //converting object to string
}



window.onload = function () { //ensures the page is loaded before functions are executed.
  document.getElementById("bookForm").onsubmit = book

}

function cFunction() {
  alert("The book is added to the DNB library");
}
for(let i=0; i<localStorage.length; i++) {
const dnb= JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))
bookdb.push(dnb)
console.log(Object.keys(localStorage)[i])
console.log(bookdb)
}
/* ------------------------- Brenda code ends here--------------------------------------- */