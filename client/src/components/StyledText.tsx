interface StyledTextProps {
  children: string;
  className?: string;
}

export function StyledText({ children, className = "" }: StyledTextProps) {
  const parts = children.split(/(ﷺ)/g);
  
  return (
    <span className={className}>
      {parts.map((part, index) => 
        part === "ﷺ" ? (
          <span 
            key={index}
            className="text-amber-600 dark:text-amber-400" 
            style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}
          >
            &#xFDFA;
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
}

export function StyledSaw() {
  return (
    <span 
      className="text-amber-600 dark:text-amber-400" 
      style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}
    >
      &#xFDFA;
    </span>
  );
}
