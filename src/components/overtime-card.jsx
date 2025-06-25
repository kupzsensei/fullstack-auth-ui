export default function OvertimeCard({ data }) {
  return (
    <div className="flex flex-col gap-2 p-5 w-[400px] max-w-[400px] rounded-lg bg-blue-800 text-white">
      <p>requested by: {data.user.username} </p>
      <p>reason : {data.reason} </p>
      <p>time-in : {data.time_in}</p>
      <p>time-out : {data.time_out}</p>
      <p>files</p>
      <div>
        {data.files?.map((file) => (
          <a href={file.file.file} key={file.id}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1092/1092004.png"
              alt=""
              className="w-[50px]"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <button className="p-2 rounded-lg bg-gray-400">request approved</button>
        <button className="p-2 rounded-lg bg-gray-400">
          evidence approved
        </button>
      </div>
    </div>
  );
}
