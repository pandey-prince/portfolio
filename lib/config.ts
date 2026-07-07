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
    linkedin: "https://linkedin.com/in/prince-pandey-686863224/",
    email: "mailto:work.princepandey@gmail.com",
  },

  // Handles used for live stat cards / contribution graph.
  handles: {
    github: "pandey-prince",
    // TODO: replace with your real LeetCode handle.
    leetcode: "pandey-prince",
    // TODO: replace with your real Codeforces handle.
    codeforces: "pandey-prince",
  },
};

export type SiteConfig = typeof siteConfig;
