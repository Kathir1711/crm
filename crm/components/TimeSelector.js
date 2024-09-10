import React from 'react';

const TimeSelector = ({ timeWindow, setTimeWindow }) => {
  const options = ['1 day', '1 week', '1 month', '1 year'];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select Time Window</label>
      <select
        value={timeWindow}
        onChange={(e) => setTimeWindow(e.target.value)}
        className="p-2 bg-white border rounded-lg"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
