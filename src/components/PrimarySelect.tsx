import React, { Key } from "react";
import {
  Button,
  Item,
  Label,
  ListBox,
  SelectValue,
} from "react-aria-components";
import { StyledSelect, StyledPopover } from "./styles/reactAriaStyles";

interface Items {
  name: string;
  id: Key;
}

export interface IPrimarySelectProps {
  label: string;
  items: Items[];
  name: string;
  onSelectionChange: (key: Key) => void;
  children?: JSX.Element;
  selectedKey?: Key;
}

const PrimarySelect: React.FunctionComponent<IPrimarySelectProps> = ({
  label,
  items,
  name,
  onSelectionChange,
  selectedKey,
}) => {
  return (
    <StyledSelect
      onSelectionChange={onSelectionChange}
      items={items}
      name={name}
      selectedKey={selectedKey}
    >
      <Label>{label}</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <StyledPopover>
        <ListBox>
          {items.map((item) => (
            <Item key={item.id} value={item}>
              {item.name}
            </Item>
          ))}
        </ListBox>
      </StyledPopover>
    </StyledSelect>
  );
};

export default PrimarySelect;
