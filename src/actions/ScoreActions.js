export const CLEAR_SCORE = 'CLEAR_SCORE';
export const INC_SCORE = 'INC_SCORE';
export function clearScore() {
  return { type: CLEAR_SCORE }
}

export function incScore() {
  return { type: INC_SCORE }
}