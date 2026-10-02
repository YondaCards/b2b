// Root layout — only reached by the "/" redirect page (src/app/page.tsx).
// Every real route lives under [locale], which has its own full layout
// (fonts, Header, Footer). This one stays minimal on purpose.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
