/* ==========================================================================
   CHAPTER UPDATE: Current Members data
   --------------------------------------------------------------------------
   This is the only file you need to edit to update the Current Members page.

   Each member is one { ... } entry. Fields:
     name     – Full name, as the brother wants it shown.
     role     – Office held (e.g. "President"). Leave "" for brothers without an office.
     line     – Optional. Semester/year of initiation, e.g. "Spring 2024".
     major    – Optional. Academic major or other short detail.
     photo    – Optional. Path to an image in /images, e.g. "images/members/jsmith.jpg".
                Leave "" to show initials instead. Square photos (400x400+) work best.
     alt      – Required if photo is set. Describe the photo, e.g. "Portrait of Brother John Smith".
     placeholder – true marks an entry as not yet filled in (it is shown with a
                   striped "To be added" style). Set to false or delete once real.

   Keep entries in the order you want them displayed. Remove the placeholder
   entries once the real roster is in.

   Brand note: obtain consent before posting a brother's photo
   (APA Brand Guidelines, Social Media – Privacy).
   ========================================================================== */

window.CHAPTER_ROSTER_TERM = "2026–2027"; // CHAPTER UPDATE: academic year shown on the page

// Chapter officers.
// Source: AlphaMX chapter detail (my.apa1906.net), "Current Chapter Officers" and
// "Current Actives in Chapter", Nov. 2026. All five active brothers hold office;
// terms run through Aug. 31, 2027. Photos are the brothers' AlphaMX profile pictures.
// Only names, offices and initiation semester are published — never member IDs,
// emails, hometowns or financial details from AlphaMX.
// CHAPTER UPDATE: update after each officer election.
window.CHAPTER_OFFICERS = [
  { name: "Jace Mundt",          role: "President · Dean of Membership", line: "Spring 2025",
    photo: "images/members/mundt.jpg", alt: "Portrait of Brother Jace Mundt in a black suit, white shirt and black-and-gold striped tie" },
  { name: "Corey Dixon Jr.",     role: "First Vice President · Treasurer", line: "Spring 2025",
    photo: "images/members/dixon.jpg", alt: "Portrait of Brother Corey Dixon Jr. in an old gold Alpha Phi Alpha sweater, outdoors" },
  { name: "Alontae Gross",       role: "Secretary · Director of Educational Activities", line: "Spring 2026",
    photo: "images/members/gross.jpg", alt: "Portrait of Brother Alontae Gross in a dark suit and black-and-gold striped tie, outdoors" },
  { name: "Tae’Shaun Presswood", role: "Chaplain · Sergeant-at-Arms · Parliamentarian", line: "Spring 2025",
    major: "Assistant District Director, District of Iowa",
    photo: "images/members/presswood.jpg", alt: "Portrait of Brother Tae’Shaun Presswood in a black Alpha Phi Alpha jacket, outdoors" },
  { name: "Corey Breiten",       role: "Historian · Associate Editor to the Sphinx · NPHC Representative", line: "Spring 2026",
    photo: "images/members/breiten.jpg", alt: "Portrait of Brother Corey Breiten in a black suit and black-and-gold striped tie, outdoors" },
  { name: "Anthony Haughton II", role: "Alpha Advisor", line: "", major: "Nu Chi Lambda Chapter", photo: "", alt: "" }
];

// Additional active brothers who do not hold office (none as of Nov. 2026).
// The "Brothers" section is hidden automatically while this list is empty.
// CHAPTER UPDATE: add brothers here as the chapter grows.
window.CHAPTER_MEMBERS = [];

// Intake classes ("ships"), shown on the Chapter History page.
// Every class listed here was initiated through the Fraternity's official
// Membership Intake Process. Ship names come from the history book (2008) and
// the chapter's Instagram. Semesters without a published name come from the
// roster's initiation dates. Do not add individual names unless the brothers
// of that class agree. CHAPTER UPDATE: fill in missing ship names.
window.CHAPTER_INTAKE_CLASSES = [
  { term: "1990",        ship: "S.S. Renaissance",      note: "From the chapter’s reactivated years." },
  { term: "Nov. 2008",   ship: "S.S. ADEWALE",          note: "Re-charter members; “The Crown Has Come Home.”" },
  { term: "Spring 2019", ship: "Phour Below",           note: "" },
  { term: "Spring 2020", ship: "",                      note: "" },
  { term: "Spring 2021", ship: "",                      note: "" },
  { term: "Spring 2022", ship: "The Centennial Line",   note: "Initiated in the chapter’s centennial year." },
  { term: "Fall 2023",   ship: "Third Dynasty",         note: "" },
  { term: "Spring 2025", ship: "Cryogenic Insurgence",  note: "" },
  { term: "Spring 2026", ship: "S.S. Triple T.H.R.E.A.T.", note: "" }
];

