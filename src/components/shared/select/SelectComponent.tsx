import "./Select.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export interface SelectProps {
  selectName: string;
  data: string[];
  label: string;
}

const styles = {
  minWidth: 250,
  marginTop: 5,
  color: "primary.light",
};

export const SelectComponent = ({ selectName, data, label }: SelectProps) => {
  const [selectValue, setSelectValue] = useState("Filter by status");

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <InputLabel>{selectName}</InputLabel>
      <Select
        sx={styles}
        label={label}
        value={selectValue}
        onChange={handleSelect}
      >
        {data?.map((singleData, index) => (
          <MenuItem key={index} value={singleData}>
            {singleData}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Select;
