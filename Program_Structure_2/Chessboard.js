let size = 8;
let patt = "";
for (let i=0; i<size; i++) {
  	let str = "";
  	if (i%2 == 0) patt = " #";
  	else          patt = "# ";
	for (j=0; j<size/2; j++) {
    	str += patt;
    }
  	console.log(str);
}  
