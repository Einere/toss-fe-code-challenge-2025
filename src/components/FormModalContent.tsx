import { useForm } from "react-hook-form";
import type { BaseModalProps, FormInput } from "../types";
import { Modal } from "../Modal";

interface FormModalContentProps extends BaseModalProps {
  onClose: (data: FormInput | null) => void;
}

export function FormModalContent({
  titleId,
  descriptionId,
  onClose,
}: FormModalContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    onClose(data); // 제출 완료 시 입력값 반환
  };

  return (
    <div className="h-full overflow-y-scroll p-4">
      {/* 폼 타이틀 영역 */}
      <Modal.Title id={titleId}>폼 작성 모달</Modal.Title>

      {/* 폼 바디 영역 */}
      <p id={descriptionId} className="mb-4">
        아래 내용을 작성해주세요.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="input-email"
          aria-labelledby="input-email"
          className="mr-4"
        >
          이메일
        </label>
        <input
          id="input-email"
          type="email"
          autoComplete="email"
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: /^\S+@\S+\.\S+$/i,
              message: "유효한 이메일 형식이 아닙니다.",
            },
          })}
          aria-description="이메일을 입력해주세요."
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          // alert 역할을 통해 즉각적인 경고
          <p role="alert" className="text-error">
            {errors.email.message}
          </p>
        )}

        <div className="mt-4 flex gap-4">
          <Modal.CancelButton
            description="신청 폼 모달을 닫습니다."
            onClick={() => onClose(null)}
          >
            취소
          </Modal.CancelButton>
          <Modal.ConfirmButton type="submit" description="이 폼을 제출합니다.">
            제출하기
          </Modal.ConfirmButton>
        </div>
      </form>
    </div>
  );
}
