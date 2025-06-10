export default function UseButton({ disabled, onClick }) {
  return (
    <div className="px-4 mt-4">
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full bg-white border border-[#213555] py-3 rounded-lg text-center disabled:opacity-50 hover:bg-[#213555] hover:text-white font-bold hover:cursor-pointer"
      >
        Use
      </button>
    </div>
  );
}
