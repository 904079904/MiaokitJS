import * as React from "react";

import BottomBtn from "bottomBtn";
import "css!./styles/view.css"

class AboutMe extends React.Component {
    public constructor(props) {
        super(props);
       
    }

    public componentDidMount() {
        BottomBtn.toggleIcon(4);
    }

    public render() {
        return (
            <div>
                <div className={"aboutMebox"}>
                    AboutMeAboutMe�㽭������Ϣ�Ƽ����޹�˾
                </div>
                <BottomBtn />
            </div>
        )
    }

    public state = {

    }

    //over
}

export default AboutMe;