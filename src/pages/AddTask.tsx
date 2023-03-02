import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi("bd9960cea0b7a7a4690f9ee834170209306d873f");

const AddTask = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [due, setDue] = useState<string>("");
  const [priority, setPriority] = useState<number>();

  const navigate = useNavigate();

  function submit() {
    api
      .addTask({
        content: name,
        description: description,
        dueString: due,
        priority: priority,
      })
      .then((task) => {
        console.log(task);
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="form-control">
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Task name" className="mb-5 w-full input input-bordered" />

        <textarea onChange={(e) => setDescription(e.target.value)} className="mb-5 w-full textarea textarea-bordered" placeholder="Description"></textarea>

        <input onChange={(e) => setDue(e.target.value)} type="text" placeholder="Due" className="mb-5 w-full input input-bordered" />

        <input onChange={(e) => setPriority(e.target.valueAsNumber)} type="number" placeholder="Priority" className="mb-5 w-full input input-bordered" />

        <button className="btn" onClick={submit}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
