interface ColorSwatchProps {
  color: string;
  name: string;
  className: string;
  textDark?: boolean;
}

export function ColorSwatch({ color, name, className, textDark = false }: ColorSwatchProps) {
  return (
    <div>
      <div
        className={`h-24 rounded-lg border border-border flex items-end p-3 ${className}`}
      >
        <span className={`text-xs font-mono ${textDark ? 'text-foreground' : 'text-primary-foreground'}`}>
          {color}
        </span>
      </div>
      <p className="text-sm font-medium mt-2 text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground">{className}</p>
    </div>
  );
}
