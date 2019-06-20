var str=`  `;
for(var i=1;i<10;i++){
  for(var j=1;j<=i;j++){
    str=str+`${i}*${j}=${i*j} `
  }
  str+=`
  `;
}
console.log(str);
