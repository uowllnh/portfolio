import { useState, type ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import githubIcon from "../assets/logos/GitHub.svg";
import Skills, { type SkillName } from "../types/sklills";

interface DetailImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Improvement {
  title: string;
  before: string;
  after: string;
  result?: string;
  image?: DetailImage;
}

interface Troubleshooting {
  issue: string;
  solution: string;
  result?: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  stack?: SkillName[];
  member: string;
  link?: string;
  url?: string;
  githubUrl?: string;
  detail: string;
  period: string;
  role?: string;
  myRoles?: string[];
  contribution?: string;
  features?: string[];
  problemPoints?: string[];
  technicalDetails?: string[];
  architecture?: string[];
  troubleshooting?: Troubleshooting[];
  performance?: string[];
  collaboration?: string[];
  improvements?: Improvement[];
  screenshots?: DetailImage[];
  learnings?: string[];
  retrospective?: string[];
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="w-[900px] flex flex-col gap-[28px]">
      <h2 className="text-[28px] font-bold">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[14px] text-[18px] text-[#E6E6E6] leading-[2rem]">
      {items.map((item) => (
        <li key={item} className="flex gap-[12px]">
          <span className="mt-[12px] h-[5px] w-[5px] shrink-0 rounded-full bg-white" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function detail_page({
  title,
  description,
  image1,
  stack,
  member,
  link,
  url,
  githubUrl,
  detail,
  period,
  role,
  myRoles,
  contribution,
  features,
  problemPoints,
  technicalDetails,
  architecture,
  troubleshooting,
  performance,
  collaboration,
  improvements,
  screenshots,
  learnings,
  retrospective,
}: ProjectProps) {
  const mainImage = image1;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className=" flex justify-center items-center z-10">
      <div className="w-[1150px] flex flex-col items-center text-white mt-[100px]">
        <p className="text-[96px] font-extrabold mt-[30px] z-10">{title}</p>
        <p className="text-[24px] "> {description}</p>

        <section className="상단 flex flex-col items-center gap-[100px] mt-[96px] mb-[100px]">
          <div className="flex flex-col items-center">
            <p className="text-[20px] "> 기술 스택</p>
            <Skills names={stack} />
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-x-[160px] gap-y-[60px]">
            <div className="flex flex-col items-center">
              <p className="text-[20px]  text-[#B5B5B5]"> 참여 인원 </p>
              <p className="text-[20px] mt-[37px] whitespace-pre-line">
                {member}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[20px]  text-[#B5B5B5]"> 기간 </p>
              <p className="text-[20px] mt-[37px]"> {period} </p>
            </div>

            {role && (
              <div className="flex flex-col items-center">
                <p className="text-[20px]  text-[#B5B5B5]"> 담당 역할 </p>
                <p className="text-[20px] mt-[37px] whitespace-pre-line">
                  {role}
                </p>
              </div>
            )}

            {contribution && (
              <div className="flex flex-col items-center">
                <p className="text-[20px]  text-[#B5B5B5]"> 기여도 </p>
                <p className="text-[20px] mt-[37px]"> {contribution} </p>
              </div>
            )}
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-x-[160px] gap-y-[60px]">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[9px] border border-white/40 px-[12px] py-[12px] text-[17px] transition-colors hover:bg-white hover:text-[#545454]"
              >
                <ExternalLink size={20} aria-hidden="true" />
                관련 링크
              </a>
            )}

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[9px] px-[12px] py-[12px] rounded-full transition-colors hover:bg-white"
              >
                <ExternalLink
                  size={40}
                  aria-hidden="true"
                  className="text-white"
                />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[9px] px-[12px] py-[12px] rounded-full transition-colors hover:bg-white"
              >
                <img
                  src={githubIcon}
                  alt=""
                  className="h-[40px] w-[40px] invert transition-[filter]"
                />
              </a>
            )}
          </div>
        </section>

        <div className="border-b w-[717px] border-white z-10" />

        <section className="하단 mt-[130px] flex flex-col items-center gap-[110px] pb-[160px]">
          {mainImage && (
            <div className="flex justify-center">
              <img
                src={mainImage}
                alt={`${title}-1`}
                className="projectimg"
                onClick={() => setSelectedImage(mainImage)}
              />
            </div>
          )}

          <DetailSection title="프로젝트 개요">
            <p className="text-[18px] text-[#E6E6E6] leading-[2.5rem]">
              {" "}
              {detail}{" "}
            </p>
          </DetailSection>

          {features && features.length > 0 && (
            <DetailSection title="주요 기능">
              <BulletList items={features} />
            </DetailSection>
          )}

          {myRoles && myRoles.length > 0 && (
            <DetailSection title="내가 기여한 역할">
              <BulletList items={myRoles} />
            </DetailSection>
          )}

          {problemPoints && problemPoints.length > 0 && (
            <DetailSection title="개선이 필요한 점">
              <BulletList items={problemPoints} />
            </DetailSection>
          )}

          {technicalDetails && technicalDetails.length > 0 && (
            <DetailSection title="기술 구현 상세">
              <BulletList items={technicalDetails} />
            </DetailSection>
          )}

          {architecture && architecture.length > 0 && (
            <DetailSection title="구조 설계">
              <BulletList items={architecture} />
            </DetailSection>
          )}

          {troubleshooting && troubleshooting.length > 0 && (
            <DetailSection title="트러블슈팅">
              <div className="flex flex-col gap-[24px]">
                {troubleshooting.map((item) => (
                  <article
                    key={item.issue}
                    className="border border-white/15 bg-white/5 p-[28px]"
                  >
                    <p className="text-[17px] leading-[2rem] text-[#D8D8D8]">
                      <span className="font-semibold text-white">Issue. </span>
                      {item.issue}
                    </p>
                    <p className="mt-[14px] text-[17px] leading-[2rem] text-[#D8D8D8]">
                      <span className="font-semibold text-white">
                        Solution.{" "}
                      </span>
                      {item.solution}
                    </p>
                    {item.result && (
                      <p className="mt-[14px] text-[17px] leading-[2rem] text-[#D8D8D8]">
                        <span className="font-semibold text-white">
                          Result.{" "}
                        </span>
                        {item.result}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </DetailSection>
          )}

          {performance && performance.length > 0 && (
            <DetailSection title="성능 및 사용성 개선">
              <BulletList items={performance} />
            </DetailSection>
          )}

          {collaboration && collaboration.length > 0 && (
            <DetailSection title="협업 방식">
              <BulletList items={collaboration} />
            </DetailSection>
          )}

          {improvements && improvements.length > 0 && (
            <DetailSection title="개선한 점">
              <div className="flex flex-col gap-[28px]">
                {improvements.map((item) => (
                  <article
                    key={item.title}
                    className="grid grid-cols-[1fr_280px] gap-[28px] border border-white/15 bg-white/5 p-[28px]"
                  >
                    <div className="flex flex-col gap-[18px]">
                      <h3 className="text-[22px] font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-[17px] leading-[2rem] text-[#D8D8D8]">
                        <span className="font-semibold text-white">
                          Before.{" "}
                        </span>
                        {item.before}
                      </p>
                      <p className="text-[17px] leading-[2rem] text-[#D8D8D8]">
                        <span className="font-semibold text-white">
                          After.{" "}
                        </span>
                        {item.after}
                      </p>
                      {item.result && (
                        <p className="text-[17px] leading-[2rem] text-[#D8D8D8]">
                          <span className="font-semibold text-white">
                            Result.{" "}
                          </span>
                          {item.result}
                        </p>
                      )}
                    </div>
                    {item.image && (
                      <button
                        type="button"
                        className="flex w-full items-center justify-center overflow-hidden rounded-none border-0 bg-black/30 p-0"
                        onClick={() => setSelectedImage(item.image!.src)}
                        aria-label={`${item.image.alt} 크게 보기`}
                      >
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="project-detail-thumb"
                        />
                      </button>
                    )}
                  </article>
                ))}
              </div>
            </DetailSection>
          )}

          {screenshots && screenshots.length > 0 && (
            <DetailSection title="화면 및 결과 이미지">
              <div className="grid grid-cols-2 gap-[28px]">
                {screenshots.map((image) => (
                  <figure key={image.src} className="flex flex-col gap-[12px]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center overflow-hidden rounded-none border-0 bg-black/30 p-0"
                      onClick={() => setSelectedImage(image.src)}
                      aria-label={`${image.alt} 크게 보기`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="project-detail-shot"
                      />
                    </button>
                    {image.caption && (
                      <figcaption className="text-[15px] text-[#B5B5B5]">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </DetailSection>
          )}

          {learnings && learnings.length > 0 && (
            <DetailSection title="배운 점">
              <BulletList items={learnings} />
            </DetailSection>
          )}

          {retrospective && retrospective.length > 0 && (
            <DetailSection title="회고">
              <BulletList items={retrospective} />
            </DetailSection>
          )}

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt={`${title} selected`}
                className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
              />
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
