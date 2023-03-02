import React, { useEffect, useState } from "react";

import { TodoistApi } from "@doist/todoist-api-typescript";
import { useNavigate, useParams } from "react-router-dom";

const api = new TodoistApi("bd9960cea0b7a7a4690f9ee834170209306d873f");

const EditTask = () => {
  const { id_task } = useParams();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [due, setDue] = useState<string>("");
  const [priority, setPriority] = useState<number>();

  const navigate = useNavigate();

  function getTask() {
    api
      .getTask(`${id_task}`)
      .then((task) => {
        setName(task.content);
        setDescription(task.description);
        setPriority(task.priority);
        console.log(task);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTask();
  }, []);

  function editTask() {
    api
      .updateTask(`${id_task}`, {
        content: name,
        description: description,
        dueString: due,
        priority: priority,
      })
      .then((isSuccess) => {
        console.log(isSuccess);
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="form-control">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Task name" className="mb-5 w-full input input-bordered" />

        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mb-5 w-full textarea textarea-bordered" placeholder="Description"></textarea>

        <input onChange={(e) => setDue(e.target.value)} type="text" placeholder="Due" className="mb-5 w-full input input-bordered" />

        <input value={priority} onChange={(e) => setPriority(e.target.valueAsNumber)} type="number" placeholder="Priority" className="mb-5 w-full input input-bordered" />
        <button className="btn" onClick={editTask}>
          Edit Task
        </button>
      </div>
    </div>
  );
};

export default EditTask;
