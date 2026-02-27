export type Tag = {
  id: string,
  type: string,
  description: string,
  confidence: TagIndicator,
};

export enum TagIndicator {
  TRUSTED = "TRUSTED",
  VALIDATION_NEEDED = "VALIDATION_NEEDED",
  IN_PROGRESS = "IN_PROGRESS",
}
