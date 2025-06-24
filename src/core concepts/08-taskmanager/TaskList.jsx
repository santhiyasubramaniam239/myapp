export default function TaskList({tasks, toggleTask}){
    return <ul className="task-list">
        {tasks.map((task,index)=><li className={task['completed']==true && 'completed'} 
        key={index} onClick={()=>toggleTask(task['id'])}>{task['text']}</li>)}
        
    </ul>
}