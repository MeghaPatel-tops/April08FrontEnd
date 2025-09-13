import React, { useState } from 'react'

import styled from 'styled-components'

const MainDiv = styled.div`
     height: 400px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction:column;
        gap:100px;

     th,td{
            border:1px solid black;
            padding:5px 
     }   
        
        
`;

function Todo() {
    const [taskList,setTaskList] = useState([]);
    const [task,setTask]= useState("");
    const [editid,setEditid]=useState(null)

    const handleChange = (e)=>{
        setTask(e.target.value);
    }

    const handleClick = ()=>{
        if(editid != null){
            let newArray = taskList;
            newArray[editid]=task;
            setTaskList(newArray)
        }
       else{
         console.log(taskList);
       setTaskList([...taskList,task]); 
      
       }
        setTask("");   
       console.log("task",task);
       
    }

    const delTask = (id)=>{
        alert(id)
        let newArray = taskList.filter((index,item)=>{
            if(item != id){
                return index;
            }
        })
         setTaskList(newArray)     
    }

    const editTask=(id)=>{
        alert(taskList[id])
        setTask(taskList[id]);
        setEditid(id);
        
    }

    

  return (
    <div >
        <MainDiv>
          
        <fieldset>
            <legend>Add Todo</legend>
            <label htmlFor="">Enter Task</label>
            <input type="text" name="taskname" id="" onChange={handleChange} value={task}/>
            <button onClick={handleClick}>Add</button>
        </fieldset>

        <table>
            <thead>
                <tr>
                    <th>Srno</th>
                    <th>Task Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        taskList &&

                        taskList.map((index,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{index}</td>
                                <td><button onClick={()=>{
                                    delTask(i)
                                }}>Delete</button></td>
                                 <td><button onClick={()=>{
                                    editTask(i)
                                }}>Edit</button></td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
        </MainDiv>
    </div>
  )
}

export default Todo