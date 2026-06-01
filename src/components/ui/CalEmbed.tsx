"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

interface Props {
  calLink?: string;
}

export default function CalEmbed({ calLink }: Props) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const cal = await getCalApi();
        if (cancelled) return;
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: {
              "cal-bg": "#F5F2EC",
              "cal-text": "#0A0A0A",
              "cal-brand": "#0A0A0A",
              "cal-border": "#E5E1D9",
            },
            dark: {
              "cal-bg": "#F5F2EC",
              "cal-text": "#0A0A0A",
              "cal-brand": "#0A0A0A",
              "cal-border": "#E5E1D9",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setReady(true);
      } catch {
        // Cal.com script blocked or unavailable — silently degrade
        setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!link) {
    return (
      <div className="flex h-full min-h-[600px] w-full items-center justify-center rounded border border-novo-line bg-novo-cream-50 p-8">
        <p className="font-mono text-sm text-novo-mid">
          Configurá{" "}
          <code className="rounded bg-novo-line px-1 py-0.5">
            NEXT_PUBLIC_CAL_LINK
          </code>{" "}
          en .env.local para activar el booking.
        </p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: 600, width: "100%" }}>
      {ready && (
        <Cal
          calLink={link}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      )}
    </div>
  );
}
