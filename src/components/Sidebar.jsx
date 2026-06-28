const Sidebar = ({ toc, expanded, toggleSection, scrollTo }) => (
  <aside className="w-full border-b border-[#d8c8a3] bg-[#fffaf1] lg:sticky lg:top-0 lg:h-screen lg:w-[320px] lg:min-w-[320px] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-[#d8c8a3]">
    <div className="border-b border-[#d8c8a3] px-5 py-6">
      <div className="text-[1.45rem] font-bold tracking-[0.03em] text-[#a67c2f]">
        🌙 ঘুম
      </div>
      <div className="mt-1 text-[0.75rem] uppercase tracking-[0.25em] text-[#7b6a4f]">
        ইসলামিক রেফারেন্স গ্রন্থ
      </div>
    </div>

    <nav className="px-2 py-3">
      {toc.map((section) => (
        <div key={section.id} className="mb-1">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border border-transparent px-3 py-2.75 text-left text-[0.95rem] font-semibold text-[#8a6f40] transition hover:border-[#d8c8a3] hover:bg-[#f7e8c6]"
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.label}</span>
            <span
              className={`text-[0.7rem] transition ${expanded[section.id] ? "rotate-90" : ""}`}
            >
              ▶
            </span>
          </button>

          {expanded[section.id] && (
            <div className="mt-1 space-y-1 pb-2">
              {section.children.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  className="block w-full rounded-lg border border-transparent px-6 py-2.25 text-left text-[0.9rem] leading-6 text-[#5f5f5f] transition hover:border-[#d8c8a3] hover:bg-[#fff2d9] hover:text-[#7a5728]"
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
  </aside>
);

export default Sidebar;
