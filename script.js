function fibonacci(num) {
// your code here
	if(num===0){
		return 0;
	}
	else if(num===1){
		return 1;
	}
	else{
		let ans = [0,1];
		for( let i = 2; i<=num.length; i++){
			ans[i] = ans[i-1]+ ans[i-2];
		}
		return ans[num];
		
	}

	
}

module.exports = fibonacci;
