interface Props {
  calLink?: string;
}

export default function CalEmbed({ calLink }: Props) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK;

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

  // Strip any query-string source params — Cal.com iframe URLs don't accept them
  const [slug] = link.split("?");
  const src = `https://cal.com/${slug}?embed=true&layout=month_view&theme=light&bg=%23F5F2EC&fg=%230A0A0A&brandColor=%230A0A0A`;

  return (
    <iframe
      src={src}
      title="Reservar reunión con Novo Labs"
      className="h-full min-h-[700px] w-full border-0"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
    />
  );
}
