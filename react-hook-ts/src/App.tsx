import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";
// useCallback will memoize a function, so it's not always recreated

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 12;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // if (!inputRef.current)
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("Users: ", users);

    return () => console.log("Unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 2);
      console.log(e.target);
    },
    []
  );

  const result = useMemo<number>(() => fib(myNum), []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
