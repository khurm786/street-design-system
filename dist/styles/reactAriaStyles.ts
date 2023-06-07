import { Select, Popover } from "react-aria-components";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  border-color: yellow;
  --border-color: var(--spectrum-alias-border-color);
  --border-color-disabled: var(--spectrum-alias-border-color-disabled);
  --text-color: var(--spectrum-alias-text-color);
  --text-color-disabled: var(--spectrum-alias-text-color-disabled);
  --focus-ring-color: slateblue;
`;

export const StyledPopover = styled(Popover)`
  --background-color: var(--page-background);
  --border-color: var(--spectrum-global-color-gray-400);

  border: 1px solid #000;
  min-width: var(--trigger-width);
  max-width: 250px;
  box-sizing: border-box;
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: #fff;
  outline: none;

  &[data-placement="top"] {
    --origin: translateY(8px);
  }

  &[data-placement="bottom"] {
    --origin: translateY(-8px);
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }
`;
