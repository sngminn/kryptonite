import z from "zod";

export const searchSchema = z.object({
  keyword: z
    .string()
    .min(2, { message: "두 글자 이상 입력하세요" })
    .max(20, { message: "20자 이내로 입력해주세요" })
    .regex(/^[a-zA-Z0-9가-힣\s]*$/, {
      message: "특수문자는 사용할 수 없습니다",
    }),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
