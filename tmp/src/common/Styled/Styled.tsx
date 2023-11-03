import React from "react";
import { styled } from "@linaria/react";

export const ContentSC = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 48em;
    box-shadow: 0 4px 4px 0 #00000040, 0 2px 2px 0 #00000066 inset;
    display: flex;
    align-items: center;
    background: red;
`;

export function Styled() {
    return <ContentSC/>;
}
