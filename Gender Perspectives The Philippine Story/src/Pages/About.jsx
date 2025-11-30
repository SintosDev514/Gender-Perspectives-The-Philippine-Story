import React from "react";

function About() {
  return (
    <div className="about-page w-full min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6 py-16 font-serif">
      {/* Academic Header */}
      <div className="w-full max-w-4xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
          About
        </h1>
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
          diversity that define the Filipino experience.
        </p>
      </div>

      {/* Research Objectives Section */}
      <div className="objectives max-w-3xl text-left mt-12 bg-white p-8 rounded-lg shadow-sm border border-amber-200">
        <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-6 pb-2 border-b border-amber-200">
          Objectives
        </h2>

        <ul className="text-amber-900 text-base md:text-lg leading-relaxed space-y-4">
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Present historical and contemporary perspectives on gender roles
              in the Philippines through an engaging multimedia format.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Explain how indigenous traditions, colonial influences, and social
              institutions shaped Filipino gender identities and expressions.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Communicate key ideas through clear, visually supported, and
              accessible content for both academic and public audiences.
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
              Encourage critical awareness and meaningful discussion on gender,
              culture, and societal change.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-700 font-bold mr-3">•</span>
            <span>
              Highlight narratives of resilience, diversity, and cultural
              transformation within Philippine gender history.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
