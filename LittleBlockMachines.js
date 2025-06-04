const colorPalette = [
  [
    //BLUE
    [188, 188, 188],
    [20, 20, 70],
    [40, 70, 150],
    [100, 140, 190],
    ['rgba(81, 98, 150, 0.2)'],
  ],
  [
    //PEACH
    [188, 188, 188],
    [66, 10, 15],
    [212, 162, 100],
    [255, 209, 193],
    ['rgba(255, 209, 193, 0.5)'],
  ],
  [
    //MUSTARD
    [188, 188, 188],
    [66, 30, 15],
    [124, 57, 32],
    [210, 140, 40],
    ['rgba(190, 140, 40, 0.2)'],
  ],
  [
    //GREY&RED
    [188, 188, 188],
    [50, 20, 20],
    [220, 50, 50],
    [170, 40, 40],
    ['rgba(100, 30, 30, 0.1)'],
  ],
  [
    //DARK AND GREEN
    [28, 48, 28],
    [40, 140, 40],
    [50, 220, 50],
    [20, 90, 120],
    ['rgba(100, 30, 30, 0.1)'],
  ],
  [
    //NUX AT NIGHT
    [28, 48, 58],
    [200, 250, 40],
    [250, 120, 50],
    [40, 50, 220],
    ['rgba(60, 98, 250, 0.4)'],
  ],
  [
    //AQUA
    [188, 188, 188], //background
    [0, 50, 50], //outline
    [20, 250, 240], //hatch
    [0, 100, 255], //fill for connectors and highlights
    ['rgba(30, 150, 190, 0.2)'], //fill
  ],
  [
    //ICELAND
    [188, 188, 188], //background
    [0, 50, 50], //outline
    [200, 250, 40], //hatch
    [120, 90, 40], //fill for connectors and highlights
    ['rgba(30, 150, 190, 0.2)'], //fill
  ],
  [
    //AUTUMN
    [188, 188, 188], //background
    [90, 50, 20], //outline
    [250, 50, 40], //hatch
    [220, 90, 40], //fill for connectors and highlights
    ['rgba(30, 150, 100, 0.2)'], //fill
  ],
  [
    //AUTUMN DARK
    [28, 28, 28], //background
    [90, 90, 90], //outline
    [250, 50, 40], //hatch
    [220, 190, 80], //fill for connectors and highlights
    ['rgba(100, 100, 100, 0.2)'], //fill
  ],
  [
    //DARK MOSS
    [28, 28, 28], //background
    [190, 190, 40], //outline
    [220, 220, 0], //hatch
    [150, 10, 30], //fill for connectors and highlights
    ['rgba(100, 100, 100, 0.2)'], //fill
  ],
  [
    //RED BLUE
    [188, 28, 28], //background
    [55, 0, 0], //outline
    [220, 220, 0], //hatch
    [0, 50, 255], //fill for connectors and highlights
    ['rgba(100, 100, 100, 0.4)'], //fill
  ],
]

let colorPaletteNum
let indexcolorPalette

function setup() {
  rectMode(CENTER)
  createCanvas(windowWidth, windowHeight)
  //frameRate(1)
  noLoop()

  colorPaletteNum = Math.floor(random() * 12)
  indexcolorPalette = Math.floor(random() * colorPalette.length)

  //runSketch();
}

