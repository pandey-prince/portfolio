// Central place to edit all personal handles, links, and contact info.
export const siteConfig = {
  name: "Prince Pandey",
  firstName: "Prince",
  lastName: "Pandey",
  shortName: "Prince",
  brand: "prince.dev",
  title: "Prince Pandey — Full-Stack Developer",
  roles: ["Full-Stack Developer", "MERN Specialist", "Software Engineer", "Freelancer"],
  tagline:
    "I build responsive interfaces, reliable APIs, and database-backed products with modern JavaScript and TypeScript — for teams that hire and clients who ship.",
  location: "Lucknow, India",
  locationShort: "Lucknow, UP",
  email: "work.princepandey@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1QP1Ig4rJXvnr-N04jOLfPLGQ6ckHoEfj/view?usp=sharing",
  education: "B.Tech CSE · Goel Institute · CGPA 7.3/10",
  gradYear: "2026",

  // Cal.com booking for roles, freelance, and intro calls.
  bookingUrl: "https://cal.com/dev-guy",

  social: {
    github: "https://github.com/pandey-prince",
    linkedin: "https://www.linkedin.com/in/prince-pandey123/",
    x: "https://x.com/dev___guy",
    email: "mailto:work.princepandey@gmail.com",
    leetcode: "https://leetcode.com/u/pandey___prince20/",
    codeforces: "https://codeforces.com/profile/dev___guy",
  },

  // Handles used for live stat cards / contribution graph.
  handles: {
    github: "pandey-prince",
    leetcode: "pandey___prince20",
    codeforces: "dev___guy",
  },
};

export type SiteConfig = typeof siteConfig;
