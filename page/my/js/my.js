class My{
	constructor(){
		this.init()
	}
	
	init(){
		this.initEvent();
	}
	
	initEvent(){
		document.querySelector(".wdgd").onclick = () => {
			mui.openWindow({
				url:"wdgd.html"
			})
		}
		
		document.querySelector(".wdbx").onclick = () => {
			mui.openWindow({
				url:"wdbx.html"
			})
		}
	}
}

new My;
