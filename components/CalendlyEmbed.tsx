"use client";

import Script from "next/script";

export default function CalendlyEmbed({ height = 700 }: { height?: number }) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/contacto-urmestrategia/30min"
        style={{ minWidth: "320px", height: `${height}px` }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
