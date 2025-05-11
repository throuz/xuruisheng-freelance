import { CheckIcon } from "../components/icons/CheckIcon";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "基礎網站開發",
      price: "NT$ 50,000 起",
      features: [
        "響應式單頁網站",
        "基礎 SEO 優化",
        "網站分析整合",
        "基礎表單功能",
        "免費維護 1 個月",
      ],
      description: "適合小型企業或個人的展示型網站",
    },
    {
      name: "進階網站開發",
      price: "NT$ 150,000 起",
      features: [
        "多頁面動態網站",
        "會員系統整合",
        "第三方 API 串接",
        "進階 SEO 優化",
        "後台管理系統",
        "免費維護 3 個月",
      ],
      description: "適合中型企業或電商網站",
    },
    {
      name: "客製化開發",
      price: "NT$ 300,000 起",
      features: [
        "完整專案規劃",
        "客製化功能開發",
        "系統架構設計",
        "效能最佳化",
        "完整技術文件",
        "免費維護 6 個月",
      ],
      description: "適合大型企業或特殊需求專案",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            服務方案
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            根據您的需求提供最適合的解決方案
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <p className="mt-8 text-3xl font-bold text-gray-900">
                  {plan.price}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-6 w-6 text-blue-500" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="block w-full rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 hover:border-blue-700"
                >
                  聯絡諮詢
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            * 實際價格會根據專案需求、功能複雜度和開發時程進行調整
          </p>
          <p className="mt-2 text-base text-gray-600">
            * 所有方案都包含完整原始碼和技術支援
          </p>
        </div>
      </div>
    </section>
  );
}
