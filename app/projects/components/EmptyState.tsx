interface EmptyStateProps {
  category: string;
  emoji: string;
  description: string;
}

export default function EmptyState({ category, emoji, description }: EmptyStateProps) {
  return (
    <div
      className="text-center py-16 px-4 rounded-lg"
      style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
    >
      <div className="text-6xl mb-4">{emoji}</div>
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: 'var(--theme-text)' }}
      >
        {category}
      </h3>
      <p
        className="text-base mb-4 max-w-2xl mx-auto"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        {description}
      </p>
      <p
        className="text-sm italic"
        style={{ color: 'var(--theme-text-tertiary)' }}
      >
        Projects coming soon. Check back later!
      </p>
    </div>
  );
}