function draw() {
  colorBackground = colorPalette[colorPaletteNum][0]
  background(colorBackground)

  //canvas within screen
  blockGaps = random(width / 50, width / 10)
  blockScale = width / 50
  canvasInset = width / 20
  canvasWidth = width - canvasInset * 2
  canvasHeight = height - canvasInset * 2
  canvasLeftEdge = canvasInset
  canvasRightEdge = width - canvasInset
  canvasTop = canvasInset
  canvasBottom = height - canvasInset
  blockTotalWidth = canvasWidth - blockGaps * 3
  blockTotalHeight = canvasHeight - blockGaps * 2

  //rect Data Row 1
  //height
  rectRow1Height = random(blockTotalHeight / 2.5, blockTotalHeight / 8)
  rectRow1y = canvasTop + rectRow1Height / 2
  remainingCanvasHeight1 = canvasHeight - rectRow1Height
  //width
  rect1Width = random(blockTotalWidth / 4, blockTotalWidth / 10)
  rect1x = canvasLeftEdge + rect1Width / 2
  remainingCanvasWidth1 = blockTotalWidth - rect1Width
  rect2Width = random(remainingCanvasWidth1 / 2, remainingCanvasWidth1 / 8)
  rect2x = canvasLeftEdge + rect1Width + rect2Width / 2 + blockGaps
  remainingCanvasWidth2 = blockTotalWidth - rect1Width - rect2Width
  rect3Width = random(remainingCanvasWidth2 / 2, remainingCanvasWidth2 / 8)
  rect3x =
    canvasLeftEdge + rect1Width + rect2Width + rect3Width / 2 + blockGaps * 2
  remainingCanvasWidth3 = canvasWidth - rect1Width - rect2Width - rect3Width
  rect4Width = remainingCanvasWidth3 - blockGaps * 3
  rect4x = canvasRightEdge - rect4Width / 2

  //rect Data Row 2
  //height
  rectRow2Height = random(
    remainingCanvasHeight1 / 2.5,
    remainingCanvasHeight1 / 8
  )
  rectRow2y = canvasTop + rectRow1Height + rectRow2Height / 2 + blockGaps
  remainingCanvasHeight2 = canvasHeight - rectRow1Height - rectRow2Height
  //width
  rect5Width = random(blockTotalWidth / 4, blockTotalWidth / 8)
  rect5x = canvasLeftEdge + rect5Width / 2
  remainingCanvasWidth5 = blockTotalWidth - rect5Width
  rect6Width = random(remainingCanvasWidth5 / 2, remainingCanvasWidth5 / 8)
  rect6x = canvasLeftEdge + rect5Width + rect6Width / 2 + blockGaps
  remainingCanvasWidth6 = blockTotalWidth - rect5Width - rect6Width
  rect7Width = random(remainingCanvasWidth6 / 2, remainingCanvasWidth6 / 8)
  rect7x =
    canvasLeftEdge + rect5Width + rect6Width + rect7Width / 2 + blockGaps * 2
  remainingCanvasWidth7 = canvasWidth - rect5Width - rect6Width - rect7Width
  rect8Width = remainingCanvasWidth7 - blockGaps * 3
  rect8x = canvasRightEdge - rect8Width / 2

  //rect Data Row 3
  //height
  rectRow3Height = remainingCanvasHeight2 - blockGaps * 2
  rectRow3y = canvasBottom - rectRow3Height / 2
  //width
  rect9Width = random(blockTotalWidth / 4, blockTotalWidth / 8)
  rect9x = canvasLeftEdge + rect9Width / 2
  remainingCanvasWidth9 = blockTotalWidth - rect9Width
  rect10Width = random(remainingCanvasWidth9 / 2, remainingCanvasWidth9 / 8)
  rect10x = canvasLeftEdge + rect9Width + rect10Width / 2 + blockGaps
  remainingCanvasWidth10 = blockTotalWidth - rect9Width - rect10Width
  rect11Width = random(remainingCanvasWidth10 / 2, remainingCanvasWidth10 / 8)
  rect11x =
    canvasLeftEdge + rect9Width + rect10Width + rect11Width / 2 + blockGaps * 2
  remainingCanvasWidth11 = canvasWidth - rect9Width - rect10Width - rect11Width
  rect12Width = remainingCanvasWidth11 - blockGaps * 3
  rect12x = canvasRightEdge - rect12Width / 2

  //rect Color Data
  rectColorDark = colorPalette[colorPaletteNum][1]
  rectColorBold = colorPalette[colorPaletteNum][2]
  rectColorBright = colorPalette[colorPaletteNum][3]
  rectColorLight = colorPalette[colorPaletteNum][4]

  //DRAW
  //blocks row 1
  basicBlock(rect1x, rectRow1y, rect1Width, rectRow1Height)
  basicBlock(rect2x, rectRow1y, rect2Width, rectRow1Height)
  basicBlock(rect3x, rectRow1y, rect3Width, rectRow1Height)
  basicBlock(rect4x, rectRow1y, rect4Width, rectRow1Height)
  //blocks row 2
  basicBlock(rect5x, rectRow2y, rect5Width, rectRow2Height)
  basicBlock(rect6x, rectRow2y, rect6Width, rectRow2Height)
  basicBlock(rect7x, rectRow2y, rect7Width, rectRow2Height)
  basicBlock(rect8x, rectRow2y, rect8Width, rectRow2Height)
  //blocks row 3
  basicBlock(rect9x, rectRow3y, rect9Width, rectRow3Height)
  basicBlock(rect10x, rectRow3y, rect10Width, rectRow3Height)
  basicBlock(rect11x, rectRow3y, rect11Width, rectRow3Height)
  basicBlock(rect12x, rectRow3y, rect12Width, rectRow3Height)

  //connectors vertical
  strokeWeight(blockScale / 4)
  stroke(rectColorDark)
  line(
    rect1x,
    rectRow1y + rectRow1Height / 2 - hookInset,
    rect5x,
    rectRow2y - rectRow2Height / 2 + hookInset
  )
  line(
    rect2x,
    rectRow1y + rectRow1Height / 2 - hookInset,
    rect6x,
    rectRow2y - rectRow2Height / 2 + hookInset
  )
  line(
    rect3x,
    rectRow1y + rectRow1Height / 2 - hookInset,
    rect7x,
    rectRow2y - rectRow2Height / 2 + hookInset
  )
  line(
    rect4x,
    rectRow1y + rectRow1Height / 2 - hookInset,
    rect8x,
    rectRow2y - rectRow2Height / 2 + hookInset
  )
  line(
    rect5x,
    rectRow2y + rectRow2Height / 2 - hookInset,
    rect9x,
    rectRow3y - rectRow3Height / 2 + hookInset
  )
  line(
    rect6x,
    rectRow2y + rectRow2Height / 2 - hookInset,
    rect10x,
    rectRow3y - rectRow3Height / 2 + hookInset
  )
  line(
    rect7x,
    rectRow2y + rectRow2Height / 2 - hookInset,
    rect11x,
    rectRow3y - rectRow3Height / 2 + hookInset
  )
  line(
    rect8x,
    rectRow2y + rectRow2Height / 2 - hookInset,
    rect12x,
    rectRow3y - rectRow3Height / 2 + hookInset
  )
  //connectors horizontal
  line(
    rect1x + rect1Width / 2 - hookInset,
    rectRow1y,
    rect2x - rect2Width / 2 + hookInset,
    rectRow1y
  )
  line(
    rect2x + rect2Width / 2 - hookInset,
    rectRow1y,
    rect3x - rect3Width / 2 + hookInset,
    rectRow1y
  )
  line(
    rect3x + rect3Width / 2 - hookInset,
    rectRow1y,
    rect4x - rect4Width / 2 + hookInset,
    rectRow1y
  )
  line(
    rect5x + rect5Width / 2 - hookInset,
    rectRow2y,
    rect6x - rect6Width / 2 + hookInset,
    rectRow2y
  )
  line(
    rect6x + rect6Width / 2 - hookInset,
    rectRow2y,
    rect7x - rect7Width / 2 + hookInset,
    rectRow2y
  )
  line(
    rect7x + rect7Width / 2 - hookInset,
    rectRow2y,
    rect8x - rect8Width / 2 + hookInset,
    rectRow2y
  )
  line(
    rect9x + rect9Width / 2 - hookInset,
    rectRow3y,
    rect10x - rect10Width / 2 + hookInset,
    rectRow3y
  )
  line(
    rect10x + rect10Width / 2 - hookInset,
    rectRow3y,
    rect11x - rect11Width / 2 + hookInset,
    rectRow3y
  )
  line(
    rect11x + rect11Width / 2 - hookInset,
    rectRow3y,
    rect12x - rect12Width / 2 + hookInset,
    rectRow3y
  )

  //connectors sporadic
  if (rect1Width < rect5Width * 1.2 && rect1Width > rect5Width * 0.8) {
    fill(rectColorBright)
    rect(
      rect1x - (rect1x - canvasLeftEdge) / 2,
      rectRow1y + rectRow1Height / 2 + blockGaps / 2,
      blockScale / 2,
      blockGaps * 2,
      blockScale
    )
  }
  if (rect5Width < rect9Width * 1.2 && rect5Width > rect9Width * 0.8) {
    fill(rectColorBright)
    rect(
      rect9x - (rect9x - canvasLeftEdge) / 2,
      rectRow2y + rectRow2Height / 2 + blockGaps / 2,
      blockScale / 2,
      blockGaps * 2,
      blockScale
    )
  }
  if (rect4Width < rect8Width * 1.2 && rect4Width > rect8Width * 0.8) {
    fill(rectColorBright)
    rect(
      rect4x + (canvasRightEdge - rect4x) / 2,
      rectRow1y + rectRow1Height / 2 + blockGaps / 2,
      blockScale / 2,
      blockGaps * 2,
      blockScale
    )
  }
  if (rect8Width < rect12Width * 1.2 && rect8Width > rect12Width * 0.8) {
    fill(rectColorBright)
    rect(
      rect12x + (canvasRightEdge - rect12x) / 2,
      rectRow2y + rectRow2Height / 2 + blockGaps / 2,
      blockScale / 2,
      blockGaps * 2,
      blockScale
    )
  }

  //overlay
  for (let i = 0; i < width; i += 5) {
    for (let j = 0; j < height; j += 5) {
      fill(255, 50)
      noStroke()
      circle(i, j, blockScale / 15)
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function basicBlock(x, y, w, h) {
  leftEdgeBlock = x - w / 2
  rightEdgeBlock = x + w / 2
  topEdgeBlock = y - h / 2
  bottomEdgeBlock = y + h / 2
  buffer = blockScale / 2

  if (w < width / 6) {
    fill(rectColorBright)
    noStroke()
    rect(x, y, w, h, random(2, 6))
  }
  stroke(rectColorDark)
  fill(rectColorLight)
  strokeWeight(random(blockScale / 20, blockScale / 3))
  rect(x, y, w, h, random(2, 6))

  //hatch

  for (
    let i = leftEdgeBlock + buffer;
    i < rightEdgeBlock - buffer;
    i += random(blockScale * 0.2, blockScale * 0.3)
  ) {
    strokeWeight(1)
    stroke(rectColorBold)
    line(i, topEdgeBlock + buffer, i, bottomEdgeBlock - buffer)
  }

  //colour band and random circles
  if (w > width / 5) {
    noStroke()
    fill(rectColorDark)
    rect(rightEdgeBlock, y, blockScale / 2, h - blockScale, blockScale)
    //top and bottom beads
    fill(rectColorBright)
    stroke(rectColorDark)
    strokeWeight(blockScale / 8)
    rect(
      random(leftEdgeBlock + buffer, rightEdgeBlock - buffer),
      bottomEdgeBlock,
      blockScale,
      blockScale / 2,
      blockScale / 3
    )
    rect(
      random(leftEdgeBlock + buffer, rightEdgeBlock - buffer),
      topEdgeBlock,
      blockScale,
      blockScale / 2,
      blockScale / 3
    )

    for (
      let i = topEdgeBlock + buffer * 2;
      i < bottomEdgeBlock - buffer * 2;
      i += blockScale / 2
    ) {
      fill(rectColorBright)
      noStroke()
      circle(rightEdgeBlock, i, blockScale / 4)
    }
  }

  //hook panels
  hookInset = blockScale * 0.7
  hookLeft = leftEdgeBlock + hookInset
  hookRight = rightEdgeBlock - hookInset
  hookTop = topEdgeBlock + hookInset
  hookBottom = bottomEdgeBlock - hookInset
  stroke(255)
  strokeWeight(blockScale / 10)
  fill(rectColorDark)
  rect(x, hookTop, blockScale * 1.5, blockScale * 0.7, blockScale / 2)
  rect(x, hookBottom, blockScale * 1.5, blockScale * 0.7, blockScale / 2)
  rect(hookLeft, y, blockScale * 0.7, blockScale * 1.5, blockScale / 2)
  rect(hookRight, y, blockScale * 0.7, blockScale * 1.5, blockScale / 2)

  if (w < width / 6) {
    fill(rectColorBright)
    noStroke()
    rect(x, hookTop, blockScale * 0.9, blockScale * 0.3, blockScale * 0.2)
    rect(x, hookBottom, blockScale * 0.9, blockScale * 0.3, blockScale * 0.2)
    rect(hookLeft, y, blockScale * 0.3, blockScale * 0.9, blockScale * 0.2)
    rect(hookRight, y, blockScale * 0.3, blockScale * 0.9, blockScale * 0.2)
    // fill(rectColorDark)
    // noStroke()
    // rect(x, hookTop, blockScale*0.2, blockScale*0.2)
  }
}
