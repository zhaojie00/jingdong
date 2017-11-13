$(function(){
	var timer;
	$(window).scroll(function() {//鼠标发生滚动时
		var sTop = $(document.documentElement).scrollTop()+$(document.body).scrollTop();//获取当前滚动条位置
		if(sTop>60){
			$('#top-nav').css('display','block');			
			if(sTop>500){
				$('#ce-left').css('display','block');
			}else{
				$('#ce-bottom').css('display','none');
			}	
			if(sTop>800) {
				$('#ce-bottom').css('display','block');
			}else{
				$('#ce-bottom').css('display','none');
			}
		}else{
			$('#top-nav').css('display','none');
			$('#ce-left').css('display','none');
			$('#ce-bottom').css('display','none');
		}

		if(sTop<1400){

			$('#ce-left li:eq(1)').css('background','#e4393c').css('color','#fff');
			$('#ce-left li:eq(2)').css('background','').css('color','#666');
			$('#ce-left li:eq(3)').css('background','').css('color','#666');
			$('#ce-left li:eq(4)').css('background','').css('color','#666');
		}
		else if(sTop<1800){
			$('#ce-left li:eq(2)').css('background','#e4393c').css('color','#fff');
			$('#ce-left li:eq(1)').css('background','').css('color','#666');
			$('#ce-left li:eq(3)').css('background','').css('color','#666');
			$('#ce-left li:eq(4)').css('background','').css('color','#666');
		}
		 else if(sTop<2245){
			$('#ce-left li:eq(3)').css('background','#e4393c').css('color','#fff');
			$('#ce-left li:eq(4)').css('background','').css('color','#666');
			$('#ce-left li:eq(2)').css('background','').css('color','#666');
			$('#ce-left li:eq(1)').css('background','').css('color','#666');
		}
		 else if(sTop<3000){
			$('#ce-left li:eq(3)').css('background','').css('color','#666');
			$('#ce-left li:eq(4)').css('background','#e4393c').css('color','#fff');
			$('#ce-left li:eq(2)').css('background','').css('color','#666');
			$('#ce-left li:eq(1)').css('background','').css('color','#666');
		}





	});
		

		$('#ce-left li:eq(0)').click(function(){
			// $('html,body').scrollTop(2245);//立即到达目标值
			clearInterval(timer);
			yanshi(2245);//调用函数延时到达目标值
		})
		$('#ce-left li:eq(1)').click(function(){
			clearInterval(timer);
			yanshi(1001);
		})
		$('#ce-left li:eq(2)').click(function(){
			clearInterval(timer);
			yanshi(1400);
		})
		$('#ce-left li:eq(3)').click(function(){
			clearInterval(timer);
			yanshi(1800);
		})
		$('#ce-left li:eq(4)').click(function(){
			clearInterval(timer);
			yanshi(2245);
		})
		$('#ce-left li:eq(5)').click(function(){
			clearInterval(timer);
			yanshi(0);
			
		})
		function yanshi(x){//延时函数 x 是目标值

				var S= $('body').scrollTop()+$('html').scrollTop();
				var Ss = S/30;
				timer = setInterval(function(){
					S=(S>x)?(S-=Ss):(S+=Ss);
					if(Math.abs(S-x)<=Ss){
						S=x;
						clearInterval(timer);					
					}
					$('html,body').scrollTop(S);
				},1000/60);
		//return timer;
		}

//console.log($(document.body).scrollTop()+$(document.documentElement).scrollTop());


})