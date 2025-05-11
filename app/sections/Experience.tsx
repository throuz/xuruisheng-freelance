export default function Experience() {
  const experiences = [
    {
      period: "2022年4月 - 至今",
      title: "前端工程師",
      company: "Apex Marketing Ltd",
      tags: ["遠端工作", "博弈產業"],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "負責開發和維護大型線上博弈平台的前端系統，使用現代化的 React 技術棧，專注於提供流暢的使用者體驗和高效能的網頁應用。",
    },
    {
      period: "2020年8月 - 2022年6月",
      title: "前端工程師",
      company: "Vangood Technology Ltd",
      tags: ["博弈產業"],
      skills: ["Vue", "TypeScript"],
      description:
        "使用 Vue 和 TypeScript 開發線上博弈平台，負責前端功能實作和系統優化，確保網站的穩定性和使用者體驗。",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
          工作經驗
        </h2>
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title} • {exp.company}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-blue-600">
                    {exp.period}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
