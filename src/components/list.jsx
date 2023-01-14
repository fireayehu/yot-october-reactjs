const data = [
  {
    id: "1",
    name: "Apple",
  },
  { id: "2", name: "Papaya" },
  { id: "3", name: "Banana" },
  { id: "4", name: "Mango" },
];
export const List = () => {
  return (
    <ul>
      {data.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};
