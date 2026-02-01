const Gear = ({
  size,
  className,
  teeth = 12,
}: {
  size: number;
  className?: string;
  teeth?: number;
}) => {
  const teethPath = Array.from({ length: teeth }, (_, i) => {
    const angle = (i * 360) / teeth;
    const rad = (angle * Math.PI) / 180;
    const innerR = size * 0.35;
    const outerR = size * 0.45;
    const toothWidth = 360 / teeth / 3;

    const x1 = Math.cos(((angle - toothWidth) * Math.PI) / 180) * innerR;
    const y1 = Math.sin(((angle - toothWidth) * Math.PI) / 180) * innerR;
    const x2 = Math.cos(((angle - toothWidth / 2) * Math.PI) / 180) * outerR;
    const y2 = Math.sin(((angle - toothWidth / 2) * Math.PI) / 180) * outerR;
    const x3 = Math.cos(((angle + toothWidth / 2) * Math.PI) / 180) * outerR;
    const y3 = Math.sin(((angle + toothWidth / 2) * Math.PI) / 180) * outerR;
    const x4 = Math.cos(((angle + toothWidth) * Math.PI) / 180) * innerR;
    const y4 = Math.sin(((angle + toothWidth) * Math.PI) / 180) * innerR;

    return `L ${x1 + size / 2} ${y1 + size / 2} L ${x2 + size / 2} ${y2 + size / 2} L ${x3 + size / 2} ${y3 + size / 2} L ${x4 + size / 2} ${y4 + size / 2}`;
  }).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <path
        d={`M ${size / 2 + size * 0.35} ${size / 2} ${teethPath} Z`}
        fill="currentColor"
        opacity="0.1"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.15}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.08}
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  );
};

const MechanicalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gear top-right */}
      <div className="absolute -top-20 -right-20 text-primary animate-gear">
        <Gear size={300} teeth={16} />
      </div>

      {/* Medium gear middle-left */}
      <div className="absolute top-1/3 -left-16 text-primary animate-gear-reverse">
        <Gear size={200} teeth={12} />
      </div>

      {/* Small gear bottom-right */}
      <div className="absolute bottom-1/4 right-20 text-primary animate-gear">
        <Gear size={120} teeth={10} />
      </div>

      {/* Floating bearing bottom-left */}
      <div className="absolute bottom-20 left-1/4 animate-float">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.1"
          />
          <circle
            cx="40"
            cy="40"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.1"
          />
          <circle
            cx="40"
            cy="40"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.15"
          />
          {/* Ball bearings */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle
              key={angle}
              cx={40 + Math.cos((angle * Math.PI) / 180) * 30}
              cy={40 + Math.sin((angle * Math.PI) / 180) * 30}
              r="4"
              fill="currentColor"
              opacity="0.1"
            />
          ))}
        </svg>
      </div>

      {/* Glowing accent circles */}
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
    </div>
  );
};

export default MechanicalBackground;
