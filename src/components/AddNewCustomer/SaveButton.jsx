export default function SaveButton({ disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full border border-gray-300 shadow-lg font-semibold hover:bg-[#213555] text-[#000] py-3 rounded-lg text-center transition-colors duration-200 hover:cursor-pointer hover:text-white disabled:opacity-80 disabled:cursor-not-allowed"
    >
      Save Customer
    </button>
  );
}
