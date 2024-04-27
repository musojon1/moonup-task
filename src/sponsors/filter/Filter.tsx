import { ChangeEvent } from "react";
import ButtonGroup from "./ButtonGroup";

function Filter({
  onChangeSearch,
}: {
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="bg-white p-4 flex"
      style={{ justifyContent: "space-between" }}
    >
      <ButtonGroup />
      <input
        type="text"
        name="search"
        placeholder="Izlash"
        onChange={onChangeSearch}
        className="border rounded-md p-2"
        style={{ backgroundColor: "#E8E8E8" }}
      />
    </div>
  );
}

export default Filter;
