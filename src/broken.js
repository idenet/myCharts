export function drawAxis() {
  const defaultParam = this.defaultParam
  const pad = defaultParam.padding
  const context = this.ctx
  const bottomPad = 30
  const wd = defaultParam.wd
  const ht = defaultParam.ht
  const data = defaultParam.data

  // 绘制坐标系
  context.save()
  context.beginPath()
  context.lineWidth = 2
  context.strokeStyle = defaultParam.styles.borderColor
  context.moveTo(pad, pad)
  context.lineTo(pad, ht - bottomPad)
  context.lineTo(wd - pad, ht - bottomPad)
  context.stroke()
  context.closePath()

  // 绘制文字刻度
  for (let i = 0; i < data.length; i++) {
    context.beginPath()
    context.fillStyle = '#333'
    context.textAlign = 'center'
    context.font = defaultParam.fontSize + ' Microsoft YaHei'
    context.fillText(
      data[i].xVal,
      i * (defaultParam.wid / data.length - 1) + defaultParam.x,
      ht - 10
    )
    context.closePath()
  }

  context.restore()
}

export function drawPoint(speed) {
  const defaultParam = this.defaultParam
  const context = this.ctx
  const data = defaultParam.data
  const len = data.length
  const ht = defaultParam.ht

  // 计算
  context.save()

  context.lineWidth = 2
  for (let i = 0; i < len; i++) {
    let yVal = parseInt(data[i].yVal * speed)
    let tranY = ht - yVal / defaultParam.maxPoint - 30
    let tranX = i * (defaultParam.wid / len - 1) + defaultParam.x

    // 绘制图形
    context.beginPath()

    context.fillStyle = defaultParam.styles.pointColor
    context.strokeStyle = '#fff'
    context.arc(tranX, tranY, 6, 0, 2 * Math.PI, false)
    context.stroke()
    context.fill()
    context.closePath()
  }

  context.restore()
}
