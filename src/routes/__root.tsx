import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CONFIG } from "@/constants";

import { MetaImageTagsGenerator } from "@/lib/meta-image-tags";
import TanStackQueryDevtools from "@/lib/query/devtools";
import appCss from "@/styles.css?url";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...MetaImageTagsGenerator({
        title: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        ogImage: SITE_CONFIG.defaultMetaImage,
        url: SITE_CONFIG.url,
      }),
      {
        name: "application-name",
        content: SITE_CONFIG.name,
      },
      {
        name: "keywords",
        content:
          "movie database, film reviews, TV show information, movie ratings, entertainment",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        name: "twitter:site",
        content: "@swastikdan",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "theme-color",
        content: "white",
        media: "(prefers-color-scheme: light)",
      },
      {
        name: "theme-color",
        content: "black",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/logo.svg",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        rel: "apple-touch-icon",
        href: "https://ik.imagekit.io/swastikdan/Film-Fanatic/public/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "icon",
        href: "https://ik.imagekit.io/swastikdan/Film-Fanatic/public/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        href: "https://ik.imagekit.io/swastikdan/Film-Fanatic/public/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="uHvrTYV7MI9jil_qDblV-QDi9qjXlpdb_8XJUtCLGLQ"
        />
        <HeadContent />
      </head>
      <body className="min-h-screen leading-relaxed antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          {import.meta.env.DEV && (
            <TanStackDevtools
              config={{
                position: "bottom-right",
              }}
              plugins={[
                {
                  name: "Tanstack Router",
                  render: <TanStackRouterDevtoolsPanel />,
                },
                TanStackQueryDevtools,
              ]}
            />
          )}
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
