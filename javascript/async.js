async function printjson() {
  const response = await fetch(`http://test.api.weniv.co.kr/mall`);
  const json = await response.json();

  console.log(json);
}
printjson();
