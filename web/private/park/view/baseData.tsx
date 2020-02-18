import * as React from "react";
import "css!./styles/baseData.css";


//import { StackArea } from 'g2plot';


//const requireContext = require.context("../image/baseData", true, /^\.\/.*\.png$/);
//const images = requireContext.keys().map(requireContext);


const data = [
    {
        country: '����',
        month: '1��',
        value: 30,
    },
    {
        country: '����',
        month: '2��',
        value: 50,
    },
    {
        country: '����',
        month: '3��',
        value: 80,
    },
    {
        country: '����',
        month: '4��',
        value: 100,
    },
    {
        country: '����',
        month: '5��',
        value: 80,
    },
    {
        country: '����',
        month: '6��',
        value: 50,
    },
    {
        country: '����',
        month: '7��',
        value: 30,
    },
    {
        country: '�ʺ�',
        month: '1��',
        value: 20,
    },
    {
        country: '�ʺ�',
        month: '2��',
        value: 60,
    },
    {
        country: '�ʺ�',
        month: '3��',
        value: 120,
    },
    {
        country: '�ʺ�',
        month: '4��',
        value: 70,
    },
    {
        country: '�ʺ�',
        month: '5��',
        value: 50,
    },
    {
        country: '�ʺ�',
        month: '6��',
        value: 30,
    },
    {
        country: '�ʺ�',
        month: '7��',
        value: 20,
    },
];






class BaseData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseData: [{ name: "���������", number: "95,000", unit: "ƽ����", img: 'architecture' }, { name: "��פ��ҵ", number: "150", unit: "��", img: "enterprise" },
            { name: "԰����Ա", number: "6,000", unit: "��", img: "personnel" }, { name: "������", number: "900", unit: "̨", img: "monitoring" },
            { name: "�����豸", number: "2,600", unit: "̨", img: "equipment" }, { name: "ͣ��λ", number: "600", unit: "��", img: "car" }], // ��������
        }
    }


    componentDidMount() {
        let baseDate = this.state.baseData
        baseDate.forEach((item, index) => {
            requireContext.keys().forEach((it, ind) => {
                if (it.substring(2, it.length - 4) === item.img) {
                    item.img = images[ind].default
                }
            })
        })
        this.setState({ baseData: baseDate })

        const areaPlot = new StackArea(document.getElementById('curve'), {
            data,
            xField: 'month',
            yField: 'value',
            stackField: 'country',
            xAxis: {
                grid: {
                    visible: true
                }
            },
            label: {
                visible: true
            },
            smooth: true,
            legend: {
                visible: false,
                position: 'right-top'
            }
        });
        areaPlot.render();
    }


    render() {
        return (
            <div className={"baseData"}>
                <div style={{ marginTop: "20px", marginLeft: "25px" }}>
                    <div style={{
                        borderLeft: "2px solid #07D1D3", height: "16px", width: "2px",
                        float: "left", marginTop: "4px", marginRight: "5px"
                    }}>
                    </div>
                    <span style={{ color: "#FFFFFF", fontSize: "16px" }}>��������ͳ��</span>
                </div>
                {
                    this.state.baseData.map((item, index) => {
                        return <div className={"option"} key={index}>
                            <img src={item.img} width="45px" height="45px" style={{ float: "left", marginTop: "3px" }} />
                            <div style={{ float: "left", marginLeft: "18px" }}>
                                <span className={"spanA"}>{item.name}</span>
                                <br />
                                <span className={"spanB"}>{item.number}</span>
                                <span className={"spanC"}>{item.unit}</span>
                            </div>
                        </div>
                    })
                }
                <div style={{ color: "#FFFFFF", marginLeft: "35px" }}>
                    <div style={{ fontSize: "12px", float: "left" }}>԰���´���GDP</div>
                    <div style={{ fontSize: "12px", marginLeft: "10px", float: "left" }}>(����)</div>
                    <div style={{
                        borderTop: "2px solid #07D1D3", width: "10px", height: "3px", float: "left", opacity: 1,
                        marginLeft: "50px", marginTop: "8px"
                    }}></div>
                    <div style={{ float: "left", fontSize: "6px", marginLeft: "5px" }}>��ǰֵ</div>
                    <div style={{
                        borderTop: "2px solid #229FCE", width: "10px", height: "3px", float: "left", opacity: 1,
                        marginLeft: "10px", marginTop: "8px"
                    }}></div>
                    <div style={{ float: "left", fontSize: "6px", marginLeft: "5px" }}>��׼ֵ</div>
                </div>
                <div id="curve" style={{ width: "350px", height: "260px", marginLeft: "12px" }}>

                </div>
            </div>
        )
    }
}


export default BaseData;