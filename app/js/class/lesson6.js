{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);  //转换成数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2}));  //还有map的作用
}

{
  console.log('fill-7',[1,'a',undefined].fill(7));  //将元素换成一个值
  console.log('fill,pos',['a','b','c'].fill(7,1,3));  //第二个参数是起始位置，第三个参数是长度
}

{
  for(let index of ['1','c','ks'].keys()){  //索引
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){  //值
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){  //索引、值
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));  //替换,被替换起始位置，用于替换的起始位置，用于替换的结束位置
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
