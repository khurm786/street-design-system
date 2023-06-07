import React, { Key } from "react";
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
declare const PrimarySelect: React.FunctionComponent<IPrimarySelectProps>;
export default PrimarySelect;
//# sourceMappingURL=PrimarySelect.d.ts.map