function OrderPrint() {

}
OrderPrint.prototype = {
	"PAGE_NUM": 10,
	"DATA": [],
	getData: function(copyArr, data) {
		var o = new Object();
		copyArr.forEach(function(val) {
			if(val in data) {
				o[val] = data[val];
			}
		});
		return o;
	},
	displayDetailInfo: function(obj, data, styleParam) {
		for(var j = 0; j < data.length; j++) {
			var newTr = obj.insertRow();
			var colIndex = 0;
			var newTd = new Array();
			this.printDetailArr.forEach(function(val) {
				newTd[colIndex] = newTr.insertCell();
				newTd[colIndex].innerText = data[j][val];
				if(styleParam) {
					for(o in styleParam) {
						newTd[colIndex].style[o] = styleParam[o];
					}
				}
				colIndex++;
			});
		}
	},
	parseOrderData: function(revdata) {
		var i = 0;
		var j = 0;
		var resArr = new Array();
		var resData = new Object();
		var resDetail = new Array();
		var detailObject = new Object();
		if(revdata instanceof Array) {
			for(i = 0; i < revdata.length; i++) {
				var lump_sum = 0;
				var lump_amount = 0;
				for(j = 0; j < revdata[i].rows.length; j++) {
					detailObject = this.getData(this.detailDataArr, revdata[i].rows[j]);
					detailObject.INDEX = j + 1;
					lump_sum += parseFloat(detailObject.SUM);
					lump_amount += parseFloat(detailObject.AMOUNT);
					resDetail.push(detailObject);
					if(resDetail.length == this.PAGE_NUM || j == revdata[i].rows.length - 1) {
						resData = this.getData(this.headerDataArr, revdata[i]);
						resData.rows = deepCopy(resDetail);
						resData.PAGE = Math.ceil(detailObject.INDEX / this.PAGE_NUM);
						resData.TOTALPAGE = Math.ceil(revdata[i].rows.length / this.PAGE_NUM);
						if(j == revdata[i].rows.length - 1) {
							resData.LUMP_SUM = lump_sum.toFixed(2);
							resData.LUMP_AMOUNT = lump_amount.toFixed(2);
						}
						resArr.push(deepCopy(resData));
						resDetail = [];
					}
				}
			}
			this.DATA = resArr;
		} else {
			throw new Error("输入数据类型不正确");
		}
	}
}