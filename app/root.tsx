import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Layout } from "./routes/layout";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
  },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Layout>
        <Outlet />
      </Layout>
    </AppLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops! Something went wrong.";
  let details = "An unexpected error occurred while loading this page.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Page Not Found (404)" : `Error ${error.status}`;
    details =
      error.status === 404
        ? "The page you are looking for does not exist or has been moved."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <AppLayout>
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-2xl">
            404
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{message}</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{details}</p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-colors"
          >
            Return to Home
          </a>
          {stack && (
            <pre className="mt-6 text-left p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs overflow-x-auto text-red-600 dark:text-red-400">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
