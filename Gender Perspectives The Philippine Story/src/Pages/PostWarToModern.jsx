import React from "react";

function PostWarToModern() {
  return (
    <div className="w-full min-h-screen bg-amber-50 px-6 py-12 flex flex-col items-center font-serif">
      {/* Header */}
      <div className="w-full max-w-6xl border-b-2 border-amber-800 pb-6 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 leading-tight">
          Post-War to Modern Era: Changes in Gender Roles in the Philippines
        </h1>
        <p className="text-amber-600 text-sm">Module Content Output (MCO)</p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl bg-amber-100 border-l-4 border-amber-700 pl-6 py-4 mb-10 text-amber-800 text-justify">
        <p className="text-sm md:text-base">
          This module explores the evolution of gender roles in the Philippines,
          tracing developments from the post-war period to the contemporary era.
          It examines the profound social, economic, and cultural shifts that
          shaped how men and women engage in family life, education, work,
          leadership, and broader society today.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-14 text-amber-900 text-base md:text-lg leading-relaxed text-justify">
        {/* Post-War Changes in Society */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Post-War Changes in Society
          </h2>
          <p>
            After World War II, the Philippines faced the enormous task of
            rebuilding not only its cities and infrastructure but also the
            social fabric of its communities. Women who had participated
            actively in wartime efforts continued to play crucial roles in
            societal recovery, demonstrating resilience and leadership. This era
            opened doors for greater participation in education, employment, and
            community initiatives, gradually shifting traditional expectations
            of women’s roles and planting the seeds for future gender equality.
          </p>
        </section>

        {/* Women in Leadership and Education */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Women in Leadership and Education
          </h2>
          <p>
            In the decades following the war, women increasingly stepped into
            leadership positions, both in schools and local government. Their
            growing presence challenged existing norms and inspired communities
            to embrace more inclusive decision-making processes. Access to
            education and professional opportunities expanded, fostering a
            generation of women who were confident, capable, and determined to
            shape society alongside their male counterparts.
          </p>
        </section>

        {/* Economic Growth and New Gender Expectations */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Economic Growth and New Gender Expectations
          </h2>
          <p>
            As the Philippines experienced economic growth and urbanization,
            traditional gender roles began to evolve significantly. More women
            entered the workforce, taking on roles in commerce, education, and
            public service, while men increasingly shared household
            responsibilities. Media and urban life also contributed to shifting
            perceptions of femininity and masculinity, encouraging a more
            dynamic understanding of what it meant to be male or female in
            modern Filipino society.
          </p>
        </section>

        {/* Modern Gender Movements and LGBTQ+ Visibility */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Modern Gender Movements and LGBTQ+ Visibility
          </h2>
          <p>
            From the 1980s onward, grassroots movements and advocacy groups
            emerged to promote gender equality and LGBTQ+ rights, sparking
            national conversations about inclusion, fairness, and
            representation. These movements emphasized the importance of
            respecting diversity in schools, workplaces, and government
            institutions, helping to dismantle long-standing stereotypes and
            empowering individuals to embrace their identities openly.
          </p>

          {/* Video */}
          <div className="mt-6">
            <div className="bg-amber-800 text-white p-3 rounded-t-lg text-sm font-semibold">
              Video: Modern Gender Movements in the Philippines
            </div>
            <div className="w-full aspect-video border border-amber-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ibIuvJUvUk4"
                title="Gender Movements Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Challenges and Improvements */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 pb-2 border-b border-amber-200">
            Challenges and Progress
          </h2>
          <p>
            Despite notable progress, Filipinos continue to confront challenges
            such as persistent gender stereotypes, unequal access to certain
            professions, and social biases. At the same time, legislation,
            educational programs, and advocacy campaigns have made significant
            strides in promoting gender equality, ensuring fair treatment, and
            encouraging more equitable participation in all areas of society.
            These ongoing efforts reflect a collective commitment to building a
            more inclusive and just future.
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-700">
          <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-3">
            Conclusion
          </h3>
          <p>
            From the post-war era to the present day, gender roles in the
            Philippines have evolved significantly, shaped by social movements,
            economic changes, and cultural shifts. Today, Filipinos enjoy
            greater freedom to define their paths, with increasing opportunities
            for both men and women to participate equally in family, work, and
            public life. Society continues to move toward broader inclusion,
            equality, and respect for diversity, reflecting the resilience and
            adaptability of its people.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PostWarToModern;
