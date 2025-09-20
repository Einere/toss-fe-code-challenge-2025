import React from "react";
import { useForm } from "react-hook-form";
import type { FormInput } from "./types";

interface FormModalContentProps {
  titleId: string;
  onClose: (data: FormInput | null) => void;
}

export function FormModalContent({ titleId, onClose }: FormModalContentProps) {
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
      {/* tabIndex 를 이용해 모달이 열린 후, 제목에 포커스가 가도록 함 */}
      <h1 id={titleId} role="heading" className="mb-4" tabIndex={-1}>
        폼 작성 모달
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-email" aria-labelledby="input-email">
          이메일
        </label>
        <input
          id="input-email"
          type="email"
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: /^\S+@\S+\.\S+$/i,
              message: "유효한 이메일 형식이 아닙니다.",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          // alert 역할을 통해 즉각적인 경고
          <p role="alert" className="text-error">
            {errors.email.message}
          </p>
        )}
        <div className="h-[1200px]"></div>
        <button
          type="button"
          onClick={() => onClose(null)}
          className="inline-block"
        >
          취소
        </button>
        <button type="submit" className="button-primary inline-block">
          제출하기
        </button>
      </form>
    </div>
  );
}
