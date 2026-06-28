import { useState } from "react";

const Sidebar = ({ toc, expanded, toggleSection, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full border-b border-[#d8c8a3] bg-[#fffaf1] lg:fixed lg:left-0 lg:top-0 lg:z-20 lg:flex lg:h-screen lg:w-[320px] lg:min-w-[320px] lg:flex-col lg:overflow-hidden lg:border-b-0 lg:border-r lg:border-[#d8c8a3]">
      <div className="flex items-center justify-between border-b border-[#d8c8a3] bg-[#fffaf1]/95 px-5 py-5 backdrop-blur">
        <div>
          <div className="text-[1.45rem] font-bold tracking-[0.03em] text-[#a67c2f]">
            🌙 ঘুম
          </div>
          <div className="mt-1 text-[0.75rem] uppercase tracking-[0.25em] text-[#7b6a4f]">
            ইসলামিক রেফারেন্স গ্রন্থ
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl border border-[#d8c8a3] bg-white px-3 py-2 text-[0.85rem] font-semibold text-[#8a6f40] shadow-sm lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "বন্ধ" : "মেনু"}
        </button>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} lg:block lg:flex-1 lg:min-h-0`}
      >
        <nav className="min-h-0 overflow-y-auto py-3 [scrollbar-thin] [scrollbar-color:rgba(166,124,47,0.55)_transparent] lg:max-h-[calc(100vh-88px)]">
          {toc.map((section) => (
            <div
              key={section.id}
              className="mb-2 rounded-2xl border border-[#eadfc8] bg-white/80 p-2 shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[0.95rem] font-semibold text-[#8a6f40] transition hover:bg-[#f7e8c6]"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.label}</span>
                <span
                  className={`text-[0.75rem] transition ${expanded[section.id] ? "rotate-90" : ""}`}
                >
                  ▶
                </span>
              </button>

              {expanded[section.id] && (
                <div className="mt-1 space-y-1 pb-1">
                  {section.children.map((child) => (
                    <button
                      key={child.id}
                      type="button"
                      className="block w-full rounded-lg px-4 py-2.25 text-left text-[0.92rem] leading-6 text-[#5f5f5f] transition hover:bg-[#fff2d9] hover:text-[#7a5728]"
                      onClick={() => scrollTo(child.id)}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
