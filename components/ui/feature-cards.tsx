import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "JavaScript",
    description:
      "The mother of modern web development. I love this dynamically typed quirked up language.",
    link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    title: "React",
    description:
      "React.js is a modern library, often mistakenly referred to as a framework.",
    link: "https://react.dev/",
  },
  {
    title: "Express",
    description:
      "A Node.js framework perfect for writing REST APIs.",
    link: "https://expressjs.com/",
  },
  {
    title: "MongoDB",
    description:
      "A non-relational database that integrates easily with stuff like Auth0.",
    link: "https://meta.com",
  },
  {
    title: "Golang",
    description:
      "A backend language created by Google. It's a statically typed compiled language that's really fast.",
    link: "https://go.dev/",
  },
  {
    title: "Linux",
    description:
      "I work on a Linux machine...out of respect for Linus Torvalds.",
    link: "https://en.wikipedia.org/wiki/Linux",
  },
];
