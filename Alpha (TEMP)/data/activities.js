/* ==========================================================================
   CHAPTER UPDATE: Activities data
   --------------------------------------------------------------------------
   Edit this file to add events, service projects and chapter news.
   The Activities page sorts entries automatically. Anything with a full
   date that is today or later appears under "Upcoming". Everything else goes
   into the archive, grouped by year, with year and category filters.

   Fields:
     title      – Short name of the event or news item.
     category   – One of: "Service", "Advocacy", "Scholarship", "Brotherhood",
                  "Membership", "Social", "Recognition", "Chapter News".
                  (New categories are fine; the filter buttons build themselves.)
     date       – When it happened, as precisely as known:
                    "YYYY-MM-DD"  (full date)
                    "YYYY-MM"     (month only)
                    "YYYY"        (year only)
     time       – Optional display text, e.g. "5:00–6:00 PM".
     location   – Optional display text.
     summary    – One or two sentences. Keep to what was actually announced.
     link       – Optional URL to the specific post or page. Leave "" rather than
                  guessing — every link here should be opened and checked.
     linkLabel  – Text for that link, e.g. "Instagram post, Oct. 29, 2026".
     image      – Optional path in /images, e.g. "images/activities/yard-show-2026.jpg".
     alt        – Required if image is set. Describe what is in the photo.
     source     – Where the information came from (for editors; not shown).

   Entries are drawn from @atheta_alphas on Instagram (2014–2026), the UIowa
   FSL chapter page, and the chapter history book. Entries without a link
   came from a review of the Instagram account on Nov. 12, 2026.
   CHAPTER UPDATE: add the specific post link to each of those.
   ========================================================================== */

