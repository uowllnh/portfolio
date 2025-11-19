export default function detail_page() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className=" flex justify-center items-center z-10">
        <div className="w-[1150px] h-[1400px] bg-[#54545483] rounded-[25px] flex flex-col items-center text-white mt-[100px]">
                      <p className="text-[96px] font-extrabold mt-[30px]">제목</p>
                       <p className="text-[24px] "> 프로젝트 설명</p>

                    <section className="상단 flex flex-col items-center gap-[100px] mt-[96px] mb-[162px]">
                        <p className="text-[20px] "> 기술 스택</p>

                        <div className="flex flex-row gap-[200px]">
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 참여 인원 </p>
                        <p className="text-[20px] "> 인원 표기 </p>
                        </div>
                        
                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 기간 </p>
                        <p className="text-[20px] "> 2025.00.00 ~ 2025.00.00 </p>
                        </div>

                        <div className="flex flex-col items-center">
                        <p className="text-[20px]  text-[#B5B5B5]"> 관련 링크 </p>
                         </div>
                        </div>
                        
                    </section>
                        
                        <div className="border-b w-[717px] border-white z-10"/>
                        
                    <section className="하단 mt-[55px]">
                        <div className="flex flex-row h-[340px] gap-[60px] items-end">
                        <div className="flex w-[385px] h-[255px] bg-[#D9D9D9]"/>
                        <div className="flex w-[385px] h-[255px] bg-[#D9D9D9]"/>
                        </div>

                        <p className="mt-[50px]"> 프로젝트 설명 </p>
                    </section>
                    
                    </div>
                    </section>
                    
                    </div>
    );
}