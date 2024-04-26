import { FC } from "react";
import { IUser } from "./Sponsors";

export const Table: FC<{ users: IUser[] | undefined }> = ({ users }) => {
  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">F.I.Sh.</th>
          <th className="px-4 py-2">Tel.Raqami</th>
          <th className="px-4 py-2">Homiylik summasi</th>
          <th className="px-4 py-2">Sarflangan summa</th>
          <th className="px-4 py-2">Sana</th>
          <th className="px-4 py-2">Holati</th>
        </tr>
      </thead>
      <tbody className="rounded">
        {users?.map((user, index) => (
          <UserRow key={user.id} user={user} index={index} />
        ))}
      </tbody>
    </table>
  );
};

const UserRow: React.FC<{ user: IUser; index: number }> = ({ user, index }) => {
  return (
    <tr className="rounded bg-white">
      <td className="px-4 py-2">{index}</td>
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
