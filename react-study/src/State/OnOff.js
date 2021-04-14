import React, {useState} from "react";
import styled from 'styled-components';

const Button = styled.button`
    font-size: 14px;
    color: #FFFFFF;
    background-color: #A593E0;
    border-radius: 2px;
    border: 0;
    padding: 10px;
    text-decoration : none;
`;

function OnOff() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Button onCLick={() =>{setOpen(open)}}>{open ? "open" : "close"}</Button>
        </>
    );
}

export default OnOff;