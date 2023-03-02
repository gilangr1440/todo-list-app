import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskType } from "../utils/types/task";

import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi("bd9960cea0b7a7a4690f9ee834170209306d873f");

const Detail = () => {
  const { id_task } = useParams();
  const [data, setData] = useState<TaskType>({});

  function getTask() {
    api
      .getTask(`${id_task}`)
      .then((task) => {
        setData(task);
        console.log(task);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.content}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
