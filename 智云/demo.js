		function information_reset(type, id){
			var w_plus = plus.nativeUI.showWaiting( "变更用户中..." );
			mui.ajax(app.getServer()+'/zyapi/cursite',{
				data:{
					type:type,
					id:id
				},
				headers:{'Content-Type':'application/x-www-form-urlencoded','Authorization':' Bearer '+app.getAuthorization()},
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；              
				success:function(data){
					w_plus.close();
					plus.runtime.restart();
				},
				error:function(xhr,type,errorThrown){
					w_plus.close();
					loading = false;
					app.handleHttpError(xhr,type,errorThrown);
				}
			});
		}
		function register_information(type, id)
		{
			var w_plus = plus.nativeUI.showWaiting( "读取中..." );
			mui.ajax(app.getServer()+'/zyapi/index',{
				data:{
					type:type,
					id:id
				},
				headers:{'Content-Type':'application/x-www-form-urlencoded','Authorization':' Bearer '+app.getAuthorization()},
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(data){
					w_plus.close();
					mui('.register-bundles li')[0].classList.add("mui-hidden");
					var banner_html = '';
					data.banners.forEach(function(currentValue, index, arr){
						if(index == 0){
							banner_html+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+arr[3]+'" /></a></div>';
						}
						banner_html += '<div class="mui-slider-item"><a href="#"><img src="'+currentValue+'" /></a></div>';
						if(index == 3){
							banner_html+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+arr[0]+'" /></a></div';
						}
					});
					
					mui('.mui-slider-loop')[0].innerHTML = banner_html;
					data.register_bundles.forEach(function(currentValue, index, arr){
						mui('#'+currentValue+'-app')[0].classList.remove("mui-hidden");
						console.log(currentValue);
					});
					
					var role_options = '';

					var corp_roles = data.user_info['corp_roles'];
					for(c_r in corp_roles) {
						var selected = '';
						if(data.user_info['type'] == 'corp') {
							
							if(data.user_info['cur_role'] == c_r) {
								selected = 'selected="selected"';
							}
						}
						role_options+='<option '+selected+' data-type="corp" value="'+c_r+'">'+corp_roles[c_r]+'</option>';
	
					}

					var company_roles = data.user_info['company_roles'];
					for(c_r in company_roles) {
						var selected = '';
						if(data.user_info['type'] == 'company') {
						
							if(data.user_info['cur_role'] == c_r) {
								selected = 'selected="selected"';
							}
						}
						role_options+='<option '+selected+' data-type="company" value="'+c_r+'">'+company_roles[c_r]+'</option>';
					}

					mui('.user-info-roles')[0].innerHTML = role_options;
					mui('.user-info-image')[0].setAttribute('src', data.user_info['image']);
					mui('.user-info-name')[0].innerHTML = data.user_info['name'];
					mui('.user-info-introduction')[0].innerHTML = data.user_info['introduction'];
					
					console.log(data.banners[0]);
					add_after_js = setInterval(function () {
						clearInterval(add_after_js);
						mui('.user-select-box').off();
					
						mui('.user-select-box').on('change','.user-info-roles',function(){
							information_reset(this.options[this.selectedIndex].getAttribute('data-type'),this.options[this.selectedIndex].value);
						});
						var gallery = mui('.mui-slider');
						gallery.off();
						gallery.slider({
						  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
						});
					});
				},
				error:function(xhr,type,errorThrown){
					w_plus.close();
					loading = false;
					app.handleHttpError(xhr,type,errorThrown);
				}
			});
		}