export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "2026-10-25",
    time: "09:00 AM",
  },
  {
    title: "React Summit",
    image: "/images/event2.png",
    slug: "react-summit",
    location: "Amsterdam, NL",
    date: "2026-06-12",
    time: "10:00 AM",
  },
  {
    title: "Node.js Interactive",
    image: "/images/event3.png",
    slug: "nodejs-interactive",
    location: "Vancouver, BC",
    date: "2026-09-15",
    time: "08:30 AM",
  },
  {
    title: "Global AI Hackathon",
    image: "/images/event4.png",
    slug: "global-ai-hackathon",
    location: "New York, NY",
    date: "2026-05-20",
    time: "11:00 AM",
  },
  {
    title: "Prisma Day",
    image: "/images/event5.png",
    slug: "prisma-day-2026",
    location: "Berlin, DE",
    date: "2026-07-08",
    time: "09:00 AM",
  },
  {
    title: "Tailwind Connect",
    image: "/images/event6.png",
    slug: "tailwind-connect",
    location: "London, UK",
    date: "2026-11-12",
    time: "01:00 PM",
  }
];
