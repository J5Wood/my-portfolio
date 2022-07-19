export const handleMouseOver = (e) => {
  e.target.classList.add("highlight");
};

export const handlePressedButton = (e) => {
  e.target.classList.remove("highlight");
  e.target.classList.add("select-button");
};

export const unPressButton = (e) => {
  e.target.classList.remove("select-button");
  e.target.classList.remove("highlight");
};
