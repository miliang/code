CREATE TABLE dept(
deptno INT PRIMARY KEY,
dname VARCHAR(14),
loc VARCHAR(13)
);
CREATE TABLE emp(
empno INT NOT NULL PRIMARY KEY,
ename VARCHAR(10),
job VARCHAR(10),
mgr INT,
hiredate DATETIME,
sal DOUBLE,
comm DOUBLE,
deptno INT,
FOREIGN KEY(deptno) REFERENCES dept(deptno)
);
INSERT INTO dept VALUES(10, 'Accounting', 'New York') ;
INSERT INTO dept VALUES(20, 'Research', 'Dallas') ;
INSERT INTO dept VALUES(30, 'Sales', 'Chicago') ;
INSERT INTO dept VALUES(40, 'Operations', 'Boston') ;
INSERT INTO dept VALUES(50, 'Admin', 'Washing') ;

INSERT INTO emp VALUES(7369, 'Smith', 'Clerk',7902, '1980-12-17',800,0,20) ;
INSERT INTO emp VALUES(7499, 'Allen', 'Salesman',7698,'1981-2-20',1600,300,30) ;
INSERT INTO emp VALUES(7844, 'Turner', 'Salesman',7499, '1981-9-8',1500,0,30) ;
INSERT INTO emp VALUES(7698, 'Tom', 'Manager',0, '1981-9-8',6100,600,40) ;
INSERT INTO emp VALUES(7876, 'Adams', 'Clerk',7900, '1987-5-23',1100,0,20) ;
INSERT INTO emp VALUES(7900, 'James', 'Clerk',7698, '1981-12-3',2400,0,30) ;
INSERT INTO emp VALUES(7902, 'Ford', 'Analyst',7698, '1981-12-3',3000,NULL,20) ;
INSERT INTO emp VALUES(7901, 'Kik', 'Clerk',7900, '1981-12-3',1900,0,30) ;
-- emp员工表(empno员工号/ename员工姓名/job工作/mgr上级人员编号/hiredate受-- 雇-- 日期/sal薪金/comm佣金/deptno部门编号)

--  工资=薪金+佣金

-- 1．列出至少有一个员工的所有部门。

SELECT deptno,dname FROM dept WHERE deptno IN(SELECT DISTINCT deptno FROM emp);

-- 2．列出薪金比“SMITH”多的所有员工。() 

SELECT * FROM emp WHERE sal>(SELECT sal FROM emp WHERE ename="Smith");

-- 3．列出所有员工的姓名及其直接上级的姓名。

SELECT ename,(SELECT ename FROM emp AS emp2 WHERE emp2.empno=emp1.mgr) FROM emp AS emp1;

-- 4．列出受雇日期早于其直接上级的所有员工。(同上,日期可直接拿来比较) 

-- emp1 员工
-- emp2 上级

SELECT * FROM emp AS emp1 WHERE emp1.hiredate<(SELECT emp2.hiredate FROM emp AS emp2 WHERE emp2.empno=emp1.mgr);

-- 5．列出所有工作为“CLERK”（办事员）的姓名及其部门名称。(域，注意()) 

SELECT ename,(SELECT dname FROM dept WHERE emp.deptno=dept.deptno) FROM emp WHERE job="Clerk";

-- 6．列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号。

SELECT * FROM emp WHERE deptno=(SELECT deptno FROM dept WHERE dname="Sales")

-- 7．列出薪金高于公司平均薪金的所有员工。(反复查自己) 

SELECT AVG(sal) FROM emp


SELECT * FROM emp WHERE sal>(SELECT AVG(sal) FROM emp)


-- 8．列出与“Kik”从事相同工作的所有员工。(排除自己) 

/*1 找到kik的工作
2.比较 where job=1.job
3.ename！=kik */

SELECT * FROM emp WHERE job=(SELECT job FROM emp WHERE ename="Kik") AND ename!="Kik";



-- 9．列出素有员工的姓名和薪金，且这些员工的薪金等于 部门标号为30中 任意一个员工的薪金。(any的用法，且排挤) 

-- 1 首先找出部门为30的员工的薪金

--  2. 任意在1 里面出现过的薪金对应的员工

SELECT * FROM emp WHERE sal=ANY(SELECT sal FROM emp WHERE deptno=30) AND deptno!=30;


-- 10．列出所有的员工姓名和薪金，且这些员工的薪金>在部门编号为30工作的员工薪金(max的用法) 


SELECT * FROM emp WHERE sal>(SELECT MAX(sal) FROM emp WHERE deptno=30);


-- 11．列出在每个部门工作的员工数量、平均工资和平均服务期限。(

SELECT deptno,
COUNT(*) AS 员工数量,
AVG(IFNULL(sal,0)+IFNULL(comm,0)) AS "平均工资",
AVG(YEAR(NOW())-YEAR(hiredate)) AS "平均服务期限"
FROM emp GROUP BY deptno;

-- 12．列出所有员工的姓名、部门名称和工资. 
























