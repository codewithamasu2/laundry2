export default function ItemSummaryCard({ qty }) {
  return (
    <div className="bg-white rounded-xl shadow-md mb-4 px-4 py-3">
      <div className="flex justify-between border-b py-1">
        <span>T-Shirt</span>
        <span>x{qty.tshirt}</span>
      </div>
      <div className="flex justify-between border-b py-1">
        <span>Shirt</span>
        <span>x{qty.shirt}</span>
      </div>
      <div className="flex justify-between border-b py-1">
        <span>Pants</span>
        <span>x{qty.pants}</span>
      </div>
      <div className="flex justify-between border-b py-1">
        <span>Jacket</span>
        <span>x{qty.jacket}</span>
      </div>
      <div className="flex justify-between border-b py-1">
        <span>Underwear</span>
        <span>x{qty.underwear}</span>
      </div>
      <div>
        <div className="flex justify-between py-1 font-semibold">
          <span>Bedding</span>
          <span>
            x{Object.values(qty.bedding || {}).reduce((a, b) => a + b, 0)}
          </span>
        </div>
        <div className="ml-3 border-l pl-3 text-sm space-y-1">
          {Object.entries(qty.bedding || {}).map(
            ([name, val]) =>
              val > 0 && (
                <div key={name} className="flex justify-between items-center">
                  <span>
                    {name} <span className="text-xs">x{val}</span>
                  </span>
                  {name === "Bed Cover" && (
                    <span className="text-xs font-semibold text-gray-600">
                      Rp. 20.000
                    </span>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
