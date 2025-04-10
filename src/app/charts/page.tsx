"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartsPage() {
  const [data, setData] = useState<{ Name: string; visits: number; StPic?: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/getMostVisited");
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: data.slice(0, 10).map((item) => item.Name),
    datasets: [
      {
        label: "Visits",
        data: data.slice(0, 10).map((item) => item.visits),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Top 10 Most Visited Users",
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-14 p-24 w-screen">
       <h1 className=" text-6xl font-extrabold noto-sans-bold  ">
          Most
          <span className="gradient-text"> Visited</span>
        </h1>
      {/* Bar Graph */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full md:w-2/3">
          <Bar data={chartData} options={options} />
        </div>
      )}

      {/* List of Users */}
      {!loading && (
        <div className="w-full md:w-2/3 mt-12">
          <h2 className="text-2xl font-semibold mb-4">User Visits</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">User</th>
                  <th className="px-4 py-2 text-right">Visits</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2 flex items-center gap-4">
                      <img
                        src={user.StPic?.replace("~", "https://acad.iitr.ac.in/") || "https://via.placeholder.com/150"}
                        alt={`pfp`}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-bold">{user.Name}</span>
                    </td>
                    <td className="px-4 py-2 text-right">{user.visits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
