{
  // genertaor基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  let obj={
    start:[1,3,2],
    end:[7,8,9]
  };
  obj[Symbol.iterator]=function* (){
    yield this.start[0];
    yield this.start[1];
    yield this.start[2];
    yield this.end[0];
    yield this.end[1];
    yield this.end[2];
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  let draw=function(count){
    //具体抽奖逻辑
    console.info(`剩余${count}次`);
  }

  let residue=function* (count){
    while(count--){
      yield draw(count);
    }
  }

  let star=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  btn.addEventListener('click',function(){
    star.next();
  },false);
}

{
  //长轮询
  let ajax=function* (){
    yield new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve({code:1});
      },200);
    })
  }

  let pull=function(){
    let generator=ajax();
    let step=generator.next();
    step.value.then(d=>{
      if(d.code!=0){
        setTimeout(()=>{
          console.info('wait');
          pull();
        },1000);
      }else{
        console.info(d);
      }
    });
  }
  pull();
}