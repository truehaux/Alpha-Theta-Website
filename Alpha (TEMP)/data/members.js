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

window.CHAPTER_ROSTER_TERM = "2025–2026"; // CHAPTER UPDATE: academic year shown on the page

// Executive Board. The 2025–2026 Executive Board was introduced on the chapter
// Instagram (Oct. 21, 2025), but names were not included in the post caption.
// CHAPTER UPDATE: replace each placeholder with the officer's name and confirm titles.
window.CHAPTER_OFFICERS = [
  { name: "Name to be added", role: "President",           line: "", major: "", photo: "", alt: "", placeholder: true },
  { name: "Name to be added", role: "Vice President",      line: "", major: "", photo: "", alt: "", placeholder: true },
  { name: "Name to be added", role: "Secretary",           line: "", major: "", photo: "", alt: "", placeholder: true },
  { name: "Name to be added", role: "Treasurer",           line: "", major: "", photo: "", alt: "", placeholder: true }
];

// Active brothers. Only brothers named in the source material are listed.
// CHAPTER UPDATE: add every active brother.
window.CHAPTER_MEMBERS = [
  // Named in the chapter Instagram post of Sept. 10, 2026.
  { name: "Tae’Shaun Presswood", role: "", line: "", major: "", photo: "", alt: "", placeholder: false },
  // Named only as "Jace" in the chapter Instagram post of May 14, 2026. CHAPTER UPDATE: add last name.
  { name: "Jace (last name to be added)", role: "", line: "", major: "", photo: "", alt: "", placeholder: true },
  { name: "Name to be added", role: "", line: "", major: "", photo: "", alt: "", placeholder: true },
  { name: "Name to be added", role: "", line: "", major: "", photo: "", alt: "", placeholder: true }
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
