export interface FormInput {
  email: string;
  // ... 기타 필드
}

export interface BaseModalProps {
  titleId: string;
  descriptionId?: string;
  onClose: (data: any) => void;
}
