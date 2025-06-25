import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requesApprovalAPI } from "../api";

export default function OvertimeCard({ data }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: requesApprovalAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("overtime");
    },
  });

  const handleRequestApproval = () => {
    console.log(data.id, "wew");
    mutate({ id: data.id });
  };
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
        <button
          onClick={handleRequestApproval}
          className={`p-2 rounded-lg ${
            data.request_approval ? "bg-green-400" : "bg-gray-400"
          }`}
        >
          request approved
        </button>
        <button
          className={`p-2 rounded-lg ${
            data.evidence_approval ? "bg-green-400" : "bg-gray-400"
          }`}
        >
          evidence approved
        </button>
      </div>
    </div>
  );
}
