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
    let tranY = ht - (ht * yVal) / defaultParam.maxPoint - 30
    let tranX = i * (defaultParam.wid / len - 1) + defaultParam.x

    // 绘制图形
    context.beginPath()
    context.shadowOffsetX = 0
    context.shadowOffsetY = 0
    context.shadowBlur = 3
    context.shadowColor = defaultParam.styles.pointColor
    context.fillStyle = defaultParam.styles.pointColor
    context.strokeStyle = '#fff'
    context.arc(tranX, tranY, 6, 0, 2 * Math.PI, false)
    context.fill()
    context.stroke()
    context.closePath()

    // 绘制圆形对应的数值
    context.beginPath()
    context.shadowBlur = 0
    context.fillStyle = '#333'
    context.textAlign = 'center'
    context.font = defaultParam.fontSize + ' MicroSoft YaHei'
    context.fillText(yVal, tranX, tranY - 15)
    context.closePath()
  }

  context.restore()
}

export function drawBrokenLine(speed) {
  const defaultParam = this.defaultParam
  const context = this.ctx
  const bottomPad = 30
  const data = defaultParam.data
  const ht = defaultParam.ht
  const maxPoint = defaultParam.maxPoint
  const len = data.length - 1
  const stepDots = Math.floor(speed * len)

  // 绘制线条
  context.save()
  context.beginPath()
  context.setLineDash([4, 4])

  context.lineWidth = defaultParam.lineWidth
  context.strokeStyle = defaultParam.styles.lineColor
  for (let i = 0; i < len; i++) {
    // 起点
    const yVal = data[i].yVal
    const axisY = ht - ht * (yVal / maxPoint) - bottomPad
    const averageNum = defaultParam.wid / data.length - 1
    const axisX = i * averageNum + defaultParam.x

    // 终点
    let axisEndX = (i + 1) * averageNum + defaultParam.x
    let axisEndY = ht - (ht * data[i + 1].yVal) / maxPoint - bottomPad

    if (i <= stepDots) {
      if (i === stepDots) {
        axisEndX = (axisEndX - axisX) * speed + axisX
        axisEndY = (axisEndY - axisY) * speed + axisY
      }
      // 绘制
      context.moveTo(axisX, axisY)
      context.lineTo(axisEndX, axisEndY)
    }
  }
  context.stroke()
  context.closePath()
  context.restore()
}

export function drawDashLine(speed) {
  const defaultParam = this.defaultParam
  const context = this.ctx
  const bottomPad = 30
  const data = defaultParam.data
  const ht = defaultParam.ht
  const maxPoint = defaultParam.maxPoint
  const len = data.length

  context.save()

  for (let i = 0; i < len; i++) {
    // 起始点
    const averageNum = defaultParam.wid / data.length - 1
    let axisX = i * averageNum + defaultParam.x
    let axisY = ht - ((ht * data[i].yVal) / maxPoint) * speed - bottomPad

    // 开始绘制
    context.beginPath()
    context.lineWidth = 2
    context.setLineDash([4, 4])
    context.strokeStyle = '#d6d6d6'
    context.moveTo(axisX, ht - bottomPad)
    context.lineTo(axisX, axisY)
    context.stroke()
    context.closePath()
  }
  context.restore()
}
