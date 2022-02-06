export const drag = (event: any): void => {
  event.dataTransfer.setData('text', event.target.id);
};
