{
  console.log('B',0B111110111); //ES6 二进制  以0B开头 其中B大小写都可以
  console.log(0o767);  //八进制 以0O开头 同上
}

{
  console.log('15',Number.isFinite(15));  //Number.isFinite()是否是有限的
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));

}

{
  console.log('25',Number.isInteger(25));  //Number.isInteger()是否是整数
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25'));
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER); //正负2的53次方之间数
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}

{
  console.log(4.1,Math.trunc(4.1));  //只取整数部分
  console.log(4.9,Math.trunc(4.9));
}

{
  console.log('-5',Math.sign(-5));  //判断是正数还是负数,他会转化
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}


{
  console.log('-1',Math.cbrt(-1));  //立方根计算
  console.log('8',Math.cbrt(8));
}
