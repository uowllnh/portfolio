import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { metaPlannerData } from "../components/details/MetaPlanner";
import { portfolioData } from "../components/details/Portfolio";
import type { ProjectProps } from "../components/ProjectDetail";
import { yoringData } from "../components/details/Yoring";
import { yupddukData } from "../components/details/Yupdduk";
import { petMilyData } from "../components/details/Petmily";
import { weddingInvitationData } from "../components/details/WeddingInvitation";

export type ProjectCategory = "personal" | "team";

export interface ProjectDocument extends ProjectProps {
  id: string;
  category: ProjectCategory;
}

export const localProjects: ProjectDocument[] = [
  { id: "yoring", category: "team", ...yoringData },
  { id: "metaplanner", category: "team", ...metaPlannerData },
  { id: "portfolio", category: "personal", ...portfolioData },
  { id: "wedding-invitation", category: "personal", ...weddingInvitationData },
  { id: "yupdduk", category: "personal", ...yupddukData },
  { id: "petmily", category: "team", ...petMilyData },
];

function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      window.setTimeout(() => {
        reject(new Error("Firestore request timed out"));
      }, timeoutMs);
    }),
  ]);
}

export async function seedAllProjects() {
  try {
    await withTimeout(
      Promise.all(
        localProjects.map(({ id, ...data }) =>
          setDoc(doc(db, "projects", id), data),
        ),
      ),
      10000,
    );

    console.log("프로젝트 데이터 전체 저장 완료");
    return { ok: true };
  } catch (error) {
    console.error("프로젝트 데이터 전체 저장 실패:", error);
    return { ok: false, error };
  }
}

export async function fetchProjects() {
  try {
    const snapshot = await withTimeout(
      getDocs(collection(db, "projects")),
      10000,
    );
    const remoteProjects = snapshot.docs.map((projectDoc) => ({
      id: projectDoc.id,
      ...projectDoc.data(),
    })) as ProjectDocument[];
    const remoteProjectsById = new Map(
      remoteProjects.map((project) => [project.id, project]),
    );
    const localProjectIds = new Set(localProjects.map((project) => project.id));
    const mergedProjects = localProjects.map(
      (project) => remoteProjectsById.get(project.id) ?? project,
    );

    remoteProjects.forEach((project) => {
      if (!localProjectIds.has(project.id)) {
        mergedProjects.push(project);
      }
    });

    return mergedProjects;
  } catch (error) {
    console.warn(
      "Firebase 프로젝트 조회 실패, 로컬 데이터를 표시합니다.",
      error,
    );
    return localProjects;
  }
}
