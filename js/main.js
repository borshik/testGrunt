$(document).ready(function(){
	var inputData = 	[[1, 1, 1],
						 [2, 2, 1],
						 [3, 4, 1],
						 [4, 6, 1],
						 [5, 6, 1],
						 [6, 8, 2],
						 [7, 10, 2],
						 [8, 12, 2],
						 [9, 14, 3],
						 [10, 16, 4],
						 [11, 18, 6],
						 [12, 18, 8],
						 [13, 18, 10],
						 [14, 20, 10],
						 [15, 22, 10],
						 [16, 24, 10],
						 [17, 26, 12],
						 [18, 28, 14],
						 [19, 30, 16],
						 [20, 30, 18],
						 [21, 30, 20],
						 [22, 32, 20],
						 [23, 34, 20],
						 [24, 36, 22],
						 [25, 36, 24],
						 [26, 40, 26],
						 [27, 42, 28],
						 [28, 44, 30],
						 [29, 46, 32],
						 [30, 48, 34],
						 [31, 50, 36],
						 [32, 52, 38],
						 [33, 52, 40],
						 [34, 54, 40],
						 [35, 56, 40],
						 [36, 58, 42],
						 [37, 60, 44],
						 [38, 62, 44],
						 [39, 64, 46],
						 [40, 66, 48],
						 [41, 68, 50],
						 [42, 70, 52],
						 [43, 72, 54],
						 [44, 74, 56],
						 [45, 74, 58],
						 [46, 74, 60],
						 [47, 74, 62],
						 [48, 74, 64],
						 [49, 76, 66],
						 [50, 76, 68],
						 [51, 76, 70],
						 [52, 78, 72],
						 [53, 78, 74],
						 [54, 80, 76],
						 [55, 80, 78],
						 [56, 82, 80],
						 [57, 82, 82],
						 [58, 82, 84],
						 [59, 80, 86],
						 [60, 80, 88],
						 [61, 80, 88],
						 [62, 82, 88],
						 [63, 84, 88],
						 [64, 86, 90],
						 [65, 86, 92],
						 [66, 90, 92],
						 [67, 92, 92],
						 [68, 94, 92],
						 [69, 96, 92],
						 [70, 96, 94],
						 [71, 96, 96],
						 [72, 104, 98],
						 [73, 102, 100],
						 [74, 100, 102],
						 [75, 106, 104],
						 [76, 106, 106],
						 [77, 104, 108],
						 [78, 102, 110],
						 [79, 100, 112],
						 [80, 100, 114]];

	var timeLength = inputData.length;
	var time = inputData.length;
	var startPosition = 0;
	var endPosition;
	var k = endPosition/timeLength;
	var interval;
	var x = inputData[0][1] + 'px';
	var y = inputData[0][2] + 'px';
	$('.item1').css({'left': x,'top': y});
	function start() {
		interval = setInterval(function() {
			$('.position').css({'left': startPosition++  + 'px'});
			var timeShow = (timeLength-timeLength%60)/60 + "." + (timeLength--)%60;
			$('.time').text(timeShow);
			for (var i = 0; i < inputData.length; i++) {
				if (i === startPosition){
					x = inputData[i][1] + 'px';
					y = inputData[i][2] + 'px';
					var timeShow = (timeLength-timeLength%60)/60 + "." + (timeLength-i)%60;
					$('.item1').css({'left': x,'top': y});
				}
			};
			// $('.play').addClass('pause').text('pause').removeClass('play');
			console.log(timeShow);
			if(startPosition === time) {
				clearInterval(interval);
			}
		}, 1000)
	};
	function pause() {
		clearInterval(interval);
	};
	function stop() {
		clearInterval(interval);
		$('.position').css({'left': '0px'});
		startPosition = 0;
		timeLength = inputData.length;
		timeShow = (timeLength-timeLength%60)/60 + "." + timeLength%60;
		$('.time').text(timeShow);
		var x = inputData[0][1] + 'px';
		var y = inputData[0][2] + 'px';
		$('.item1').css({'left': x,'top': y});
		// $('.play').text('play');
		// $('.pause').addClass('play').text('play').removeClass('pause');
	};
	$('.play').on('click', start);
	$('.stop').on('click', stop);
	$('.pause').on('click', pause);

});