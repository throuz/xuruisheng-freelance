import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-gray-900">
              徐叡陞
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900"
            >
              服務項目
            </Link>
            <Link
              href="#experience"
              className="text-gray-600 hover:text-gray-900"
            >
              工作經驗
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              聯絡我
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
