export function Card({ children, ...props }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 border" {...props}>
      {children}
    </div>
  );
}
