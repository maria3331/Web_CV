const acquis = document.querySelector('.acquis');
const progressBars = document.querySelectorAll('.progress-bar');


function showProgress(val){
	progressBars.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		display = `${value/val}%`;
		console.log(val);
		progressBar.style.opacity = 1;
		progressBar.style.width = display;
	});
}
function hideProgress(){
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
		console.log('hide');
	});
}

window.addEventListener('load', () =>{
	const sectionPos = acquis.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 5;
	
	setTimeout(function(){ showProgress(4); }, 1000);
	setTimeout(function(){ showProgress(3); }, 1500);
	setTimeout(function(){ showProgress(2); }, 2000);
	setTimeout(function(){ showProgress(1); }, 2500);
	clearTimeout();
	
});

window.addEventListener('load', function(){
	document.querySelectorAll('#parcoursScolaire .chkPointF').forEach(function(element){
		element.classList.add("active");
	});
});

window.addEventListener('scroll', function(){
	document.querySelectorAll('#timelinePp .chkPointPp').forEach(function(element){
		element.classList.add("active");
	});
});