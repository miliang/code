/*
一.商品销售记录表
id	商品编号 销售日期    销售数量  商品单价 销售总金额 销售员工
1	xsl001	2013/12/2	124	134.5	16678	    张三
2	xsl002	2013/12/2	50	80	4000	    李四
3	xsl003	2013/12/5	66	55	3630	    张三
4	xsl001	2013/11/20	10	134.5	1345	    张三
5	xsl001	2013/11/2	20	134.5	2690	    王五
6	xsl002	2013/11/5	30	80	2400	    张三
7	xsl002	2013/11/9	23	80	1840	    王五
8	xsl003	2013/12/11	10	55	550	    李四
9	xsl003	2013/12/12	50	55	2750	    王五
10	xsl004	2013/11/30	45	100	4500	    张三
Alter table t_shop_xs Auto increment =1000
（1）创建商品销售记录表
（2）插入数据
完成下列sql语句
1.查询张三的所有销售记录
2.查询张三12月份的销售记录
3.查询销售总金额大于2000 的12月份销售记录
4.查询前10条销售记录
5.查询前10条销售记录中商品编号xsl001的记录
6.查询销售数量大于20 销售人员为李四的记录
7.查询前5条 销售人员为王五的记录，只显示 商品编号 销售总金额 销售人员 这些列（要求列名用中文别名显出）
8.查询2013年11月20日之后 2013年12月10日之前的记录
9.查询从第三条数据开始，到第10条数据结束的记录，要求商品单价大于100 或则销售数量大于50*/

CREATE TABLE sale_goods(
g_id INT PRIMARY KEY AUTO_INCREMENT,
g_no VARCHAR(10),
g_date DATE,
g_number INT,
g_money FLOAT,
g_sumMoney FLOAT,
g_person VARCHAR(10)
)

INSERT INTO sale_goods VALUES (NULL,'xs1001','2013-12-2',124,134.5,16678,'张三');
INSERT INTO sale_goods VALUE(NULL,'xs1002','2013-12-2',50,80,4000,'李四'),
(NULL,'xs1003','2013-12-5',66,55,3630,'张三'),
(NULL,'xs1001','2013-11-20',10,134.5,1345,'张三'),
(NULL,'xs1001','2013-11-2',20,134.5,2690,'王五'),
(NULL,'xs1002','2013-11-5',30,80,2400,'张三'),
(NULL,'xs1002','2013-11-9',23,80,1840,'王五'),
(NULL,'xs1003','2013-12-11',10,55,550,'李四'),
(NULL,'xs1003','2013-12-12',50,55,2750,'王五'),
(NULL,'xs1004','2013-11-30',45,100,4500,'张三');

-- 2.查询张三12月份的销售记录

SELECT * FROM sale_goods WHERE g_person='张三'AND (g_date BETWEEN "2013-12-01" AND "2013-12-31")

SELECT * FROM sale_goods WHERE g_person='张三'AND g_date LIKE "____-12%"


-- 7.查询前5条 销售人员为王五的记录，只显示 商品编号 销售总金额 销售人员 这些列（要求列名用中文别名显出）


SELECT g_no AS "商品编号", g_sumMoney AS "销售总金额",g_person AS "销售人员" FROM sale_goods WHERE g_person='王五' LIMIT 5


-- 9.查询从第三条数据开始，到第10条数据结束的记录，要求商品单价大于100 或则销售数量大于50


SELECT * FROM sale_goods WHERE g_money>100 OR g_number>50 LIMIT 2,8




/*练习三

姓名	年龄	性别	学号	  成绩		班级
Jacky	20	男	xh1001	   90		T01
Simth	30	男	xh1002	   75		T02
Jay	18	男	xh1003	   80		T01
Helen	19	女	xh1004	   75		T02
lily	22	女	xh1005	   90		T03
Green	23	男	xh1006	   85		T02
RedChar	18	男	xh1007	   60		T01
Kevin	17	女	xh1008	   45		T03

1.统计每个班的学员的数量

2.统计每个班的总分

3.统计每个班的平均分

4.统计每个班的最高分

5.统计每个班的最低分

6.统计每个班学员的数量,总分,平均分,最高分,最低分

8.统计班级ID为T01的学员的数量,总分,平均分,最高分,最低分

9.查询平均分上85的班级有哪些？

10.查询有女生的班级是哪些？*/

CREATE TABLE t_class2(
c_name VARCHAR(10),
c_age INT,
c_sex VARCHAR(4),
c_xuehao VARCHAR(20),
c_score INT,
c_class_id VARCHAR(10)
);

INSERT INTO t_class2(c_name,c_age,c_sex,c_xuehao,c_score,c_class_id) VALUES
('Jacky',20,'男','xh1001',90,'T01'),
('Simth',30,'男','xh1002',75,'T02'),
('Jay',18,'男','xh1003',80,'T01'),
('Helen',19,'女','xh1004',75,'T02'),
('lily',22,'女','xh1005',90,'T03'),
('Green',23,'男','xh1006',85,'T02'),
('Redchar',18,'男','xh1007',60,'T01'),
('Kevin',17,'女','xh1008',45,'T03');

-- 1.统计每个班的学员的数量

-- count(*) c_class_id


SELECT c_class_id,COUNT(*) FROM t_class2 GROUP BY c_class_id


-- 2.统计每个班的总分 sum(s_score) c_class_id

SELECT c_class_id,SUM(c_score) FROM t_class2 GROUP BY c_class_id


-- 8.统计班级ID为T01的学员的数量,总分,平均分,最高分,最低分

