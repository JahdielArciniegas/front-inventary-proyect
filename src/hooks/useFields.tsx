import React, { useState, HTMLInputTypeAttribute } from "react";

const useFields = (
  initialState: unknown,
  type: HTMLInputTypeAttribute = "text"
) => {
  const [value, setValue] = useState(initialState);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const reset = () => {
    setValue(initialState);
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export default useFields;
