"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Layers, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";

export interface ProjectDetail {
  id: string;
  title: string;
  year: string;
  category: string;
  stack: string[];
  description: string;
  architecture: string;
  challengesSolved: string[];
  codeSnippet: string;
  image: string;
  liveDemo?: string;
  github: string;
}

export const projectDetailsMap: Record<number, ProjectDetail> = {
  1: {
    id: "1",
    title: "Customer Churn Prediction Platform",
    year: "2025",
    category: "Machine Learning & API",
    stack: ["Python", "Scikit-learn", "FastAPI", "Pandas", "ROC-AUC 0.835"],
    description:
      "Production-ready machine learning system trained on the Telco Customer Churn dataset to identify churn indicators early. Features automated preprocessing, class weight rebalancing, threshold tuning to maximize recall (83.16%), and a microservice architecture built with FastAPI.",
    architecture:
      "Raw Telco Dataset → Sklearn ColumnTransformer (OneHotEncoder + StandardScaler) → Balanced Random Forest & Logistic Regression Ensemble → Optimal Decision Boundary (Threshold = 0.38) → FastAPI Async Inference Endpoint (/api/v1/predict) → JSON Response with Risk Tier & Automated Retention Triggers.",
    challengesSolved: [
      "Class Imbalance: Handled severe non-churn to churn skew using SMOTE and class-weighted cost-sensitive loss.",
      "Recall Optimization: Lowered classification decision boundary to 0.38, catching 83.16% of churners while controlling false alarms.",
      "Low Latency: Serialized model and preprocessing pipelines with Joblib and in-memory caching to achieve <15ms response times.",
      "Actionable Outputs: Outputting not just a binary 0/1 prediction, but risk probability tiers with automated business retention playbooks.",
    ],
    codeSnippet: `@app.post("/api/v1/predict-churn", response_model=ChurnResponse)
async def predict_churn(customer: CustomerFeatures):
    # Transform raw incoming JSON features through pre-fitted pipeline
    features_df = pd.DataFrame([customer.model_dump()])
    transformed = preprocessor.transform(features_df)
    
    # Calculate probability and evaluate against tuned threshold (0.38)
    churn_prob = float(model.predict_proba(transformed)[0][1])
    is_churn = churn_prob >= 0.38
    
    tier = "CRITICAL" if churn_prob > 0.65 else ("WATCHLIST" if churn_prob > 0.35 else "HEALTHY")
    return ChurnResponse(
        churn_risk=tier,
        churn_probability=round(churn_prob, 4),
        recommended_action=RETENTION_PLAYBOOK.get(tier)
    )`,
    image: "/images/churn-prediction.svg",
    github: "https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction",
  },
  2: {
    id: "2",
    title: "AI Document Intelligence System",
    year: "2025",
    category: "Full Stack / NLP",
    stack: ["Python", "FastAPI", "Gemini RAG", "MySQL", "JWT Auth", "Pytest"],
    description:
      "Enterprise-grade document analyzer supporting multi-format ingestion (PDF, DOCX) across 8 classification categories. Integrates OCR text extraction, vector retrieval, and Google Gemini LLM for conversational Q&A and contextual summaries, secured with JWT and audited by 37 unit and integration tests.",
    architecture:
      "Document Upload (PDF/DOCX) → Async File Pipeline & Text Extraction → Text Chunking & Embedding Generation → In-Memory Vector Store / MySQL Document Metadata → Contextual Prompt Injection into Gemini 1.5 Pro → SSE Streaming Response & Categorized Analytics.",
    challengesSolved: [
      "Complex Layout Parsing: Handled inconsistent PDF tables, two-column formats, and scanned artifacts reliably.",
      "Token Economy: Chunked large 50+ page documents with semantic overlaps to stay within LLM token windows while maintaining context.",
      "Production Testing Rigor: Developed comprehensive test suite of 37 pytest test cases covering auth, token expiry, corrupt files, and Gemini rate-limiting.",
      "Zero Data Leaks: Implemented strict tenant scoping with role-based JWT access tokens and temporary encrypted storage.",
    ],
    codeSnippet: `@router.post("/documents/analyze", response_model=AnalysisResult)
async def analyze_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_active_user)
):
    content_bytes = await file.read()
    raw_text = extract_text_from_file(file.filename, content_bytes)
    category = classify_document_category(raw_text)
    
    summary = await gemini_client.generate_summary(
        text=raw_text[:8000],
        category=category,
        temperature=0.2
    )
    doc_id = await db.insert_document_record(current_user.id, file.filename, category, summary)
    return AnalysisResult(doc_id=doc_id, category=category, summary=summary)`,
    image: "/images/doc-intelligence.svg",
    liveDemo: "https://ai-document-intelligence-l4hg.onrender.com/",
    github: "https://github.com/nmit-1NT23CS105/AI-Document-Intelligence-System-",
  },
  3: {
    id: "3",
    title: "Dual-Stream Dangerous Driving Detection System",
    year: "2025–2026",
    category: "Computer Vision & Edge AI",
    stack: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "FastAPI", "Sensor Fusion"],
    description:
      "Dual-camera computer vision system that runs concurrent inference on driver in-cabin behavior (drowsiness, eye-gaze closure, smartphone distraction) and external road conditions (vehicle proximity, tailgating, sudden lane drift). Synthesizes signals using an exponential moving average scoring engine.",
    architecture:
      "Dual RTSP Video Streams → Threaded Frame Capture → Stream A: MediaPipe Facial Mesh (Eye Aspect Ratio + Head Pose) → Stream B: YOLOv8 Object Detection (Vehicles, Pedestrians) → Multi-Signal Risk Fusion Engine → Temporal Smoothing Buffer → Multi-Tier Audio-Visual Alerts (Green/Yellow/Orange/Red).",
    challengesSolved: [
      "Concurrency Bottlenecks: Decoupled camera ingestion from neural network inference using producer-consumer ring buffers.",
      "False Alert Suppression: Implemented 15-frame temporal sliding window voting to eliminate transient blinks or shadows from triggering alarms.",
      "Edge Optimization: Quantized YOLOv8 weights to INT8 to sustain 30+ FPS throughput without GPU thermal throttling.",
      "Real-time Sensor Fusion: Created unified telemetry bus computing Euclidean distance to forward vehicles combined with driver glance angle.",
    ],
    codeSnippet: `def compute_driver_safety_score(ear: float, head_pitch: float, phone_detected: bool, forward_ttc: float) -> RiskProfile:
    # Evaluate in-cabin distraction factors
    is_drowsy = ear < EAR_THRESHOLD_DROWSY
    is_distracted = abs(head_pitch) > PITCH_THRESHOLD or phone_detected
    
    # Calculate composite safety level
    if is_drowsy and forward_ttc < 1.5:
        return RiskProfile(level=RiskTier.CRITICAL, sound_alarm=True, reason="Drowsy + Collision Imminent")
    elif phone_detected or forward_ttc < 2.0:
        return RiskProfile(level=RiskTier.HIGH, sound_alarm=True, reason="Driver Distraction Detected")
    elif is_distracted:
        return RiskProfile(level=RiskTier.MODERATE, sound_alarm=False, reason="Attention Drift Warning")
    return RiskProfile(level=RiskTier.LOW, sound_alarm=False, reason="Nominal Driving State")`,
    image: "/images/driving-detection.svg",
    github: "https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection",
  },
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Window */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#141414] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto text-white flex flex-col max-h-[88vh]"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#1a1a1a] shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#22c55e] bg-white/5 px-2.5 py-1 rounded">
                  {project.year} • {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div
              data-lenis-prevent
              className="p-6 sm:p-8 md:p-10 overflow-y-auto overscroll-contain space-y-8 flex-1"
            >
              {/* Title & One-line Summary */}
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans-clean">
                  {project.description}
                </p>
              </div>

              {/* Banner Image Preview */}
              <div className="relative w-full h-[220px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Architecture Overview */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#38bdf8]">
                  <Layers size={15} />
                  <span>System Architecture &amp; Data Pipeline</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed font-sans-clean">
                  {project.architecture}
                </p>
              </div>

              {/* Engineering Highlights / Challenges Overcome */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
                  <Cpu size={15} />
                  <span>Key Engineering Decisions &amp; Challenges Solved</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.challengesSolved.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-white/75 font-sans-clean leading-relaxed flex items-start gap-2.5"
                    >
                      <ShieldCheck size={16} className="text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-purple-400">
                  <Code2 size={15} />
                  <span>Production API Implementation Sample</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#080808] border border-white/10 text-xs font-mono text-green-400 overflow-x-auto leading-relaxed">
                  {project.codeSnippet}
                </pre>
              </div>

              {/* Stack badges & Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all hover:scale-105"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

