import banner1 from "@/app/assets/images/blog/blgBG1.png";
import banner2 from "@/app/assets/images/blog/blgBG2.png";
import banner3 from "@/app/assets/images/blog/blgsm3.png";
import banner4 from "@/app/assets/images/blog/blgBG3.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: StaticImport; // or: StaticImport
  description: string;
  tags: string[];
};
export const blogPosts: BlogPost[] = [
  {
    date: "14 April 2025",
    title: "BIG MOVES IN PARIS: TCWNN IS GAINING ALTITUDE",
    description: `After an early start and the 08:10 flight into Charles De Gaulle, we hit the ground running in Paris yesterday—and what a day it turned out to be.
We had the absolute pleasure of meeting with the brilliant Sky Wee, who has officially come on board as our Ambassador and Advisor...`,
    image: banner1,
    tags: ["Launch", "Expansion"],
    readTime: "4 min read",
    slug: "big-moves-in-paris",
  },
  {
    date: "8 April 2025",
    title: "PARTNERSHIPS",
    description:
      "Just a short update this time. This has turned into a roller coaster ride... The pre-sale launch is almost upon us...",
    image: banner2,
    tags: ["Update", "Partners"],
    readTime: "2 min read",
    slug: "partnerships",
  },
  {
    date: "16 February 2025",
    title: "FIGHTING WITH AI",
    description:
      "I use AI a lot, I've been playing with it since the early days... By this stage and after many generations, all with a head somewhere, I gave up.",
    image: banner3,
    tags: ["AI", "Development"],
    readTime: "3 min read",
    slug: "fighting-with-ai",
  },
  {
    date: "14 February 2025",
    title: "IT MAKES YOU THINK….",
    description:
      "When you ask ChatGPT for instructions on how to set up a bot... After more work and conversations... TCWNN was born.",
    image: banner4,
    tags: ["Insights", "Automation"],
    readTime: "5 min read",
    slug: "it-makes-you-think",
  },
];
