import { Link } from "react-router-dom";
import { withAuth } from "./hoc/hoc-withAuth";
import { useVerifyToken } from "./hooks/useVerifyToken";
import { useEffect, useRef, useState } from "react";
import { getOTRequestAPI, getUserAPI, requestOvertimAPI } from "./api";

function App() {
  const [otform, setOtform] = useState(false);
  const formRef = useRef(null);

  const toggleOTFORM = () => {
    setOtform(!otform);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserAPI().then((res) => setUsers(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData(formRef.current);

    for (let [key, value] of postData.entries()) {
      console.log(`${key}: ${value}`);
    }

    requestOvertimAPI(postData).then((res) => console.log(res));
  };

  useEffect(() => {
    getOTRequestAPI().then((res) => console.log(res));
  }, []);

  return (
    <main className="w-screen h-screen bg-amber-200 flex flex-col">
      <div className="flex gap-5 justify-between items-center  bg-blue-300 px-3 py-1">
        <h1 className="text-center font-bold text-2xl">Simple Dashboard</h1>
        <button
          onClick={toggleOTFORM}
          className="border border-gray-400 p-2 bg-blue-400"
        >
          request OT
        </button>
      </div>
      <section className="flex-1 min-h-0 min-w-0 flex gap-5">
        <div className="flex flex-col gap-3 p-5 border-r border-gray-500">
          <Link to={""}>Overtime Request</Link>
          <Link to={""}>Overtime Request</Link>
          <Link to={""}>Overtime Request</Link>
          <Link to={""}>Overtime Request</Link>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-center items-center">
          <h1>welcome</h1>
        </div>
      </section>
      {/* dialog */}
      {otform && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex flex-col gap-5 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="bg-white rounded-sm flex flex-col gap-3 p-5"
          >
            <select name="supervisor" className="border border-gray-400 p-2">
              {users?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
            <textarea
              name="reason"
              placeholder="Reason for Overtime"
              className="border border-gray-400 p-2"
            />
            {/* <input
              name="file"
              type="file"
              multiple
              className="border border-gray-400 p-2"
            /> */}
            <input
              name="time_in"
              type="time"
              placeholder="time-in"
              className="border border-gray-400 p-2"
            />
            <input
              name="time_out"
              type="time"
              placeholder="time-out"
              className="border border-gray-400 p-2"
            />
            <input
              type="submit"
              value={"submit"}
              className="border border-gray-400 p-2 bg-blue-400"
            />
          </form>
          <button
            onClick={toggleOTFORM}
            className="bg-red-600 p-5 rounded-sm font-bold text-white cursor-pointer"
          >
            close
          </button>
        </div>
      )}
    </main>
  );
}

export default withAuth(App);
