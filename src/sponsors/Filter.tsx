function Filter({ fetchData }: { fetchData: (e: string) => void }) {
  return (
    <div
      className="bg-white p-4 flex"
      style={{ justifyContent: "space-between" }}
    >
      <button className="p-2 text-white" style={{ backgroundColor: "#3366FF" }}>
        HOMIYLAR
      </button>
      <input
        type="text"
        name="search"
        placeholder="Izlash"
        onChange={(event) => fetchData(event?.target?.value)}
        className="border rounded-md p-2"
        style={{ backgroundColor: "#E8E8E8" }}
      />
    </div>
  );
}

export default Filter;