SELECT c_class_id,COUNT(*),SUM(c_score),AVG(c_score),MAX(c_score),MIN(c_score) FROM t_class2 WHERE c_class_id="T01"


-- 9.查询平均分上85的班级有哪些？
SELECT c_class_id,AVG(c_score) FROM t_class2 GROUP BY c_class_id HAVING AVG(c_score)>85


-- 10.查询有女生的班级是哪些？

SELECT c_class_id FROM t_class2 WHERE c_sex="女" GROUP BY c_class_id;

SELECT c_class_id,COUNT(*) FROM t_class2 WHERE c_sex="女" GROUP BY c_class_id HAVING COUNT(*)>0


/*
练习4

商品表*/

CREATE TABLE t_shop(
	s_id INT PRIMARY KEY AUTO_INCREMENT,
	s_shopcode VARCHAR(30),    -- 商品编号
	s_name VARCHAR(40),        -- 商品名称
	s_price INT ,              -- 商品价格
	s_class   VARCHAR(50)      -- 商品类别
);
INSERT INTO t_shop(s_shopcode,s_name,s_price,s_class) VALUES 
('n11','橙子',9,'水果'),
('x330','血橙',11,'水果'),
('yx673','柚子',7,'水果'),
('n12','白菜',2,'蔬菜'),
('a13','冬瓜',3,'蔬菜'),
('n14','西瓜',4,'水果'),
('n15','丝瓜',5,'蔬菜'),
('c16','苦瓜',6,'蔬菜'),
('m17','南瓜',5,'蔬菜'),
('d18','茄子',6,'蔬菜');


-- 1  查询所有包含瓜的商品名称信息

-- 2  查询价格在1 到8 的所有商品信息

-- 3  查询商品的最高价格的值是多少

-- 4  查询商品价格最高的前三个商品的信息

-- 5  查询所有商品的平均价格

-- 6  查询所有包含瓜的商品的平均价格

-- 7  查询最高商品的价格是最低商品的价格的倍数是多少

SELECT MAX(s_price)/MIN(s_price) FROM t_shop



  
-- 8  查询商品名称中包含橙字的有多少个商品


-- 9  修改 西瓜的价格为2块


-- 10  删除id 为，4,9,1 的商品信息

DELETE FROM t_shop WHERE s_id IN (4,1,9);


-- 11  查询蔬菜类别中最高的价格是多少？


SELECT MAX(s_price) FROM t_shop WHERE s_class="蔬菜"

-- ===================================================作业===================================================
CREATE TABLE category(
   cat_id INT PRIMARY KEY AUTO_INCREMENT,#类别编号
   cat_name VARCHAR(30) NOT NULL#类别名称
);

CREATE TABLE goods(
    goods_id INT PRIMARY KEY AUTO_INCREMENT,#商品编号
    goods_name VARCHAR(30) NOT NULL,#商品名称
    goods_price DOUBLE,#商品进价
    shop_price DOUBLE,#商品卖价
    market_price DOUBLE,#市场价
    cat_id INT,#商品类别
    goods_number INT,#商品数量
   FOREIGN KEY(cat_id) REFERENCES category(cat_id)
);


INSERT INTO category(cat_name) VALUES('航模'),('车模'),('船模

');
INSERT INTO category(cat_name) VALUES('动物模型');
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F16战斗机',300,1000,900,1,120);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F35战斗机',400,1200,1000,1,210);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F117隐形轰炸机',290,800,600,1,99);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('牧马人',120,600,500,2,1200);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('宝马Z4',130,560,510,2,231);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('地中海帆船',90,300,180,3,68);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('密西西比号蒸汽明轮',100,560,520,3,114);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('德鲁伊号16门炮护卫舰',1322,2322,2600,3,100);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('皇家理查德号 74门炮战舰',350,800,769,3,312);


-- 1求每个类别 group by(cat_id)下商品种类数 count(*)

SELECT cat_id,COUNT(*) FROM goods GROUP BY cat_id



-- 2查询本店每个商品价格比市场价低多少；

SELECT goods_name,market_price-shop_price FROM goods 



-- 3查询每个类别group by cat_id  下面积压的货款  sum(goods_number*goods_price)

SELECT cat_id,SUM(goods_number*goods_price) AS "总货款" FROM goods GROUP BY cat_id;



-- 4查询本店商品价格比市场价低多少钱，输出低200元以上的商品

SELECT goods_name,market_price-shop_price FROM goods  WHERE market_price-shop_price<200


-- 5查询积压货款超过2万元的栏目，以及该栏目积压的货款


SELECT goods_name,goods_number*goods_price AS "积压货款" FROM goods WHERE goods_number*goods_price>20000


-- 6按类别号升序排列，每个类别下的商品进价降序排列

SELECT * FROM goods ORDER BY cat_id,goods_price DESC;


-- 7取价格第1-6高的商品
SELECT * FROM goods ORDER BY goods_price DESC LIMIT 6;




-- 8查询每个类别下进价最高的商品

SELECT cat_id,MAX(goods_price) FROM goods GROUP BY cat_id;


-- 9取出每个类别下最新的产品(goods_id唯一)
SELECT cat_id,MAX(goods_id) FROM goods GROUP BY cat_id;



//10题以后选作，思考题


10.查询没有商品的商品类别

11.查询超过最高卖价航模的商品有哪些商品？

12.查询每个商品类别的商品总数超过500个的商品类别有哪些？

13.查询商品进价低于100的商品类别有哪些？




















