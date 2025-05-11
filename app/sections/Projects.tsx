import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "企業形象網站",
      description:
        "使用 Next.js 和 Tailwind CSS 開發的現代化企業網站，具有完整的響應式設計和優秀的性能評分。",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/project1.jpg",
    },
    {
      title: "電子商務平台",
      description:
        "基於 React 和 Next.js 建構的完整電商解決方案，整合金流和庫存管理系統。",
      tech: ["React", "Next.js", "TypeScript", "Prisma"],
      image: "/project2.jpg",
    },
    {
      title: "數據儀表板",
      description:
        "為客戶開發的實時數據視覺化儀表板，具有豐富的圖表和分析功能。",
      tech: ["React", "TypeScript", "D3.js"],
      image: "/project3.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            精選作品
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            展示一些我近期完成的專案作品
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-100" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
