export interface Questions {
  id: number,
  description: string,
  level: Level
}

export enum Level {
  EASY,
  NORMAL,
  HARD
}
