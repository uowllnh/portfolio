import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { metaPlannerData } from "../components/details/MetaPlanner";
import { portfolioData } from "../components/details/Portfolio";
import type { ProjectProps } from "../components/ProjectDetail";
import { yoringData } from "../components/details/Yoring";
import { yupddukData } from "../components/details/Yupdduk";

export type ProjectCategory = "personal" | "team";

export interface ProjectDocument extends ProjectProps {
  id: string;
  category: ProjectCategory;
}

export const localProjects: ProjectDocument[] = [
  { id: "yoring", category: "team", ...yoringData },
  { id: "metaplanner", category: "team", ...metaPlannerData },
  { id: "portfolio", category: "personal", ...portfolioData },
  { id: "yupdduk", category: "personal", ...yupddukData },
];

function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      window.setTimeout(() => {
        reject(
          new Error(
            "Firestore 응답 시간이 초과되었습니다. Firebase 설정, Firestore Rules, 네트워크 상태를 확인해 주세요."
          )
        );
      }, timeoutMs);
    }),
  ]);
}

export async function seedAllProjects() {
  try {
    await withTimeout(
      Promise.all(
        localProjects.map(({ id, ...data }) =>
          setDoc(doc(db, "projects", id), data)
        )
      ),
      10000
    );

    console.log("프로젝트 데이터 전체 저장 완료");
    return { ok: true };
  } catch (error) {
    console.error("프로젝트 데이터 전체 저장 실패:", error);
    return { ok: false, error };
  }
}

export async function fetchProjects() {
  const snapshot = await withTimeout(getDocs(collection(db, "projects")), 10000);

  return snapshot.docs.map((projectDoc) => ({
    id: projectDoc.id,
    ...projectDoc.data(),
  })) as ProjectDocument[];
}
