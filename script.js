	var soundArray = [];
	var uniqueSoundArray = [];
		var randomPlaylistName = ['Homeless Planes',
'Disastrous Rule',
'Ethereal Spade',
'Cloistered Fifth',
'Broad Babies',
'Fragile Fire',
'Rapid Rice',
'Exciting Pain',
'Fretful Cook',
'Young Yoke',
'Psychedelic Need',
'Abnormal Account',
'Aware Beginner',
'Super Scene',
'Frantic Week',
'Scintillating Look',
'Simplistic Cord',
'Motionless Mass',
'Utopian Apparatus',
'Chunky Bushes',
'Steadfast Salt',
'Low Afterthought',
'Proud Engine',
'Marvelous Egg',
'Shallow Snow',
'Unarmed Giraffe',
'Fearless Pancake',
'Sable System',
'Sophisticated Wilderness',
'Perfect Feeling',
'Big Bean',
'Rhetorical Pizzas',
'Elastic Twig',
'Windy Week',
'Disillusioned Time',
'Combative Crime',
'Sudden Pocket',
'Youthful Tiger',
'Vengeful Nest',
'Brown Baby']

	$('.audio_container').click(function() {
		$(this).css('border','6px solid green')
		tempJson = {};
		tempJson["id"] = $(this).find('audio').attr('id');
		tempJson["vol"] = $(this).find('audio')[0].volume;
		if (uniqueSoundArray.indexOf(tempJson["id"]) == -1) {
			uniqueSoundArray.push(tempJson["id"]);
			soundArray.push(tempJson);
			$('#sound_playlist').append('<li><b>'+tempJson.id+'</b> | <b>'+Math.round(tempJson.vol*10000)/100+'%</b><i class="fa fa-times"></i></li>')
		}
	})

	$('#play').click(function() {
		for (var i=0;i<uniqueSoundArray.length;i++) {
			document.getElementById(uniqueSoundArray[i]).play();
		}
	})

	$("#play_list").on('click', '.fa-times', function() {
		var id = $(this).prev().prev().html();
		$(this).parent().remove();
		$('#'+id).parent().parent().parent().css('border','6px solid indianred');
		$('#'+id)[0].pause(); // Stop playing
		$('#'+id)[0].currentTime = 0; // Reset time
		for (var i=0;i<uniqueSoundArray.length;i++) {
			if (uniqueSoundArray[i] == id) {
				uniqueSoundArray.splice(i,1)
				soundArray.splice(i,1);
			}
		}
	})

	$('#save').click(function() {
		tempJson = {};
		tempJson["name"] = $('#playlist_name').val();
		soundArray.push(tempJson)
		console.log(soundArray);
	})

	$('#cancel').click(function() {
		$('audio').each(function(){
		    this.pause(); // Stop playing
		    this.currentTime = 0; // Reset time
		}); 
		soundArray = [];
		uniqueSoundArray = [];
		$('#playlist_name').val('');
		$('.audio_container').css('border','6px solid indianred');
		$('#sound_playlist li').remove();
	})

	$('#random').click(function() {
		$('#cancel').click();
		var randNum = Math.round((Math.random()*8));
		var randNumC = Math.round((Math.random()*40));
		$('#playlist_name').val(randomPlaylistName[randNumC]);
		for (var i=0;i<randNum;i++) {
			var randNumB = Math.round((Math.random()*8));
			$('#sound_container').children()[randNumB].click()
		}
	})