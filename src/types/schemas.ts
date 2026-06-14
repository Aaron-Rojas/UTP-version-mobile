// src/types/schemas.ts

// ==========================================
// 1. REPORTE VOCACIONAL (MatchScreen)
// ==========================================
export interface CarreraTop {
  careerId: string;
  name: string;
  score: number;
  reason?: string;
}

export interface ReporteVocacional {
  id: string;
  studentProfileId: string;
  sourceType: 'manual' | 'utp_pdf' | 'utp_json' | 'advisor_entry' | 'mock_demo';
  reportDate?: string;
  topCareers: CarreraTop[];
  scores: Record<string, number>;
}

// ==========================================
// 2. COMPARATIVA DE CARRERAS (Coliseo)
// ==========================================
export interface DimensionScores {
  math: number;
  coding: number;
  management: number;
  communication: number;
  practice: number;
}

export interface CareerHighlight {
  careerId: string;
  title: string;
  body: string;
}

export interface RespuestaComparacion {
  comparisonId: string;
  summary: string;
  dimensions: {
    left: DimensionScores;
    right: DimensionScores;
  };
  careerHighlights: CareerHighlight[];
  fitNarrative: string;
  recommendedQuestions: string[];
  createdAt: string;
}

// ==========================================
// 3. MALLA CURRICULAR Y EXPLICACIÓN IA
// ==========================================
export interface Curso {
  courseId: string;
  name: string;
  credits: number;
  area: string;
  summary?: string;
  syllabusId?: string;
}

export interface Ciclo {
  cycleNumber: number;
  courses: Curso[];
}

export interface MallaCurricular {
  careerId: string;
  careerName: string;
  cycles: Ciclo[];
}

export interface ExplicacionSyllabus {
  syllabusId: string;
  courseName: string;
  plainExplanation: string;
  whyItMatters: string;
  difficultySignals: {
    practiceIntensity: number;
    readingIntensity: number;
    abstractReasoning: number;
    frustrationTolerance: number;
  };
  skillsYouBuild: string[];
}

// ==========================================
// 4. PLAN DE ACCIÓN (PlanScreen y Home)
// ==========================================
export type EstadoTarea = 'pending' | 'done' | 'skipped';
export type TipoTarea = 'review_syllabus' | 'talk_family' | 'attend_event' | 'ask_advisor' | 'compare_again' | 'prepare_skill';

export interface TareaPlan {
  id: string;
  title: string;
  description?: string;
  type: TipoTarea;
  dueDate?: string;
  status: EstadoTarea;
}

export interface PlanAccion {
  id: string;
  studentProfileId: string;
  targetCareerId: string;
  status: 'draft' | 'active' | 'completed' | 'archived';
  tasks: TareaPlan[];
  notes?: string;
}