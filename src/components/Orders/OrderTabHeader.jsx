export default function OrderTabHeader({ tab, setTab }) {
  const TAB_LIST = [
    { key: "queue", label: "Queue" },
    { key: "on-going", label: "On-Going" },
    { key: "completed", label: "Completed" },
  ];
  return (
    <div className="bg-white pt-4">
      <h2 className="text-center text-xl font-bold text-[#213555] mb-3">
        Order
      </h2>
      <div className="flex justify-around border-b">
        {TAB_LIST.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-2 px-2 font-semibold text-base transition-all border-b-2
                ${
                  tab === t.key
                    ? "text-[#213555] border-[#213555]"
                    : "text-gray-400 border-transparent"
                }
                hover:text-[#213555] hover:font-bold hover:cursor-pointer`}
            style={{ minWidth: 80 }}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
