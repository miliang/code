/*
创建四张表，学生表（student） 班级表（class）成绩表（sorce）课程表（course
）

学生表的属性：------------------------------ 2   是班级表的从表  又是成绩表的主表

	学号 类型 int  主键 自增长
	
	学生名字 类型 varchar 长度20; 不为空
	年龄 类型 int
	性别 类型 char 长度4
	出生日期 类型 date
	入学日期 类型 datetime
	所属班级编号 类型 varchar 长度20  外键，连接班级表的主键
	
	
班级表的属性:    主表 -------------------------- 1

	班级编号 类型 varchar 长度20   主键
	班级名字 类型 varchar 长度50
	班主任 	 类型 varchar 长度20
	开班时间 类型 date 
	    
成绩表的属性: 从表---------------------------4

	id   类型 int 主键
	学生学号 类型 int    外键 连接学生表的主键
	课程编号 类型 varchar 长度40
	课程成绩 类型 int
	考试时间 类型 date
	
课程表的属性：  主表-----------------------------3

	课程编号 类型 varchar 长度40
	课程名称 类型 varchar 长度40
*/


-- 班级表

CREATE TABLE t_class(
c_id VARCHAR(20) PRIMARY KEY,-- 主键
c_name VARCHAR(50),
c_teacher VARCHAR(20),
c_date DATE   -- 2017-12-31  20171231
)


-- 学生表
CREATE TABLE t_student(
s_id INT PRIMARY KEY AUTO_INCREMENT,
s_name VARCHAR(20) NOT NULL,
s_age INT,
s_sex CHAR(4),
s_brithday DATE,
s_classid VARCHAR(20) REFERENCES t_class(c_id), -- 添加外键
CONSTRAINT FOREIGN KEY(s_classid) REFERENCES t_class(c_id)  -- 添加外键约束
)

-- 课程表
CREATE TABLE h_work(
w_id VARCHAR(40) PRIMARY KEY,
w_name VARCHAR(40) UNIQUE NOT NULL -- 唯一 不为空
)


-- 成绩表
CREATE TABLE s_score(
sc_id INT PRIMARY KEY AUTO_INCREMENT,

sc_studentid INT REFERENCES t_student(s_id), -- 添加外键
CONSTRAINT FOREIGN KEY(sc_studentid) REFERENCES t_student(s_id), -- 外键约束

sc_workid VARCHAR(40)  REFERENCES h_work(w_id),
CONSTRAINT FOREIGN KEY(sc_workid) REFERENCES  h_work(w_id), -- 外键约束

sc_date DATE

)















