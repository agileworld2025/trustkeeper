import Link from "next/link";

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-4 space-y-2 list-disc list-inside text-[rgba(180,180,180,1)]">
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function CardList({ cards }) {
  if (!cards?.length) return null;
  return (
    <div className="mt-6 grid gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border border-[rgba(62,66,66,1)] rounded-xl p-5 bg-[rgba(15,20,23,0.6)]"
        >
          <h3 className="text-white font-semibold mb-2">{card.title}</h3>
          <p className="text-[rgba(145,160,161,1)] text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureList({ features }) {
  if (!features?.length) return null;
  return (
    <div className="mt-6 grid gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border border-[rgba(62,66,66,1)] rounded-xl p-5 bg-[rgba(15,20,23,0.6)]"
        >
          <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
          <ul className="space-y-2">
            {feature.details.map((detail, i) => (
              <li
                key={i}
                className="text-[rgba(145,160,161,1)] text-sm leading-relaxed"
              >
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SubSectionList({ subSections }) {
  if (!subSections?.length) return null;
  return (
    <div className="mt-4 space-y-4">
      {subSections.map((sub) => (
        <div key={sub.id}>
          <h3 className="text-white font-semibold mb-1">
            {sub.id} {sub.title}
          </h3>
          <p className="text-[rgba(180,180,180,1)] leading-relaxed">
            {sub.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PolicyPage({
  title,
  lastUpdated,
  intro,
  sections,
  footerNote,
}) {
  return (
    <main className="min-h-screen bg-[#0F1417] font-poppins">
      <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[rgba(0,230,245,1)] hover:opacity-80 transition-opacity mb-8 text-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          {title}
        </h1>

        {lastUpdated && (
          <p className="text-[rgba(154,154,154,1)] text-sm mb-6">
            Last updated: {lastUpdated}
          </p>
        )}

        {intro && (
          <p className="text-[rgba(180,180,180,1)] leading-relaxed mb-10">
            {intro}
          </p>
        )}

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id}>
              <h2 className="text-lg font-bold text-white mb-3">
                {section.id}. {section.title}
              </h2>
              {section.content && (
                <p className="text-[rgba(180,180,180,1)] leading-relaxed text-justify">
                  {section.content}
                </p>
              )}
              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[rgba(180,180,180,1)] leading-relaxed text-justify mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              <BulletList items={section.bulletPoints} />
              <SubSectionList subSections={section.subSections} />
              <CardList cards={section.cards} />
              <FeatureList features={section.features} />
            </section>
          ))}
        </div>

        {footerNote && (
          <p className="mt-12 text-center text-[rgba(154,154,154,1)] text-sm">
            {footerNote}
          </p>
        )}
      </div>
    </main>
  );
}
