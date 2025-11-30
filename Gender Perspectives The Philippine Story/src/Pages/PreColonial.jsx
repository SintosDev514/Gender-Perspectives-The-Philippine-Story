import React from "react";
import filact from "../assets/imges/filact.JPG";
import noblew from "../assets/imges/boxer.JPG";
import baylan from "../assets/imges/q.JPG";
import qq from "../assets/imges/qq.JPG";
import qqq from "../assets/imges/qqq.JPG";

function PreColonial() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-4 md:px-6 py-12 flex flex-col items-center font-serif">
      {/* HEADER */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <span className="text-amber-700 text-sm uppercase tracking-wider">
          Multimedia Course Output
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mt-3 leading-tight">
          Pre-Colonial Gender Roles in the Philippines
          <span className="block text-amber-700 text-2xl md:text-3xl font-normal mt-2">
            An Overview of Egalitarian Social Structures
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 text-amber-600 text-sm mt-4">
          <span>Cultural Exploration</span>
          <span>•</span>
          <span>Historical Insight</span>
          <span>•</span>
          <span>Philippine Heritage</span>
        </div>
      </div>

      {/* ABSTRACT */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 px-4 md:px-6 py-4 mb-10 italic text-amber-800 text-justify">
        <p className="text-sm md:text-base">
          <strong>Overview:</strong> This multimedia output examines how early
          Filipino communities fostered an environment where gender roles were
          fluid, collaborative, and deeply rooted in shared responsibility.
          Rather than imposing rigid categories, pre-colonial societies embraced
          a worldview where individuals—regardless of gender—contributed
          meaningfully to leadership, economics, spirituality, and community
          life. Understanding these systems gives us insight into how indigenous
          Filipinos upheld equality long before external influences reshaped
          social norms.
        </p>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed text-justify">
        {/* Egalitarian and Complementary Gender Structures */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Egalitarian and Complementary Gender Structures
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={filact}
              className="rounded-lg shadow-md w-full md:w-72"
              alt=""
              loading="lazy"
            />

            <div>
              <p className="mb-3">
                Pre-colonial Filipino societies practiced{" "}
                <strong className="text-amber-700">
                  complementary gender roles
                </strong>{" "}
                rather than systems of domination or separation. Men and women
                contributed to the community in ways that balanced each other,
                creating a harmonious social structure.
              </p>
              <p>
                Leadership, trade, craftsmanship, and spiritual duties were
                collectively upheld. This balance fostered unity, making early
                communities socially resilient and culturally rich.
              </p>
            </div>
          </div>
        </section>

        {/* Female Autonomy in Leadership */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Female Autonomy in Leadership and Economic Systems
          </h2>

          <div className="flex flex-col md:flex-row-reverse gap-6">
            <img
              src={noblew}
              className="rounded-lg shadow-md w-full md:w-64"
              alt=""
              loading="lazy"
            />

            <div>
              <p className="mb-3">
                Women in pre-colonial Philippines exercised considerable
                autonomy. They could govern communities, inherit property, and
                participate actively in trade negotiations. Unlike later
                colonial systems, these early societies valued women as crucial
                decision-makers.
              </p>
              <p>
                Their involvement in agriculture, healing, education, and
                spiritual work reflected a society that acknowledged their
                intelligence, intuition, and leadership capability.
              </p>
            </div>
          </div>
        </section>

        {/* The Babaylan */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            The Babaylan: Spiritual and Community Leadership
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={baylan}
              className="rounded-lg shadow-md w-full md:w-60"
              alt=""
              loading="lazy"
            />

            <div>
              <p className="mb-3">
                The <strong className="text-amber-700">babaylan</strong> held a
                place of immense respect in pre-colonial society. As spiritual
                leaders, healers, and cultural keepers, they guided communities
                through ritual, wisdom, and tradition.
              </p>
              <p>
                Notably, the babaylan institution welcomed <strong>asog</strong>{" "}
                or <strong>bayoguin</strong>—gender-nonconforming
                individuals—reflecting the community’s acceptance of diverse
                identities long before modern LGBTQ+ concepts emerged.
              </p>
            </div>
          </div>

          {/* VIDEO */}
          <div className="mt-6">
            <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
              Supplementary Multimedia Content
            </div>
            <div className="w-full aspect-video border border-amber-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lLv7ldIB4vc?si=MbDaWoMMbKFlMoqh"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Gender Diversity */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Gender Diversity in Pre-Colonial Society
          </h2>

          <img
            src={qq}
            className="rounded-lg shadow-md w-full max-w-md mx-auto mb-4"
            alt=""
          />

          <p className="mb-3">
            Pre-colonial societies did not subscribe to the restrictive
            male–female binary. Instead, they recognized a spectrum of gender
            expressions, integrating gender-fluid individuals into important
            cultural and spiritual roles.
          </p>
          <p>
            These individuals often served as ritual specialists, mediators, and
            healers—demonstrating that gender diversity was not merely accepted
            but honored.
          </p>
        </section>

        {/* Cooperative Family Structures */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Cooperative Family Structures and Partnerships
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={qqq}
              className="rounded-lg shadow-md w-full md:w-72"
              alt=""
            />

            <div>
              <p className="mb-3">
                Families during the pre-colonial period operated on shared
                decision-making and cooperation. Unlike patriarchal systems,
                both partners had the agency to influence family matters.
              </p>
              <p>
                Women could initiate divorce, own land, or manage
                property—showcasing a social fabric that respected autonomy and
                mutual responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* BOOK LINK */}
        <div className="bg-amber-100 border border-amber-300 p-5 rounded-lg text-center">
          <p className="font-semibold text-amber-800 mb-2">
            Suggested Book for Further Reading
          </p>
          <a
            href="https://www.goodreads.com/book/show/25329809-babaylan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 underline hover:text-amber-900"
          >
            *Babaylan: Filipinos and the Call of the Indigenous* by Leny Strobel
          </a>
        </div>

        {/* FINAL VIDEO */}
        <div className="mt-10">
          <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
            Additional Multimedia Reference
          </div>
          <div className="w-full aspect-video border border-amber-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0wuDtGpBUlg?si=WstocICqa5sMNqgi"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 w-full max-w-4xl border-t-2 border-amber-800 pt-6 text-center text-amber-600 text-sm">
        <p className="font-semibold text-amber-700">References & Sources</p>
        <p className="text-xs mt-1">
          Boxer Codex • Spanish Records • Oral Histories • Academic Studies
        </p>
        <p className="mt-4 text-amber-500">
          © 2023 Gender Evolution PH – Multimedia Course Output
        </p>
      </footer>
    </div>
  );
}

export default PreColonial;
