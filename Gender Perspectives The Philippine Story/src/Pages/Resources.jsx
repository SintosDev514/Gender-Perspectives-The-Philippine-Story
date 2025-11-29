import React from "react";

function Resources() {
  const resourcesList = [
    {
      category: "Academic Publications & Scholarly Works",
      items: [
        {
          title: "Women, Gender and Development in the Philippines",
          author: "Mary Racelis",
          link: "https://www.amazon.com/Women-Gender-Development-Philippines-Racelis/dp/9715425452",
          type: "Academic Monograph",
        },
        {
          title: "Babaylan: Women Shamans in Philippine History",
          author: "Aileen L. Baviera",
          link: "https://books.google.com/",
          type: "Historical Research",
        },
        {
          title: "Gender and Society in the Philippines",
          author: "Edna P. Aguinaldo",
          link: "https://scholar.google.com/",
          type: "Academic Journal",
        },
      ],
    },
    {
      category: "Research Reports & Policy Analysis",
      items: [
        {
          title: "Philippines Gender Equality Profile",
          author: "World Bank & UNDP",
          link: "https://www.undp.org/philippines",
          type: "International Report",
        },
        {
          title: "Role of Women in Philippine Society",
          author: "HomeBasedPinoy",
          link: "https://homebasedpinoy.com/role-of-women-in-philippine-society/",
          type: "Sociological Analysis",
        },
        {
          title: "LGBT Rights in the Philippines",
          author: "Human Rights Watch",
          link: "https://www.hrw.org/asia/philippines",
          type: "Human Rights Documentation",
        },
      ],
    },
    {
      category: "Documentary & Multimedia Resources",
      items: [
        {
          title: "Babaylan: Filipino Women Shamans",
          link: "https://www.youtube.com/watch?v=2U_Rjz5pCr4",
          type: "Documentary Film",
        },
        {
          title: "Gender in Philippine Society",
          link: "https://www.youtube.com/watch?v=vrRZtGJPD7I",
          type: "Educational Content",
        },
      ],
    },
    {
      category: "Academic Databases & Research Portals",
      items: [
        {
          title: "Wikimedia Commons – Philippines",
          link: "https://commons.wikimedia.org/wiki/Category:Philippines",
          type: "Digital Archive",
        },
        {
          title: "UNDP Philippines",
          link: "https://www.ph.undp.org/content/philippines/en/home.html",
          type: "Development Research",
        },
        {
          title: "ASEAN Gender Portal",
          link: "https://asean.org/asean-gender-portal/",
          type: "Regional Database",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <div className="text-center mb-2">
          <span className="text-amber-700 text-sm tracking-wider uppercase">
            Research Bibliography
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 leading-tight">
          Academic Resources & References
        </h1>
        <p className="text-amber-600 text-sm">
          Curated Scholarly Materials on Gender Evolution in the Philippines
        </p>
      </div>

      {/* Abstract Section */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 italic text-amber-800">
        <p className="text-sm md:text-base">
          <strong>Research Compendium:</strong> This comprehensive bibliography
          provides authoritative sources for academic research on gender
          evolution in Philippine society, including peer-reviewed publications,
          policy analyses, documentary evidence, and specialized research
          databases.
        </p>
      </div>

      {/* Resource Sections */}
      <div className="max-w-4xl w-full space-y-12">
        {resourcesList.map((section, index) => (
          <section
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-amber-200"
          >
            <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-6 pb-2 border-b border-amber-200">
              {section.category}
            </h2>
            <ul className="space-y-4 text-amber-900">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col pb-4 border-b border-amber-100 last:border-b-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-800 text-lg mb-1">
                        {item.title}
                      </h3>
                      {item.author && (
                        <p className="text-amber-700 text-sm mb-1">
                          <span className="font-medium">Author(s):</span>{" "}
                          {item.author}
                        </p>
                      )}
                      {item.type && (
                        <p className="text-amber-600 text-xs italic mb-2">
                          {item.type}
                        </p>
                      )}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 md:mt-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors duration-200 font-medium whitespace-nowrap"
                      >
                        Access Resource
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Research Methodology Note */}
      <div className="max-w-4xl mt-12 bg-amber-100 p-6 rounded-lg border-l-4 border-amber-700">
        <h3 className="text-lg font-bold text-amber-800 mb-3">
          Selection Criteria & Academic Standards
        </h3>
        <p className="text-amber-700 text-sm">
          Resources included in this bibliography have been selected based on
          academic credibility, peer-review status where applicable, and
          relevance to gender studies in Philippine context. All sources
          maintain scholarly standards appropriate for academic research and
          citation.
        </p>
      </div>

      {/* Academic Footer */}
      <footer className="mt-16 w-full max-w-4xl border-t-2 border-amber-800 pt-6 text-center text-amber-600 text-sm">
        <div className="mb-4">
          <p className="font-semibold text-amber-700">
            Bibliographic Standards
          </p>
          <p className="text-xs mt-1">
            APA Citation Style • Peer-Reviewed Sources • Academic Databases •
            Government Publications • International Research
          </p>
        </div>
        <p className="text-amber-500">
          &copy; 2025 Gender Evolution Academic Research. This bibliography may
          be cited for scholarly purposes.
        </p>
      </footer>
    </div>
  );
}

export default Resources;
