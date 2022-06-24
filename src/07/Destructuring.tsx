import React from "react";
import {AdressType, LessonsType} from "./destructuring.test";

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    adress: AdressType
}

type PropsType = {
    title: string
    man: ManType
    food: string
    time: number
}

export const ManComponent: React.FC<PropsType> = (props) => {


    const {title, man, ...restProps} = props

    return <div>
        <h1>{title}</h1>
        <h1>{props.food}</h1>
        <h1>{props.time}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}