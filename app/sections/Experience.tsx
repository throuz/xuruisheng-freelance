export default function Experience() {
  const experiences = [
    {
      period: "2021 - 現在",
      title: "資深前端工程師",
      company: "自由接案",
      description:
        "專注於開發高品質的網頁應用，為客戶提供客製化的解決方案。主要使用 React、Next.js 和 TypeScript。",
    },
    {
      period: "2019 - 2021",
      title: "前端工程師",
      company: "科技公司",
      description:
        "負責開發和維護大型企業級應用，使用 React 生態系統，並導入 TypeScript 提升程式碼品質。",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center">
          工作經驗
        </h2>
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {exp.period}
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">
                {exp.company}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