window.CHAPTER_ACTIVITIES = [
  /* ----- 2026 ----- */
  {
    title: "Voting presentation at AfroHouse",
    category: "Advocacy",
    date: "2026-11-02",
    location: "AfroHouse",
    summary: "A presentation on in-person voting, a non-partisan review of candidates, and conversations about the importance of voting.",
    link: "https://www.instagram.com/atheta_alphas/p/DfFN5r9P1J9/",
    linkLabel: "Instagram post, Oct. 29, 2026",
    source: "Instagram, Oct. 29, 2026 (collaboration post with thebloc.uiowa)"
  },
  {
    title: "Resident Alpha — annual Halloween party",
    category: "Social",
    date: "2026-10-30",
    time: "9:06 PM",
    location: "Tequila Cowgirl, 347 S. Gilbert Street, Iowa City",
    summary: "The chapter’s annual Halloween party.",
    link: "https://www.instagram.com/atheta_alphas/p/DeuZzxfGdlk/",
    linkLabel: "Instagram post, Oct. 20, 2026",
    source: "Instagram, Oct. 20, 2026"
  },
  {
    title: "Alpha Phi Alpha informational",
    category: "Membership",
    date: "2026-10",
    summary: "The men of Alpha Phi Alpha Fraternity, Inc. invited students to learn more about the brotherhood and what makes the organization special.",
    link: "https://www.instagram.com/atheta_alphas/p/DfAqQF4Prm2/",
    linkLabel: "Instagram post, Oct. 27, 2026",
    source: "Instagram, Oct. 27, 2026"
  },
  {
    title: "Minnesota homecoming tailgate",
    category: "Brotherhood",
    date: "2026-10",
    summary: "Shared by the chapter: the homecoming tailgate hosted by the brothers of Mu Chapter at the University of Minnesota.",
    link: "https://www.instagram.com/mualphas/p/DePb5Nnuyyh/",
    linkLabel: "Mu Chapter post, Oct. 8, 2026",
    source: "Instagram, shared from Mu Chapter, Oct. 8, 2026"
  },
  {
    title: "University of Iowa NPHC & St. Jude Walk",
    category: "Service",
    date: "2026-09-25",
    time: "5:00–6:00 PM",
    location: "Starts and ends at the IMU (NPHC plot)",
    summary: "A walk with the University of Iowa National Pan-Hellenic Council to support kids and families fighting childhood cancer. Shared by the chapter from @iowanphc.",
    link: "https://www.instagram.com/iowanphc/p/DdiUydvTnsr/",
    linkLabel: "@iowanphc post, Sept. 20, 2026",
    source: "Instagram, shared from @iowanphc, Sept. 20, 2026"
  },
  {
    title: "Lunch with University of Iowa President Barbara Wilson",
    category: "Chapter News",
    date: "2026-05-06",
    summary: "Brothers of the chapter sat down to converse with University of Iowa President Barbara Wilson over lunch.",
    link: "https://www.instagram.com/atheta_alphas/p/DYAlRHmmVsW/",
    linkLabel: "Instagram post, May 6, 2026",
    source: "Instagram, May 6, 2026"
  },
  {
    title: "Meet the Alphas",
    category: "Membership",
    date: "2026-04",
    summary: "An event to learn about Black Greek life, the history of the Divine Nine, the legacy of Alpha Phi Alpha, and the steps taken to join.",
    link: "https://www.instagram.com/atheta_alphas/p/DW9V4c9Du_P/",
    linkLabel: "Instagram post, Apr. 10, 2026",
    source: "Instagram, Apr. 10, 2026"
  },
  {
    title: "2026 NPHC Yard Show winners",
    category: "Recognition",
    date: "2026-04",
    summary: "Alpha Theta Chapter took home the title of 2026 NPHC Yard Show winners.",
    link: "https://www.instagram.com/atheta_alphas/p/DWoi-5rjgh5/",
    linkLabel: "Instagram post, Apr. 1, 2026",
    source: "Instagram, Apr. 1, 2026"
  },
  {
    title: "Charter Day",
    category: "Brotherhood",
    date: "2026-03",
    summary: "The chapter marked its charter anniversary — Alpha Theta was chartered March 11, 1922.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "New Member Presentation",
    category: "Membership",
    date: "2026-03",
    summary: "The chapter presented its Spring 2026 intake class, S.S. Triple T.H.R.E.A.T.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Chipotle fundraiser",
    category: "Chapter News",
    date: "2026-02-02",
    summary: "A chapter fundraiser night at Chipotle.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "District of Iowa “Action Through Leadership” keynote",
    category: "Scholarship",
    date: "2026",
    location: "Drake University",
    summary: "The District of Iowa’s “Action Through Leadership” keynote at Drake University (January/February 2026).",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },

  /* ----- 2025 ----- */
  {
    title: "Army commissioning",
    category: "Chapter News",
    date: "2025-12",
    summary: "The chapter congratulated a brother on his commissioning in the U.S. Army.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Dead-week study event",
    category: "Scholarship",
    date: "2025",
    summary: "A study event during dead week, the week before finals.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026. CHAPTER UPDATE: confirm date."
  },
  {
    title: "Habitat for Humanity build days",
    category: "Service",
    date: "2025-11",
    summary: "Brothers volunteered with Habitat for Humanity on two occasions.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Friendsgiving",
    category: "Social",
    date: "2025-11",
    summary: "A Friendsgiving gathering hosted by the chapter.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Sharon Anderson Leadership event",
    category: "Scholarship",
    date: "2025-11",
    summary: "Brothers took part in the Sharon Anderson Leadership event.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Ronald McDonald House meal",
    category: "Service",
    date: "2025-10",
    summary: "Brothers prepared a meal for families staying at the Ronald McDonald House.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "2025–2026 Executive Board introduced",
    category: "Chapter News",
    date: "2025-10-21",
    summary: "The chapter introduced its 2025–2026 Executive Board.",
    link: "https://www.instagram.com/atheta_alphas/p/DQFD5Pdjm8J/",
    linkLabel: "Instagram post, Oct. 21, 2025",
    source: "Instagram, Oct. 21, 2025"
  },
  {
    title: "2025 Hawkeye Excellence Awards",
    category: "Recognition",
    date: "2025",
    summary: "UIowa Fraternity & Sorority Life recognized the chapter as a Standards Achievement Chapter and for Excellence in Campus and Community Involvement. The chapter also reported 100% New Member Academy completion in Spring 2025.",
    link: "https://fsl.uiowa.edu/chapters-and-councils/alpha-phi-alpha-fraternity-inc",
    linkLabel: "UIowa FSL chapter page",
    source: "UIowa FSL chapter page, viewed Nov. 12, 2026"
  },

  /* ----- 2017–2024 ----- */
  {
    title: "Alpha Week 2024",
    category: "Brotherhood",
    date: "2024-03",
    summary: "Eight days of programming: a DEI panel, an event with Hubbard Scholars, yellow roses, a Spades night, a movie premiere, professional development, service at the UI Food Pantry, and a City Park BBQ.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Voter education with @votehawk",
    category: "Advocacy",
    date: "2024",
    summary: "Voter education programming with @votehawk during the 2024 election.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Ronald McDonald House meal",
    category: "Service",
    date: "2024",
    summary: "Brothers prepared a meal for families staying at the Ronald McDonald House.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Voter education with Hawk the Vote",
    category: "Advocacy",
    date: "2020",
    summary: "Voter education during the 2020 election, in partnership with Hawk the Vote.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Alpha Week 2019",
    category: "Brotherhood",
    date: "2019",
    summary: "The chapter’s signature week of programming.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Ronald McDonald House meal",
    category: "Service",
    date: "2019",
    summary: "Brothers prepared a meal for families staying at the Ronald McDonald House.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Voter education",
    category: "Advocacy",
    date: "2018",
    summary: "Voter education programming during the 2018 election.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Alpha Week 2017",
    category: "Brotherhood",
    date: "2017",
    summary: "The chapter’s signature week of programming.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Habitat for Humanity",
    category: "Service",
    date: "2017",
    summary: "Brothers volunteered with Habitat for Humanity.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Voter education",
    category: "Advocacy",
    date: "2016",
    summary: "Voter education programming during the 2016 election.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },

  /* ----- 2014–2015 ----- */
  {
    title: "“Meet Bro.” introductions",
    category: "Chapter News",
    date: "2015-04",
    summary: "A daily series introducing each brother of the chapter.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "“Fire and Ice at the Mic” poetry slam",
    category: "Scholarship",
    date: "2015-03",
    summary: "A poetry slam, paired with a month-long poetry contest running February into March 2015.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "2nd Annual Pendennis Oratorical Contest",
    category: "Scholarship",
    date: "2015-02",
    summary: "The second annual contest, on diversity and the next generation of university leaders.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Clothing drive",
    category: "Service",
    date: "2015-01",
    summary: "A chapter clothing drive.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Meet the Greeks",
    category: "Membership",
    date: "2015",
    summary: "The chapter took part in Meet the Greeks.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Pendennis Oratorical Contest: “United We Stand”",
    category: "Scholarship",
    date: "2014-03-01",
    location: "Iowa Theater, Iowa Memorial Union",
    summary: "An oratorical contest themed “United We Stand,” with cash prizes.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Go-To-High-School, Go-To-College: “Readers Are Leaders”",
    category: "Service",
    date: "2014-02",
    summary: "A Go-To-High-School, Go-To-College program themed “Readers Are Leaders.”",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Black History Month Photo Challenge",
    category: "Scholarship",
    date: "2014-02",
    summary: "A month-long daily photo challenge (#AThetaChallenge) with a $100 raffle.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Black & Gold Ball at the District Conference",
    category: "Brotherhood",
    date: "2014-02",
    summary: "The Black & Gold Ball, held during the District of Iowa conference.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Youth event with The Dream Center",
    category: "Service",
    date: "2014",
    summary: "An event with young people from The Dream Center.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Stroll Competition",
    category: "Brotherhood",
    date: "2014",
    summary: "A stroll competition.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  },
  {
    title: "Meet the Greeks",
    category: "Membership",
    date: "2014",
    summary: "The chapter took part in Meet the Greeks.",
    link: "", linkLabel: "",
    source: "Instagram review, Nov. 12, 2026"
  }
];

// Ongoing / signature programs. Shown as a separate band on the Activities page.
window.CHAPTER_PROGRAMS = [
  {
    title: "Alpha Week",
    summary: "The chapter’s signature week, held in 2017, 2019 and 2024. The 2024 edition ran eight days, from a DEI panel and an event with Hubbard Scholars to service at the UI Food Pantry and a City Park BBQ."
  },
  {
    title: "Go-To-High-School, Go-To-College",
    summary: "One of Alpha Phi Alpha’s national programs, and part of Alpha Theta since its first committee in 1923. The chapter’s February 2014 program was themed “Readers Are Leaders.”"
  },
  {
    title: "Voter education",
    summary: "Voter education and registration in 2016, 2018, 2020 (with Hawk the Vote), 2024 (with @votehawk) and 2026, when the chapter held a non-partisan presentation at AfroHouse."
  },
  {
    title: "Hands-on service",
    summary: "Habitat for Humanity builds (2017 and twice in November 2025) and meals at the Ronald McDonald House (2019, 2024 and October 2025)."
  },
  {
    title: "Pendennis Oratorical Contest",
    summary: "Held in 2014 (“United We Stand,” at the Iowa Theater in the IMU) and 2015. Its name recalls the Penndennis Club, which founded the chapter in 1921 — a tradition the chapter could bring back."
  }
];
