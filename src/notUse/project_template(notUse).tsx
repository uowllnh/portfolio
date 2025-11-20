import React from "react";

    
  interface ProjectProps {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  stack?: string | string[];
  member: string;
  link?: string;
  detail: string;
  period: string;
}

export default function detail_page({ title, description, image1,image2, stack, member, link, detail, period }: ProjectProps) {
    


    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className=" flex justify-center items-center z-10">
            
        <div className="w-[1150px] h-[1400px] bg-[#54545483] rounded-[25px] flex flex-col items-center text-white mt-[100px]">
                        <div className="flex items-center z-0 mt-[25px] ml-[1000px]"> 
                            <button className="page-delete  flex items-center justify-center"> X </button>
                        </div>
                      <p className="text-[96px] font-extrabold mt-[30px] z-10">{title}</p>
                       <p className="text-[24px] "> {description}</p>

                    <section className="상단 flex flex-col items-center gap-[100px] mt-[96px] mb-[162px]">
                        <p className="text-[20px] "> 기술 스택</p>
                        <div> {stack} </div>

                        <div className="flex flex-row gap-[200px]">
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 참여 인원 </p>
                        <p className="text-[20px] "> {member} </p>
                        </div>
                        
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 기간 </p>
                        <p className="text-[20px] "> {period} </p>
                        </div>

                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 관련 링크 </p>
                        <div> {link} </div>
                         </div>
                        </div>
                        
                    </section>
                        
                        <div className="border-b w-[717px] border-white z-10"/>
                        
                    <section className="하단 mt-[55px]">
                        <div className="flex flex-row h-[340px] gap-[60px] items-end">
                        <div className="flex w-[385px] h-[255px] bg-[#00000000]">  {image1} </div>
                        <div className="flex w-[385px] h-[255px] bg-[#00000000]"> {image2} </div>
                        </div>

                        <p className="mt-[50px]"> {detail} </p>
                    </section>
                    
                    </div>
                    </section>
                    
                    </div>
    );
}