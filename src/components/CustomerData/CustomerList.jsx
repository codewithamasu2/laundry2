import CustomerItem from "./CustomerItem";
import React from "react";
export default function CustomerList({ customers, selectedId, onSelect }) {
  return (
    <div>
      {customers.map((c, idx) => (
        <React.Fragment key={c.id}>
          <CustomerItem
            customer={c}
            selectedId={selectedId}
            onSelect={onSelect}
          />
          {idx < customers.length - 1 && <hr className="border-gray-200" />}
        </React.Fragment>
      ))}
    </div>
  );
}
