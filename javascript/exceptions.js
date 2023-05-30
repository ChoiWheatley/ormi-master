try {
  throw new Error("에러났어");
} catch (e) {
  console.log(`에러 잡았어!: "${e}"`);
} finally {
  console.log("에러 끝났어!");
}

for (let [[i, j], k] of [
  [[1, 2], 2],
  [[1, 2], 4],
]) {
  console.log(i, j);
}
