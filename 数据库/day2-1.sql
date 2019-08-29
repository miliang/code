-- 投影，通过查询和筛选得到的结果

/* 查询S003学号
t_studentt_class
从哪里==》表名 学生表

条件  学号=S003 */




-- 语法：select 列名1，列名2 form 表名 where 列名=值

SELECT * FROM t_student;  -- 投影所有列

-- ================条件筛选============================

SELECT * FROM t_student WHERE s_id=2;  -- 投影id=2的学生信息

-- 执行步骤

SELECT *        -- 3
FROM t_student  -- 1
WHERE s_id=2;   -- 2

-- 条件筛选可以筛选掉重复部分

SELECT DISTINCT s_sex,s_name FROM t_student

-- and 并且，同时满足几个条件
SELECT * FROM t_student WHERE s_sex="女" AND s_classid=1;

-- 介于某条件之间的被选出
SELECT * FROM t_student WHERE s_age<=20 AND s_age>=16;
SELECT * FROM t_student WHERE s_age BETWEEN 16 AND 20;


-- 或者 or ，满足其中一个条件

SELECT * FROM t_student WHERE s_name="龙超" OR s_age=30;


SELECT * FROM t_student WHERE s_age<=30 OR s_age>17 AND s_sex="男"
-- 1.年龄《=30  或者 2.年龄》17并且 性别=男


-- 查询学生年龄为 17 或者19 或者10的

SELECT * FROM t_student WHERE s_age=17 OR s_age=19 OR s_age=10;

SELECT * FROM t_student WHERE s_age IN(10,17,19);

-- 取反

SELECT * FROM t_student WHERE s_age NOT IN(10,17,19);

-- ======================模糊查询======================

-- 查询所有姓刘的学生

SELECT * FROM t_student WHERE s_name LIKE "刘%";

-- 查询姓名结尾是xx杰的学生
SELECT * FROM t_student WHERE s_name LIKE "%杰";


SELECT * FROM t_student WHERE s_name LIKE "%一%";  -- 只要包含一


-- 查询所有姓刘的学生 并且 名字长度是三个字的

SELECT * FROM t_student WHERE s_name LIKE "刘__" 


-- ===================为空的查询=============================

SELECT * FROM t_student WHERE s_sex=""; -- ""代表空白 不是null

SELECT * FROM t_student WHERE s_age IS NULL;  -- null=====is



-- 不为空的查询============

SELECT * FROM t_student WHERE s_age IS NOT NULL;

-- =================备份===================

CREATE TABLE t_student_bak SELECT * FROM t_student; -- 备份表及所有数据



CREATE TABLE t_student_bak1 SELECT * FROM t_student WHERE 1=0; -- 备份了表结构，不会有数据


-- =======================对查询结果排序======================================

SELECT * FROM t_student ORDER BY s_age ASC;  -- 升序（默认,可以不写）


SELECT * FROM t_student ORDER BY s_age DESC; -- 降序t_class



SELECT * FROM t_student ORDER BY s_age ASC,s_classid DESC;

-- 限定返回的信息条数

SELECT * FROM t_student LIMIT 3;

-- 指定返回信息从哪里开始返回，返回几行  limit 数字（从哪里开始，返回几条）

SELECT * FROM t_student LIMIT 1,3;


-- 对筛选结果进行计算

SELECT s_age+10 FROM t_student;

SELECT s_age+10 AS "加了10岁之后" FROM t_student;

-- ===============================条件筛选END============================

SELECT s_id,s_name,s_age FROM t_student;  -- 投影指定的列

-- 别名 列


SELECT s_id,s_name AS "学生姓名",s_age AS "学生年龄" FROM t_student; 


-- 别名 表

SELECT a.s_name FROM t_student a;

SELECT t_student.s_name FROM t_student;


-- 投影顺序

 
SELECT *            --  3 6

FROM t_student      --  1

WHERE s_age>=20     --  2

ORDER BY s_age      --  4

LIMIT 3;            --  5







