export const allowDrop = (event: React.DragEvent<HTMLSpanElement>): void => {
  if (!event.currentTarget.classList.contains('word')) {
    event.preventDefault();
  }
};
