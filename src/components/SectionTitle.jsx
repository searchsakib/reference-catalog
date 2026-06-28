const SectionTitle = ({ id, children }) => (
  <h2
    id={id}
    className="mb-5 border-b border-[#d8c8a3] pb-3 text-[1.45rem] font-bold text-[#8a6f40] scroll-mt-24"
  >
    {children}
  </h2>
);

const SubTitle = ({ id, children }) => (
  <h3
    id={id}
    className="mb-3 mt-7 text-[1.05rem] font-semibold text-[#2f7a67] scroll-mt-24"
  >
    {children}
  </h3>
);

export { SectionTitle, SubTitle };
