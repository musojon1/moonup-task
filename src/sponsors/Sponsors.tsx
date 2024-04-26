import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Table } from "./Table";
import Filter from "./Filter";

export interface IUser {
  id?: number;
  full_name: "string";
  phone: "string";
  sum: number;
  spent: number;
  payment_type: { id?: number; title: string };
  firm?: "string";
  created_at?: "string";
  get_status_display?: "string";
  comment?: "string";
}

function Sponsors() {
  const [users, setUsers] = useState<IUser[]>();

  const fetchData = async (search: string) => {
    const { data } = await axios.get(
      `https://club.metsenat.uz/api/v1/sponsor-list/?saerch=${search}`
    );
    setUsers(data?.results);
  };
  useEffect(() => {
    fetchData("");
  }, []);
  return (
    <>
      <Nav />
      <Filter fetchData={fetchData} />
      <div className="p-3">
        <Table users={users} />
      </div>
    </>
  );
}

export default Sponsors;
