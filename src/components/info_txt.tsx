export default function InfoTxt() {
  return (
    <section className="grid place-items-center min-h-screen px-8 ml-70">
      <div className="info-txt flex flex-col lg:flex-row gap-20 max-w-5xl w-full">
        <div className="column-1 grid justify-end gap-30">
          <section className="w-60">
            <div className="font-bold tracking-[2px]">KIM YURI / 김유리</div>
            <div className="text-[18px]">FRONT-END</div>

            <div className="flex flex-col items-end gap-5">
              <div>1999 / 03 / 16</div>
              <div>+82 10 7652 0790</div>
              <div>uowllnh@gmail.com</div>
            </div>
          </section>

          <section className="EDUCATION">
            <div className="info-txt-bold">EDUCATION</div>

            <div className="flex justify-center">
              <div className="relative flex justify-center items-center w-30 text-[#757575]">
                <div className="absolute w-1 h-15 bg-current" />
                <div className="absolute flex flex-col gap-13">
                  <div className="w-3 h-3 rounded-full bg-current" />
                  <div className="w-3 h-3 rounded-full bg-current" />
                </div>
              </div>

              <div className="flex flex-col gap-5 w-55">
                <section>
                  <div className="text-[15px]">2020 ~ 2025</div>
                  <div className="font-bold">성결대학교 컴퓨터공학과</div>
                </section>

                <section>
                  <div className="text-[15px]">2015 ~ 2018</div>
                  <div className="font-bold">광명북고등학교</div>
                </section>
              </div>
            </div>
          </section>
        </div>

        <section className="Skills flex flex-col gap-5">
          <div className="info-txt-bold">SKILLS</div>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:px-[70px]">
            <div>
              <div className="font-bold">Front-End</div>
              <div>Kotlin</div>
              <div>Python</div>
              <div>Java</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>React</div>
              <div>React Native</div>
              <div>TypeScript</div>
              <div>Next.js</div>
              <div>Vue</div>
              <div>Tailwind CSS</div>
            </div>

            <div>
              <div className="font-bold">Tools / Deployment</div>
              <div>Photoshop</div>
              <div>Figma</div>
              <div>GitHub</div>
              <div>Notion</div>
              <div>Jira</div>
              <div>Firebase Hosting</div>
            </div>

            <div>
              <div className="font-bold">Back-End / BaaS</div>

              <div>Firebase Authentication</div>
              <div>Cloud Firestore</div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
