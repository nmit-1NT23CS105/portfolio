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
  4: {
    id: "4",
    title: "AI Resume Analyzer (ATS Optimization)",
    year: "2026",
    category: "Full Stack & NLP",
    stack: ["Python", "FastAPI", "NLP", "TF-IDF", "Cosine Similarity", "Render"],
    description:
      "Automated ATS resume parser evaluating applicant resumes against targeted job descriptions using TF-IDF vectorization and cosine similarity. Extracts missing technical keywords, calculates ATS compatibility score benchmarks, and outputs actionable improvement recommendations.",
    architecture:
      "Resume & JD Upload → Text Preprocessing & Lemmatization → TF-IDF Vectorizer with n-grams → Cosine Similarity Engine → Missing Keyword Extractor & Section Scorer → FastAPI JSON Response & Visual Match Heatmap.",
    challengesSolved: [
      "Noisy PDF Extraction: Cleaned complex multi-column resume layouts and removed formatting artifacts without losing critical skills.",
      "Semantic Relevance: Applied n-gram tokenization and domain-specific stopword filtering to accurately capture compound tech terms like 'Deep Learning' or 'REST API'.",
      "Actionable Feedback: Generated clear gap analysis highlighting exact keywords present in the JD but absent in the resume.",
    ],
    codeSnippet: `@app.post("/analyze-resume")
async def analyze_resume(resume_file: UploadFile = File(...), job_description: str = Form(...)):
    resume_text = extract_text_from_pdf(await resume_file.read())
    
    # Vectorize resume and job description using TF-IDF
    tfidf = TfidfVectorizer(ngram_range=(1, 2), stop_words='english')
    matrix = tfidf.fit_transform([resume_text, job_description])
    
    score = float(cosine_similarity(matrix[0:1], matrix[1:2])[0][0]) * 100
    missing_skills = extract_missing_keywords(resume_text, job_description)
    
    return {"match_score": round(score, 1), "missing_keywords": missing_skills}`,
    image: "/images/ai-resume.svg",
    liveDemo: "https://ai-resume-analyzer-hwsa.onrender.com",
    github: "https://github.com/nmit-1NT23CS105/Ai_resume_analyzer",
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
          className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            data-lenis-prevent
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#141414] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-white z-10 overscroll-contain"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#181818]/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  Engineering Deep Dive • {project.year}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 space-y-8 no-scrollbar overscroll-contain"
            >
              {/* Title & Metadata */}
              <div>
                <span className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-2">
                  {project.category}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl uppercase font-bold text-white leading-tight mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-white/80 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Architecture Blueprint */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-3 text-sm font-mono text-[#38bdf8] font-bold">
                  <Layers size={16} />
                  <span>Pipeline &amp; Architecture Flow</span>
                </div>
                <p className="text-xs sm:text-sm font-mono leading-relaxed text-white/70 bg-black/40 p-4 rounded-xl border border-white/5">
                  {project.architecture}
                </p>
              </div>

              {/* Technical Challenges & Engineering Solutions */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-mono text-[#22C55E] font-bold">
                  <ShieldCheck size={16} />
                  <span>Engineering Decisions &amp; Bottlenecks Solved</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challengesSolved.map((item, idx) => {
                    const [heading, ...descParts] = item.split(": ");
                    const desc = descParts.join(": ");
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-start"
                      >
                        <span className="text-xs font-mono font-bold text-white mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                          {heading}
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-sans-clean">
                          {desc || item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Production Code Snippet */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-mono text-purple-400 font-bold">
                  <Code2 size={16} />
                  <span>Production Code Snippet</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/80">
                  <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>main.py / pipeline</span>
                    <span>Python 3.11</span>
                  </div>
                  <pre className="p-4 sm:p-5 text-xs font-mono text-white/80 overflow-x-auto leading-relaxed">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#161616]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                Press ESC or click backdrop to close
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
