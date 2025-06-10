const LABELS = {
  tshirt: "T-Shirt",
  shirt: "Shirt",
  pants: "Pants",
  jacket: "Jacket",
  underwear: "Underwear",
};

export default function InvoiceItemList({ qty }) {
  return (
    <div className="bg-white rounded-lg shadow px-4 py-3 mb-4">
      {Object.keys(LABELS).map((key) =>
        qty[key] > 0 ? (
          <div
            className="flex justify-between border-b last:border-b-0 py-1"
            key={key}
          >
            <span>{LABELS[key]}</span>
            <span className="font-semibold">x{qty[key]}</span>
          </div>
        ) : null
      )}
      {/* Bedding */}
      {qty.bedding &&
        Object.values(qty.bedding).reduce((a, b) => a + b, 0) > 0 && (
          <div className="mt-2">
            <span className="font-semibold">Bedding</span>
            <div className="ml-2 border-l pl-3 mt-1">
              {Object.entries(qty.bedding).map(
                ([name, val]) =>
                  val > 0 && (
                    <div
                      key={name}
                      className="flex justify-between text-sm mb-1"
                    >
                      <span>
                        {name} <span className="font-semibold">x{val}</span>
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
    </div>
  );
}
