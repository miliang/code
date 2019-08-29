CREATE TABLE t_class(
c_id INT PRIMARY KEY,
c_clsname VARCHAR(50)
)

INSERT INTO t_class(c_id,c_clsname) VALUES
(1,'一班'),
(2,'二班'),
(3,'三班'),
(4,'四班');

CREATE TABLE t_student(
s_id INT PRIMARY KEY AUTO_INCREMENT,
s_stuname VARCHAR(10),
s_phone INT UNIQUE,
s_gender VARCHAR(5) DEFAULT "男",
s_classid INT REFERENCES t_class(c_id),
CONSTRAINT FOREIGN KEY(s_classid) REFERENCES t_class(c_id),
s_age INT,
s_grade INT
)

INSERT INTO t_student(s_stuname,s_phone,s_classid,s_age,s_grade) VALUES
('郑二',124,1,20,60),
('王三',122,2,25,99),
('赵六',334,3,22,60),
('张三三',555,2,17,89),
('李四',1224,2,26,76),
('赵',5566,1,19,67),
('三娃',NULL,1,20,80),
('一',NULL,3,21,60),
('二',NULL,1,22,90),
('三',NULL,3,34,60),
('四',NULL,1,20,54),
('五',NULL,1,23,88),
('六',NULL,1,17,62)

-- 一个查询里面去嵌套另一个查询

-- 查询学生姓名、性别、分数、班级名称

SELECT s_stuname,s_gender,s_grade,s_classid FROM t_student;

SELECT c_clsname FROM t_class WHERE c_id=t_student 表里面的 s_classid

-- 综合后

SELECT s_stuname,s_gender,s_grade,（SELECT c_clsname FROM t_class WHERE c_id=t_student 表里面的 s_classid） FROM t_student;

-- 相关子查询
-- select嵌套
-- 1.子查询的结果返回只能是单行单列，


SELECT s_stuname,s_gender,s_grade,s_classid,(SELECT c_clsname FROM t_class WHERE c_id=s_classid) FROM t_student;


-- 2.子查询依赖于主查询不能够独立运行

-- 3.主查询执行一次，子查询也会执行一次



-- 非相关子查询：

-- 1.可以返回多行多列的数据，from嵌套必须给子查询 起别名 

-- 2.子查询只需要执行一次，子查询不需要依赖主查询能够独立运行

-- from嵌套

-- 查询性别为女 并且 姓名为张三的学生 

SELECT * FROM t_student WHERE s_gender="女"  -- 当前得到一张所有女生的表


-- 在所有女生的表中去查询叫张三的学生

SELECT * FROM (SELECT * FROM t_student WHERE s_gender="女") AS a WHERE a.s_stuname="张三"


-- where 嵌套

-- 查询一班里面的学生有哪些？


SELECT * FROM t_student WHERE s_classid=(SELECT c_id FROM t_class WHERE c_clsname="一班");


-- 查询和张三同学考同样分数的学生信息

-- 首先查询张三的分数
-- 查询所有学生分数=张三的分数


SELECT s_grade FROM t_student WHERE s_stuname="张三"


SELECT * FROM t_student 

WHERE s_grade IN (SELECT s_grade FROM t_student WHERE s_stuname="张三")
AND s_stuname!="张三";

-- 查询那个班级没有学生

-- 首先查询学生表里面的id

-- 班级表id

SELECT * FROM t_class WHERE c_id NOT IN (SELECT DISTINCT s_classid FROM t_student);