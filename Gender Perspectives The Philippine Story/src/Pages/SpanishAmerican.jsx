import React from "react";

function SpanishAmerican() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <div className="text-center mb-2">
          <span className="text-amber-700 text-sm tracking-wider uppercase">
            Colonial Studies Research
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 leading-tight">
          Gender Roles During Spanish & American Colonial Periods in the
          Philippines
        </h1>
        <p className="text-amber-600 text-sm">
          A Comparative Analysis of Colonial Gender Constructs
        </p>
      </div>

      {/* Abstract Section */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 italic text-amber-800">
        <p className="text-sm md:text-base">
          <strong>Abstract:</strong> This research examines how Spanish and
          American colonial administrations systematically reshaped Filipino
          gender norms—from the imposition of Catholic patriarchy under Spanish
          rule to the American introduction of Western education, democratic
          ideals, and new gender expectations.
        </p>
      </div>

      {/* Featured Image with Academic Caption */}
      <figure className="max-w-3xl mb-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Intramuros1847.jpg"
          alt="Intramuros Manila during Spanish Colonial Era"
          className="rounded-lg shadow-md w-full border-2 border-amber-200"
        />
        <figcaption className="text-center text-amber-600 text-sm mt-2 italic">
          Figure 1: Intramuros, Manila during Spanish colonial period (c. 1847)
        </figcaption>
      </figure>

      {/* CONTENT */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed">
        {/* Section 1 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            1. Spanish Colonial Era: Patriarchal Structures & Catholic Doctrine
          </h2>

          <figure className="float-right ml-6 mb-4 w-72">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Mestiza_de_Sangley.jpg"
              alt="Spanish-era Filipina mestiza from historical records"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 2: Filipina mestiza during Spanish colonial period
            </figcaption>
          </figure>

          <p className="mb-3">
            Spanish colonization introduced systematic{" "}
            <strong className="text-amber-700">Catholic patriarchy</strong>,
            significantly reducing the autonomy women previously held in
            pre-colonial society. Ecclesiastical authorities emphasized female
            modesty, obedience, and domesticity as primary virtues.
          </p>
          <p>
            Women's social roles became predominantly centered on domestic
            spheres, while men maintained control over political institutions,
            property ownership, and religious authority—a marked departure from
            pre-colonial gender complementarity.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            2. Educational Systems & the "Maria Clara" Gender Construct
          </h2>

          <figure className="float-left mr-6 mb-4 w-64">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Maria_Clara.jpg"
              alt="Maria Clara archetype depiction"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 3: Maria Clara as colonial gender ideal
            </figcaption>
          </figure>

          <p className="mb-3">
            The idealized Filipina during Spanish hegemony was symbolized by the
            <strong className="text-amber-700"> Maria Clara archetype</strong>
            —characterized by modesty, religious devotion, gentility, and
            submission. This construct was systematically promoted through
            colonial education, religious instruction, and literary works.
          </p>
          <p>
            Historical evidence indicates that despite these imposed ideals,
            numerous Filipinas engaged in covert resistance, participating in
            revolutionary movements and subversive activities against colonial
            authority.
          </p>
        </section>

        {/* Spanish Era Video */}
        <div className="mt-6">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            Spanish Colonial Documentary Evidence
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ASdyl7lxzF4"
              title="Academic documentary on Spanish Colonial Period"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 3 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            3. American Colonial Period: Educational Reform & Gender Opportunity
          </h2>

          <figure className="mx-auto mb-4 max-w-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Thomasite_teachers1901.jpg"
              alt="Thomasite educators arriving in the Philippines"
              className="rounded-lg shadow-md w-full"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 4: Thomasite teachers establishing American educational
              system (1901)
            </figcaption>
          </figure>

          <p className="mb-3">
            American colonial administration introduced comprehensive{" "}
            <strong className="text-amber-700">public education systems</strong>
            , enabling Filipino women to access formal schooling and
            subsequently enter professional occupations including teaching,
            nursing, journalism, and civil service.
          </p>
          <p>
            Democratic political frameworks encouraged female civic
            participation, catalyzing the emergence of organized women's rights
            advocacy groups and feminist movements throughout the archipelago.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            4. Emergence of Filipina Political Leadership & Suffrage Movement
          </h2>

          <p className="mb-3">
            During American administration, prominent Filipina leaders including
            <strong className="text-amber-700">
              {" "}
              Josefa Llanes Escoda
            </strong>{" "}
            and
            <strong className="text-amber-700"> Pura Villanueva-Kalaw</strong>
            spearheaded organized campaigns for women's political
            enfranchisement, culminating in the successful achievement of female
            suffrage in 1937.
          </p>
          <p>
            This period witnessed significant departure from Spanish-imposed
            gender expectations, as women increasingly participated in public
            discourse, political organizations, and social reform movements.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            5. Comparative Analysis: Colonial Gender Norm Transformations
          </h2>

          <p className="mb-3">
            Spanish colonial authority primarily restricted gender roles through
            religious doctrine and patriarchal legal frameworks, while American
            administration expanded female opportunities through educational
            reform and civic engagement mechanisms.
          </p>
          <p className="italic text-amber-700">
            These contrasting colonial influences created complex, layered
            gender identities that continue to shape contemporary Filipino
            societal structures and gender relations.
          </p>
        </section>

        {/* Final Academic Video */}
        <div className="mt-10">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            American Colonial Period Analysis
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jEXf4Gp82ew"
              title="Academic documentary on American Colonial Period"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Academic Footer */}
      <footer className="mt-16 w-full max-w-4xl border-t-2 border-amber-800 pt-6 text-center text-amber-600 text-sm">
        <div className="mb-4">
          <p className="font-semibold text-amber-700">
            References & Archival Sources
          </p>
          <p className="text-xs mt-1">
            Spanish Colonial Records • American Government Documents •
            Historical Photographs • Academic Publications • Women's Suffrage
            Archives
          </p>
        </div>
        <p className="text-amber-500">
          &copy; 2023 Colonial Gender Studies Research. This work may be cited
          for academic purposes.
        </p>
      </footer>
    </div>
  );
}

export default SpanishAmerican;
