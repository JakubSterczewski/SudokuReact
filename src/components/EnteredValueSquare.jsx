export default function EnteredValueSquare({ value, className }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center text-5xl ${className}`}
    >
      {value}
    </div>
  );
}
