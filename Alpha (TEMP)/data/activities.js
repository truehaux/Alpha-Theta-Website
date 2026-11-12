/* ==========================================================================
   CHAPTER UPDATE: Activities data
   --------------------------------------------------------------------------
   Edit this file to add events, service projects and chapter news.
   The Activities page sorts entries automatically: anything whose eventDate
   is today or later appears under "Upcoming"; everything else under "Recent".

   Fields:
     title      – Short name of the event or news item.
     category   – One of: "Service", "Advocacy", "Brotherhood", "Membership", "Social", "Chapter News".
                  (Add new categories freely; the filter buttons build themselves.)
     eventDate  – "YYYY-MM-DD" date the event happens (or happened). Leave "" if unknown.
     postedDate – "YYYY-MM-DD" date it was announced (used for sorting when eventDate is blank).
     time       – Optional display text, e.g. "5:00–6:00 PM".
     location   – Optional display text.
     summary    – One or two sentences. Keep to what was actually announced.
     link       – Optional URL (Instagram post, ticket page, etc.).
     linkLabel  – Text for that link.
     image      – Optional path in /images, e.g. "images/activities/yard-show-2026.jpg".
                  Instagram images are not bundled with the site: save the
                  chapter's own photo into /images/activities and reference it here.
     alt        – Required if image is set. Describe what is in the photo.
     source     – Where the information came from (kept for editors; not shown).

   Entries below were drawn from @atheta_alphas on Instagram (posts from
   Oct. 2025 through Oct. 2026) and from the chapter history book.
   ========================================================================== */

window.CHAPTER_ACTIVITIES = [
  {
    title: "Voting presentation at AfroHouse",
    category: "Advocacy",
    eventDate: "2026-11-02",
    postedDate: "2026-10-29",
    time: "", // CHAPTER UPDATE: add start time
    location: "AfroHouse",
    summary: "A presentation on in-person voting, a non-partisan review of candidates, and conversations about the importance of voting.",
    link: "https://www.instagram.com/atheta_alphas/p/DfFN5r9P1J9/",
    linkLabel: "View the announcement",
    image: "", alt: "",
    source: "Instagram, Oct. 29, 2026 (collaboration post with thebloc.uiowa)"
  },
  {
    title: "Alpha Phi Alpha informational",
    category: "Membership",
    eventDate: "", // CHAPTER UPDATE: add the informational date, time and location
    postedDate: "2026-10-27",
    time: "",
    location: "",
    summary: "The men of Alpha Phi Alpha Fraternity, Inc. invite you to learn more about our brotherhood and what makes our organization special.",
    link: "https://www.instagram.com/atheta_alphas/p/DfAqQF4Prm2/",
    linkLabel: "View the flyer",
    image: "", alt: "",
    source: "Instagram, Oct. 27, 2026"
  },
  {
    title: "Resident Alpha — annual Halloween party",
    category: "Social",
    eventDate: "2026-10-30",
    postedDate: "2026-10-20",
    time: "9:06 PM",
    location: "Tequila Cowgirl, 347 S. Gilbert Street, Iowa City, Iowa 52240",
    summary: "The chapter’s annual Halloween party. 18+ before 10 PM, 21+ after 10 PM.",
    link: "https://events.eventnoire.com/e/resident-alpha-halloween-party",
    linkLabel: "Tickets",
    image: "", alt: "",
    source: "Instagram, Oct. 20, 2026"
  },
  {
    title: "University of Iowa NPHC & St. Jude Walk",
    category: "Service",
    eventDate: "2026-09-25",
    postedDate: "2026-09-20",
    time: "5:00–6:00 PM",
    location: "Starts and ends at the IMU (NPHC plot)",
    summary: "A walk with the University of Iowa National Pan-Hellenic Council to support kids and families fighting childhood cancer. Shared by the chapter from @iowanphc.",
    link: "https://www.instagram.com/iowanphc/p/DdiUydvTnsr/",
    linkLabel: "View the flyer",
    image: "", alt: "",
    source: "Instagram, shared from @iowanphc, Sept. 20, 2026"
  },
  {
    title: "Lunch with University of Iowa President Barbara Wilson",
    category: "Chapter News",
    eventDate: "2026-05-06",
    postedDate: "2026-05-06",
    time: "", location: "",
    summary: "Brothers of the chapter sat down to converse with University of Iowa President Barbara Wilson over lunch.",
    link: "https://www.instagram.com/atheta_alphas/p/DYAlRHmmVsW/",
    linkLabel: "View the post",
    image: "", alt: "",
    source: "Instagram, May 6, 2026"
  },
  {
    title: "Meet the Alphas",
    category: "Membership",
    eventDate: "",
    postedDate: "2026-04-10",
    time: "", location: "",
    summary: "An event to learn about Black Greek life, the history of the Divine Nine, the legacy of Alpha Phi Alpha, and the steps taken to join.",
    link: "https://www.instagram.com/atheta_alphas/p/DW9V4c9Du_P/",
    linkLabel: "View the post",
    image: "", alt: "",
    source: "Instagram, Apr. 10, 2026"
  },
  {
    title: "2026 NPHC Yard Show winners",
    category: "Brotherhood",
    eventDate: "",
    postedDate: "2026-04-01",
    time: "", location: "",
    summary: "Alpha Theta Chapter took home the title of 2026 NPHC Yard Show winners.",
    link: "https://www.instagram.com/atheta_alphas/p/DWoi-5rjgh5/",
    linkLabel: "View the post",
    image: "", alt: "",
    source: "Instagram, Apr. 1, 2026"
  },
  {
    title: "2025–2026 Executive Board introduced",
    category: "Chapter News",
    eventDate: "",
    postedDate: "2025-10-21",
    time: "", location: "",
    summary: "The chapter introduced its 2025–2026 Executive Board.",
    link: "https://www.instagram.com/atheta_alphas/p/DQFD5Pdjm8J/",
    linkLabel: "View the post",
    image: "", alt: "",
    source: "Instagram, Oct. 21, 2025"
  }
];

// Ongoing / signature programs. Shown as a separate band on the Activities page.
// CHAPTER UPDATE: add the chapter's standing programs here.
window.CHAPTER_PROGRAMS = [
  {
    title: "Go-To-High-School, Go-To-College",
    summary: "The chapter seated its very first Go-To-High-School, Go-To-College committee in 1923, with Brother Irving Victor Muse as chairman and Brothers Byron McDaniel and Creola Leonard Morris serving.",
    source: "District of Iowa: History Book, pp. 22–23",
    placeholder: false
  },
  {
    title: "Voter education",
    summary: "Programs such as the Nov. 2026 AfroHouse presentation on in-person voting and a non-partisan review of candidates.",
    source: "Instagram, Oct. 29, 2026",
    placeholder: false
  },
  {
    title: "Program to be added",
    summary: "CHAPTER UPDATE: Describe another ongoing service or signature program here.",
    source: "",
    placeholder: true
  }
];
