// src/mocks/actionPlanMock.ts

export const actionPlanMock = {
  // Datos obligatorios y de tracking según el schema
  id: "uuid-plan-001",
  studentProfileId: "uuid-student-123",
  targetCareerId: "uuid-falso-sistemas", // Usamos el ID falso que ya manejamos
  targetTerm: "2026-02",
  status: "active", // Valores permitidos: draft, active, completed, archived
  
  // El corazón del plan: el array de tareas
  tasks: [
    {
      id: "task-1",
      title: "Revisar la malla curricular a fondo",
      description: "Analiza los cursos de 'Especialidad' del primer año para confirmar tu interés.",
      type: "review_syllabus", 
      dueDate: "2026-06-20",
      status: "done" 
    },
    {
      id: "task-2",
      title: "Conversar con la familia",
      description: "Usa el insight del comparador para explicar por qué te inclinas por esta carrera.",
      type: "talk_family",
      dueDate: "2026-06-25",
      status: "pending"
    },
    {
      id: "task-3",
      title: "Buscar a un asesor",
      description: "Preguntar sobre los convenios de prácticas en los últimos ciclos.",
      type: "ask_advisor",
      dueDate: "2026-06-30",
      status: "pending"
    },
    {
      id: "task-4",
      title: "Preparar habilidad clave",
      description: "Inscribirse en un minicurso gratuito de lógica de programación.",
      type: "prepare_skill",
      dueDate: "2026-07-15",
      status: "skipped" 
    }
  ],
  
  notes: "Plan enfocado en Ingeniería de Sistemas tras el resultado del Coliseo.",
  createdAt: "2026-06-14T03:00:00Z"
};