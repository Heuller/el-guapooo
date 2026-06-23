import React from 'react';

export interface ExtractedTimer {
  seconds: number;
  timeLabel: string;
  index: number;
}

export function reactNodeToString(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(reactNodeToString).join('');
  }
  if (React.isValidElement(node)) {
    const props = node.props as any;
    return reactNodeToString(props.children);
  }
  return '';
}

export function extractTimers(textOrNode: React.ReactNode): ExtractedTimer[] {
  const text = reactNodeToString(textOrNode);
  const MAX_SECONDS = 3 * 60 * 60;
  const MIN_SECONDS = 10;

  const timePatterns = [
    { regex: /(\d+)\s*(?:a\s*)?(\d+)?\s*(?:h|horas?|hr)/gi, type: "h" },
    { regex: /(\d+)\s*(?:a\s*)?(\d+)?\s*(?:min|minutos?)/gi, type: "m" },
    { regex: /(\d+)\s*(?:a\s*)?(\d+)?\s*(?:seg|segundos?)/gi, type: "s" },
  ];

  const matches: ExtractedTimer[] = [];

  for (const patternObj of timePatterns) {
    let match;
    patternObj.regex.lastIndex = 0;
    while ((match = patternObj.regex.exec(text)) !== null) {
      const val1 = parseInt(match[1], 10);
      const val2 = match[2] ? parseInt(match[2], 10) : val1;
      const avgVal = Math.round((val1 + val2) / 2);

      let seconds = 0;
      let timeLabel = "";
      if (patternObj.type === "h") {
        seconds = avgVal * 3600;
        timeLabel = `${avgVal}h`;
      } else if (patternObj.type === "m") {
        seconds = avgVal * 60;
        timeLabel = `${avgVal}min`;
      } else if (patternObj.type === "s") {
        seconds = avgVal;
        timeLabel = `${avgVal}s`;
      }

      if (seconds >= MIN_SECONDS && seconds <= MAX_SECONDS) {
        matches.push({
          seconds,
          timeLabel,
          index: match.index
        });
      }
    }
  }

  return matches.sort((a, b) => a.index - b.index);
}
