const logo = document.querySelector("img");

const onClick = () => console.log("Click Event");
logo.addEventListener("click", onClick);

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "Purple") {
    document.body.style.backgroundColor = "Purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "White";
    document.body.style.color = "Black";
  }
};
logo.addEventListener("dblclick", onDoubleClick);

const onRightClick = () => console.log("Right Click Event");
logo.addEventListener("contextmenu", onRightClick);

const onMouseDown = () => console.log("Mouse Down Event");
logo.addEventListener("mousedown", onMouseDown);

const onMouseUp = () => console.log("Mouse Up Event");
logo.addEventListener("mouseup", onMouseUp);

const onMouseWheel = () => console.log("Mouse Wheel Event");
logo.addEventListener("wheel", onMouseWheel);

const onMoveOver = () => console.log("Mouse Over Event");
logo.addEventListener("mouseover", onMoveOver);

const onMoveOut = () => console.log("Mouse Out Event");
logo.addEventListener("mouseout", onMoveOut);

const onDragStart = () => console.log("Drag Start Event");
logo.addEventListener("dragstart", onDragStart);

const onDragEnd = () => console.log("Drag End Event");
logo.addEventListener("dragend", onDragEnd);

const onDrag = () => console.log("Drag Event");
logo.addEventListener("drag", onDrag);