import React from "react";
import { useState } from "react";

    
  interface ProjectProps {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  stack?: string[];
  member: string;
  link?: string;
  detail: string;
  period: string;
}



export default function detail_page({ title, description, image1,image2, stack, member, link, detail, period }: ProjectProps) {
    const images = [
    image1, image2 ]

const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (     
        <section className=" flex justify-center items-center z-10">
             <div className="w-[1150px] flex flex-col items-center text-white mt-[100px]">
                  
                      <p className="text-[96px] font-extrabold mt-[30px] z-10">{title}</p>
                       <p className="text-[24px] "> {description}</p>

                    <section className="상단 flex flex-col items-center gap-[100px] mt-[96px] mb-[162px]">
                        <div className="flex flex-col items-center">
                        <p className="text-[20px] "> 기술 스택</p>
                        <div className="flex gap-4 flex-wrap justify-center mt-[37px]">
                            {stack && stack.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`stack-${idx}`}
                                className="w-[40px] h-[40px] object-contain"
                            />
                            ))}
                        </div>
                        </div>

                        <div className="flex flex-row gap-[200px]">
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 참여 인원 </p>
                        <p className="text-[20px] mt-[37px] whitespace-pre-line">{member}</p>
                        </div>
                        
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 기간 </p>
                        <p className="text-[20px] mt-[37px]"> {period} </p>
                        </div>

                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 관련 링크 </p>
                        <div> {link} </div>
                         </div>
                        </div>
                        
                    </section>
                        
                        <div className="border-b w-[717px] border-white z-10"/>
                        
                    <section className="하단 mt-[162px] flex flex-col items-center">
                       
                        <div className="flex flex-row gap-[60px] justify-center"> 

                             {images.map((src, i) => (
                                <img
                                 key={i}
                                src={src}
                                className="projectimg"
                                onClick={() => setSelectedImage(src)}/>  ))}  

                                {selectedImage && (
                                <div
                                className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
                                onClick={() => setSelectedImage(null)}
                                >
                                <img
                                    src={selectedImage}
                                    className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl transition-all duration-300"
                                    onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
                                />
                                </div>
                            )}
                                     </div>
                                 
                        <p className="mt-[50px] mb-[130px] w-[750px] [line-height:2.5rem]"> {detail} </p>
                      
                    </section>
                   
                    </div>
                    </section>


                   
    );
}