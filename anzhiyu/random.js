var posts=["2025/03/11/JUC/","2025/03/11/算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };