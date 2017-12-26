package com.lxit.qshclient.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MonthlyInterestTreasureController {
		
	@RequestMapping("/monthly")
	public String getMonthlyInterestTreasure() {
		return null;
	}
	
	@RequestMapping("/index")
	public String index(){
		return "index";
	}
}
