import React, { useState } from "react";
import './App.css';

function Todo(){
    let[todo,settodo]=useState([
        {
            "id":1,
            "name":"kavya"
        },
        {
            "id":2,
            "name":"pavan"
        }
    ])

    function Addme(){
        let a = document.getElementById("data1").value
        let newtodo = [...todo,{"name":a}]
        settodo(newtodo)
    }
    function clearBtn(val){
        let freshtodo = todo.filter((v)=>{
            return(
                v.name !== val
            )
        })
        settodo(freshtodo)
    }
    return(
        <div className="container mt-5 w-50">
            <div className="input-group ">
            <input type="text" className="form-control" id="data1"></input> 
            <button className="btn btn-success" onClick={()=>{Addme()}}>Add me</button>
            </div>
            <div>
                <ul className="list-group">
                    {
                        todo.map(
                            (e)=>{
                                return(
                                    <li className="list-group-item mt-2 ">
                                        <p>{e.name}</p>
                                        <button className="btn btn-danger" onClick={()=>{clearBtn(e.name)}}>clear</button>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Todo;
