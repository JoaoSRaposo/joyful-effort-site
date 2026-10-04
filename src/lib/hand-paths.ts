/**
 * Stable, gently irregular stroke paths for the hand-drawn frames and rules.
 * Drawn in a 0–100 viewBox and stretched with preserveAspectRatio="none";
 * vector-effect="non-scaling-stroke" keeps the rendered stroke at 1.5–2px.
 * Paths are fixed per variant so the line irregularity never jitters.
 */

export const framePaths = [
    'M0.6 1.4 C 30 0.8, 70 1.9, 100.8 0.9 M99.6 -0.6 C 99.1 30, 100.2 70, 99.3 99.2 M100.2 99.4 C 70 98.6, 30 99.8, 0.4 98.8 M0.9 99.6 C 1.4 70, 0.3 30, 0.8 0.6',
    'M-0.4 0.9 C 25 1.6, 60 0.4, 99.6 1.2 M99.1 0.2 C 100 35, 98.9 66, 99.6 100.6 M99.9 98.9 C 65 99.6, 35 98.4, 0.3 99.3 M0.8 99.9 C 0.2 64, 1.3 36, 0.5 -0.3',
    'M0.2 0.5 C 40 1.4, 62 0.2, 101 1 M99.4 -0.8 C 100.1 40, 99 72, 99.8 99.6 M100.4 99.1 C 60 98.7, 28 99.9, -0.2 99.2 M0.6 100.4 C 1.1 62, 0.1 28, 0.9 0.2',
] as const;

export const offsetPaths = [
    'M1 0.8 L99.4 0 L100 99.2 L0 100 Z',
    'M0 0.4 L100 1 L99.2 100 L0.8 99.4 Z',
    'M0.6 0 L99.8 0.6 L100 100 L0 99.2 Z',
] as const;

export const horizontalRulePaths = [
    'M0 1 C 20 0.2, 45 1.8, 70 0.8 S 95 1.4, 100 0.6',
    'M0 0.6 C 30 1.6, 50 0.2, 75 1.2 S 92 0.4, 100 1.2',
] as const;

export const verticalRulePaths = [
    'M1 0 C 0.2 20, 1.8 45, 0.8 70 S 1.4 95, 0.6 100',
    'M0.6 0 C 1.6 30, 0.2 50, 1.2 75 S 0.4 92, 1.2 100',
] as const;

export function pick<T>(paths: readonly T[], variant: number): T {
    return paths[Math.abs(variant) % paths.length] as T;
}
