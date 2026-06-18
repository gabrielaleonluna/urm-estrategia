export interface ServiceData {
  slug: string;
  title: string;
  summary: string;
  objective: string;
  characteristics: string[];
  benefits: string[];
  scope: string[];
  modalities: string[];
  technologies: string[];
  category: "tech" | "management";
}

export const servicesData: ServiceData[] = [
  {
    slug: "analitica-de-datos",
    title: "Analítica de Datos",
    summary:
      "Transformamos datos dispersos en conocimiento estratégico accionable. Nuestro servicio de analítica de datos ayuda a las organizaciones a descubrir patrones, tendencias y oportunidades ocultas en sus datos para tomar decisiones más inteligentes y competitivas.",
    objective:
      "Diseñar e implementar soluciones de analítica de datos que permitan a las organizaciones comprender el comportamiento de sus indicadores clave, anticipar escenarios futuros y optimizar la toma de decisiones con base en evidencia.",
    characteristics: [
      "Diagnóstico y auditoría del ecosistema de datos existente en la organización.",
      "Diseño de arquitecturas de datos adaptadas a las necesidades del negocio.",
      "Desarrollo de dashboards e informes interactivos en tiempo real.",
      "Integración de fuentes de datos heterogéneas (ERP, CRM, hojas de cálculo, APIs externas).",
      "Modelado estadístico y análisis descriptivo, diagnóstico, predictivo y prescriptivo.",
      "Implementación de pipelines de datos ETL/ELT automatizados.",
      "Capacitación del equipo interno en el uso e interpretación de los entregables.",
    ],
    benefits: [
      "Reducción del tiempo de generación de reportes hasta en un 80%.",
      "Mayor precisión en la toma de decisiones basada en hechos, no en intuición.",
      "Identificación temprana de riesgos y oportunidades de negocio.",
      "Centralización y gobierno del dato como activo estratégico.",
      "Aumento de la competitividad mediante inteligencia competitiva.",
    ],
    scope: [
      "Sector financiero y bancario.",
      "Retail y comercio electrónico.",
      "Salud y farmacéutico.",
      "Manufactura e industria.",
      "Sector público y gobierno.",
      "Logística y cadena de suministro.",
    ],
    modalities: [
      "Consultoría puntual: análisis específico con entregable definido.",
      "Proyecto integral: desde el diagnóstico hasta la implementación completa.",
      "Soporte continuo: mantenimiento y evolución de soluciones existentes.",
      "Capacitación y transferencia de conocimiento al equipo interno.",
    ],
    technologies: [
      "Power BI",
      "Python (Pandas, NumPy, Matplotlib)",
      "SQL / PostgreSQL / MySQL",
      "Azure Synapse Analytics",
      "AWS Redshift",
      "Apache Spark",
      "dbt (Data Build Tool)",
      "Tableau",
    ],
    category: "tech",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    summary:
      "Implementamos soluciones de inteligencia artificial y machine learning que automatizan procesos, generan predicciones de alta precisión y crean ventajas competitivas sostenibles. Desde modelos personalizados hasta integración de IA generativa en flujos de trabajo empresariales.",
    objective:
      "Desarrollar e implementar soluciones de IA adaptadas al contexto de cada organización, que generen valor real y medible optimizando procesos, mejorando la experiencia del cliente y abriendo nuevas fuentes de ingresos.",
    characteristics: [
      "Diagnóstico de madurez en IA y definición de casos de uso prioritarios.",
      "Desarrollo de modelos de machine learning supervisados y no supervisados.",
      "Implementación de modelos de procesamiento de lenguaje natural (NLP).",
      "Soluciones de computer vision para inspección de calidad, seguridad y más.",
      "Integración de IA generativa (LLMs) en flujos de trabajo internos.",
      "Desarrollo de chatbots y asistentes conversacionales inteligentes.",
      "MLOps: despliegue, monitoreo y mantenimiento de modelos en producción.",
    ],
    benefits: [
      "Automatización de tareas repetitivas con alta precisión y disponibilidad 24/7.",
      "Predicciones de demanda, riesgo crediticio o comportamiento del cliente con alta exactitud.",
      "Reducción de costos operativos y mejora de márgenes.",
      "Personalización masiva de productos y servicios.",
      "Aceleración del tiempo de respuesta y toma de decisiones.",
    ],
    scope: [
      "Banca y seguros (detección de fraude, scoring crediticio).",
      "Retail (recomendadores, previsión de demanda).",
      "Manufactura (mantenimiento predictivo, control de calidad).",
      "Salud (diagnóstico asistido, gestión de pacientes).",
      "Servicios profesionales (automatización de documentos, análisis contractual).",
    ],
    modalities: [
      "Consultoría estratégica en IA: hoja de ruta y priorización de casos de uso.",
      "Desarrollo de modelos a medida con entrega de código y documentación.",
      "Piloto de IA: prueba de concepto con métricas de validación.",
      "Implementación completa y puesta en producción.",
      "Capacitación en IA para equipos no técnicos.",
    ],
    technologies: [
      "Python (Scikit-learn, TensorFlow, PyTorch)",
      "OpenAI / Azure OpenAI",
      "AWS SageMaker",
      "Azure Machine Learning",
      "LangChain",
      "Hugging Face",
      "MLflow",
      "FastAPI",
    ],
    category: "tech",
  },
  {
    slug: "power-platform",
    title: "Microsoft Power Platform",
    summary:
      "Potenciamos la digitalización de las organizaciones con el ecosistema Microsoft Power Platform: automatizamos flujos de trabajo, creamos aplicaciones empresariales sin código y construimos dashboards de gestión que elevan la productividad sin necesidad de grandes inversiones en desarrollo de software.",
    objective:
      "Implementar soluciones de bajo código basadas en Microsoft Power Platform que digitalicen y automaticen los procesos operativos de la organización, reduciendo fricción, errores y tiempos de ciclo.",
    characteristics: [
      "Diagnóstico de procesos candidatos a automatización o digitalización.",
      "Desarrollo de aplicaciones empresariales con Power Apps (Canvas y Model-Driven).",
      "Automatización de flujos de trabajo con Power Automate (aprobaciones, notificaciones, integraciones).",
      "Construcción de reportes y dashboards interactivos con Power BI.",
      "Creación de chatbots y agentes virtuales con Copilot Studio.",
      "Integración con Microsoft 365, Dynamics 365, SharePoint y fuentes externas.",
      "Gobierno y administración del entorno Power Platform.",
    ],
    benefits: [
      "Reducción de tareas manuales y errores operativos.",
      "Tiempo de desarrollo de aplicaciones hasta 10 veces más rápido que código tradicional.",
      "Democratización de la tecnología: los usuarios de negocio pueden construir sus propias soluciones.",
      "Reducción de costos de licencias y desarrollo de software a medida.",
      "Integración nativa con el ecosistema Microsoft ya existente en la organización.",
    ],
    scope: [
      "Gestión de aprobaciones y flujos de trabajo internos.",
      "Digitalización de formularios y procesos en papel.",
      "Seguimiento de indicadores y KPIs de gestión.",
      "Automatización de reportes y envíos de información.",
      "Atención al cliente y soporte interno mediante chatbots.",
    ],
    modalities: [
      "Consultoría de adopción: estrategia y hoja de ruta de implementación.",
      "Desarrollo de soluciones a medida con Power Apps y Power Automate.",
      "Capacitación Citizen Developer para equipos internos.",
      "Soporte y evolución de soluciones existentes.",
    ],
    technologies: [
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "Microsoft Power BI",
      "Microsoft Copilot Studio",
      "Microsoft Dataverse",
      "SharePoint Online",
      "Microsoft 365",
      "Azure Logic Apps",
    ],
    category: "tech",
  },
  {
    slug: "evaluacion-financiera",
    title: "Evaluación Financiera",
    summary:
      "Proveemos análisis financieros rigurosos y objetivos que permiten a inversores, directivos y accionistas evaluar la viabilidad, rentabilidad y riesgo de proyectos, inversiones y decisiones estratégicas con la mayor solidez técnica.",
    objective:
      "Elaborar estudios de evaluación financiera que proporcionen una base técnica sólida para la toma de decisiones de inversión, financiación o desinversión, con rigor metodológico y adaptados al contexto de cada organización.",
    characteristics: [
      "Construcción de modelos financieros dinámicos (proyecciones a 5–10 años).",
      "Análisis de flujos de caja libres y descontados (DCF).",
      "Cálculo de indicadores clave: VAN, TIR, período de recuperación, EBITDA.",
      "Análisis de sensibilidad y escenarios (pesimista, base, optimista).",
      "Evaluación de riesgos financieros y cuantificación de impacto.",
      "Estructuración de la inversión y análisis del punto de equilibrio.",
      "Presentación ejecutiva de resultados con recomendaciones accionables.",
    ],
    benefits: [
      "Decisiones de inversión fundamentadas en cifras y proyecciones rigurosas.",
      "Reducción del riesgo de pérdidas por proyectos inviables.",
      "Credibilidad ante inversionistas, entidades financieras y socios estratégicos.",
      "Identificación de oportunidades de mejora en la estructura de costos e ingresos.",
      "Cumplimiento de estándares internacionales de evaluación financiera.",
    ],
    scope: [
      "Proyectos de inversión en infraestructura, tecnología o expansión.",
      "Adquisición o fusión de empresas (M&A).",
      "Evaluación de nuevas líneas de negocio o productos.",
      "Análisis de retorno para fondos de inversión y family offices.",
      "Proyectos de inversión pública y privada.",
    ],
    modalities: [
      "Estudio de evaluación financiera independiente con informe técnico.",
      "Segunda opinión sobre evaluaciones existentes.",
      "Taller de modelado financiero para equipos internos.",
      "Asesoría continua durante la fase de due diligence.",
    ],
    technologies: [
      "Microsoft Excel (modelos financieros avanzados)",
      "Power BI (visualización de resultados)",
      "Python (automatización y simulación Monte Carlo)",
      "Estándares IFRS / NIF",
      "Metodologías PMBOK / PMI",
    ],
    category: "management",
  },
  {
    slug: "financiacion-de-proyectos",
    title: "Financiación de Proyectos",
    summary:
      "Acompañamos a organizaciones y emprendedores en la identificación, estructuración y gestión de fuentes de financiación para sus proyectos, conectando la visión estratégica con los mecanismos de capital más adecuados: deuda, capital, fondos públicos y esquemas de financiación no convencional.",
    objective:
      "Identificar y estructurar la combinación óptima de fuentes de financiación para proyectos de inversión, reduciendo el costo de capital y maximizando las posibilidades de aprobación ante entidades financiadoras.",
    characteristics: [
      "Diagnóstico de necesidades de financiación y brecha de capital.",
      "Mapeo de fuentes de financiación disponibles (banca, capital privado, fondos públicos, cooperación internacional).",
      "Estructuración financiera del proyecto (debt/equity mix).",
      "Preparación de pitch financiero y documentación de soporte para fondos.",
      "Acompañamiento en el proceso de negociación con entidades financiadoras.",
      "Apoyo en la postulación a convocatorias públicas y fondos de innovación.",
      "Seguimiento hasta el desembolso y gestión de condiciones.",
    ],
    benefits: [
      "Acceso a fuentes de financiación que de otra forma serían desconocidas o inaccesibles.",
      "Optimización del costo de capital y de la estructura financiera del proyecto.",
      "Mayor tasa de éxito en procesos de aplicación a fondos y créditos.",
      "Ahorro de tiempo y recursos en la búsqueda de financiación.",
      "Acompañamiento experto en un proceso técnico y a menudo complejo.",
    ],
    scope: [
      "Startups y scale-ups en etapas de seed, Series A y posteriores.",
      "Empresas medianas en procesos de expansión o transformación digital.",
      "Proyectos de infraestructura pública y privada.",
      "Iniciativas de innovación y I+D empresarial.",
      "Proyectos con componente de sostenibilidad y ESG.",
    ],
    modalities: [
      "Diagnóstico de financiabilidad y mapa de fuentes.",
      "Estructuración financiera y preparación de documentación.",
      "Representación y acompañamiento ante entidades financiadoras.",
      "Taller de pitch financiero para equipos directivos.",
    ],
    technologies: [
      "Modelos financieros en Excel",
      "Power BI para reporting a inversionistas",
      "Plataformas de gestión de fondos públicos",
      "Bases de datos de inversionistas y fondos de capital",
    ],
    category: "management",
  },
  {
    slug: "mejoramiento-de-procesos",
    title: "Mejoramiento de Procesos",
    summary:
      "Identificamos ineficiencias, cuellos de botella y desperdicios en los procesos operativos de las organizaciones para rediseñarlos con metodologías probadas, logrando mayor velocidad, calidad y reducción de costos con resultados medibles.",
    objective:
      "Rediseñar y optimizar los procesos críticos de la organización mediante metodologías de mejora continua, eliminando actividades que no agregan valor y potenciando la capacidad operativa y la experiencia del cliente.",
    characteristics: [
      "Mapeo y documentación del estado actual de los procesos (AS-IS).",
      "Identificación de desperdicios, cuellos de botella y puntos de dolor.",
      "Diseño del estado futuro optimizado (TO-BE) con Quick Wins y mejoras estructurales.",
      "Aplicación de metodologías Lean, Six Sigma, BPM según el contexto.",
      "Automatización de actividades mediante RPA o Power Automate.",
      "Gestión del cambio y capacitación del equipo en los nuevos procesos.",
      "Medición de resultados y ajuste continuo mediante KPIs de proceso.",
    ],
    benefits: [
      "Reducción de tiempos de ciclo y costos operativos.",
      "Mejora en la calidad del producto o servicio y reducción de reprocesos.",
      "Mayor satisfacción del cliente interno y externo.",
      "Liberación de capacidad operativa para actividades de mayor valor.",
      "Cultura de mejora continua instalada en el equipo.",
    ],
    scope: [
      "Procesos de producción y operaciones industriales.",
      "Procesos administrativos y financieros.",
      "Atención al cliente y experiencia de usuario.",
      "Logística, compras y gestión de inventarios.",
      "Onboarding y procesos de recursos humanos.",
    ],
    modalities: [
      "Diagnóstico de procesos con entregable de oportunidades priorizadas.",
      "Proyecto de mejora de alcance definido (un área o proceso crítico).",
      "Programa de mejora continua con acompañamiento mensual.",
      "Capacitación en Lean, Six Sigma o BPM para equipos internos.",
    ],
    technologies: [
      "Bizagi / Camunda (modelado BPMN)",
      "Power Automate (automatización de flujos)",
      "Lean Six Sigma (DMAIC, VSM)",
      "Microsoft Visio",
      "Tableau / Power BI (métricas de proceso)",
    ],
    category: "management",
  },
  {
    slug: "valoracion-de-empresas",
    title: "Valoración de Empresas",
    summary:
      "Determinamos el valor justo de mercado de empresas y activos mediante metodologías reconocidas internacionalmente, apoyando procesos de compraventa, fusiones, reestructuraciones, litigios y gestión patrimonial con la mayor rigurosidad técnica y objetividad.",
    objective:
      "Establecer el valor económico de una empresa o unidad de negocio mediante metodologías rigurosas y aceptadas por el mercado, entregando un informe de valoración que sirva como base para negociaciones, transacciones o decisiones estratégicas.",
    characteristics: [
      "Análisis del contexto sectorial, macroeconómico y competitivo.",
      "Valoración por múltiplos de mercado y comparables de la industria.",
      "Valoración por flujos de caja descontados (DCF) con análisis de sensibilidad.",
      "Valoración patrimonial y de activos netos.",
      "Análisis de prima de control y descuentos de liquidez.",
      "Informe de valoración completo con sustento metodológico.",
      "Acompañamiento en procesos de due diligence y negociación.",
    ],
    benefits: [
      "Conocimiento del valor real de la empresa como base de negociación.",
      "Protección contra sobrevaloraciones o subvaloraciones en transacciones.",
      "Credibilidad ante compradores, vendedores, inversores y socios.",
      "Apoyo en estructuración de acuerdos de accionistas.",
      "Cumplimiento con requerimientos de organismos regulatorios y normas contables.",
    ],
    scope: [
      "Compraventa total o parcial de empresas (M&A).",
      "Ingreso o salida de socios y accionistas.",
      "Reestructuraciones corporativas y escisiones.",
      "Disputas judiciales y arbitrajes comerciales.",
      "Planeación sucesoria y patrimonial.",
      "Cumplimiento con normas IFRS 3 y otras regulaciones.",
    ],
    modalities: [
      "Informe de valoración independiente (opinión de valor).",
      "Valoración de soporte en procesos de due diligence.",
      "Actualización de valoraciones periódicas para gestión interna.",
      "Segunda opinión sobre valoraciones existentes.",
    ],
    technologies: [
      "Microsoft Excel (modelos de valoración avanzados)",
      "Bases de datos de comparables (Damodaran, Bloomberg)",
      "Python (automatización y análisis de escenarios)",
      "Power BI (presentación de resultados)",
      "Normas IFRS / US GAAP",
    ],
    category: "management",
  },
  {
    slug: "planeacion-estrategica",
    title: "Planeación Estratégica",
    summary:
      "Acompañamos a organizaciones en la construcción de su hoja de ruta estratégica: desde el diagnóstico de la posición competitiva hasta la definición de objetivos, iniciativas prioritarias y mecanismos de seguimiento que garanticen la ejecución efectiva de la estrategia.",
    objective:
      "Co-construir con el equipo directivo un plan estratégico coherente, ambicioso y ejecutable, que alinee los recursos y capacidades de la organización con las oportunidades del entorno y los objetivos de largo plazo.",
    characteristics: [
      "Análisis del entorno externo: PESTEL, análisis de industria (5 fuerzas de Porter).",
      "Diagnóstico interno: análisis de capacidades, cadena de valor y recursos estratégicos.",
      "Talleres de construcción estratégica con el equipo directivo.",
      "Definición de misión, visión y valores corporativos.",
      "Formulación de objetivos estratégicos y OKRs.",
      "Diseño del mapa estratégico y cuadro de mando integral (Balanced Scorecard).",
      "Plan de implementación con responsables, cronograma y presupuesto.",
    ],
    benefits: [
      "Alineación de toda la organización hacia objetivos comunes.",
      "Claridad estratégica para la alta dirección y los equipos de trabajo.",
      "Mayor agilidad para adaptarse a cambios del entorno.",
      "Mejor asignación de recursos hacia las iniciativas de mayor impacto.",
      "Marco de seguimiento que facilita la rendición de cuentas.",
    ],
    scope: [
      "Empresas medianas y grandes en procesos de transformación o crecimiento.",
      "Organizaciones que requieren revisión y actualización de su estrategia.",
      "Startups en etapas de escalamiento.",
      "Entidades públicas y organismos sin ánimo de lucro.",
      "Unidades de negocio dentro de grandes corporaciones.",
    ],
    modalities: [
      "Proceso completo de planeación estratégica (3–6 meses).",
      "Talleres ejecutivos de estrategia (1–2 días).",
      "Revisión y actualización del plan estratégico existente.",
      "Facilitación de procesos de construcción participativa con equipos ampliados.",
      "Soporte en la implementación y seguimiento trimestral.",
    ],
    technologies: [
      "Balanced Scorecard / OKRs",
      "Power BI (tableros de seguimiento estratégico)",
      "Miro / Mural (talleres colaborativos virtuales)",
      "Herramientas de análisis PESTEL y Porter",
      "Microsoft 365 (gestión de documentación estratégica)",
    ],
    category: "management",
  },
];

export const techServices = servicesData.filter((s) => s.category === "tech");
export const managementServices = servicesData.filter((s) => s.category === "management");
