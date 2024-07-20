import basePath from "./domain.js";
import PageList from "./listForPage.js";

const redirectPage = (dom) => {
  dom.addEventListener("click", (event) => {
    const e = event.target;
    const pageID = e.getAttribute("id");
    if (pageID==="sideBar") {
      return
    }
    if (e.classList.contains("active")) {
      return
    }
    const isExist=PageList.findIndex(i=>i.id===pageID)
    if (isExist===-1 ) {
      window.location.href = `${basePath}/`;
      return;
    }
    window.open(`${basePath}/pages/sample.html?id=${pageID}`);
  });
};

export default redirectPage;
