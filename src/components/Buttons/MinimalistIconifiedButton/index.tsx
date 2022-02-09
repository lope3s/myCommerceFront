import React from "react";
import { Button } from "./style";

interface IMinimalistButton {
    text: string;
}

const MinimalistIconifiedButton: React.FC<IMinimalistButton> = ({
    text,
    children,
}) => {
    return (
        <Button data-testid="button">
            {children}
            {text}
        </Button>
    );
};

export default MinimalistIconifiedButton;
