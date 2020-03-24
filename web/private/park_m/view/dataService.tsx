﻿import FindLease from 'findLease';

class DataService {

  public componentDidMount() {
    console.log(localStorage.getItem("token"));

    // this.setToken = this.setToken.bind(this);
  }

  // 点击地图点，获取回调
  public callback(a, pBack) {
    console.log("callback1", a);
    //$.ajax({
    //    url: '',
    //    data: { "a": a },
    //    success: function (data) {
    //        if (!data) {
    //            pBackajax(data);
    //        };
    //    }
    //})
    pBack("callback")
  }

  // 2.(注册登录模块)用户登陆接口 ### email:test@test.com password:123456 
  public login(pBack) {
    //console.log("login");
    //    $.ajax({
    //      url: this.state.rooturl + '/api/login',
    //      data: {
    //        "email": "test@test.com",
    //        "password":123456
    //      },
    //  type: "post",    
    //  success: function (data) {
    //   // console.log("login",data);
    //    //pBackajax(data);
    //    console.log("login-getToken", data);
    //    localStorage.setItem("token", data.token);
    //    }
    //})
  }

  //  原有token过期，换取新 token
  public refreshToken(ytoken) {
    //  /api/refresh ?token=ytoken；
    //获取到ntoken，存localStorage.setItem("token", data.access_token);
    $.ajax({
      url: this.state.rooturl + '/api/refresh',
      data: {
        "token": ytoken,
      },
      type: "post",
      success: function (data) {
        // console.log("login",data);
        //pBackajax(data);
        console.log("login-getToken", data);
        //localStorage.setItem("token", data.token);
      }
    })
  }

