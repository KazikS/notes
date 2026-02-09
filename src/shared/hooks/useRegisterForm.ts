import { useCallback, useState } from "react";
import { signUpWithEmail } from "../api/auth";
import { RegisterFormData, RegisterFormErrors } from "../types/auth";


type UseRegisterProps = {
  setTabValue: (value: string) => void;
  setIsRegistered: (value: boolean) => void;
};

export const useRegisterForm = ({
  setTabValue,
  setIsRegistered,
}: UseRegisterProps) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    password: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const validateForm = () => {
    const newError: RegisterFormErrors = {};

    if (!formData.name.trim()) {
      newError.name = "имя обязательно!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newError.email = "почта обязательна!";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "неверный формат почты!";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password.trim()) {
      newError.password = "пароль обязателен!";
    } else if (!passwordRegex.test(formData.password)) {
      newError.password = "неверный формат пароля!";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});
    try {
      const response = await signUpWithEmail(
        formData.email,
        formData.password,
        formData.name,
      );

      if (response.error) {
        setErrors({ api: response.error.message });
        return;
      }

      setTabValue("login");
      setIsRegistered(true);
    } catch (error) {
      setErrors({
        api:
          error instanceof Error
            ? error.message
            : "произошла ошибка при регистрации",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = ({
    field,
    value,
  }: {
    field: keyof RegisterFormData;
    value: string;
  }) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (errors.api) {
      setErrors((prev) => ({ ...prev, api: undefined }));
    }
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return {
    formData,
    errors,
    isLoading,
    showPassword,
    updateField,
    handleSubmit,
    togglePasswordVisibility,
  };
};
