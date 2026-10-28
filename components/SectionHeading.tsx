export default function SectionHeading({ index, eyebrow, title, description, light = false }: { index?: string; eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <header className={`heading${light ? ' heading--light' : ''}`}>
      {(index || eyebrow) && (
        <p className="kicker">{index && <span className="kicker__num">{index}</span>}{eyebrow}</p>
      )}
      <h2>{title}</h2>
      {description && <p className="heading__lede">{description}</p>}
    </header>
  );
}
