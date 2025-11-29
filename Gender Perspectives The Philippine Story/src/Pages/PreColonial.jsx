import React from "react";

function PreColonial() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8">
        <div className="text-center mb-2">
          <span className="text-amber-700 text-sm tracking-wider uppercase">
            Academic Research Paper
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 text-center leading-tight">
          Pre-Colonial Gender Roles in the Philippines:
          <span className="text-amber-700 block text-2xl md:text-3xl font-normal mt-2">
            An Analysis of Egalitarian Social Structures
          </span>
        </h1>

        <div className="flex justify-center items-center gap-6 text-amber-600 text-sm mt-4">
          <span>Anthropological Study</span>
          <span>•</span>
          <span>Historical Analysis</span>
          <span>•</span>
          <span>Cultural Anthropology</span>
        </div>
      </div>

      {/* Abstract Section */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 italic text-amber-800">
        <p className="text-sm md:text-base">
          <strong>Abstract:</strong> This paper examines the equitable, diverse,
          and community-centered gender systems that shaped early Filipino
          societies before Spanish colonization, highlighting the sophisticated
          understanding of gender complementarity and fluidity in pre-colonial
          Southeast Asia.
        </p>
      </div>

      {/* Featured Image with Academic Caption */}
      <figure className="max-w-3xl mb-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Boxer_Codex_painting.jpg"
          alt="Pre-colonial Filipino society depiction from the Boxer Codex"
          className="rounded-lg shadow-md w-full border-2 border-amber-200"
          loading="lazy"
        />
        <figcaption className="text-center text-amber-600 text-sm mt-2 italic">
          Figure 1: Pre-colonial Filipino society as depicted in the Boxer Codex
          (c. 1590)
        </figcaption>
      </figure>

      {/* Content */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed">
        {/* Section 1 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            1. Egalitarian and Complementary Gender Structures
          </h2>

          <figure className="float-right ml-6 mb-4 w-72">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Igorot_women_bontoc_1903.jpg"
              alt="Indigenous Filipino women engaging in community activities"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 2: Indigenous women in community roles (c. 1903)
            </figcaption>
          </figure>

          <p className="mb-3">
            Pre-colonial Filipino societies operated under sophisticated systems
            of
            <strong className="text-amber-700">
              {" "}
              complementary gender roles
            </strong>{" "}
            rather than rigid hierarchical structures. Archaeological and
            anthropological evidence indicates that men and women shared
            leadership responsibilities, economic activities, spiritual duties,
            and social influence across various ethnolinguistic groups.
          </p>
          <p>
            Early communities valued the unique contributions of each gender,
            with economic specialization based on skill rather than gender
            essentialism. This system reflected a nuanced understanding of human
            capabilities that predated Western colonial influences.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            2. Female Autonomy in Leadership and Economic Systems
          </h2>

          <figure className="float-left mr-6 mb-4 w-64">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Boxer_Codex_-_Tagalog_Lady.jpg"
              alt="Pre-colonial Filipina noblewoman from historical records"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 3: Noblewoman from Boxer Codex illustrations
            </figcaption>
          </figure>

          <p className="mb-3">
            Historical records document that pre-colonial women enjoyed
            remarkable autonomy across social, economic, and political spheres.
            They could inherit property, rule communities as <em>datus</em> or
            chieftains, arrange trade partnerships, and influence warfare
            decisions.
          </p>
          <p>
            Women were central to agricultural production, craftsmanship,
            healing practices, and spiritual life. This level of female agency
            challenges later colonial narratives about "traditional" gender
            roles in the region.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            3. The Babaylan: Intersection of Spirituality and Social Leadership
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <figure className="flex-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Babaylan.jpg"
                alt="Artistic depiction of Babaylan spiritual leader"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
              />
              <figcaption className="text-amber-600 text-xs mt-1 italic">
                Figure 4: Artistic representation of a Babaylan
              </figcaption>
            </figure>

            <div className="flex-1">
              <p className="mb-3">
                The <strong className="text-amber-700">babaylan</strong> held
                one of the highest and most respected roles in early Filipino
                society. As documented in Spanish chronicles, babaylan served as
                healers, ritual leaders, spiritual mediums, and political
                advisers to ruling datus.
              </p>
              <p>
                While many babaylan were women, Spanish records also document
                effeminate males known as <strong>asog</strong> or
                <strong> bayoguin</strong>, who were honored for their spiritual
                gifts and gender-fluid identities, indicating sophisticated
                understandings of gender beyond binary constructs.
              </p>
            </div>
          </div>

          {/* Academic Video Embed */}
          <div className="mt-6">
            <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
              Supplementary Documentary Evidence
            </div>
            <div className="w-full aspect-video border border-amber-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2U_Rjz5pCr4"
                title="Academic documentary on Babaylan traditions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            4. Gender Fluidity in Pre-Colonial Social Organization
          </h2>

          <figure className="mx-auto mb-4 max-w-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Ifugao_mumbaki.jpg"
              alt="Indigenous spiritual practitioner in ritual context"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 5: Indigenous spiritual practitioner (Mumbaki)
            </figcaption>
          </figure>

          <p className="mb-3">
            Pre-colonial societies recognized and institutionalized identities
            beyond the Western male–female binary. Anthropological evidence
            suggests that asog and bayoguin individuals often served as ritual
            specialists, healers, and community leaders.
          </p>
          <p>
            This demonstrates a long-standing cultural acceptance of
            <strong className="text-amber-700"> gender diversity</strong> that
            was systematically suppressed during the colonial period but has
            persisted in various indigenous communities to the present day.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            5. Cooperative Family Structures and Economic Partnerships
          </h2>

          <figure className="float-right ml-6 mb-4 w-72">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Visayan_noble_couple%2C_Boxer_Codex.jpg"
              alt="Visayan noble couple from historical documentation"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Figure 6: Noble couple from Visayan society (Boxer Codex)
            </figcaption>
          </figure>

          <p className="mb-3">
            Family structures emphasized cooperation, shared decision-making,
            and equitable rights between partners. Historical accounts document
            that women could initiate divorce, remarry freely, or manage their
            own property—practices that differ sharply from later colonial
            norms.
          </p>
          <p>
            This cooperative approach extended to economic activities, where
            spouses often worked as complementary partners in agriculture,
            trade, and craft production, challenging later patriarchal
            interpretations of "traditional" family structures.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            6. Conclusion: A Society Built on Balance and Complementarity
          </h2>

          <p className="mb-3">
            Pre-colonial Filipino gender systems were grounded in sophisticated
            principles of <strong className="text-amber-700">balance</strong>,
            <strong className="text-amber-700"> mutual respect</strong>, and
            <strong className="text-amber-700"> shared responsibility</strong>.
            These flexible, inclusive, and community-centered structures
            demonstrate that gender diversity and equality flourished long
            before foreign influences reshaped Filipino culture.
          </p>
          <p className="italic text-amber-700">
            The evidence suggests that what colonial powers interpreted as
            "primitive" was, in fact, a highly developed social system with
            nuanced understandings of human diversity and complementarity.
          </p>
        </section>

        {/* Final Academic Resource */}
        <div className="mt-10">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            Extended Documentary Analysis
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vrRZtGJPD7I"
              title="Comprehensive documentary on pre-colonial Philippine societies"
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
            References & Primary Sources
          </p>
          <p className="text-xs mt-1">
            Boxer Codex (c. 1590) • Spanish Colonial Records • Anthropological
            Studies • Indigenous Oral Histories • Academic Publications
          </p>
        </div>
        <p className="text-amber-500">
          &copy; 2023 Academic Research on Pre-Colonial Philippine Societies.
          This work may be cited for academic purposes.
        </p>
      </footer>
    </div>
  );
}

export default PreColonial;
