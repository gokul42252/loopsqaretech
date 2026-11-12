import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Loopsquare Tech | Ideas Into Intelligent Solutions" },
    {
      name: "description",
      content:
        "Loopsquare Tech provides secure, scalable cloud solutions, cloud migration, cost optimization, and modern responsive website and web application development.",
    },
    { property: "og:title", content: "Loopsquare Tech | Ideas Into Intelligent Solutions" },
    {
      property: "og:description",
      content:
        "We are a technology solutions company dedicated to helping businesses grow through innovative cloud solutions and modern web development.",
    },
    { property: "og:image", content: "/images/logo.jpg" },
  ];
}

export default function Home() {
  return <Welcome />;
}
