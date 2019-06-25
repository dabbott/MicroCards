//
//  PieChartView.swift
//  MicroCards
//
//  Created by Devin Abbott on 6/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit

class PieChartView: UIView {
  override func didSetProps(_ changedProps: [String]!) {
    setNeedsDisplay()
  }

  @objc var strokeColor: UIColor = .clear
  @objc var strokeWidth: CGFloat = 0
  @objc var data: NSArray = [] {
    didSet {
      slices = data.map { item in
        guard let object = item as? [String: Any],
          let size = object["size"] as? CGFloat,
          let color = object["color"] else {
            return PieChartSlice(size: 0, color: .clear)
        }

        return PieChartSlice(size: size, color: RCTConvert.uiColor(color))
      }
    }
  }

  var slices: [PieChartSlice] = []

  struct PieChartSlice {
    var size: CGFloat
    var color: UIColor
  }

  override func draw(_ rect: CGRect) {
    super.draw(rect)

    let center = CGPoint(x: bounds.width / 2, y: bounds.height / 2)
    let radius = (min(rect.size.width, rect.size.height) - strokeWidth) / 2

    let total = slices.map({ $0.size }).reduce(0, { $0 + $1 })

    guard total > 0 else { return }

    var value: CGFloat = 0.0

    let paths: [UIBezierPath] = slices.map({ slice in
      let path = UIBezierPath()
      path.move(to: center)
      path.addArc(
        withCenter: center,
        radius: radius,
        startAngle: CGFloat((value * 2 * CGFloat.pi) - (CGFloat.pi / 2)),
        endAngle: CGFloat(((value + (slice.size / total)) * 2 * CGFloat.pi) - (CGFloat.pi / 2)),
        clockwise: true)

      value += slice.size / total

      return path
    })

    paths.enumerated().forEach({ index, path in
      slices[index].color.setFill()
      path.fill()
    })

    paths.forEach({ path in
      strokeColor.setStroke()
      path.lineWidth = strokeWidth
      path.stroke()
    })
  }
}
