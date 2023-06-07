import React from "react";
import { Button, Item, Label, ListBox, SelectValue } from "react-aria-components";
import { StyledSelect, StyledPopover } from "./styles/reactAriaStyles";
const PrimarySelect = ({
  label,
  items,
  name,
  onSelectionChange,
  selectedKey
}) => {
  return /*#__PURE__*/React.createElement(StyledSelect, {
    onSelectionChange: onSelectionChange,
    items: items,
    name: name,
    selectedKey: selectedKey
  }, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(SelectValue, null), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u25BC")), /*#__PURE__*/React.createElement(StyledPopover, null, /*#__PURE__*/React.createElement(ListBox, null, items.map(item => /*#__PURE__*/React.createElement(Item, {
    key: item.id,
    value: item
  }, item.name)))));
};
export default PrimarySelect;