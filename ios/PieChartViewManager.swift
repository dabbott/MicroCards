//
//  PieChartViewManager.swift
//  MicroCards
//
//  Created by Devin Abbott on 6/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(PieChartViewManager)
class PieChartViewManager: RCTViewManager {
  override func view() -> UIView! {
    return PieChartView(frame: .zero)
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
