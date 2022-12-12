import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

export default function DataAttendance() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const token = JSON.parse(accessToken);
    const instance = axios.create({
      baseURL: "https://test.nexisltd.com/",

      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const getData = async () => {
      setIsLoading(true);
      const userData = await instance.get("/test");
      setUsers(userData.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  let transformData = (inp) => {
    let out = [];
    for (let person of Object.values(inp)) {
      for (let date of Object.keys(person.attendance)) {
        out.push({
          name: person.name,
          date: date,
          status: person.attendance[date].status,
        });
      }
    }
    out = out.sort((a, b) => {
      return a.date > b.date;
    });

    return out;
  };

  const resultData = transformData(users);

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <div className="flex justify-center align-middle mt-[100px]">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="w-full mobile:w-11/12 md:w-9/12 lg:w-7/12  p-[20px] mx-auto space-y-[20px]">
            <div className="columns-3 items-center font-medium text-base text-[#000] pb-[10px]">
              <div className="w-2/5 mobile:w-1/3 flex justify-start"> Date</div>
              <div className="w-2/5 mobile:w-1/3 whitespace-normal mobile:whitespace-nowrap flex justify-start">
                Employee Name
              </div>
              <div className="w-1/5 mobile:w-1/3 flex justify-end items-end ml-auto">
                Status
              </div>
            </div>
            {resultData?.map((users, index) => (
              <div key={index}>
                <div className="columns-3 flex items-baseline text-medium font-normal text-[#000]">
                  <div className="space-y-[40px] w-1/3 mobile:w-1/3 flex flex-col items-start">
                    {users.date}
                  </div>
                  <div className="space-y-[40px] w-1/3 mobile:w-1/3 mx-auto flex flex-col items-start">
                    {users.name}
                  </div>

                  <div className="space-y-[40px] w-1/3 mobile:w-1/3 flex flex-col items-end">
                    {users.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
