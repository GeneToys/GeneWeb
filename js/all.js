$(".banner").vegas({
  slides: [ { src: "img/slider2.jpg" }],
  overlay: "../node_modules/vegas/dist/overlays/02.png",
  // 是否顯示下方時間bar
  timer: false,
  // 自動開始撥放
  autoplay: true,
  // 動畫
  transition: "fade",
  // 動畫時間(漸變)
  transitionDuration: 3000,
  // 一張圖展示多久
  delay: 7000,
  //圖片動畫
  animation: "random",
  animationDuration: "10000",
});
