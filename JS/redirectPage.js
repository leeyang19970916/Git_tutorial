import basePath from "./domain.js";

const redirectPage = (dom) => {
  dom.addEventListener("click", (event) => {
    const e = event.target;
    const pageID = e.getAttribute("id");
    if (pageID === "Index") {
      window.location.href = `${basePath}/`;
      return;
    }
    window.open(`${basePath}/pages/sample.html?id=${pageID}`);
  });
};

export default redirectPage;
