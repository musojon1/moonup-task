import { ChangeEvent, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Table } from "./table/Table";
import Filter from "./filter/Filter";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://club.metsenat.uz/api/v1/sponsor-list/?saerch=${
        params.get("search") ?? ""
      }&page=${params.get("page") ?? 1}`
    );
    setUsers(data?.results);
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    navigate(
      `/sponsors?search=${event.target.value}&page=${params.get("page") ?? 1}`
    );
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, [params.get("search"), params.get("page")]);
  return (
    <>
      <Nav />
      <Filter onChangeSearch={onChangeSearch} />
      <Table users={users} />
    </>
  );
}

export default Sponsors;
