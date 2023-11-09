import "./Select.scss";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export interface SelectProps {
  selectName: string;
  data: string[];
  label: string;
  styles: object;
}

export const Select = ({ selectName, data, label, styles }: SelectProps) => {
  const [selectedValue, setSelectValue] = useState("Filter by status");

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setSelectValue(e.target.value);
  };

  // dodac arrayke z obiektami.
  return (
    <>
      <InputLabel>{selectName}</InputLabel>
      <MuiSelect
        placeholder="Nazwa"
        sx={styles}
        label={label}
        value={selectedValue}
        onChange={handleSelect}
      >
        {data?.map((singleData, index) => (
          <MenuItem key={index} value={singleData}>
            {singleData}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
};
