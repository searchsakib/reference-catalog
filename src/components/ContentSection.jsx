import { SectionTitle, SubTitle } from "./SectionTitle";
import ReferenceCard from "./ReferenceCard";

const ContentSection = ({ section, expanded }) => (
  <section className="mt-8 rounded-[28px] border border-[#e7dec8] bg-[#fcfbf7] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:p-8">
    <SectionTitle id={section.id}>{section.title}</SectionTitle>

    {section.subsections.map((subsection) => (
      <div key={subsection.id}>
        <SubTitle id={subsection.id}>{subsection.title}</SubTitle>
        <div className="space-y-4">
          {subsection.items.map((item) => (
            <ReferenceCard
              key={`${subsection.id}-${item.source}`}
              arabic={item.arabic}
              bangla={item.bangla}
              source={item.source}
              sourceUrl={item.sourceUrl}
              explanation={item.explanation}
              links={item.links || []}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default ContentSection;
