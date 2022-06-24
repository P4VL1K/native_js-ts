import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        const result = event.currentTarget.name
        console.log(result)
    }
    const saveUser = () => {
        alert('user saved')
    }

    const nameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const res = event.currentTarget.value
        console.log(res)
    }


    return <div>TASK
        <textarea onChange={nameChanged}>Pasha</textarea>
        <input/>
        <button name={'Pasha'} onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}