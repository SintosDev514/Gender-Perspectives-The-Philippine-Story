import React from "react";
import intra from "../assets/imges/intra.JPG";
import spanera from "../assets/imges/spanera.JPG";
import maria from "../assets/imges/mariac.JPG";
import teacher from "../assets/imges/teachers.JPG";

function SpanishAmerican() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <div className="text-center mb-2">
          <span className="text-amber-700 text-sm tracking-wider uppercase">
            Multimedia Course Output
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 leading-tight">
          Spanish & American Colonial Influence on Gender Roles in the
          Philippines
        </h1>
        <p className="text-amber-600 text-sm">
          A Visual and Informative Multimedia Presentation
        </p>
      </div>

      {/* Overview */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 italic text-amber-800 text-justify">
        <p className="text-sm md:text-base">
          <strong>Overview:</strong> This multimedia output explores how gender
          roles evolved during Spanish and American colonial rule. It highlights
          the major cultural shifts, educational influences, and societal
          expectations that shaped Filipino identity, womanhood, and community
          leadership across two significant historical eras.
        </p>
      </div>

      {/* Featured Image */}
      <figure className="max-w-3xl mb-12">
        <img
          src={intra}
          alt="Intramuros Manila during Spanish Colonial Era"
          className="rounded-lg shadow-md w-full border-2 border-amber-200"
        />
        <figcaption className="text-center text-amber-600 text-sm mt-2 italic">
          Intramuros, Manila during Spanish colonial period (1847)
        </figcaption>
      </figure>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed text-justify">
        {/* Spanish Colonial Period */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Spanish Colonial Period: New Gender Expectations
          </h2>

          <figure className="float-right ml-6 mb-4 w-72">
            <img
              src={spanera}
              alt="Spanish-era Filipina"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Filipina mestiza under Spanish influence
            </figcaption>
          </figure>

          <p className="mb-3">
            During the Spanish period, Catholicism became the central force that
            shaped societal and gender expectations. Women were encouraged to
            adopt qualities of modesty, obedience, and religious devotion, which
            reflected ideals introduced by colonial teachings and reinforced by
            family structures.
          </p>
          <p>
            Leadership and decision-making roles remained dominated by men,
            while women were primarily guided toward domestic duties, moral
            education, and supporting the household. Despite these restrictions,
            women found ways to influence community life and maintain social
            cohesion through cultural and religious activities.
          </p>
        </section>

        {/* Maria Clara Image & Education */}
        <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          {/* Image */}
          <figure className="md:mr-6 mb-4 md:mb-0 w-full md:w-64 flex-shrink-0">
            <img
              src={maria}
              alt="Maria Clara depiction"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Maria Clara as the colonial feminine ideal
            </figcaption>
          </figure>

          {/* Text */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
              The “Maria Clara” Image and Spanish-Era Education
            </h2>

            <p className="mb-3">
              The iconic “Maria Clara” image—rooted in literature and religious
              education—became the symbol of the ideal Filipina: gentle, silent,
              graceful, and obedient. This ideal shaped societal perceptions of
              women for generations, establishing behavioral expectations that
              permeated daily life.
            </p>
            <p>
              Despite these expectations, many Filipinas carved out agency by
              participating in community activities, pursuing informal
              education, and contributing to reform movements such as the
              Katipunan, challenging the limits imposed on them.
            </p>
          </div>
        </div>

        {/* Spanish Colonial Video */}
        <div className="mt-6">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            Spanish Colonial Video Resource
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/R23NNcU4RIQ?si=2Et2WV3Q_OqZqyOs"
              title="Spanish Colonial Period Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* American Period */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            American Period: Education and New Opportunities
          </h2>

          <figure className="mx-auto mb-4 max-w-2xl">
            <img
              src={teacher}
              alt="Thomasite teachers"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              American teachers (Thomasites) brought public education
            </figcaption>
          </figure>

          <p className="mb-3">
            The arrival of American teachers, known as the Thomasites, led to
            the establishment of a public school system. For the first time,
            Filipino women gained widespread access to structured education.
          </p>
          <p>
            This opportunity allowed women to pursue academic fields, join
            professions such as teaching and nursing, and participate more
            actively in civic and community leadership, marking a significant
            shift in social expectations and opportunities.
          </p>
        </section>

        {/* Women's Organizations */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Growth of Women’s Organizations and Leadership
          </h2>

          <p className="mb-3">
            The American period saw the rise of women’s civic organizations.
            Leaders such as{" "}
            <strong className="text-amber-700">Josefa Llanes Escoda</strong> and{" "}
            <strong className="text-amber-700">Pura Villanueva-Kalaw</strong>{" "}
            were instrumental in elevating women’s rights and advocating for
            social reforms.
          </p>
          <p>
            Their efforts culminated in Filipino women achieving suffrage in
            1937, one of the earliest women’s voting rights victories in Asia,
            signaling a transformative moment for gender equality in the
            country.
          </p>
        </section>

        {/* Comparison of Colonial Periods */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Key Differences Between the Two Colonial Periods
          </h2>

          <p className="mb-3">
            Spanish colonial rule imposed a conservative framework for women
            rooted in Catholic ideals, emphasizing domesticity and religious
            obedience. In contrast, the American period offered expanded
            opportunities through public education, enabling women to engage
            more fully in professional and civic life.
          </p>
          <p className="italic text-amber-700">
            These differing colonial influences continue to shape Filipino
            gender norms and cultural identity today.
          </p>
        </section>

        {/* American Period Video */}
        <div className="mt-10">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            American Colonial Period Video Resource
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QTFd36KwHns?si=SwDSCv31KAYI0Ock"
              title="American Colonial Period Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full max-w-4xl border-t-2 border-amber-800 pt-6 text-center text-amber-600 text-sm">
        <p className="font-semibold text-amber-700 mb-2">
          Multimedia Sources & Visual References
        </p>
        <p className="text-xs">
          Images, videos, and historical visuals used for educational and
          multimedia presentation purposes.
        </p>

        <p className="text-amber-500 mt-4">
          © 2023 Multimedia Course Output – Colonial Gender Roles
        </p>
      </footer>
    </div>
  );
}

export default SpanishAmerican;
