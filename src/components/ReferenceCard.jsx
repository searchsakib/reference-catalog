const ReferenceCard = ({
  topic,
  arabic,
  bangla,
  source,
  sourceUrl,
  explanation,
  links = [],
  badge,
  children,
}) => {
  const preferredLink = (links || []).find((link) =>
    /ihadis\.com/i.test(link.href),
  );
  const primaryHref =
    preferredLink?.href ||
    (sourceUrl?.includes("sunnah.com") ? "https://ihadis.com/" : sourceUrl);
  const visibleLinks = (links || []).filter(
    (link) => link.href !== primaryHref && link.href !== sourceUrl,
  );

  return (
    <article className="mb-5 rounded-2xl border border-[#d8c8a3] bg-[#fffdf9] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:p-7">
      {topic && (
        <h3 className="mb-2 text-2xl font-semibold leading-6 text-[#35424f] sm:text-[1.25rem]">
          {topic}
        </h3>
      )}
      {arabic && (
        <div className="mb-3 text-right text-[1.7rem] leading-[2.1] text-[#8a6f40] sm:text-[1.95rem] md:text-[2.15rem]">
          {arabic}
        </div>
      )}
      <div className="mb-2 text-[1.08rem] leading-[2] text-[#35424f] sm:text-[1.18rem]">
        {bangla}
      </div>
      {explanation && (
        <div className="my-3 rounded-xl border-l-4 border-[#8a6f40] bg-[#f8efe1] p-3 text-[1rem] leading-8 text-[#635440] sm:text-[1.05rem]">
          {explanation}
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {badge && (
          <span className="rounded-full border border-[#2f7a67] bg-[#eaf7f3] px-2.75 py-1 text-[0.85rem] font-semibold text-[#2f7a67] sm:text-[0.9rem]">
            {badge}
          </span>
        )}
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#8a6f40] px-2.75 py-1 text-[0.9rem] text-[#8a6f40] transition hover:border-[#a67c2f] hover:bg-[#f8efe1] hover:text-[#7a5728] sm:text-[0.95rem]"
        >
          🔗 {source}
        </a>
        {visibleLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border px-2.75 py-1 text-[0.9rem] transition sm:text-[0.95rem] ${link.variant === "teal" ? "border-[#2f7a67] text-[#2f7a67] hover:border-[#2a6a56] hover:bg-[#eaf7f3] hover:text-[#2a6a56]" : "border-[#5b7ea8] text-[#5b7ea8] hover:border-[#476e9b] hover:bg-[#eef4fb] hover:text-[#476e9b]"}`}
          >
            {link.label}
          </a>
        ))}
        {children}
      </div>
    </article>
  );
};

export default ReferenceCard;
