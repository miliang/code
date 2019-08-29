const dbpool = require("../config/dbpoolconfig")

module.exports.getDept = function(req,resp){
  dbpool.connect("select * from t_dept",[],function(err,data){
    console.log(data1)
    let staffid = data1[0].d_incharge.split(",");
    let staffname = [];
    for(let i=0;i<staffid.length;i++){
      dbpool.connect("select s_name from t_staff where s_id = ?",[parseInt(staffid[i])],function(err,data){
        console.log(data)
        staffname.push(data[0].s_name);
        console.log(staffname);
        data[0].staffname = staffname.join()
        console.log(data);
      })
    }
    resp.send(data)
  })
}
/*1.function1().dbpool().function2().dbpool()
**/