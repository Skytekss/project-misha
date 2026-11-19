export type StepNumber = 1 | 2 | 3 | 4 | 5;

export interface PageProps {
  onNext: () => void;
  onPrev?: () => void;
  onGoToStep?: (step: StepNumber) => void;
}
