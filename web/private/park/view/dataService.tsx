class DataServices  {

    // �����ͼ�㣬��ȡ�ص�
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

    // ��ȡ�������
    public areaType(pBackajax) {
        console.log("init-AllareaType");
        pBackajax(3333);
    }

    // ��ȡ��ҵ����
    public companyType(pBackajax) {
        console.log("init-companyType");
        pBackajax(4444);
    }

    // ��ȡ���̷����б�
    public getRoomdata(pBackajax) {
        console.log("initRoomdata");
        pBackajax(111);
    }

    // ��ȡ��פ��ҵ�б�
    public getCompanydata(pBackajax) {
        console.log("initCompanydata");
        pBackajax(2222);
    }

    //  over
}

export default DataServices;