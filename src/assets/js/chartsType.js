var chartsType = {
	charts(dataAxis, data, units, type, name, color, direction,pieWiath,pieHeight) {
		if(units!=='用量（亩/kg）'){
			var marker={
				data: [
					{type: 'max', name: '最大值'},
					{type: 'min', name: '最小值'}
				],
				itemStyle:{
					color: '#5DC1FA',
					borderColor: '#000',
					borderWidth: 0,
					borderType: 'solid',
					
				}
			}
		}
		if(type=='bar'){
			if(direction=='x'){
    			var option = {
		        	title: {
		            	text:units,
		            	textStyle: {
			                color: '#fff',
			                fontSize:14
			            },
			            x:30,
            			y:5,
		           	},
		        	tooltip: {
		        		trigger: 'axis',
				        axisPointer : {
				            type : 'shadow'
				        }
		        	},
		        	grid:{
						top:40,
						left:40,
						bottom:20,
						containLabel:true
					},
				    xAxis: [{
				        type: 'category',
				        data: dataAxis,
				        axisLabel: {
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        axisLine: {
		                    lineStyle: {
		                        type: 'solid',
		                        color: '#fff'
		                    }
		                }
				    }],
				    yAxis:[{
				    	minInterval:1,
				        type: 'value',
				        axisLabel: {
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        splitLine: {
							show: false
						},
						axisLine: {
		                    lineStyle: {
		                        type: 'solid',
		                        color: '#fff'
		                    }
		                }
				    }],
				    series: [{
				    	name:name,
				    	barWidth:15,
						data:data,
						markPoint: marker,
				        type: 'bar',
				        itemStyle: {
							emphasis: {
				        	     shadowBlur: 10,
				        	     shadowOffsetX: 0,
				        	     shadowColor: 'rgba(0, 0, 0, 0.5)'
				        	},
				        	normal:{
					    	     color:color
					    	}
			            },
				    }]
				};
				return option;
			}
			else if(direction=='y'){
//				var dataShadow = [];
//				var yMax = Math.max(...data);
//				for (var i = 0; i < data.length; i++) {
//				    dataShadow.push(yMax);
//				}
				var option =  {
			    	title: {
		            	text: units,
		            	textStyle: {
			                color: '#fff',
			                fontSize:14
			            },
			            x:30,
            			y:5,
		            },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid:{
						top:40,
						left:40,
						bottom:20,
						containLabel:true
					},
				    xAxis: {
				    	show : false,
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        axisLabel: {
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        splitLine:{
						　　　　show:false
						},
						axisLine: {
		                    lineStyle: {
		                        type: 'solid',
		                        color: '#fff'
		                    }
		                }
				    },
				    yAxis: {
				    	minInterval:1,
				        type: 'category',
				        data: dataAxis,
				        axisLabel: {
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        splitLine:{
						　　　　show:false
						},
						axisLine: {
		                    lineStyle: {
		                        type: 'solid',
		                        color: 'rgba(255,255,255,0)'
		                    }
		                }

				    },
				    series: [
//				    	{
//				            type: 'bar',
//				            barWidth:10,
//				            itemStyle: {
//				                normal: {color: '#fff'}
//				            },
//				            barGap:'-100%',
//				            barCategoryGap:'40%',
//				            data: dataShadow,
//				            animation: false
//				        },
				        {
				        	name:name,
				        	barWidth:10,
				            type: 'bar',
				            itemStyle: {
				                normal: {
				                    color:color
				                },
				                emphasis: {
				                    color:color
				                }
				            },
				            data: data
				        }
					]
				}
				return option;
			}
		}
		else if(type=='line'){
			var option = {
				title: {
	            	text: units,
	            	textStyle: {
		                color: '#fff',
		                fontSize:14
		            },
		            x:10,
					y:5,
	            },
				tooltip: {
					trigger: 'axis',
			        axisPointer : {
			            type : 'line'
			        }
				},
				grid:{
					top:40,
					left:40,
					bottom:20,
					containLabel:true
				},
			    xAxis: {
			        type: 'category',
			        data: dataAxis,
			        axisLabel: {
			            textStyle: {
			                color: '#fff'
			            }
			        },
			        axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff'
	                    }
	                }
			    },

			    yAxis: {
					minInterval:1,
					type: 'value',
					axisLabel: {
						textStyle: {
							color: '#fff'
						}
					},
					splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							type: 'solid',
							color: '#fff'
						}
					}
				},
			    series: [
			        {
			        	name: name,
						type: 'line',
						smooth: 'true',
						showSymbol: false,
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgba(1,84,200,0.6)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(255,255,255,0)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
			            itemStyle: {
							emphasis: {
								 symbol: 'circle',
				        	     shadowBlur: 10,
				        	     shadowOffsetX: 0,
				        	     shadowColor: 'rgba(0, 0, 0, 0.5)'
				        	},
				        	normal:{
								 color:color
					    	}
			            },
						data: data					
			        }
			    ]
			};
			return option;
		}else if(type=='pie'){
			let arr;
			if(pieWiath){
				arr=['20%','40%']
			}else{
				arr=['40%','60%']
			}
			var option = {
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b}: {c} ({d}%)'
				},
				legend: {
					orient: 'vertical',
					left: 10,
					data: ['订单贷', '农资贷', '劳务贷'],
					textStyle:{
						color: '#ffffff'//字体颜色
					},
					show:true
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: arr,
						avoidLabelOverlap: false,
						label: {
							show: true,
							position: 'left'
						},
						tooltip : {

							trigger: 'item',
						  show:false,
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						emphasis: {
							label: {
								show: false,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						
						data: [
							{value: 335, name: '订单贷',itemStyle:{color: '#7C89EB'}},
							{value: 310, name: '农资贷',itemStyle:{color: '#5DC1FA'}},
							{value: 234, name: '劳务贷',itemStyle:{color: '#14E6C4'}}
						]
					}
				]
			};
			return option;			
		}
	}
}

export default chartsType;
