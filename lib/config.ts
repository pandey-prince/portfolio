// Central place to edit all personal handles, links, and contact info.
export const siteConfig = {
  name: "Prince Pandey",
  shortName: "Prince",
  title: "Prince Pandey — Full-Stack Developer",
  roles: ["Full-Stack Developer", "MERN Specialist", "Software Engineer", "Freelancer"],
  tagline:
    "I build responsive interfaces, reliable APIs, and database-backed products with modern JavaScript and TypeScript — for teams that hire and clients who ship.",
  location: "Lucknow, India",
  email: "work.princepandey@gmail.com",
  phone: "+91 79852 36262",
  resumeUrl: "/Prince_Pandey_Resume.pdf",

  // Booking link for freelance clients — replace with your Calendly/Cal.com link.
  bookingUrl: "mailto:work.princepandey@gmail.com?subject=Project%20inquiry",

  social: {
    github: "https://github.com/pandey-prince",
    linkedin: "https://www.linkedin.com/in/prince-pandey123/",
    x: "https://x.com/dev___guy",
    email: "mailto:work.princepandey@gmail.com",
  },

  // Handles used for live stat cards / contribution graph.
  handles: {
    github: "pandey-prince",
    leetcode: "pandey___prince20",
    codeforces: "dev___guy",
  },
};

export type SiteConfig = typeof siteConfig;
