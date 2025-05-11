export default function Services() {
  const services = [
    {
      title: "前端開發",
      description:
        "使用 React 和 Next.js 建立現代化的網頁應用，確保最佳效能和使用者體驗。",
      icon: "💻",
    },
    {
      title: "響應式設計",
      description: "運用 Tailwind CSS 打造完美適配各種設備的網站介面。",
      icon: "📱",
    },
    {
      title: "TypeScript 開發",
      description: "以 TypeScript 開發，提供更安全、更易維護的程式碼。",
      icon: "🔒",
    },
    {
      title: "網站優化",
      description: "改善網站效能、SEO 和可訪問性，提升使用者滿意度。",
      icon: "🚀",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            服務項目
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            提供專業的網站開發服務，為您的專案注入現代化的技術解決方案
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
