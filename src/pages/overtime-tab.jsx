import { useQuery } from "@tanstack/react-query";
import { getOTRequestAPI } from "../api";

export default function OvertimeTab() {
  const { data, isLoading } = useQuery({
    queryKey: ["overtime"],
    queryFn: getOTRequestAPI,
  });
  return (
    <main className="flex-1 flex flex-col min-h-0">
      <h1 className="font-bold text-xl mb-5">Overtime Request</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>User</th>
            <th>Reason</th>
            <th>Time-in</th>
            <th>Time-out</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? null
            : data?.map((obj) => (
                <tr>
                  <td>{obj?.user.username}</td>
                  <td>{obj?.reason}</td>
                  <td>{obj?.time_in}</td>
                  <td>{obj?.time_out}</td>
                </tr>
              ))}
        </tbody>
      </table>
      {isLoading && <h1>Loading Data...</h1>}
    </main>
  );
}
