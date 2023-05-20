import React, { useState, createContext } from 'react'
import { BsTrash, BsFillPencilFill, BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

export const Usercontext = createContext()
const Todolist = () => {
    const [todolists, settodolists] = useState([]);
    const [inputTask, setInputTask] = useState("");
    const [edit, setedit] = useState(false);
    const [editItem, setEditItem] = useState(null);


    const handleSubmit = () => {
        if (!inputTask) {
            alert('Enter task')
        }
        else if (inputTask && edit) {
            todolists[editItem] = inputTask
            settodolists([...todolists])
            setInputTask("")

            setedit(!edit)
        }
        else {
            settodolists([...todolists, inputTask])
            setInputTask("")
        }

    }

    const handleDelete = (task) => {
        const newtask = todolists.filter((taskname) => task != taskname)
        settodolists([...newtask])
    }
    const handleEdit = (task, id) => {
        setedit(!edit)
        console.log(task, id)
        const newtask1 = todolists.find((ele) => ele == task)
        console.log(newtask1)
        setInputTask(newtask1)
        setEditItem(id)

    }


    return (
        <div className='d-flex justify-content-sm-center'>

            <table className='m-4'>
                <thead>
                    <tr>
                        <th>
                            <h1 style={{ backgroundColor: "#8294C4", }}>
                                Todolist App
                            </h1>
                        </th>
                        <th className='p-1 d-flex flex-column'>
                            <a href="https://github.com/Audi1372/Todolist">
                                <BsGithub style={{ fontSize: "30px", color: "black" }} />
                            </a>
                            <a href='https://todolist-nine-rust.vercel.app/'>
                                <SiNetlify style={{ fontSize: "30px", color: "black", paddingTop: "5px" }} />

                            </a>


                        </th>

                    </tr>

                </thead>
                <tbody>
                    <tr >
                        <td>
                            <input onChange={(e) => setInputTask(e.target.value)} placeholder='Addtask' value={inputTask} />
                        </td>
                        <td>
                            <button className="m-3" onClick={() => handleSubmit()}>{edit ? "Edit" : "Submit"}</button>

                        </td>
                    </tr>
                    {
                        todolists.length != 0 && todolists.map((task, id) => {
                            return (


                                <tr key={id}>
                                    <td className='button m-3'>{task}</td>
                                    <td>
                                        <BsFillPencilFill className='btn1 m-1' style={{ fontSize: "30px", color: "blue" }} onClick={() => handleEdit(task, id)} />
                                        <BsTrash className='btn1 m-1' style={{ fontSize: "30px", color: "red" }} onClick={() => handleDelete(task)} />
                                    </td>
                                </tr>

                            )
                        })}
                </tbody>
                <h5 style={{ color: "#025464", fontStyle: "italic" }}>Totaltasks:{todolists.length}</h5>




            </table>
        </div>

    )
}


export default Todolist
