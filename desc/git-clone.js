export default {
  id: "Git-clone",
  desc: [
    {
      date: "2024/07/21",
      title: "",
      note: "clone很單純，就是把整個專案download下來，這裡叫'clone'，不是分支，是整組遠端的專案抓下來．",
    },
    {
      date: "2024/07/21",
      title: "",
      note: "git clone {URL}，在github or gitlab專案中，有一個code的按鈕可以按，打開有HTTPS/SSH/Download ZIP，簡述一下他們之間的差別"
    },
    { date: "2024/07/21", title: "", note: "HTTPS/SSH：皆為一個路徑，皆可以直接擁有origin of project的使用權，可以使用git的功能進行push||pull．那差別在哪裡?</br>SSH key一開始的build超麻煩，要去申請key和做連接(其實我也是chatGPT一個口令一個動作)，好處是一勞永逸，擁有100%的使用權．<br>反之HTTPS,之後所有跟origin的行為都會需要打密碼之類的 沒用過．<br>總之SSH key唯一解，其他不用商量．",},
    { date: "2024/07/21", title: "", note: "download zip非常單純，readonly.你把一個地方檔案下載下來使用，他就是只活在你的本地端，沒有任何git相關的功能，你也不擁有該project的使用權，完全獨立，都與你無關，只是看別人作品才用，協作不可能用．" },
  ],
};
