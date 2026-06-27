import * as yup from "yup";

export const createUserSchema = yup.object({
  operator: yup
    .string()
    .required("Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),

  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email deve ser válido"),

  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "A senha deve conter ao menos 1 caractere especial, 1 letra maiúscula, 1 letra minúscula e 1 número"
    )
    .min(4, "Senha deve ter pelo menos 4 caracteres")
    .max(20, "Senha deve ter no máximo 20 caracteres"),
});

export type CreateUserFormData = yup.InferType<typeof createUserSchema>;
