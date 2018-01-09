$(function() {
	var judge;
	var judge;
	$("#answer_A").click(function() {
		$("#icon_A").addClass("choose_icon_hover").removeClass("choose_icon");
		$("#icon_B，#icon_C,#icon_D").addClass("choose_icon").removeClass("choose_icon_hover");
		judge = 1;
	});
	$("#answer_B").click(function() {
		$("#icon_B").addClass("choose_icon_hover").removeClass("choose_icon");
		$("#icon_A，#icon_C,#icon_D").addClass("choose_icon").removeClass("choose_icon_hover");
		judge = 2;
	});
	$("#answer_C").click(function() {
		$("#icon_C").addClass("choose_icon_hover").removeClass("choose_icon");
		$("#icon_B，#icon_A,#icon_D").addClass("choose_icon").removeClass("choose_icon_hover");
		judge = 3;
	});
	$("#answer_D").click(function() {
		$("#icon_D").addClass("choose_icon_hover").removeClass("choose_icon");
		$("#icon_B，#icon_C,#icon_A").addClass("choose_icon").removeClass("choose_icon_hover");
		judge = 4;
	});
	$("#btn").click(function() {
		switch(judge) {
			case 1:
				$(".wrong").show();
				$("#btn").hide();
				$("#show_animate").show();
				break;
			case 2:
				$(".wrong").show();
				$("#btn").hide();
				$("#show_animate").show();
				break;
			case 3:
				$(".right").show();
				$("#btn").hide();
				$("#show_animate").show();
				break;
			case 4:
				$(".wrong").show();
				$("#btn").hide();
				$("#show_animate").show();
				break;
			default:
				alert("请选择答案");
				break;
		}
	});
	$("#show_animate").click(function() {
		$(".question_one").hide();
		$(".animate1").show();
		$("#show_animate").hide();
		$("#next").show()
	});

	$("#next").click(function() {
		$(".animate1").hide();
		$(".animate2").show();
		$("#next2").show();
	});

	//第二题
	$("#show2").click(function() {
		$("#show2").hide();
		$("#btn2").show();
		$(".animate2").hide();
		$(".question_two").show();
	});

	$("#weight").change(function() {
		var weight = $("#weight").val();
		if(weight <= 3.5 && weight >= 1.5) {
			$(".wrong2-1").hide();
			$(".wrong2-2").hide();
			$(".right2").show();
		} else if(weight > 3.5) {
			$(".wrong2-1").show();
			$(".wrong2-2").hide();
			$(".right2").hide();
		} else if(weight < 1.5 && weight > 0) {
			$(".wrong2-1").hide();
			$(".wrong2-2").show();
			$(".right2").hide();
		} else {
			alert("请输入合法的数字");
		}

	});
	$("#btn2").click(function() {
		$(".question_two").hide();
		$(".question_three").show();
	});

	//第三题
	function　 hit(chooseOption, optionContent) {
		chooseOption.on({
			mousedown: function(e) {
				var el = $(this);
				var os = el.offset();
				dx = e.pageX - os.left;
				dy = e.pageY - os.top;
				$(document).on('mousemove.drag', function(e) {
					el.offset({
						top: e.pageY - dy,
						left: e.pageX - dx
					});
				});
			},
			mouseup: function(e) {
				$this = $(this);

				function local(name, $this) {
					var leftOptionL = name.css("left");
					var leftOptionT = name.css("top");
					var rightOptionL = $this.context.offsetLeft;
					var rightOptionT = $this.context.offsetTop;
					var smallLeft = parseInt(leftOptionL) - 100;
					var bigLeft = parseInt(leftOptionL) + 100;
					var smallTop = parseInt(leftOptionT) - 30;
					var bigTop = parseInt(leftOptionT) + 30;
					if(rightOptionL >= smallLeft && rightOptionL <= bigLeft && rightOptionT >= smallTop && rightOptionT <= bigTop) {
						//$this.css({
						//    left:leftOptionL,
						//    top:leftOptionT
						//});
						return true;
					} else {
						return false;
					}
				}
				if(local($(".six-option1"), $this) && $(".six-option1").hasClass("choose") == false) {
					$(".six-option1").html(optionContent);
					//$(".six-option1").css({zIndex:"none"});
					chooseOption.css({
						display: "none"
					});
					$(".six-option1").addClass("choose");
					$(document).off('mousemove.drag');
				}
				if(local($(".six-option2"), $this) && $(".six-option2").hasClass("choose") == false) {
					$(".six-option2").html(optionContent);
					//$(".six-option2").css({zIndex:"none"});
					chooseOption.css({
						display: "none"
					});
					$(".six-option2").addClass("choose");
					$(document).off('mousemove.drag');
				}
				if(local($(".six-option3"), $this) && $(".six-option3").hasClass("choose") == false) {
					$(".six-option3").html(optionContent);
					//$(".six-option3").css({zIndex:"none"});
					chooseOption.css({
						display: "none"
					});
					$(".six-option3").addClass("choose");
					$(document).off('mousemove.drag');
				}
				if(local($(".six-option4"), $this) && $(".six-option4").hasClass("choose") == false) {
					$(".six-option4").html(optionContent);
					//$(".six-option3").css({zIndex:"none"});
					chooseOption.css({
						display: "none"
					});
					$(".six-option4").addClass("choose");
					$(document).off('mousemove.drag');
				}
			}
		});
	}
	hit($(".six-option5"), '1');
	hit($(".six-option6"), "2");
	hit($(".six-option7"), "3");
	hit($(".six-option8"), "4");
	//点击确定
	rightClick();

	function rightClick() {
		$("#btn3").click(function() {
			if($(".six-option1").html() == "1" && $(".six-option2").html() == "2" && $(".six-option3").html() == "3" && $(".six-option4").html() == "4") {
				$(".rightAnswer1").css({
					opacity: "0"
				});
				$("#six").css({
					display: "none",
					zIndex: "-10"
				});
			} else {
				$(".rightAnswer1").css({
					opacity: "1"
				});
				$("#six .questionContent").empty();
				var string =
					" <h4> 4、请将下面 <span class='importWord'>坐骨神经</span>丛与 <span class='importWord'>腰背部脊柱</span>拖动到左图中对应的位置。</h4>" +
					"<div class='topic'>" +
					'<img src="img/topicImg2.png" alt=""/>' +
					'<div class="six-option six-option1">A</div>' +
					'<div class="six-option six-option2">B</div>' +
					'<div class="six-option six-option3">C</div>' +
					'<div class="six-option six-option4">D</div>' +
					'<div class="six-option six-option5">1</div>' +
					'<div class="six-option six-option6">2</div>' +
					'<div class="six-option six-option7">3</div>' +
					'<div class="six-option six-option8">4</div>' +
					'</div>' +
					'<span class="rightAnswer1" style="opacity:1">正确答案是 腰背部脊柱为 A  /  坐骨神经丛为 B</span>' +
					'<div class="m-button4">提交</div>';
				$("#six .questionContent").html(string);
				hit($(".six-option5"), '腰部脊椎');
				hit($(".six-option6"), "坐骨神经");
				rightClick()
			}
		})
	}
	$("#btn3").click(function() {
		$(".question_three").hide();
		$(".question_four").show();
	});

	$("#answer_A4").toggle(function() {
		$("#icon_A4").addClass("choose_icon_hover2").removeClass("choose_icon2");
	}, function() {
		$("#icon_A4").addClass("choose_icon2").removeClass("choose_icon_hover2");
	});
	$("#answer_B4").toggle(function() {
		$("#icon_B4").addClass("choose_icon_hover2").removeClass("choose_icon2");
	}, function() {
		$("#icon_B4").addClass("choose_icon2").removeClass("choose_icon_hover2");
	});
	$("#answer_C4").toggle(function() {
		$("#icon_C4").addClass("choose_icon_hover2").removeClass("choose_icon2");
	}, function() {
		$("#icon_C4").addClass("choose_icon2").removeClass("choose_icon_hover2");
	});
	$("#answer_D4").toggle(function() {
		$("#icon_D4").addClass("choose_icon_hover2").removeClass("choose_icon2");
	}, function() {
		$("#icon_D4").addClass("choose_icon2").removeClass("choose_icon_hover2");
	});

	// Warn if overriding existing method
	if(Array.prototype.equals)
		console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
	// attach the .equals method to Array's prototype to call it on any array
	Array.prototype.equals = function(array) {
		// if the other array is a falsy value, return
		if(!array)
			return false;
		// compare lengths - can save a lot of time 
		if(this.length !== array.length)
			return false;
		for(var i = 0, l = this.length; i < l; i++) {
			// Check if we have nested arrays
			if(this[i] instanceof Array && array[i] instanceof Array) {
				// recurse into the nested arrays
				if(!this[i].equals(array[i]))
					return false;
			} else if(this[i] !== array[i]) {
				// Warning - two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}
		return true;
	}
	// Hide method from for-in loops
	Object.defineProperty(Array.prototype, "equals", {
		enumerable: false
	});
	var arr = new Array();
	var tmp;
	var rightArr = new Array(0, 2, 4);
	$("#btn4").click(function() {
		arr = [];
		for(var i = 0; i < $(".choose_answer li").length; i++) {
			if($(".question_four .choose_answer li span").eq(i).hasClass("choose_icon_hover2")) {
				arr.push(i);
			}
		}
		console.log(rightArr);
		console.log(arr);
		if(arr.equals([])) {
			alert("请选择答案");
		} else if(rightArr.equals(arr)) {
			$(".wrong4").hide();
			$(".right4").show();
		} else {
			$(".right4").hide();
			$(".wrong4").show();
		}
	});
	$("#btn4").click(function() {
		$("#btn4").hide();
		$("#next4").show();
	});
	$("#next4").click(function() {
		$(".question_four").hide();
		$(".question_five").show();
		drag();
	});
	
	//拖拽排序
	$("#btn5").click(function() {
		if($("#item4").css("left") < $("#item3").css("left") && $("#item3").css("left")<$("#item2").css("left") &&$("#item2").css("left")<$("#item1").css("left")) {
			$(".right5").css("display","block");
			$(".wrong5").css("display","none");
		} else {
			$(".wrong5").css("display","block");
			$(".right5").css("display","none");
		}
	});
});

	function drag() {
		function Pointer(x, y) {
			this.x = x ;
			this.y = y ;
		}
		function Position(left, top) {
			this.left = left ;
			this.top = top ;
		}
		$(".item_container .item").each(function(i) {
			this.init = function() { // 初始化
				this.box = $(this).parent() ;
				$(this).attr("index", i).css({
					position : "absolute",
					left : this.box.offset().left,
					top : this.box.offset().top
				}).appendTo(".item_container") ;
				this.drag() ;
			},
			this.move = function(callback) {  // 移动
				$(this).stop(true).animate({
					left : this.box.offset().left,
					top : this.box.offset().top
				}, 500, function() {
					if(callback) {
						callback.call(this) ;
					}
				}) ;
			},
			this.collisionCheck = function() {
				var currentItem = this ;
				var direction = null ;
				$(this).siblings(".item").each(function() {
					if(
						
						currentItem.pointer.x > this.box.offset().left &&
						currentItem.pointer.y > this.box.offset().top &&
						(currentItem.pointer.x < this.box.offset().left + this.box.width()) &&
						(currentItem.pointer.y < this.box.offset().top + this.box.height())
					) {
						// 返回对象和方向
						if(currentItem.box.offset().top < this.box.offset().top) {
							direction = "down" ;
						} else if(currentItem.box.offset().top > this.box.offset().top) {
							direction = "up" ;
						} else {
							direction = "normal" ;
						}
						this.swap(currentItem, direction) ;
					}
				}) ;
			},
			this.swap = function(currentItem, direction) { // 交换位置
				if(this.moveing) return false ;
				var directions = {
					normal : function() {
						var saveBox = this.box ;
						this.box = currentItem.box ;
						currentItem.box = saveBox ;
						this.move() ;
						$(this).attr("index", this.box.index()) ;
						$(currentItem).attr("index", currentItem.box.index()) ;
					},
					down : function() {
						// 移到上方
						var box = this.box ;
						var node = this ;
						var startIndex = currentItem.box.index() ;
						var endIndex = node.box.index(); ;
						for(var i = endIndex; i > startIndex ; i--) {
							var prevNode = $(".item_container .item[index="+ (i - 1) +"]")[0] ;
							node.box = prevNode.box ;
							$(node).attr("index", node.box.index()) ;
							node.move() ;
							node = prevNode ;
						}
						currentItem.box = box ;
						$(currentItem).attr("index", box.index()) ;
					},
					up : function() {
						// 移到上方
						var box = this.box ;
						var node = this ;
						var startIndex = node.box.index() ;
						var endIndex = currentItem.box.index(); ;
						for(var i = startIndex; i < endIndex; i++) {
							var nextNode = $(".item_container .item[index="+ (i + 1) +"]")[0] ;
							node.box = nextNode.box ;
							$(node).attr("index", node.box.index()) ;
							node.move() ;
							node = nextNode ;
						}
						currentItem.box = box ;
						$(currentItem).attr("index", box.index()) ;
					}
				}
				directions[direction].call(this) ;
			},
			this.drag = function() { // 拖拽
				var oldPosition = new Position() ;
				var oldPointer = new Pointer() ;
				var isDrag = false ;
				var currentItem = null ;
				$(this).mousedown(function(e) {
					e.preventDefault() ;
					oldPosition.left = $(this).position().left ;
					oldPosition.top =  $(this).position().top ;
					oldPointer.x = e.clientX ;
					oldPointer.y = e.clientY ;
					isDrag = true ;
					
					currentItem = this ;
					
				}) ;
				$(document).mousemove(function(e) {
					var currentPointer = new Pointer(e.clientX, e.clientY) ;
					if(!isDrag) return false ;
					$(currentItem).css({
						"opacity" : "0.8",
						"z-index" : 999
					}) ;
					var left = currentPointer.x - oldPointer.x + oldPosition.left ;
					var top = currentPointer.y - oldPointer.y + oldPosition.top ;
					$(currentItem).css({
						left : left,
						top : top
					}) ;
					currentItem.pointer = currentPointer ;
					// 开始交换位置
					
					currentItem.collisionCheck() ;
					
					
				}) ;
				$(document).mouseup(function() {
					if(!isDrag) return false ;
					isDrag = false ;
					currentItem.move(function() {
						$(this).css({
							"opacity" : "1",
							"z-index" : 0
						}) ;
					}) ;
				}) ;
			}
			this.init() ;
		}) ;
	} 