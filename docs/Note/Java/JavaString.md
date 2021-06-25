# Java 字符串

## Java 的 char 是两个字节，如何存 UTF-8 字符？

- 是否熟悉Java char 和字符串
- 是否了解字符的映射和存储细节
- 是否能触类旁通，横向对比其他语言

1. char 是什么？
    1. Java char 用的就是 utf-16
2. UTF-8 是什么
3. 占几个字节
4. 跟Unicode的关系
5. Java 在编译成字节码后，用的是MUTF-8的字节码
    1. 而python 是解释执行的，源文件与内存中的字符串内容一致，需要指定 utf-8 
    2. Java String 的 length 不是字符数 （emoji）
    
    
```Java
char u8Test = '庆';
System.out.println(Integer.toHexString(u8Test));  //打出来就是unicode 的码点
```


字符集的作用就是，把人类认知的字符映射成一个整数(码点 CodePoint)
