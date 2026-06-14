export const COLORES = {
  // --- Colores Generales de la App ---
  primario: '#0D92F4',   
  secundario: '#77CDFF', 
  terciario: '#48CFCB',
  fondo: '#F8FAFC',
  borde: '#CBD5E1',

  // --- Colores Específicos del Botón y Píldoras ---
  invertido: '#2D3748',  
  bordeGris: '#CBD5E1',
  textoBlanco: '#FFFFFF',
  textoPrincipal: '#1E293B',
  textoSecundario: '#64748B',
  textoGrisOscuro: '#1E293B',
  deshabilitadoFondo: '#E2E8F0',
  deshabilitadoTexto: '#94A3B8'
};

export const ESPACIADO = {
  // --- Espaciados Generales ---
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,

  // --- Espaciados Específicos de UI ---
  py: 16,     
  px: 24,     
  radio: 24,  // 🚀 ACTUALIZADO: El efecto Squircle (antes 12)
};

// 🚀 NUEVO: Sistema de sombras táctiles para UX adolescente
export const SOMBRAS = {
  suave: {
    shadowColor: '#1E293B', // Usamos tu textoPrincipal para una sombra más natural
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4, 
  },
  fuerte: {
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  }
};