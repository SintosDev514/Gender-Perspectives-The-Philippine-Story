import React from "react";
import w from "../assets/imges/w.JPG";
import ww from "../assets/imges/wW.JPG";

function ContemporaryIssues() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <div className="text-center mb-2">
          <span className="text-amber-700 text-sm tracking-wider uppercase">
            Contemporary Gender Studies
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 leading-tight">
          Contemporary Issues: Gender & Society in the Philippines
        </h1>
        <p className="text-amber-600 text-sm">
          An Analysis of Current Challenges and Progress in Gender Equality
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed text-justify">
        {/* Gender Equality & Policy */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Gender Equality & Policy Institutionalization
          </h2>
          <p className="mb-3">
            The Philippines has demonstrated significant progress in
            institutionalizing gender-responsive policy frameworks. Government
            agencies systematically integrate
            <strong className="text-amber-700">
              {" "}
              Gender and Development (GAD)
            </strong>{" "}
            mandates, aiming to ensure equitable opportunities and
            representative governance structures.
          </p>
          <p>
            Despite these institutional advancements, substantial societal and
            structural barriers persist—particularly affecting marginalized and
            underrepresented communities across the archipelago.
          </p>
        </section>

        {/* Women's Empowerment */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Women's Empowerment: Employment & Political Representation
          </h2>

          <figure className="float-right ml-6 mb-4 w-72">
            <img
              src={ww}
              alt="Filipina women in industrial employment sectors"
              className="rounded-lg shadow-md w-full border border-amber-200"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Filipina workers in industrial sectors, demonstrating occupational
              diversity
            </figcaption>
          </figure>

          <p className="mb-3">
            Increasing numbers of Filipino women are entering diverse
            professional fields—including STEM disciplines, public service,
            entrepreneurial ventures, and executive leadership roles—thereby
            challenging traditional gender expectations and occupational
            segregation.
          </p>
          <p>
            Nevertheless, significant disparities persist in equitable
            representation and access to opportunities, particularly for women
            residing outside major urban centers and economic zones.
          </p>
        </section>

        {/* LGBTQIA+ Rights */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            LGBTQIA+ Rights: Advocacy and Social Integration
          </h2>

          <figure className="mx-auto mb-4 max-w-2xl">
            <img
              src={w}
              alt="Metro Manila Pride March 2019 participation"
              className="rounded-lg shadow-md w-full border border-amber-200"
              loading="lazy"
            />
            <figcaption className="text-amber-600 text-xs mt-1 italic">
              Metro Manila Pride March 2019, illustrating growing visibility of
              LGBTQIA+ advocacy
            </figcaption>
          </figure>

          <p className="mb-3">
            Contemporary movements advocating for gender identity and sexual
            orientation rights continue to achieve increased visibility and
            social recognition. Coordinated advocacy efforts—particularly
            through grassroots and community-based organizations—are advancing
            legislative agendas for comprehensive anti-discrimination
            protections and broader societal acceptance.
          </p>
          <p>
            However, persistent social stigma and systemic discrimination remain
            significant challenges affecting many LGBTQIA+ individuals
            throughout Philippine society.
          </p>

          {/* Academic Video Documentation */}
          <div className="mt-6">
            <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
              Contemporary Gender Advocacy Analysis
            </div>
            <div className="w-full aspect-video border border-amber-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DqpqrwYaMnM?si=GVSrPOdDApC9Otse"
                title="Academic documentary on contemporary gender issues in the Philippines"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Persistent Structural Challenges */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Persistent Structural Challenges: Inequality & Intersectionality
          </h2>
          <p className="mb-3">
            Despite measurable progress, significant gender disparities endure
            across multiple domains: wage inequality, limited access to
            executive decision-making positions, and deeply embedded cultural
            biases continue to affect diverse populations.
          </p>
          <p className="italic text-amber-700">
            Advocacy organizations increasingly emphasize the necessity for
            intersectional policy frameworks that comprehensively address gender
            diversity, multiple marginalizations, and the specific needs of
            underrepresented communities.
          </p>
        </section>

        {/* Research Conclusion */}
        <section className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-700">
          <p className="text-amber-800">
            Contemporary gender issues in the Philippines reflect a complex
            interplay of progressive policy implementation, evolving social
            attitudes, and persistent structural barriers. The ongoing tension
            between institutional advances and grassroots advocacy demonstrates
            the dynamic nature of gender transformation in modern Filipino
            society.
          </p>
        </section>
      </div>

      {/* Academic Footer */}
      <footer className="mt-16 w-full max-w-4xl border-t-2 border-amber-800 pt-6 text-center text-amber-600 text-sm">
        <div className="mb-4">
          <p className="text-xs mt-1">
            Government Policy Analysis • Demographic Studies • Social Movement
            Research • Contemporary Academic Publications • Advocacy
            Organization Reports
          </p>
        </div>
        <p className="text-amber-500">
          &copy; 2025 Contemporary Gender Studies Research. This work may be
          cited for academic purposes.
        </p>
      </footer>
    </div>
  );
}

export default ContemporaryIssues;
