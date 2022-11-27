import React, { useState } from "react";

import SearchFieldView from "./view";

interface Props {
  onChange: (value: string) => void;
}

// TODO: add x to clear
// TODO: expand modal input to allow multiple lines

const SearchFieldContainer = ({ onChange }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleChange = (val: string) => {
    setValue(val);
    onChange && onChange(val);
  };

  const handleClear = () => {
    setValue("");
  };

  // ref not working for styling
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <SearchFieldView
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
      onClear={handleClear}
    />
  );
};

export default SearchFieldContainer;
