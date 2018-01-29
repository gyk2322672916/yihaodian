
new Vue({
    el:"#app",
	methods:{
		denga(){
			var yan1=document.getElementById("zhanghao");
			console.log(yan1)
			if (yan1.validity.valueMissing==true) {
				yan1.setCustomValidity("手机号不能为空")
			}else if(yan1.validity.patternMismatch==true){
				yan1.setCustomValidity("手机号必须是以11位数字组成的")
			}
			else{
				yan1.setCustomValidity("")
			}
			var yan2=document.getElementById("mima");
			console.log(yan2)
			if (yan2.validity.valueMissing==true) {
				yan2.setCustomValidity("密码不能为空")
			}else if(yan2.validity.patternMismatch==true){
				yan2.setCustomValidity("密码必须是6位数字组成的")
			}
			else{
				yan2.setCustomValidity("")
			}
		}
	}
})
