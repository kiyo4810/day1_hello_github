const game = {
  player: { x: 5, y: 5 },
  treasure: { x: 2, y: 2 },
  score: 0,
  ctx: null,
};

// 初期化
game.init = function () {
  appLayout.init();
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = appLayout.canvasSize;
  document.getElementById("game-container").appendChild(canvas);
  this.ctx = canvas.getContext("2d");

  window.addEventListener("keydown", (e) => this.onKeyDown(e));
  this.draw();
};

// キー入力処理
game.onKeyDown = function (e) {
  const move = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key];
  if (move) {
    this.player.x = Math.max(0, Math.min(9, this.player.x + move[0]));
    this.player.y = Math.max(0, Math.min(9, this.player.y + move[1]));
    this.checkCollision();
    this.draw();
  }
};

// 当たり判定
game.checkCollision = function () {
  if (this.player.x === this.treasure.x && this.player.y === this.treasure.y) {
    this.score++;
    this.treasure = {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
    };
  }
};

// 描画処理
game.draw = function () {
  const u = appLayout.unit;
  const ctx = this.ctx;

  // 背景クリア
  ctx.fillStyle = appResource.colors.bg;
  ctx.fillRect(0, 0, appLayout.canvasSize, appLayout.canvasSize);

  // お宝
  ctx.fillStyle = appResource.colors.treasure;
  ctx.beginPath();
  ctx.arc((this.treasure.x + 0.5) * u, (this.treasure.y + 0.5) * u, u * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // プレイヤー
  ctx.fillStyle = appResource.colors.player;
  ctx.fillRect(this.player.x * u + u * 0.1, this.player.y * u + u * 0.1, u * 0.8, u * 0.8);

  // スコア表示
  ctx.fillStyle = "white";
  ctx.font = `${u * 0.5}px Arial`;
  ctx.fillText(`Score: ${this.score}`, 10, u * 0.6);
};

// 起動処理
document.addEventListener("DOMContentLoaded", async () => {
  await appResource.load(); // リソースの準備を待つ
  game.init(); // ゲーム開始
});
