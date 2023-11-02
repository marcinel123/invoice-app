import "./Select.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export interface SelectProps {
  selectName: string;
  data: string[];
}

const styles = {
  minWidth: 250,
};

export const SelectComponent = ({ selectName, data }: SelectProps) => {
  const [selectValue, setSelectValue] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <InputLabel>{selectName}</InputLabel>
      <Select
        sx={styles}
        label="None"
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
