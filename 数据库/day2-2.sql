-- select 列 from 表 where 条件

-- 聚合函数 count sum avg max min

-- 1.计数 count

SELECT COUNT(*) FROM t_student;      -- 所有学生信息总共有多少条
SELECT COUNT(s_sex) FROM t_student;  -- 计算结果不包含 null


-- 2.求和 sum

SELECT SUM(s_age) FROM t_student;   -- 所有学生总年龄

-- 3. 平均值 avg

SELECT AVG(s_age) FROM t_student; -- 计算结果不包含null

-- 如果希望计算结果包含null

SELECT SUM(s_age)/COUNT(*) FROM t_student;

-- ifnull(指定列，如果指定列为空的替换数值)

SELECT AVG(IFNULL(s_age,0)) FROM t_student;


-- 4.最大值Max/最小值min

SELECT MAX(s_age) FROM t_student;


SELECT MIN(s_age) FROM t_student;


-- 5.分组：group by（）

SELECT COUNT(*) FROM t_student WHERE s_classid=1;

SELECT COUNT(*) FROM t_student WHERE s_classid=2;


-- group by

SELECT s_classid,COUNT(*) FROM t_student GROUP BY s_classid

/*当使用group by的时候，select 后面所跟随的查询内容必须是聚合函数和被group by指定的内容，否则查询结果可能是无效数据*/


-- 查询每个班男生的数量

-- group by s_classid count(*) where s_sex="男"

SELECT s_classid,COUNT(*) FROM t_student WHERE s_sex="男" GROUP BY s_classid;



-- 二次筛选 having(聚合函数)

-- 查询男生数量大于1的班级

-- 分析：首先找出每一班男生的数量 ；然后找出男生数量大于1的班级

SELECT s_classid,COUNT(*) FROM t_student WHERE s_sex="男" GROUP BY s_classid HAVING(COUNT(*)>1)


-- 显示男生数量大于等于1的班级 并且 按照人数排序

-- 分析：首先找出每一个班男生的数量 排序

SELECT s_classid,COUNT(*) FROM t_student WHERE s_sex="男" GROUP BY s_classid HAVING(COUNT(*)>=1) ORDER BY COUNT(*)


-- 显示男生数量大于等于1的班级，按照人数排序，只显示前两条信息

SELECT s_classid,COUNT(*) FROM t_student WHERE s_sex="男" GROUP BY s_classid HAVING(COUNT(*)>=1) ORDER BY COUNT(*) LIMIT 1;



-- 执行步骤

SELECT s_classid,COUNT(*)        -- 4  拿到结果 
FROM t_student                   -- 1  把表加载到内存
WHERE s_sex="男"                 -- 2  条件筛选结果
GROUP BY s_classid               -- 3  对结果分组
HAVING(COUNT(*)>=1)              -- 5  对结果进行二次筛选
ORDER BY COUNT(*)                -- 6  排序
LIMIT 1;                         -- 7  限制条数


