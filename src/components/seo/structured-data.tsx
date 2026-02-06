export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SignalCrew",
    alternateName: "TrueSignal Digital LLC",
    description:
      "AI-powered phone answering, chatbots, review management, and business automation for San Antonio service businesses.",
    url: "https://signalcrew.ai",
    telephone: "+1-210-555-1234",
    email: "hello@signalcrew.ai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.4241,
      longitude: -98.4936,
    },
    areaServed: {
      "@type": "City",
      name: "San Antonio",
      "@id": "https://www.wikidata.org/wiki/Q975",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Phone Answering",
            description:
              "24/7 AI-powered phone answering that books appointments automatically.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Chatbots",
            description:
              "Website chatbots that engage visitors and schedule appointments.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Review Management",
            description:
              "Automated review requests and AI-powered review responses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Automation",
            description:
              "Custom workflow automation for scheduling, follow-ups, and more.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SignalCrew",
    legalName: "TrueSignal Digital LLC",
    url: "https://signalcrew.ai",
    logo: "https://signalcrew.ai/icon.svg",
    description:
      "AI automation agency helping San Antonio service businesses capture more leads and save time.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-210-555-1234",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SignalCrew",
    url: "https://signalcrew.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://signalcrew.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
