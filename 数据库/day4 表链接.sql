-- 表连接


-- 查询每个学生所在的班级名称

-- 子查询

SELECT c_clsname FROM t_class WHERE c_id=s_classid;  -- 班级名称

SELECT s_stuname,(SELECT c_clsname FROM t_class WHERE c_id=s_classid) FROM t_student;

/*表连接 
select 列1，列2...from (表1 join 表2)*/


-- ==================================内连接：inner join .. on，通常省略 inner=======

-- join..on 条件 ，on的条件是在表连接的时候用的，和条件查询没有关系


-- 查询每个学生所在的班级名称 

SELECT * FROM (t_student JOIN t_class ON t_class.c_id=t_student.s_classid);

-- 表别名

SELECT * FROM (t_student st JOIN t_class c ON c.c_id=st.s_classid);

-- 查询一班的所有学生

SELECT * FROM (t_student st JOIN t_class c ON c.c_id=st.s_classid) WHERE c.c_clsname="一班"


-- ===============================外链接==============================
--  1）左连接
-- left outer join  通常 outer


-- 2)右连接

-- right outer join 通常 outer

-- 查询所有的班级信息，没有学生的班级也要显示
-- 左连接
SELECT * FROM t_class c LEFT JOIN t_student st ON c.c_id=st.s_classid;
-- 内连接
SELECT * FROM t_class c JOIN t_student st ON c.c_id=st.s_classid;

/*使用左连接 左表所有的内容都必须显示，哪怕没有也会以null的形式出现
而内连接如果没有符合条件的就不显示*/

-- 查询所有学生信息，把学生表在左，班级表在右

SELECT * FROM t_student st LEFT JOIN t_class c ON st.s_classid=c.c_id;


-- ======================右连接，以显示完所有的右表信息为主==============

-- 查询所有的班级信息，没有学生的班级也要显示

SELECT * FROM t_student st RIGHT JOIN t_class c ON st.s_classid=c.c_id;


-- =================3.自连接=================
-- 自己既是表1也是表2，自己连接自己（可以内联接，也可以是外连接）

-- 列出所有员工的姓名及其直接上级的姓名

-- 子查询

SELECT ename,(SELECT ename FROM emp AS emp2 WHERE emp2.empno=emp1.mgr) FROM emp AS emp1;


-- 表连接

SELECT e1.ename AS "员工姓名",e2.ename AS "上级姓名" FROM emp e1 JOIN emp e2 ON e1.mgr=e2.empno
