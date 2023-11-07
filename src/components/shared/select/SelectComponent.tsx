import "./Select.scss";
import Select from "@mui/material/Select";
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
};

export const SelectComponent = ({ selectName, data, label }: SelectProps) => {
  const [selectValue, setSelectValue] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value as string);
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
