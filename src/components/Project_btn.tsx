import React from "react";

type Props = {
    projectName: any;
};

export default function Project_btn({ projectName }:Props ) {

    return(

         <div className="btn"
         
                style={{ transform: "scaleY(-1) translateX(-50%)",
                    position: "absolute",
                  left: "50%",
                  top: "90%",
                  bottom: "10%",
                   }} 
                   onClick={() => window.open("https://velog.io/@pooh00316", "_blank")}
                >
                 <div>
                      <h2 className="text-xl font-semibold mb-2">팀 프로젝트</h2>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>스마트폰 요금제 추천 앱 (졸업작품)</li>
                        <li>사내 장비 제어 프로그램</li>
                      </ul>
                    </div>
              </div>

    );
}