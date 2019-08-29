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
id INT PRIMARY KEY AUTO_INCREMENT, -- 主键 自增长，一个表格只能设置一个主键-物理主键
stuName VARCHAR(10),
phone VARCHAR(20) UNIQUE NOT NULL -- UNIQUE 唯一约束 NOT NULL 不能为空
)


CREATE TABLE t_student3(
id INT PRIMARY KEY AUTO_INCREMENT, -- 主键 自增长，一个表格只能设置一个主键-物理主键
stuName VARCHAR(10),
phone INT UNIQUE NOT NULL, -- UNIQUE 唯一约束 NOT NULL 不能为空
sex VARCHAR(5) DEFAULT '男'  -- 默认约束，可以使用双引号或者单引号
)





-- 创建主表 (外键需要连接的那张表-班级表)
CREATE TABLE t_class(
c_id INT PRIMARY KEY,
c_name VARCHAR(50)
)


-- 创建从表（有依赖关系的--学生表）
CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuname VARCHAR(20),
phone INT UNIQUE NOT NULL,
sex VARCHAR(5) DEFAULT "男",
classid INT REFERENCES t_class(c_id),-- 添加外键
CONSTRAINT FOREIGN KEY(classid) REFERENCES t_class(c_id)  -- 添加外键约束


)
ALTER TABLE t_student AUTO_INCREMENT =500;-- 设置自增长从哪里开始


-- ==========================修改表===================================

-- 添加列：alter table 表名 add 列名 列数据类型 列约束

ALTER TABLE t_student ADD grade INT; -- 数据语句运行的快捷键F9



-- 修改列：alter table 表名 change 旧列名 新列名 新列数据类型 新约束

ALTER TABLE t_student CHANGE grade grade1 FLOAT

-- 删除列：alter table 表名 drop column 列名

ALTER TABLE t_student DROP COLUMN sex;

-- 删除表：drop table 表名  删除表格的时候 需从从表开始删除，直接删除主表无法删掉的

DROP TABLE t_class;


-- 通过数据库语句添加新数据

-- insert into 表名（列名：不写列名就默认为所有列添加数据） value(值：必须与列的位置一一对应)
-- 如果有自增长的设置 不需要存入数据

INSERT INTO t_student(stuname,phone,sex,classid) VALUE ("冯小龙",222,"女",1) -- 添加指定列

INSERT INTO t_student VALUE (NULL,"冯小龙2",2222,"女",1) -- 添加所有列


-- 同时添加多行
INSERT INTO t_student VALUE(NULL,"龙超",333,DEFAULT,1),
(NULL,"小丁丁",1111,DEFAULT,1)



-- 更新数据
-- update 表名 set 列1=新值，列2=新值2

UPDATE t_student SET sex="女";  -- 统一更改该列所有的值



-- 不统一修改该列所有值，数据是需要被筛选的

UPDATE t_student SET sex="男" WHERE stuname="龙超"; -- where添加过滤条件

-- 删除数据

-- delete from 表名 where 过滤条件

DELETE FROM t_student WHERE stuname="小丁丁"


-- 删除该表所有数据

-- delete from t_student; -- 清空之后自增长id继续，不归零


TRUNCATE TABLE t_student; -- 清空所有数据，id自增长归零，数据清空之后无法恢复



