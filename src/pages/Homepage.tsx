import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import { AiFillEye, AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

import { TaskTypes } from "../utils/types/task";

import { TodoistApi } from "@doist/todoist-api-typescript";
import { Link, useNavigate } from "react-router-dom";

const api = new TodoistApi("bd9960cea0b7a7a4690f9ee834170209306d873f");

const Homepage = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<TaskTypes[]>([]);
  const [finished, setFinished] = useState<boolean>(false);

  function getTasks() {
    api
      .getTasks()
      .then((tasks) => {
        setDatas(tasks);
        console.log(tasks);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTasks();
  }, []);

  function onClickDetail(id: number) {
    navigate(`/task/${id}`);
  }

  function onClickEdit(id: number) {
    navigate(`/edit-task/${id}`);
  }

  function onClickFinished() {
    setFinished(!finished);
  }

  function finishTask(id: number) {
    api
      .closeTask(`${id}`)
      .then((isSuccess) => {
        console.log(isSuccess);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="flex justify-center my-20">
        <div className="overflow-x-auto w-3/4">
          <div className="flex justify-end mb-5">
            <Link to={"add-task"} className="btn">
              Add Task
            </Link>
          </div>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Content</th>
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((data: any, index) => {
                return (
                  <tr key={index}>
                    <th></th>
                    <td>
                      <p key={index} className={finished ? "complete cursor-pointer" : "cursor-pointer"} onClick={() => onClickFinished()}>
                        {data.content.substring(0, 10)}...
                      </p>
                    </td>
                    <td>{data.createdAt.substring(0, 10)}</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-square btn-sm" onClick={() => onClickDetail(data.id)}>
                          <AiFillEye />
                        </button>
                        <button className="btn btn-square btn-sm" onClick={() => onClickEdit(data.id)}>
                          <AiFillEdit />
                        </button>
                        <button className="btn btn-square btn-sm" onClick={() => finishTask(data.id)}>
                          <AiFillCheckCircle />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
