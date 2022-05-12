import React from 'react';
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'


const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "5px",
        background: "#29292a",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s, border-color .3s, color .3s",
        "&:hover":{
            backgroundColor: "#fb4424"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const CustomBtn = (props) => {
    return (
        <StyledButton>{props.txt}</StyledButton>
    );
};

export default CustomBtn;