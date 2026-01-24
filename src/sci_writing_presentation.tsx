import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Edit, CheckCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Scientific Writing and Communication",
      subtitle: "Master 2026 - Part 1: Introduction",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Scientific Writing and Communication</h1>
          <p className="text-2xl text-gray-700">Master 2026</p>
          <p className="text-xl text-gray-600 mt-8">Mr. Azer BEN AZZOUZ</p>
          <p className="text-lg text-gray-500">ISET Radés - A.U: 2025/2026</p>
        </div>
      )
    },
    {
      title: "Course Outline",
      content: (
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Course Outline</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Scientific communication and writing – Definitions",
              "Writing: Main Stages",
              "Some important language points",
              "Organization of a scientific paper (IMRAD format)",
              "Essential Parts of a Scientific paper",
              "How to prepare the different sections",
              "Where and how to submit the manuscript",
              "The review process (by reviewers)",
              "LaTeX"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Scientific Communication - Definition",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What is Scientific Communication?</h2>
          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-xl text-gray-800">
              Scientific communication involves the <strong>exchange of information, ideas, and findings</strong> within the scientific community and beyond.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <FileText className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">Written Papers</h3>
              <p className="text-sm text-gray-600">Research articles, review articles, etc.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <BookOpen className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">Presentations</h3>
              <p className="text-sm text-gray-600">Conferences, seminars, webinars</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <Edit className="w-12 h-12 text-orange-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">Other Mediums</h3>
              <p className="text-sm text-gray-600">Posters, blogs, podcasts, social media</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why is Scientific Communication Important?",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Why is it Important?</h2>
          <div className="space-y-4">
            <div className="bg-linear-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <p className="text-lg text-gray-800">
                <strong>Advances in science</strong> depend on the effective dissemination of knowledge.
              </p>
            </div>
            <div className="bg-linear-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <p className="text-lg text-gray-800">
                Clear communication ensures that research is <strong>understood, replicated, and built upon</strong> by others.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mt-8">
            <h3 className="font-bold text-xl mb-3 text-yellow-900">Example: DNA Structure</h3>
            <p className="text-gray-700">
              The discovery of the structure of DNA by Watson and Crick was communicated through a concise paper in <strong>Nature in 1953</strong>. This paper revolutionized biology and medicine.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-xl mb-3 text-purple-900">Example: Transformer Architecture</h3>
            <p className="text-gray-700">
              "Attention is All You Need" (Vaswani et al., 2017) revolutionized NLP. Clear communication allowed researchers worldwide to build GPT and BERT.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Scientific Writing - Features",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Key Features of Scientific Writing</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-xl mb-2 text-blue-900">✓ Clarity</h3>
              <p className="text-gray-700">The writing must be clear and concise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="font-bold text-xl mb-2 text-green-900">✓ Precision</h3>
              <p className="text-gray-700">Avoid ambiguity; use precise language</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-xl mb-2 text-purple-900">✓ Objectivity</h3>
              <p className="text-gray-700">Present facts without personal bias</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-xl mb-2 text-orange-900">✓ Logical Flow</h3>
              <p className="text-gray-700">Ideas should follow a logical sequence</p>
            </div>
          </div>
          <div className="bg-red-50 p-6 rounded-lg mt-6">
            <h3 className="font-bold text-xl mb-3 text-red-900">🔁 Repeatability</h3>
            <p className="text-gray-700">
              Research methods and materials must be described so clearly that other researchers can re-run the experiments.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Types of Scientific Writing",
      content: (
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Types of Scientific Writing</h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-lg text-blue-900">Research Paper</h3>
              <p className="text-sm text-gray-700">Reports original research findings with experiments, data, and analysis</p>
              <p className="text-xs text-gray-500 italic mt-1">Example: New ML algorithm for image classification</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg text-green-900">Review Paper</h3>
              <p className="text-sm text-gray-700">Summarizes existing research, provides state of the art overview</p>
              <p className="text-xs text-gray-500 italic mt-1">Example: Review of deep learning techniques for NLP</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-bold text-lg text-purple-900">Conference Paper</h3>
              <p className="text-sm text-gray-700">Presents preliminary findings, shorter than journal papers</p>
              <p className="text-xs text-gray-500 italic mt-1">Example: Early results presented at NeurIPS or CVPR</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
              <h3 className="font-bold text-lg text-orange-900">Thesis/Dissertation</h3>
              <p className="text-sm text-gray-700">Detailed document for academic degrees with extensive literature review</p>
              <p className="text-xs text-gray-500 italic mt-1">Example: PhD thesis on quantum computing algorithms</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Writing - Main Stages",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Main Stages of Writing</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="font-bold text-xl">Planning</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Define research question/hypothesis</li>
                <li>• Outline structure (IMRAD format)</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="font-bold text-xl">Drafting</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Write first draft</li>
                <li>• Focus on getting ideas down</li>
              </ul>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="font-bold text-xl">Revising</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Refine for clarity & coherence</li>
                <li>• Follow journal guidelines</li>
              </ul>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                <h3 className="font-bold text-xl">Editing</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Check grammar & spelling</li>
                <li>• Format references correctly</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
              <h3 className="font-bold text-xl">Finalizing</h3>
            </div>
            <p className="text-sm">Submit to journal/conference and respond to reviewer comments</p>
          </div>
        </div>
      )
    },
    {
      title: "Key Advice for Scientific Writing",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Key Advice</h2>
          <div className="bg-linear-to-r from-yellow-100 to-yellow-200 p-8 rounded-lg border-2 border-yellow-500">
            <p className="text-2xl font-bold text-center text-yellow-900 mb-4">
              Clear writing starts with clear thinking
            </p>
            <div className="space-y-3 text-lg">
              <p className="text-gray-800">✓ Before writing: "What am I trying to say?"</p>
              <p className="text-gray-800">✓ After writing: "Have I said it?"</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Clarity is Key</h3>
              <p className="text-sm">Avoid complex sentences, use simple language</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Precision</h3>
              <p className="text-sm">Be specific, avoid vague terms</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Conciseness</h3>
              <p className="text-sm">Use fewest words, avoid redundancy</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Paragraphs</h3>
              <p className="text-sm">Each paragraph = one idea/concept</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Writing Process & Time Management",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Writing Process</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-xl mb-4">Time Allocation Rule: 1/3 - 1/3 - 1/3</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1/3</div>
                <p className="font-semibold">Planning</p>
              </div>
              <div className="bg-white p-4 rounded text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1/3</div>
                <p className="font-semibold">Writing</p>
              </div>
              <div className="bg-white p-4 rounded text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1/3</div>
                <p className="font-semibold">Revising & Finishing</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Focus on Important Things</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Identify key findings and focus on them</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Avoid including irrelevant details</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Take time to revise and polish</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Important Reminder",
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="bg-red-50 p-12 rounded-lg border-4 border-red-500 max-w-4xl">
            <p className="text-2xl text-center text-gray-800 leading-relaxed">
              <strong className="text-red-700">Poor experimentation</strong> cannot be masked by brilliant writing;
              <br/><br/>
              however,
              <br/><br/>
              <strong className="text-red-700">poor writing</strong> can mask <strong className="text-green-700">brilliant experimentation</strong>
            </p>
            <div className="mt-8 pt-6 border-t-2 border-red-300">
              <p className="text-center text-lg font-semibold text-gray-700">
                → Always keep the paragraph as the essential unit of thought
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Thank You",
      content: (
        <div className="text-center space-y-8">
          <div className="text-7xl">🎓</div>
          <h1 className="text-5xl font-bold text-blue-900">Thank You!</h1>
          <div className="text-xl text-gray-700 space-y-2">
            <p>Mr. Azer BEN AZZOUZ</p>
            <p className="text-lg text-gray-600">benazzouzazer@gmail.com</p>
          </div>
          <div className="mt-12 text-gray-600">
            <p>ISET Radés</p>
            <p>IT Department</p>
            <p>A.U: 2025/2026</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="h-150 p-12 overflow-y-auto">
            {slides[currentSlide].content}
          </div>
          
          <div className="bg-gray-100 p-6 flex items-center justify-between border-t-2 border-gray-300">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">
                Slide {currentSlide + 1} of {slides.length}
              </p>
              <div className="flex space-x-1">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Use the navigation buttons or keyboard arrows to navigate through slides</p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;