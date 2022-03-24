import { useEffect, useState } from "react";

const cArray = (n: number, m: number[] = []): number[] => {
  if (n <= 0) return [];
  else if (n < 4) {
    m.push(n);
    return m;
  } else {
    let a = Math.floor(Math.random() * n);
    let b = n - a;
    cArray(a, m);
    cArray(b, m);
    return m;
  }
};

const findRandNum = (list: number[], rounds: number) => {
  let sList = [];
  let nList = list.slice();
  for (let i = 0; i < rounds; i++) {
    let selectedIndex = Math.floor(Math.random() * nList.length);
    sList.push(nList[selectedIndex]);
    nList.splice(selectedIndex, 1);
  }
  return sList;
};

const generateList = () => {
  let list = cArray(20);
  if (list.length > 9) list.splice(9, list.length, list.length - 9);
  return list;
};

const getNumbers = (list: number[]): string[] => {
  let selected = [];

  let nums = [
    [1, 11, 21, 31, 41, 51, 61, 71],
    [2, 12, 22, 32, 42, 52, 62, 72],
    [3, 13, 23, 33, 43, 53, 63, 73],
    [4, 14, 24, 34, 44, 54, 64, 74],
    [5, 15, 25, 35, 45, 55, 65, 75],
    [6, 16, 26, 36, 46, 56, 66, 76],
    [7, 17, 27, 37, 47, 57, 67, 77],
    [8, 18, 28, 38, 48, 58, 68, 78],
    [9, 19, 29, 39, 49, 59, 69, 79],
    [10, 20, 30, 40, 50, 60, 70, 80],
  ];

  for (let i = 0; i < nums.length; i++) {
    let num = findRandNum(nums[i], list[i]);
    selected.push([...num].join(","));
  }
  return selected;
};

function App() {
  const [list, setList] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<string[]>([]);

  const handleClick = () => {
    let a = generateList();
    setList(a);
    setNumbers(getNumbers(a));
  };

  useEffect(() => {
    let a = generateList();
    setList(a);
    setNumbers(getNumbers(a));
  }, []);

  return (
    <div className="wrapper h-screen flex flex-col justify-between max-w-2xl mx-auto">
      <header className="bg-yellow-50 h-16 px-4 flex items-center justify-between">
        <div className="text-orange-300 flex text-xl items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <h1>Notes</h1>
          <h3 className="leng ml-4">{list.length}</h3>
        </div>
        <div className="h-full w-1/6 flex text-orange-300 justify-around items-center">
          <div className="h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </div>
      </header>
      <main className="bg-white grow p-10">
        {numbers.length > 0 &&
          numbers.map((item, indx) => (
            <p className="text-left text-gray-500 add-text-1 mb-4" key={indx}>
              {item}
            </p>
          ))}
      </main>
      <footer className="bg-yellow-50 h-16 px-8 flex items-center justify-between text-orange-300">
        <div className="h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <div className="h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div
          onClick={handleClick}
          className="h-12 add-num hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
        <div className="h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default App;
