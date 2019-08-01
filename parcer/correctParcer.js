            document.getElementById('one').value = 'new';
			let addBtn = document.getElementById('addBtn');
			let output = document.getElementById('output');

			
			addBtn.addEventListener('click', function(){
				let newText = document.getElementById('one').value;
				let step1 = trimUseless('Name', newText);
				let step2 = trimUseless('From', step1);
				let dateRaw = trimNeeded('Room', step2);
				let step3 = trimUseless('Type', step2);
				
				let hotelName = trimNeeded('Starting', step1);
				let date = dateCorrector(dateRaw);
				let room = trimNeeded('Meal', step3);
				let mealPlan = trimUseless('Plan', step3);


				output.innerHTML = date + '</br>' + hotelName+' - ' + room + ' '+mealPlan+'</br>TOTAL: $';			
			});

			function trimUseless(word, paragraph){
				let wordLength = word.length;
				let firstIndexOf = paragraph.indexOf(word);
				let lastIndexOf = firstIndexOf + wordLength;
				let newPara = paragraph.substring(lastIndexOf).trim();
				return newPara;
			};

			function trimNeeded(word, paragraph){
				let pointing = paragraph.indexOf(word);
				let neededPhrase = paragraph.substring(0, pointing).toUpperCase();
				return neededPhrase;
			};

			function dateCorrector(rawDate) {
				return rawDate.trim().replace(/-/g, "").replace(/2019/g, "").replace(/ TO /, "-");
			};