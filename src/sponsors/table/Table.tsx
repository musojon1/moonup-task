import { FC, useMemo } from "react";

import { IUser } from "../Sponsors";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";

export const Table: FC<{ users: IUser[] | undefined }> = ({ users }) => {
  return (
    <div className="pt-3">
      <table className="table">
        <tr>
          <th className="title">#</th>
          <th className="title">F.I.Sh.</th>
          <th className="title">Tel.Raqami</th>
          <th className="title">Homiylik summasi</th>
          <th className="title">Sarflangan summa</th>
          <th className="title">Sana</th>
          <th className="title">Holati</th>
        </tr>
        {users?.map((user, index) => (
          <UserRow key={user.id} user={user} index={index} />
        ))}
      </table>
      <Pagination currentPage={1} totalPages={100} />
    </div>
  );
};

const UserRow: React.FC<{ user: IUser; index: number }> = ({ user, index }) => {
  const { search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <tr className="rounded bg-white">
      <td className="px-4 py-2">
        {index + 1 + (+(params.get("page") ?? 1) - 1) * 10}
      </td>
      <td className="px-4 py-2">{user.full_name}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">{user.sum}</td>
      <td className="px-4 py-2">{user.spent}</td>
      <td className="px-4 py-2">
        {user?.created_at ? new Date(user?.created_at)?.toDateString() : ""}
      </td>
      <td className="px-4 py-2">{user.get_status_display}</td>
    </tr>
  );
};
