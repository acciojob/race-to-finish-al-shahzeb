window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


let pr1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Promise 1')
	}, 1000)
});
let pr2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Promise 2')
	}, 3000)
});
let pr3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Promise 3')
	}, 2000)
});
let pr4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Promise 4')
	}, 5000)
});
let pr5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Promise 5')
	}, 2000)
});


promises = [pr1, pr2, pr3, pr4, pr5];

let res = Promise.any(promises);

res.then((data)=>{
	document.getElementById('output').innerText = data;
})