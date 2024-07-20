import basePath from "./domain.js";
<<<<<<< HEAD
=======
import PageList from "./listForPage.js";
>>>>>>> master

const redirectPage = (dom) => {
  dom.addEventListener("click", (event) => {
    const e = event.target;
    const pageID = e.getAttribute("id");
<<<<<<< HEAD
    if (pageID === "Index") {
      window.location.href = `${basePath}/`;
      return;
    }
=======
    if (pageID==="sideBar") {
      return
    }
    const isExist=PageList.findIndex(i=>i.id===pageID)
    if (isExist===-1 ) {
      window.location.href = `${basePath}/`;
      return;
    }
>>>>>>> master
    window.open(`${basePath}/pages/sample.html?id=${pageID}`);
  });
};

export default redirectPage;
