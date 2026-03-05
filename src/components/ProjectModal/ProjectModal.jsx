import { useState, useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-50 transition-all duration-400
          ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-xl pointer-events-auto rounded-3xl overflow-hidden
            border border-white/[0.1] transition-all duration-400
            ease-[cubic-bezier(0.23,1,0.32,1)]
            ${isClosing
              ? 'opacity-0 translate-y-4 scale-[0.97]'
              : 'opacity-100 translate-y-0 scale-100'
            }`}
          style={{
            background: 'rgba(8,8,8,0.88)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        >
          {/* Top gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: project.gradient }}
          />

          {/* Soft glow from top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-32 opacity-[0.08] pointer-events-none"
            style={{
              background: project.gradient,
              filter: 'blur(40px)',
            }}
          />

          {/* Inner content */}
          <div className="relative p-8 md:p-10">

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <span className="text-xs font-mono text-zinc-600 block mb-2">
                  {String(project.id).padStart(2, '0')}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {project.title}
                </h2>
              </div>

              {/* Close */}
              <button
                onClick={handleClose}
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08]
                  flex items-center justify-center text-zinc-500
                  hover:bg-white/[0.12] hover:text-white hover:border-white/20
                  transition-all duration-300 ease-out"
                aria-label="Close"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.06] mb-6" />

            {/* Subtitle */}
            <p className="text-sm font-semibold text-zinc-200 mb-3">
              {project.subtitle}
            </p>

            {/* Full description */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  bg-white text-black
                  hover:bg-zinc-100 hover:-translate-y-0.5
                  hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]
                  transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>

              <button
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-400
                  border border-white/[0.08]
                  hover:border-white/20 hover:text-white hover:bg-white/[0.05]
                  hover:-translate-y-0.5
                  transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
