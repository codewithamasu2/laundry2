export default function InputField({ type = "text", id, placeholder }) {
  return (
    <div className="mb-4">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#F3F3F3] border border-[#B4B4B4] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
      />
    </div>
  );
}
