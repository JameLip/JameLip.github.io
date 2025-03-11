var posts=["2025/03/11/算法/","2025/03/11/JUC/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };