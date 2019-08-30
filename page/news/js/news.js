class News{
	constructor(){
		this.init();
	}
	
	init(){
		this.initEvent();
	}
	
	initEvent(){
		document.querySelectorAll(".eachCard").forEach((e) => {
			e.onclick = () => {
				mui.openWindow({
					url:"details.html"
				})
			}
		})
	}
}

new News;