// Historical chapter directory, transcribed from "District of Iowa: History Book,"
// Vol. 1 (2019), pp. 28–31. Spellings are kept as printed in the book.
// charter: true marks the twelve charter members (asterisked in the book).
// CHAPTER UPDATE: append initiates since 2019 at the end of this list.
window.CHAPTER_DIRECTORY = [
  "Amonno, Leslie", "Alexander, Harold",
  "Barnes, Ceon", "Baily, Eugene", "Barbour, George", "Berry, Steven", "Belton, W", "Black, Dudley",
  "Bonds, Thomas", "Bickham, Lloyd", "Boysaw, Bryan", "Broadway, Marcus", "Brown, Corey", "Brown, Bennie D.",
  "Brown, Russell", "Burke, Kevin", "Byron, Rudy", "Boursiquot, Shawn", "Boyd, Gerald R.", "Barrett, Roscoe L.",
  "Burgess, Landry E.", "Bulls, A.C",
  "Christopher, James", "Cherry, Frederick", "Chandler, H", "Caldwell, Melvin", "Cavell, Winston",
  "Childs, Theodore", "Clark, J", "Coty, Paul", "Collins, Terry", "Coleman, Arnold",
  { name: "Colvin, Marion", charter: true }, { name: "Coles, Clarence", charter: true },
  "Crank, Ernest", "Culberson, Richard “Bud”", "Cox, Charles", "Cox Jr, Cortez", "Cunningham, Abishi",
  "Davis, Donvonte", "Delaunay, Klyvens", "Deery, Charles", "Dean, Milliard R.", "Dean, Kerry", "Deloney, Albert",
  { name: "DeJoire, J. A. Blaine", charter: true }, "Dyson, Patrick",
  "Edwards, Marvin",
  "Ferguson, Anthony",
  "Green, Joseph", "Glenn, Patrick", { name: "Graham, Robert", charter: true }, "Goncalves, Dylan",
  { name: "Harris, Roderick", charter: true }, "Hardiman, Carl E.", { name: "Holman, Joel", charter: true },
  { name: "Holmes, Russell", charter: true }, "Hernandez, Jose", "Haughton, Anthony", "Henry, C",
  "Hawkins, Reginald", "Honoree, Carlos", "Hill, Ronald", "Hines, Keith", "Hurd, Clifford", "Howard, James T.",
  "Jiles, Cottrell", "Jones, Zuniza", "James, Carlos", "James, Lewis A.", "James, Darryl", "Jones, Alvin",
  "Jones, Brendon", "Jackson, Brian", "Jackson, Vernon", "Johnson, Anthony",
  "King, Oscar", "King, Herbert", "Kyles, Rodney", "Kelley, Gregory",
  { name: "Lawes, William", charter: true }, "Lipscomb, Benjamin B.", "Lewis, Paris", "Lewis, Delane",
  "Lewis, James", "Leonard, E", "Lowry, Theron", "Lockheart, Luster",
  { name: "Muse, Irving", charter: true }, "Mayberry-Mayes, Skylar", "Marsh, Michael", "Mason, Julian",
  "McCoy, Ricky", "Montgomery, Marcus", "McCurtis, James", { name: "McDaniel, Byron", charter: true },
  "Martin, Eric", { name: "Morris, Creola", charter: true },
  "Newburn, E. A",
  "Ohuche, Nathan", "O’Neal, Kenneth", "Oidewu, Lanre",
  "Poythress, D. Wesley", "Phearse, Brandon", "Parker, Brandon", "Powell, Tracy", "Preston, James",
  "Peer, Ryshawn", "Perry, Claude A.",
  "Roberson, Justin", "Rasheed, Allen", "Roland, Clark", "Robbins, Tevin", "Robinson, Nathan",
  "Smith, Jimmy", "Sturgeon, Rodney", "Smith, Nathaniel", "Shaul, Barry", "Simpson, Cohn T.", "Simmons, Chad",
  "Southall, M", "Smart, Kyon", { name: "Smith, Clifford", charter: true }, "Sterling, Mike",
  "Seabron Jr, William M.", "Simmons, Ozzie", "Suber, London", "Shields, Timothy", "Sykes, Richard",
  "Tharp, Virgil", "Twyner, Lafayette J.", "Taylor, James E.", "Taylor, Bennie E.", "Thomas, Heshimu",
  "Tyrone, Bruce", "Thomas, Dwanye", "Thomas, Michael",
  "Wilson, Michael", "Wilson, Edward N.", "Wilson, Alfred H.", "Weil, Eric", "Wallace, Wilbur",
  "Wallace, Jr James A.", "Ware, Charles B.", "Wheatley, Austin", "Watson, Willie", "Watts, Terrance",
  "Walls, Tyrone", "White, Glenn", "White, Louis B.", "White, Darrington", "Williams, Dominick",
  "Whitman, Lawrence R.", "Wood, W", "Woods, Matthew"
];
