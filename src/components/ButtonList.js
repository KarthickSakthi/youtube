import React from "react";
import Button from "./Button";

export function ButtonList(){
    return(
        <div className="flex">
            <Button name={"All"}/>
            <Button name={"Gaming"}/>
            <Button name={"Songs"}/>
            <Button name={"Live"}/>
            <Button name={"Sports"}/>
            <Button name={"News"}/>
        </div>
    )
}