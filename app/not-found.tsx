import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-950 px-6">
      <p className="text-electric text-sm tracking-[0.3em] uppercase mb-4">
        404
      </p>
      <h1 className="text-6xl md:text-8xl font-black text-text-primary tracking-tight mb-6">
        页面未找到
      </h1>
      <p className="text-text-secondary text-lg max-w-md text-center mb-10">
        你访问的页面不存在或已被移除
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-electric text-dark-950 font-semibold text-sm tracking-wide hover:bg-electric-dim transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
