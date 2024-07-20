const redirectPage = (dom) => {
  dom.addEventListener("click", () => {
    const e = event.target;
    const pageID = e.getAttribute("id");
    window.open(`../pages/sample.html?id=${pageID}`);
  });
};

export default redirectPage;
