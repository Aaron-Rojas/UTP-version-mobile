export const careerComparisonResponseMock = {
  // Datos obligatorios según el schema
  comparisonId: "123e4567-e89b-12d3-a456-426614174000",
  summary: "Diferencia rápida entre ambas ingenierías.",
  
  // Las 5 métricas que discutimos
  dimensions: {
    left: {
      math: 90,
      coding: 85,
      management: 40,
      communication: 50,
      practice: 75
    },
    right: {
      math: 70,
      coding: 20,
      management: 85,
      communication: 80,
      practice: 65
    }
  },
  
  // Textos para las tarjetas blancas
  careerHighlights: [
    {
      careerId: "uuid-1",
      title: "Ing. Sistemas",
      body: "Enfoque profundamente técnico y lógico. Diseño, desarrollo y mantenimiento de software, arquitectura de sistemas y soluciones tecnológicas digitales."
    },
    {
      careerId: "uuid-2",
      title: "Ing. Industrial",
      body: "Enfoque en procesos, optimización y gestión. Combina conocimientos técnicos con habilidades de administración de recursos humanos y materiales."
    }
  ],
  
  // El texto del foquito celeste
  fitNarrative: "Sistemas exige más lógica y programación dura. Industrial combina números con una fuerte dosis de gestión de personas y procesos comerciales.",
  
  recommendedQuestions: [
    "¿Prefieres resolver problemas de código o de procesos humanos?"
  ],
  createdAt: "2026-06-14T10:00:00Z"
};