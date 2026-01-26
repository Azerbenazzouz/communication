import { FileText, BookOpen, Edit, CheckCircle } from 'lucide-react';
import type { SlideData } from './slidesData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  BookOpen,
  Edit,
  CheckCircle,
};

const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
  blue: { bg: 'bg-blue-600', border: 'border-blue-500', text: 'text-blue-900', light: 'bg-blue-50' },
  green: { bg: 'bg-green-600', border: 'border-green-500', text: 'text-green-900', light: 'bg-green-50' },
  purple: { bg: 'bg-purple-600', border: 'border-purple-500', text: 'text-purple-900', light: 'bg-purple-50' },
  orange: { bg: 'bg-orange-600', border: 'border-orange-500', text: 'text-orange-900', light: 'bg-orange-50' },
  red: { bg: 'bg-red-600', border: 'border-red-500', text: 'text-red-900', light: 'bg-red-50' },
  yellow: { bg: 'bg-yellow-600', border: 'border-yellow-500', text: 'text-yellow-900', light: 'bg-yellow-50' },
};

interface SlideRendererProps {
  slide: SlideData;
}

const TitleSlide = ({ slide }: SlideRendererProps) => (
  <div className="text-center space-y-6">
    <div className="text-6xl mb-4">📚</div>
    <h1 className="text-5xl font-bold text-blue-900 mb-4">{slide.title}</h1>
    {slide.subtitle && <p className="text-2xl text-gray-700">{slide.subtitle}</p>}
    {slide.content.author && <p className="text-xl text-gray-600 mt-8">{slide.content.author}</p>}
    {slide.content.institution && <p className="text-lg text-gray-500">{slide.content.institution} - {slide.content.academicYear}</p>}
  </div>
);

const OutlineSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-4">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    <div className="grid grid-cols-2 gap-4">
      {slide.content.items?.map((item, idx) => (
        <div key={idx} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
          <span className="text-blue-600 font-bold">•</span>
          <span className="text-gray-800">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const DefinitionSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">{slide.title}</h2>
    {slide.content.mainText && (
      <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
        <p className="text-xl text-gray-800" dangerouslySetInnerHTML={{ 
          __html: slide.content.mainText.replace(/exchange of information, ideas, and findings/g, '<strong>exchange of information, ideas, and findings</strong>') 
        }} />
      </div>
    )}
    {slide.content.cards && (
      <div className="grid grid-cols-3 gap-6 mt-8">
        {slide.content.cards.map((card, idx) => {
          const IconComponent = iconMap[card.icon];
          const colors = colorClasses[card.color];
          return (
            <div key={idx} className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${colors.border}`}>
              {IconComponent && <IconComponent className={`w-12 h-12 ${colors.bg.replace('bg-', 'text-')} mb-3`} />}
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

const ImportanceSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    <div className="space-y-4">
      {slide.content.highlights?.map((highlight, idx) => (
        <div key={idx} className={`bg-linear-to-r from-${highlight.color}-50 to-${highlight.color}-100 p-6 rounded-lg`}>
          <p className="text-lg text-gray-800" dangerouslySetInnerHTML={{ 
            __html: highlight.text.replace(/(Advances in science|understood, replicated, and built upon)/g, '<strong>$1</strong>') 
          }} />
        </div>
      ))}
    </div>
    {slide.content.examples && (
      <div className="space-y-4 mt-8">
        {slide.content.examples.map((example, idx) => {
          const colors = colorClasses[example.color];
          return (
            <div key={idx} className={`${colors.light} p-6 rounded-lg border-l-4 ${colors.border}`}>
              <h3 className={`font-bold text-xl mb-3 ${colors.text}`}>{example.title}</h3>
              <p className="text-gray-700" dangerouslySetInnerHTML={{ 
                __html: example.description.replace(/(Nature in 1953|"Attention is All You Need")/g, '<strong>$1</strong>') 
              }} />
            </div>
          );
        })}
      </div>
    )}
  </div>
);

const FeaturesSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    {slide.content.cards && (
      <div className="grid grid-cols-2 gap-6">
        {slide.content.cards.map((card, idx) => {
          const colors = colorClasses[card.color];
          return (
            <div key={idx} className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${colors.border}`}>
              <h3 className={`font-bold text-xl mb-2 ${colors.text}`}>{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          );
        })}
      </div>
    )}
    {slide.content.examples && (
      <div className={`${colorClasses[slide.content.examples[0].color].light} p-6 rounded-lg mt-6`}>
        <h3 className={`font-bold text-xl mb-3 ${colorClasses[slide.content.examples[0].color].text}`}>
          {slide.content.examples[0].title}
        </h3>
        <p className="text-gray-700">{slide.content.examples[0].description}</p>
      </div>
    )}
  </div>
);

const TypesSlide = ({ slide }: SlideRendererProps) => {
  const typeColors = ['blue', 'green', 'purple', 'orange'];
  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
      <div className="space-y-3">
        {slide.content.items?.map((item, idx) => {
          const color = typeColors[idx % typeColors.length];
          const colors = colorClasses[color];
          return (
            <div key={idx} className={`${colors.light} p-4 rounded-lg border-l-4 ${colors.border.replace('border-', 'border-')}-600`}>
              <h3 className={`font-bold text-lg ${colors.text}`}>{item.text}</h3>
              <p className="text-sm text-gray-700">{item.subtext}</p>
              {item.example && <p className="text-xs text-gray-500 italic mt-1">{item.example}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StagesSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    <div className="grid grid-cols-2 gap-6">
      {slide.content.stages?.slice(0, 4).map((stage) => {
        const colors = colorClasses[stage.color];
        return (
          <div key={stage.number} className={`${colors.light.replace('50', '100')} p-6 rounded-lg`}>
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold mr-3`}>
                {stage.number}
              </div>
              <h3 className="font-bold text-xl">{stage.title}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {stage.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
    {slide.content.stages && slide.content.stages.length > 4 && (
      <div className={`${colorClasses[slide.content.stages[4].color].light.replace('50', '100')} p-6 rounded-lg`}>
        <div className="flex items-center mb-3">
          <div className={`w-8 h-8 ${colorClasses[slide.content.stages[4].color].bg} text-white rounded-full flex items-center justify-center font-bold mr-3`}>
            {slide.content.stages[4].number}
          </div>
          <h3 className="font-bold text-xl">{slide.content.stages[4].title}</h3>
        </div>
        <p className="text-sm">{slide.content.stages[4].items[0]}</p>
      </div>
    )}
  </div>
);

const AdviceSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    {slide.content.quoteText && (
      <div className="bg-linear-to-r from-yellow-100 to-yellow-200 p-8 rounded-lg border-2 border-yellow-500">
        <p className="text-2xl font-bold text-center text-yellow-900 mb-4">{slide.content.quoteText}</p>
        <div className="space-y-3 text-lg">
          {slide.content.tips?.map((tip, idx) => (
            <p key={idx} className="text-gray-800">✓ {tip.text}</p>
          ))}
        </div>
      </div>
    )}
    {slide.content.cards && (
      <div className="grid grid-cols-2 gap-4">
        {slide.content.cards.map((card, idx) => {
          const colors = colorClasses[card.color];
          return (
            <div key={idx} className={`${colors.light} p-4 rounded-lg`}>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

const TimeManagementSlide = ({ slide }: SlideRendererProps) => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">{slide.title}</h2>
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
      <h3 className="font-bold text-xl mb-4">{slide.content.mainText}</h3>
      <div className="grid grid-cols-3 gap-4">
        {slide.content.timeBlocks?.map((block, idx) => {
          const colors = colorClasses[block.color];
          return (
            <div key={idx} className="bg-white p-4 rounded text-center">
              <div className={`text-3xl font-bold ${colors.bg.replace('bg-', 'text-')} mb-2`}>{block.fraction}</div>
              <p className="font-semibold">{block.label}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="font-bold text-xl mb-3">Focus on Important Things</h3>
      <ul className="space-y-2">
        {slide.content.checkItems?.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ReminderSlide = ({ slide }: SlideRendererProps) => (
  <div className="flex items-center justify-center h-full">
    <div className="bg-red-50 p-12 rounded-lg border-4 border-red-500 max-w-4xl">
      <p className="text-2xl text-center text-gray-800 leading-relaxed">
        <strong className="text-red-700">Poor experimentation</strong> cannot be masked by brilliant writing;
        <br /><br />
        however,
        <br /><br />
        <strong className="text-red-700">poor writing</strong> can mask <strong className="text-green-700">brilliant experimentation</strong>
      </p>
      {slide.content.footerText && (
        <div className="mt-8 pt-6 border-t-2 border-red-300">
          <p className="text-center text-lg font-semibold text-gray-700">{slide.content.footerText}</p>
        </div>
      )}
    </div>
  </div>
);

const ThankYouSlide = ({ slide }: SlideRendererProps) => (
  <div className="text-center space-y-8">
    <div className="text-7xl">🎓</div>
    <h1 className="text-5xl font-bold text-blue-900">{slide.title}</h1>
    <div className="text-xl text-gray-700 space-y-2">
      {slide.content.author && <p>{slide.content.author}</p>}
      {slide.content.email && <p className="text-lg text-gray-600">{slide.content.email}</p>}
    </div>
    <div className="mt-12 text-gray-600">
      {slide.content.institution && <p>{slide.content.institution}</p>}
      {slide.content.department && <p>{slide.content.department}</p>}
      {slide.content.academicYear && <p>{slide.content.academicYear}</p>}
    </div>
  </div>
);

export const SlideRenderer = ({ slide }: SlideRendererProps) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'outline':
      return <OutlineSlide slide={slide} />;
    case 'definition':
      return <DefinitionSlide slide={slide} />;
    case 'importance':
      return <ImportanceSlide slide={slide} />;
    case 'features':
      return <FeaturesSlide slide={slide} />;
    case 'types':
      return <TypesSlide slide={slide} />;
    case 'stages':
      return <StagesSlide slide={slide} />;
    case 'advice':
      return <AdviceSlide slide={slide} />;
    case 'timeManagement':
      return <TimeManagementSlide slide={slide} />;
    case 'reminder':
      return <ReminderSlide slide={slide} />;
    case 'thankyou':
      return <ThankYouSlide slide={slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};

export default SlideRenderer;
