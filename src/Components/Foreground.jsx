import React, { useRef} from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing  elite.",
      size: "5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing  elite.",
      size: "5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing  elite.",
      size: "5mb",
      close: false,
      tag: { isOpen:false, tagTitle: "Download Now", tagColor: "golden" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Cards data={item} Reference={ref}/>
      ))}
    </div>
  );
}
export default Foreground;
