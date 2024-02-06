"use client";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell :string;
  winMessage :string
};

const Cell = ({ go, setGo, id, cells, setCells ,cell ,winMessage}: Props) => {
  const HandleChange = (cellToChange: string) => {
    let copycells = [...cells];
    copycells[id] = cellToChange;
    setCells(copycells);
  };
  const HandelClick = () => {
    if (winMessage) {
        return
    }
    const taken = !!cells[id];
    if (!taken) {
      if (go === "circle") {
        HandleChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        HandleChange("cross");
        setGo("circle");
      }
    }
  };
  return <div className="square" onClick={HandelClick}>
    <div className={cell}>
        {cell ? cell ==="circle"?"O":"X" :""}

    </div>
  </div>;
};

export default Cell;
