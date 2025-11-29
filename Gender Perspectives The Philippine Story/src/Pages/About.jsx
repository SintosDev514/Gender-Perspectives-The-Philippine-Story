import React from "react";

function About() {
  return (
    <div className="about-page w-full min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6 py-16 font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-4xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
          About the Research
        </h1>
        <p className="text-amber-600 text-sm tracking-wider uppercase">
          Academic Initiative on Gender Studies
        </p>
      </div>

      {/* Abstract Section */}
      <div className="max-w-3xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 text-amber-800 italic">
        <p className="text-base md:text-lg">
          <strong>Abstract:</strong> A comprehensive scholarly examination of
          evolving gender roles throughout Philippine history—from pre-colonial
          egalitarian structures to colonial transformations and contemporary
          movements toward gender diversity and inclusion.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl space-y-6 text-amber-900 text-base md:text-lg leading-relaxed bg-white p-8 rounded-lg shadow-sm border border-amber-200">
        <p>
          <strong className="text-amber-700">
            Gender Evolution in the Philippines
          </strong>
          is an in-depth academic research and educational initiative that
          explores the dynamic roles and expectations of men, women, and
          gender-diverse individuals throughout Philippine historiography. The
          project investigates how cultural practices, political shifts, and
          economic forces have shaped Filipino gender norms from pre-colonial
          societies to the modern era.
        </p>

        <p>
          By combining historical scholarship with contemporary anthropological
          perspectives, the project highlights the resilience, adaptability, and
          diversity that define the Filipino experience. Through archival
          research, visual documentation, infographic analysis, and interactive
          educational content, the project aims to present well-researched
          insights in an academically rigorous yet accessible manner.
        </p>
      </div>

      {/* Research Objectives Section */}
      <div className="objectives max-w-3xl text-left mt-12 bg-white p-8 rounded-lg shadow-sm border border-amber-200">
        <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-6 pb-2 border-b border-amber-200">
          Research Objectives
        </h2>

        <ul className="text-amber-900 text-base md:text-lg leading-relaxed space-y-4">
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Examine historical and contemporary gender constructs in
              Philippine society through interdisciplinary methodology
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Analyze the impact of colonial interventions, indigenous cultural
              practices, and societal structures on gender identities and
              expectations
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Present research findings through academically validated,
              engaging, and accessible pedagogical formats
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Promote scholarly awareness, critical discourse, and
              evidence-based understanding of gender issues among academic and
              public audiences
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Highlight narratives of cultural resilience, gender diversity, and
              social transformation within Filipino anthropological history
            </span>
          </li>
        </ul>
      </div>

      {/* Academic Footer Note */}
      <div className="max-w-3xl mt-10 pt-6 border-t border-amber-300 text-center">
        <p className="text-amber-600 text-sm">
          This research project adheres to academic standards of historical and
          anthropological methodology. All sources are properly cited and
          peer-reviewed where applicable.
        </p>
      </div>
    </div>
  );
}

export default About;
