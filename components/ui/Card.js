export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-bg-card border border-border rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
