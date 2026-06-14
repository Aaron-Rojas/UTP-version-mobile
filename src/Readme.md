# 🚀 UTP Match - Frontend Architecture & Handoff

Bienvenido al repositorio frontend de UTP Match. Este documento actúa como el "mapa del tesoro" arquitectónico para cualquier desarrollador o asistente de IA (LLM) que retome el proyecto. 

El sistema actual es un MVP 100% funcional y visual construido en React Native (Expo). Está fuertemente acoplado a un diseño API-First basado en JSON Schemas predefinidos.

---

## ⚠️ Advertencia de Configuración Local
Para futuros desarrolladores: **No clonen este repositorio dentro de carpetas sincronizadas en la nube**. Eviten el entorno automatizado de OneDrive. Se recomienda aislar los directorios del proyecto en rutas locales seguras (ej. `C:\Proyectos\UTPMatch`) para prevenir riesgos de datos, corrupción de la carpeta `node_modules` y fallos silenciosos de Expo.

---

## 🗺️ El Flujo del Usuario (Las 4 Fases)

Hemos estructurado la app siguiendo el viaje natural del estudiante, aislando cada fase a su respectivo contrato (JSON Schema):

1. **Fase 1: Onboarding (El Traductor)**
   * **Ruta:** `src/screens/auth/OnboardingScreen.tsx`
   * **Lógica:** El diseño pide un formulario empático con "píldoras" (ej. "Me gusta la tecnología"). El backend exige números. Hemos creado una lógica interna que *traduce* estas opciones visuales al objeto matemático que requiere el `vocational_report.schema.json` usando el `sourceType: "manual"`.

2. **Fase 2: El Oráculo (`MatchScreen`)**
   * **Ruta:** `src/screens/main/MatchScreen.tsx`
   * **Contrato:** `vocational_report.schema.json`
   * **Detalle:** Renderiza el array `topCareers`. Hemos usado un "Fake Ring" (círculo nativo con StyleSheet) en `TarjetaMatch` para evitar dependencias externas como `react-native-svg` que podrían romper Expo Go en esta etapa.

3. **Fase 3: La Antesala y El Coliseo (`CompareScreen` & `ComparativaResultadoScreen`)**
   * **Rutas:** `src/screens/main/CompareScreen.tsx` (Antesala) -> `src/screens/main/ComparativaResultadoScreen.tsx` (Coliseo).
   * **Contratos:** * `career_comparison_response.schema.json` (Para Resumen, Intensidad y Acciones).
     * `career_curriculum_response.schema.json` (Para la pestaña Cursos).
     * `syllabus_explanation_response.schema.json` (Para el Modal de IA al tocar un curso).
   * **Arquitectura:** El Coliseo NO vive en el TabNavigator, se superpone desde el `RootNavigation` para dar espacio visual. Las pestañas se refactorizaron estrictamente para consumir la data de IA (se reemplazó "Habilidades" por "Acciones/Preguntas" según el schema).

4. **Fase 4: El Centro de Mando y Hoja de Ruta (`HomeScreen` & `PlanScreen`)**
   * **Rutas:** `src/screens/main/PlanScreen.tsx` y `src/screens/main/HomeScreen.tsx`
   * **Contrato:** `action_plan.schema.json`
   * **Detalle:** El `PlanScreen` permite iterar y cambiar el estado (`done`, `pending`) de las tareas. El `HomeScreen` es un Dashboard "tonto" que simplemente lee el total de tareas completadas de este mismo contrato para renderizar la barra de progreso.

---

## 🏗️ Patrones de Diseño y Reglas Inquebrantables

Si vas a modificar código, respeta estas reglas establecidas en la última sesión:

1. **Mocks vs Services (Cero Fricción):**
   Actualmente la app consume datos de la carpeta `src/mocks/`. Estos mocks **implementan las interfaces de `src/types/schemas.ts`**. Cuando el backend esté listo, NO toques los componentes visuales. Simplemente crea una carpeta `src/services/` con los fetchs a Supabase/API y reemplaza las importaciones en las pantallas.

2. **Separación de Responsabilidades en Modales:**
   El patrón utilizado para *Bottom Sheets* (como `ModalExplicacionCurso.tsx`) exige que el Modal solo reciba `visible={estado}` y `onClose={() => setEstado(false)}`. El gatillo (el botón que lo abre) vive en la pantalla principal y es el único que ejecuta `setEstado(true)`. No mezcles ambas lógicas.

3. **Defensa contra la "Pantalla Roja" (Optional Chaining):**
   Toda iteración sobre arrays provenientes de los JSON Schemas (ej. `data.recommendedQuestions?.map`) usa el operador `?.`. El backend puede fallar o devolver nulos; el frontend jamás debe crashear por ello.

4. **Componentes "Tontos" (Dumb Components):**
   Las UI como `<BarraComparativa>` o `<TarjetaTarea>` no saben de la existencia de la IA ni de Supabase. Solo reciben `strings` y `numbers` puros. Mantén esta filosofía de "Lifting State Up" para que los componentes sean 100% testeables en Storybook a futuro.

---
*Fin del Manifiesto. Próximos pasos recomendados: Conexión real con APIs e inyección de iconografía SVG.*