  //4.(园区信息-3D显示)获取园区详细信息
  public getParkInfo(pBack, park_id) {
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/getParkInfo',
    //  data: {
    //    "park_id": 1,
    //    "token": thetoken,
    //  },
    //  type: "get",
    //  success: function (data) {
    //    console.log("getParkInfo", data);
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //      // console.log(window.location.pathname);
    //      //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //     // pBack(data);
    //      console.log("getParkInfo", data);
    //    }
    //  }
    // })


    var data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //园区图像url
          "headimgurl": "http://xxx.jpg",
          //所在城市
          "province": "桂林",
          //经度
          "longitude": "10.55",
          //纬度
          "latitude": "66.666",
          //园区名字
          "name": "桂林国家高新",
          //地址
          "address": "桂林七星朝阳路D-11",
          //工程列表，列表内为园区使用的工程。
          "project": [
            {
              //id
              "id": "1009",
              //工程名。
              "name": "电子信息",
              //工程类型 1为普通模型 2为航拍实景图 3为sve工程 4为其它
              "type": 1,
              //使用类型 1为完整场景 2为单独内景
              "use_type": 0,
              //工程地址
              "project_url": "http://xxx.bin",
              //经度
              "longitude": "10.55",
              //纬度
              "latitude": "66.666",
              //偏移值
              "offset": "10,20,10",
              //旋转角度
              "rotate": "10",
            }
          ],
          //园区讲解列表
          "audio": [
            { name: "园区交通", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
            { name: "园区配套", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
            { name: "园区建筑", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
          ]
        }

      ],
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  // 5. (企业园区模块-搜索类型)获取园区下面企业类型列表
  public getCompanyType(pBack, park_id) {
    // id =1
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/getCompanyType',
    //  data: {
    //    "park_id": park_id,
    //    "token":thetoken,
    //  },
    //  type: "get",    
    //  success: function (data) {
    //    console.log("TTTTTTTTTT",data);
    //    pBack(data);
    //    }
    //})

    var data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //企业类型
          "name": "科技服务",
        },
        {
          //id
          "id": "1019",
          //企业类型
          "name": "文化创意",
        }
      ],
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  //6 通过园区id，企业类型，关键词搜索园区下面企业列表
  public findCompany(pBack, park_id, company_type_id, name) {
    // id=1
    // console.log("findCompany", park_id, company_type_id, name);
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/findCompany',
    //  data: {
    //    "park_id": 1,
    //    "company_type_id": ,
    //    "token": thetoken,
    //  },
    //  type: "get",
    //  success: function (data) {
    //    console.log("findCompanyJJJJJJJ", data);
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //     // console.log(window.location.pathname);
    //     //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //      pBack(data);
    //      console.log("finJJJ", data);
    //    }
    //  }
    //})

    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id  
          "id": "1009",
          //公司名字
          "name": "桂林国家高新",
          //园区图像url
          "headimgurl": "./park_m/image/i.png",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应楼层id，模型编号(用于匹配对应楼层id)
          "floor_id": "1F",
          //使用场地，模型编号(用于匹配对应3d房间)
          "room_id": "201-2",
          //地址
          "address": "桂林市七星区民华产业园E座B区三楼",
          //企业类型
          "company_type": "科技服务",
        },
        {
          //id
          "id": "1010",
          //公司名字
          "name": "桂林国家高新",
          //园区图像url
          "headimgurl": "./park_m/image/i.png",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应楼层id，模型编号(用于匹配对应楼层id)
          "floor_id": "1F",
          //使用场地，模型编号(用于匹配对应3d房间)
          "room_id": "201-2",
          //地址
          "address": "桂林市七星区民华产业园E座B区三楼",
          //企业类型
          "company_type": "科技服务",
        }

      ],
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  //7 通过企业id, 获企业详细信息
  public getCompanyInfo(pBack, id) {
    // id=2 模拟id
    console.log("getCompanyInfo", pBack, id);
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/getCompanyInfo',
    //  data: {
    //    "id": 2,
    //    "token": thetoken,
    //  },
    //  type: "get",
    //  success: function (data) {
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //     // console.log(window.location.pathname);
    //     //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //      pBack(data);
    //      console.log("CompanyInfo_ajax", data);
    //    }
    //  }
    //})
    var data = {
      //错误码
      "return_code": "100",
      "response": {
        //id
        "id": "1009",
        //公司名字
        "name": "桂林国家高新",
        //企业图像url
        "headimgurl": "./park_m/image/i.png",
        //场地对应大楼id(用于匹配对应3d大楼)
        "building_id": "a座",
        //场地对应大楼id(用于匹配对应3d大楼)
        "floor_id": "1F",
        //场地(用于匹配对应3d房间)
        "room_id": "201-2",
        //地址
        "address": "桂林市七星区信息产业园E座B区三楼",
        //联系人
        "contact": "莫xxx",
        //电话
        "phone": "15266666666",
        //企业官网
        "website": "www.yongtoc.com",
        //企业详情详情文字
        "descript": "xxx公司是由计算机图形学，计算机应用学组方面专家成。",
        //企业服务内容
        "service": [
          {
            //id
            "id": "1009",
            //服务内容名字
            "name": "科技服务",
          }
        ],
        //企业风采
        "elegant": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "pic_url": "./park_m/image/i.png",
          }, {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "pic_url": "./park_m/image/i.png",
          }
        ],
        //产品展示
        "product": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "pic_url": "./park_m/image/i.png",
          }, {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "pic_url": "./park_m/image/i.png",
          }
        ],
        //全景图
        "panorama": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "pic_url": "http://xxx.pic",
            //位置信息待定为string类型
            "position": "",
          }
        ]
      },
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  //8 通过园区id, 获取面积分类
  public getRoomRentSquareType(pBack, park_id) {
    console.log("init-AllareaType", pBack, park_id);
    // console.log("findCompany", park_id, company_type_id, name, token);
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/getRoomRentSquareType',
    //  data: {
    //    "park_id": 1,
    //    "token": thetoken,
    //  },
    //  type: "get",
    //  success: function (data) {
    //    //  console.log("getRoomRentSquareType", data);
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //      // console.log(window.location.pathname);
    //      //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //      pBack(data);
    //      //console.log("getRoomRentSquareType", data);
    //    }
    //  }
    // });

    let data = {
      //错误码
      "return_code": "100",
      "response": [
        "0-100",
        "100-200"
      ],
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);

  }

  //9 通过园区id, 获取招租的场地列表接口(findRoomRent);
  public findRoomRentByparkid(pBack, park_id, square) {
    // id =1
    console.log("findRoomRentByparkid", pBack, park_id, square);
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/findRoomRent',
    //  data: {
    //    "park_id": park_id,
    //    "token": thetoken,
    //    "square": square
    //  },
    //  type: "get",
    //  success: function (data) {
    //    console.log("getRoomRentSquareType", data);
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //      // console.log(window.location.pathname);
    //      //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //      pBack(data);
    //      console.log("findRoomRentByparkid", data);
    //    }
    //  }
    //})
    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1001",
          //头像url
          "headimgurl": "./park_m/image/i.png",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "floor_id": "1F",
          //使用场地房间id，模型编号(用于匹配对应3d房间)
          "room_id": "201-1",
          //招租发布时间
          "date": "2019-07-05",
          //面积m²
          "square": "45",
          //价格元/m²/天。
          "price": "2.8"
        }, {
          //id
          "id": "1009",
          //头像url
          "headimgurl": "./park_m/image/i.png",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "floor_id": "1F",
          //使用场地房间id，模型编号(用于匹配对应3d房间)
          "room_id": "201-2",
          //招租发布时间
          "date": "2019-07-05",
          //面积m²
          "square": "45",
          //价格元/m²/天。
          "price": "2.8"
        }
      ],
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  //10 通过招租id,获取租房信息列表接口(getRoomRentInfo)
  public findRoomRentByroomid(pBack, id) {
    console.log("findRoomRentByroomid", pBack, id);
    let thetoken = localStorage.getItem("token");
    //$.ajax({
    //  url: this.state.rooturl + '/api/getRoomRentInfo',
    //  data: {
    //    "id": 1,
    //    "token": thetoken,
    //  },
    //  type: "get",
    //  success: function (data) {
    //    //console.log("getRoomRentSquareType", data);
    //    if (data.status == 113) {
    //      // 113 token到期，跳转登录页面
    //      // console.log(window.location.pathname);
    //      //  window.location.href = window.location.pathname+"#/"
    //    } else {
    //      pBack(data);
    //      console.log("findRoomRentByroomid", data);
    //    }
    //  }
    //})
    var data = {
      //错误码
      "return_code": "100",
      "response": {
        //id
        "id": "1009",
        //头像url
        "headimgurl": "./park_m/image/i.png",
        //使用场地对应大楼id(用于匹配对应3d大楼)
        "building_id": "a座",
        //使用场地对应大楼id(用于匹配对应3d大楼)
        "floor_id": "1F",
        //使用场地房间id(用于匹配对应3d房间)
        "room_id": "201-2",
        //时间
        "date": "2019-07-05",
        //面积
        "square": "45m²",
        //价格。
        "price": "2.8",
        //建筑面积
        "squre": "150",
        //所在楼层
        "floor": "4楼",
        //是否有电梯
        "lift": "有",
        //联系人
        "contact": "莫xxx",
        //电话
        "phone": "135000000",
        //看房时间
        "inspection_time": "80:30-12:00",
        //租房要求
        "require": "一年起租",
        "pic": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "url": "./park_m/image/i.png",
          }, {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "url": "./park_m/image/i.png",
          }, {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "url": "./park_m/image/i.png",
          }
        ],
        //全景图
        "panorama": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //图片地址
            "url": "http://xxx.pic",
            //位置信息待定为string类型
            "position": "",
          }
        ],
        //视频
        "video": [
          {
            //id
            "id": "1009",
            //图片名字
            "name": "xxx图片",
            //地址
            "url": "https://www.yongtoc.com/themes/ytyc.mp4",
            //位置信息待定为string类型
            "position": "",
          }
        ]
      },
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  //11.(随手拍模块-曝光类型) 通过园区id获取随手拍曝光类型 
  public getTakingPhotosType(pBack, park_id) {
    console.log("getTakingPhotosType", pBack, park_id);
    var data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //名称。
          "name": "阻挡主要出入口",
        },
        {
          //id
          "id": "1009",
          //名称。
          "name": "非停车位侧停车",
        }
      ],
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  //12.(随手拍模块-列表)通过园区id获取随手拍列表 
  public getTakingPhotos(pBack, park_id, name) {
    console.log("随手拍list", park_id, name);
    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //类型id
          "type": "非停车位侧停车",
          //车牌
          "car_license": "桂C123456",
          //申请时间
          "time": "2020-02-28 14:38:15",
          //位置
          "position": "A座厦门旁",
          //经度
          "longitude": "10.55",
          //纬度
          "latitude": "66.666",
          //照片
          "photo": "./park_m/image/i.png"
        }, {
          //id
          "id": "1009",
          //类型id
          "type": "非停车位侧停车",
          //车牌
          "car_license": "桂C120000",
          //申请时间
          "time": "2020-02-28 14:38:15",
          //位置
          "position": "A座厦门旁",
          //经度
          "longitude": "10.55",
          //纬度
          "latitude": "66.666",
          //照片
          "photo": "./park_m/image/i.png"
        }
      ],
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  //13.(随手拍模块-列表-详情) 通过随手拍id获取随手拍详细信息 
  public getTakingPhotoInfo(pBack, id) {
    console.log("随手拍list", id);
    let data = {
      //错误码
      "return_code": "100",
      "response": {
        //id
        "id": "1009",
        //类型名称
        "type_name": "非停车位侧停车",
        //车牌
        "car_license": "桂A5000",
        //申请时间
        "time": "2020-02-28 14:38:15",
        //位置
        "position": "A座厦门旁",
        //经度
        "longitude": "10.55",
        //纬度
        "latitude": "66.666",
        //描述
        "descript": "横跨在斑马线上",
        //违规照片
        "photo": "./park_m/image/i.png",
      },
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  // 14.(随手拍模块-提交)提交随手拍信息
  public postTakingPhotoInfo(pBack, data) {
    console.log("postTakingPhotoInfo", data);
    pBack("随手拍提交完成");
  }

  // 15(摆点申请模块)提交摆点申请接口 
  public postAdvertisementPoint(pBack, data) {
    console.log("postAdvertisementPoint", data);
    pBack("摆点申请提交完成");
  }

  //16.(场地预定模块-搜索)通过园区id获取园区内可以预定的场地列表接口
  public getRoomBook(pBack, park_id, name) {
    console.log("getRoomBook", pBack, park_id, name);
    var data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "floor_id": "1F",
          //使用场地房间id，模型编号(用于匹配对应3d房间)
          "room_id": "201-1",
          "headimgurl": "./park_m/image/i.png",
          //价格。
          "price": [
            {
              //内容
              "content": "4小时内",
              //价格
              "price": "1000元"
            },
            {
              //内容
              "content": "8小时内",
              //价格
              "price": "1600元"
            }
          ]
        }, {
          //id
          "id": "1010",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "building_id": "a座",
          //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
          "floor_id": "1F",
          //使用场地房间id，模型编号(用于匹配对应3d房间)
          "room_id": "201-2",
          "headimgurl": "./park_m/image/i.png",
          //价格。
          "price": [
            {
              //内容
              "content": "4小时内",
              //价格
              "price": "1000元"
            },
            {
              //内容
              "content": "8小时内",
              //价格
              "price": "1600元"
            }
          ]
        }
      ],
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  //##17.(场地预单模块-详细信息)通过场地预定id,获取预定相关详情接口 ###
  public getRoomBookInfo(pBack, id) {
    console.log("getRoomBookInfo", id);
    let data = {
      //错误码
      "return_code": "100",
      "response": {
        //id
        "id": "1009",
        //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
        "building_id": "a座",
        //使用场地对应大楼id，模型编号(用于匹配对应3d大楼)
        "floor_id": "1F",
        //使用场地房间id，模型编号(用于匹配对应3d房间)
        "room_id": "201-2",
        //场地描述信息
        "descript": [
          {
            //内容
            "content": "地理位置:``````"
          },
          {
            //内容
            "content": "会议面积:``````"
          }
        ],
        //使用须知
        "guide": "为了加强会议室的管理。。。。。。",
        //价格。
        "price": [
          {
            //内容
            "content": "4小时内",
            //价格
            "price": "1000元"
          },
          {
            //内容
            "content": "8小时内",
            //价格
            "price": "1600元"
          }
        ]
      },
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  //##18.(场地预定模块-提交信息)提交场地预定申请 ###
  public bookingRoom(pBack, data) {
    console.log("bookingRoom", data);
    console.log("bookingRoom", data.room_id)
    pBack("提交成功！");
  }

  //19.(在线报修模块-报修类型)通过园区id获取在线报修类型
  public getRepairType(pBack) {
    console.log("getRepairType");
    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //名称。
          "name": "水管报修",
        },
        {
          //id
          "id": "1009",
          //名称。
          "name": "磁砖报修",
        }
      ],
      //错误代码信息
      "err_msg": ""
    };
    pBack(data);
  }

  //20.(在线报修模块-提交)提交在线报修信息
  public saveRepairInfo(pBack, data) {
    console.log("saveRepairInfo", data);
    pBack("提交成功！");
  }

  //22.(停车业务模块-地下停车场列表)通过园区id获取停车场列表
  public getParkingList(pBack, park_id) {
    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "100001",
          //名称。
          "name": "a座地下停车场",
          //经度
          "longitude": "10.55",
          //纬度
          "latitude": "66.666",
        },
        {
          //id
          "id": "100002",
          //名称。
          "name": "b座地下停车场",
          //经度
          "longitude": "10.55",
          //纬度
          "latitude": "66.666",
        }
      ],
      //错误代码信息
      "err_msg": ""
    }

    pBack(data);
  }

  //23.(停车业务模块-车辆类型)通过园区id获取车辆类型 
  public getCarType(pBack, park_id) {
    console.log("显示车辆类型列表");
    let data = {
      //错误码
      "return_code": "100",
      "response": [
        {
          //id
          "id": "1009",
          //名称。
          "name": "中小型车",
        },
        {
          //id
          "id": "1009",
          //名称。
          "name": "大型车",
        }
      ],
      //错误代码信息
      "err_msg": ""
    }
    pBack(data);
  }

  // 24.(停车业务模块-车位申请)提交车位申请信息
  public saveParkingApply(pBack, data) {
    console.log("24提交车位申请信息", data);
    pBack("车位，提交成功！");
  }

  // 25.(停车业务模块-地库车位预约)提交地库车位预约
  public saveParkingAppointment(pBack, data) {
    console.log("25提交地库申请信息", data);
    pBack("地库，提交成功！");
  }

  // 26.(停车业务模块-车位变更)提交车位变更（目前：变更车辆，不变更车位） 
  public changeParkingCarInfo(pBack, data) {
    console.log("26 提交车位变更", data);
    pBack("提交车位变更,成功！")
  }

  //27.(停车业务模块-来访车辆预约)提交来访车辆预约
  public saveVisitorParkingAppointment(pBack, data) {
    console.log("27 提交来访车辆预约", data);
    pBack("提交来访车辆预约,成功！")
  }

  public state = {
    rooturl: "http://192.168.1.13:90",
    token: "",

  }
}

export default DataService;