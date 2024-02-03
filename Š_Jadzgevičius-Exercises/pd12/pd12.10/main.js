const duomenys = "55034535";
const duomenysArr = duomenys.split("").map(Number);

const p = duomenysArr[0];
const pz = duomenysArr.slice(1, 3).join("");
const a = duomenysArr.slice(3, 5).join("");
const az = duomenysArr.slice(5, 7).join("");
const k = duomenysArr[7];

const zingsnisIPrieki = (pz > az) ? p : a;
const zingsnisAtgal = (pz > az) ? az : pz;
const visoZingsniu = k * 2;
const zingsniaiViso = (zingsnisIPrieki + zingsnisAtgal) * visoZingsniu;

const t = duomenysArr[6];
const distancija = zingsniaiViso / 100;
const laikasSekundemis = t * 60;
const greitis = distancija / laikasSekundemis;

const metrai = Math.floor(zingsniaiViso / 100);
const centimetrai = zingsniaiViso % 100;

console.log(metrai + "." + centimetrai.toFixed(2));
