export default function ControlsButton({
  text,
  onClickHandler,
  bgClassName = "",
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`flex h-18 w-18 items-center justify-center rounded-full text-white ${bgClassName === "" ? "bg-red-500 hover:bg-red-600" : bgClassName} `}
    >
      {text}
    </button>
  );
}
