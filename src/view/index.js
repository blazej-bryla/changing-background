import DefaultLayout from "../layouts/default";
import Button from "../components/button";
import { useState } from "react";
import { colorArray } from "../utils/color-array";
const HomeView = () => {
  const [bgColor, setBgColor] = useState(colorArray[0]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const colorHandler = () => {
    const index = getRandomInt(0, colorArray.length);
    setBgColor(colorArray[index]);
  };

  console.log(bgColor);
  return (
    <DefaultLayout>
      <div
        className={"h-[80vh] flex flex-col border-4 border-black items-center justify-center"}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <Button onClick={() => colorHandler()} name={"Change"} />
      </div>
    </DefaultLayout>
  );
};
export default HomeView;
