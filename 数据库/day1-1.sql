/*sql语句分为四大类：定义、查询、操作、控制*/

CREATE DATABASE class148   -- 定义数据库
USE class148  -- 使用数据库


-- 注释内容是两个端横线+空格+注释内容

-- 注释快捷键ctrl+shift+c

/*多行注释*/

DROP DATABASE class148  -- 删除数据库


-- 创建表格

/*create table 表名（列名1 列1的数据类型，列名2 列2的数据类型......）

表格不能单独 创建，必须同时设置表格的列出来，

列名一定是英文，否则读取不出数据，显示乱码


数据类型：

1.数字
  
  1）整形-int

  2）a.浮点类型-float(4个字节)
      
     b.如果不够可以使用double，不需要设置长度
     
     c.decimal（总位数，小数点后的位数）
 
 2.字符串
 
  1）固定长度的字符串：char(长度) 不管存入的数据有多长们都会留固定的长度用于存储数据

  2）可变长度字符串：varchar(长度)  括号内是设置的最大字节数，但是存多少就占多少
  
  3）text 较长的文本
  
 3.日期
 
  1）date yyyy-MM-dd，表示年 月 日
  
  2）datetime yyyy-MM-dd HH:mm:ss   年月日时分秒
 
*/


CREATE TABLE t_student(
id INT,
stuName VARCHAR(10)
)

/*索引
创建索引的方式
create index 索引名称 on 表名 （列名1，列名2）*/
CREATE INDEX studentName ON t_student(stuName)

/*添加约束的方法

1.主键约束，将其中一列设置为主键
作用：当设置为主键，该列的存储成功的条件，非空 不重复
方法：create table 表名（列名1 列的数据类型[列的约束]）
*/

CREATE TABLE t_student(
id INT PRIMARY KEY, -- 主键
stuName VARCHAR(10)
)


CREATE TABLE t_student1(
id INT PRIMARY KEY AUTO_INCREMENT, -- 主键 自增长
stuName VARCHAR(10)
)


CREATE TABLE t_student2(
id INT PRIMARY KEY AUTO_INCREMENT, -- 主键 自增长
stuName VARCHAR(10),
phone VARCHAR(20) UNIQUE NOT NULL -- UNIQUE 唯一约束 NOT NULL 不能为空
)








