let cityMapContainer = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
  return div;
};

export default cityMapContainer;
