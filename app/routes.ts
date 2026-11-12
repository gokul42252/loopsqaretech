import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("services/:slug", "routes/service-detail.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
