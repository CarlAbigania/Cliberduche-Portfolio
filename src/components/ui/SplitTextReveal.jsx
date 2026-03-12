import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitTextReveal = ({
  text,
  as: Component = 'span',
  className = '',
  delay = 0,
  stagger = 0.05,
  duration = 1,
  start = 'top 90%',
  triggerRef = null, // Optional custom trigger element
  splitBy = 'chars', // 'chars' or 'words'
}) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const triggerEl = triggerRef?.current || containerRef.current;
    if (!triggerEl || !elementsRef.current || elementsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      // Initial hidden state
      gsap.set(elementsRef.current, {
        y: '100%',
        opacity: 0,
        rotateZ: 5,
      });

      // Reveal animation
      gsap.to(elementsRef.current, {
        scrollTrigger: {
          trigger: triggerEl,
          start: start,
          toggleActions: 'play none none reverse',
        },
        y: '0%',
        opacity: 1,
        rotateZ: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power4.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger, duration, start, triggerRef, text, splitBy]);

  // Split logic
  let elements = [];
  if (typeof text === 'string') {
    if (splitBy === 'chars') {
      elements = text.split('').map((char, index) => ({
        key: `${char}-${index}`,
        content: char === ' ' ? '\u00A0' : char,
      }));
    } else {
      elements = text.split(' ').map((word, index) => ({
        key: `${word}-${index}`,
        content: word,
        isWord: true,
      }));
    }
  }

  // Propagate gradient/text-clip classes to inner spans so gradient text renders
  const classTokens = (className || '').split(/\s+/).filter(Boolean);
  const hasTextTransparent = classTokens.includes('text-transparent');
  const hasBgClipText = classTokens.includes('bg-clip-text');
  const gradientTokens = classTokens.filter(
    (t) => t.startsWith('bg-gradient-to') || t.startsWith('from-') || t.startsWith('via-') || t.startsWith('to-')
  );
  const innerGradientClasses = [
    'inline-block',
    'transform-gpu',
    hasTextTransparent ? 'text-transparent' : '',
    hasBgClipText ? 'bg-clip-text' : '',
    ...gradientTokens,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component ref={containerRef} className={`${className} inline-flex flex-wrap`} data-split-text-reveal>
      {elements.map((el, index) => (
        <span key={el.key} className="overflow-hidden inline-flex">
          <span
            ref={(node) => (elementsRef.current[index] = node)}
            className={innerGradientClasses}
          >
            {el.content}
            {el.isWord && '\u00A0'}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default SplitTextReveal;
