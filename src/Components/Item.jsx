import { forwardRef, useEffect, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import "./item.css";

const Item = forwardRef(
  (
    {
      id,
      index,
      deletedImg,
      withOpacity,
      isDragging,
      setDeletedImg,
      style,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(deletedImg?.includes(id));

    useEffect(() => {
      setSelected(deletedImg?.includes(id));
    }, [deletedImg, id]);

    const handleDeletedImages = () => {
      const updatedDeletedImg = [...deletedImg];
      const isCurrentlySelected = updatedDeletedImg?.includes(id);

      if (isCurrentlySelected) {
        updatedDeletedImg?.splice(updatedDeletedImg?.indexOf(id), 1);
      } else {
        updatedDeletedImg?.push(id);
      }

      setDeletedImg(updatedDeletedImg);
      setSelected(!isCurrentlySelected);
    };

    const itemsStyles = {
      opacity: withOpacity ? "0.5" : "1",
      height: `${index === 0 ? "300px" : "140px"}`,
      width: `${index === 0 ? "300px" : "140px"}`,
      borderRadius: "12px",
      gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
      transformOrigin: "0% 0%",
      gridRow: `${index === 0 ? "1 / span 2" : ""}`,
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      touchAction: 'none',
      alignItems: "center",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      position: "relative",
      ...style,
    };

    const darkOverlayStyles = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "12px", 
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    };

    const selectedImageStyles = {
      opacity: "0.5",
    };

    return (
      <>
        <div
          ref={ref}
          style={itemsStyles}
          {...props}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative hidden md:flex ${
            selected ? "border-2 opacity-50 border-slate-300 " : ""
          }`}
        >
          <img
            className="rounded-lg"
            src={id}
            alt="image"
            style={selected ? selectedImageStyles : {}}
          />
          {hovered && (
            <div style={darkOverlayStyles}></div>
          )}
          <Checkbox
            isSelected={selected}
            name={id}
            id={id}
            className={`z-10 absolute top-2 left-2 ${
              selected ? "selectedImageOnly" : ""
            } ${hovered ? "" : "md:hidden"}`}
            onValueChange={handleDeletedImages}
          ></Checkbox>
        </div>
      </>
    );
  }
);

export default Item;
