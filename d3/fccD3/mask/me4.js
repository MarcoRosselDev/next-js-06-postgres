const h = window.innerHeight;
const w = window.innerWidth;
const l = 30

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("height", h);
svg.setAttribute("width", w);

// mask a
const maskA = document.createElementNS("http://www.w3.org/2000/svg", "mask");
maskA.setAttribute("id", "maskA")
//maskA.setAttribute("mask-type", "luminance")

for (let i = 0; i < 20; i++) {
  const rct = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rct.setAttribute("width", w)
  rct.setAttribute("height", l)
  rct.setAttribute("fill", "white")
  rct.setAttribute("y", i * 2 * l)
  //rct.setAttribute("fill", "navy")
  maskA.append(rct)
}

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("r", 200);
circle.setAttribute("cx", w / 2);
circle.setAttribute("cy", h / 2);
circle.setAttribute("mask", "url(#maskA)");


// mask b
const maskB = document.createElementNS("http://www.w3.org/2000/svg", "mask");
maskB.setAttribute("id", "maskB")
maskB.setAttribute("mask-type", "luminance")

for (let i = 0; i < 35; i++) {
  const rct = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rct.setAttribute("width", l)
  rct.setAttribute("height", h)
  rct.setAttribute("fill", "white")
  rct.setAttribute("x", i * 2 * l)
  //rct.setAttribute("fill", "navy")
  maskB.append(rct)
}
const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle2.setAttribute("r", 200);
circle2.setAttribute("cx", w / 2);
circle2.setAttribute("cy", h / 2);
circle2.setAttribute("fill", "black");
circle2.setAttribute("mask", "url(#maskB)");
maskB.append(circle2)


// maskcara navy svg con mascara A (maskG = mask global)
const rectG = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rectG.setAttribute("width", w)
rectG.setAttribute("height", h)
rectG.setAttribute("fill", "black")
rectG.setAttribute("mask", "url(#maskB")
rectG.setAttribute("fill", "navy")
svg.append(rectG)
svg.append(maskA)
svg.append(maskB)
svg.append(circle)


document.body.append(svg);