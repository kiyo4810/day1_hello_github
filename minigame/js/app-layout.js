const appLayout = {};

appLayout.init = function () {
  // 画面の短い方に合わせる（アスペクト比1:1）
  this.fitSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  this.canvasSize = Math.trunc(this.fitSize);
  // 10x10のグリッドにするための単位
  this.unit = Math.trunc(this.canvasSize / 10);

  console.log("Layout initialized. Unit size:", this.unit);
};
