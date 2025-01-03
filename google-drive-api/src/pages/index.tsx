import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
type Folder = {
  id: string;
  name: string;
};

const Home = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const res = await fetch("/api/get-all-folders");
      const data = await res.json();
      setFolders(data);
    };

    fetchFolders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar uname="Sanidhya Tulsinandan" />
      <h1 className="text-2xl font-bold mb-4 mt-12">JobsWorthy Students Folder List</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-3/5 p-4 border border-gray-300 text-left">
              Folder Name
            </th>
            <th className="w-1/5 p-4 border border-gray-300 text-left">
              Folder Link
            </th>
            <th className="w-1/5 p-4 border border-gray-300 text-left">
              PortFolio Link
            </th>
          </tr>
        </thead>
        <tbody>
          {folders.map((folder) => (
            <tr key={folder.id}>
              <td className="p-4 border border-gray-300">{folder.name}</td>
              <td className="p-4 border border-gray-300">
                <a
                  href={`https://drive.google.com/drive/folders/${folder.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Open Folder
                </a>
              </td>
              <td className="p-4 border border-gray-300">
                <Link href={`/${folder.name}?id=${folder.id}`} className="text-[#40348C]">
                  PortFolio Link
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
