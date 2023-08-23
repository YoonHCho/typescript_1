import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
// <T extends {}> --> this helps TypeScript recognize that this is generic OR you can put a , after <T,> and it will remove all the underlined errors
const List = <T extends {}>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
