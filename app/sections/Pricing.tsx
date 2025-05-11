import { CheckIcon } from "../components/icons/CheckIcon";

export default function Pricing() {
  const pricingItems = [
    {
      name: "單頁切版（RWD）",
      price: "NT$ 6,000 起",
      features: [
        "依設計稿進行切版",
        "RWD 響應式設計",
        "基本互動效果（Hover、Active）",
        "跨瀏覽器相容性測試",
        "原始碼提交",
      ],
      description: "適合需要快速建立單一頁面的專案",
    },
    {
      name: "登入／註冊頁面",
      price: "NT$ 8,000 起",
      features: [
        "完整的表單驗證",
        "API 串接整合",
        "響應式設計（RWD）",
        "錯誤處理機制",
        "安全性考量",
      ],
      description: "適合需要會員系統的網站",
    },
    {
      name: "資料列表與編輯功能",
      price: "NT$ 10,000 起",
      features: [
        "完整 CRUD 功能",
        "分頁功能",
        "搜尋與篩選",
        "表單驗證",
        "API 串接整合",
      ],
      description: "適合需要資料管理功能的後台系統",
    },
  ];

  const hourlyServices = [
    {
      name: "小功能或修改",
      price: "NT$ 800/hr 起",
      description: "按鈕行為、UI 調整、小邏輯修改等",
    },
    {
      name: "全站前端開發",
      price: "專案估價",
      description: "含頁面切版、狀態管理、API 串接、部署等",
    },
    {
      name: "長期合作支援",
      price: "可另議",
      description: "可按週／月計費，提供穩定維運或功能開發支援",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            服務項目報價
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            透明的項目計價，為您的需求提供最適合的解決方案
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingItems.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <p className="mt-8 text-3xl font-bold text-gray-900">
                  {item.price}
                </p>
                <ul className="mt-8 space-y-4">
                  {item.features.map((feature) => (
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            其他服務項目
          </h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {hourlyServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-lg border border-gray-200 bg-gray-50"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {service.name}
                </h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <p className="mt-4 text-xl font-semibold text-blue-600">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            * 實際價格會根據專案需求、功能複雜度和開發時程進行調整
          </p>
          <p className="mt-2 text-base text-gray-600">
            * 所有方案都包含完整原始碼和基本技術支援
          </p>
          <p className="mt-2 text-base text-gray-600">
            * 可根據專案需求提供客製化報價
          </p>
        </div>
      </div>
    </section>
  );
}
