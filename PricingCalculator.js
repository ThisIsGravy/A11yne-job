import React, { useState } from "react";

const PricingCalculator = () => {
  const [users, setUsers] = useState(10);
  const [plan, setPlan] = useState("basic");

  const calculatePrice = () => {
    let basePrice = 100;
    if (plan === "pro") basePrice += 50;
    if (plan === "enterprise") basePrice += 150;

    return basePrice + users * 10;
  };

  return (
    <div>
      <h1>Pricing Calculator</h1>
      <label>
        Number of Users:
        <input type="number" value={users} onChange={(e) => setUsers(Number(e.target.value))} />
      </label>
      <label>
        Plan:
        <select value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </label>
      <p>Estimated Price: ${calculatePrice()}</p>
    </div>
  );
};

export default PricingCalculator;