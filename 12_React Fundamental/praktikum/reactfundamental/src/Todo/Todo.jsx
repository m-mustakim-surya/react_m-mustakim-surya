import "./Todo.css";
import { datas } from "./Data.jsx";

const Todo = () => {
    return (
        <div>
            <div className="header">
                <h1 className="title">To Do App</h1>
            </div>
            <div className="content">
                {datas.map((data) => (
                    <div className="list" key={data.id}>
                        {data.completed === true ? (<p className="completedTrue">{data.title}</p>) : (<p>{data.title}</p>)}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Todo;