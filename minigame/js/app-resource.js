const appResource = {
  colors: { player: "#4CAF50", treasure: "#FFD700", bg: "#333" },
};

appResource.load = async function () {
  // 実際にはここで resImage.load 等を呼び出す
  // 今回は学習用に 0.5秒の擬似ロード時間を設定
  return new Promise((resolve) => setTimeout(resolve, 500));
};
