export function Button({ children, ...props }) {
  return (
    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" {...props}>
      {children}
    </button>
  );
}
