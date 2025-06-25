import { useQuery } from "@tanstack/react-query";
import { getOTRequestAPI } from "../api";
import OvertimeCard from "../components/overtime-card";

export default function OvertimeTab() {
  const { data, isLoading } = useQuery({
    queryKey: ["overtime"],
    queryFn: getOTRequestAPI,
  });
  return (
    <main className="flex-1 flex flex-col min-h-0">
      <h1 className="font-bold text-xl mb-5">Overtime Request</h1>
      <div className="flex-1 flex gap-5 overflow-auto flex-wrap">
        {isLoading
          ? null
          : data?.map((obj) => <OvertimeCard key={obj.id} data={obj} />)}
      </div>
      {isLoading && <h1>Loading Data...</h1>}
    </main>
  );
}
