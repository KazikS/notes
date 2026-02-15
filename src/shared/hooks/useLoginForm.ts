import { useCallback, useState } from "react";
import { LoginFormData, LoginFormErrors } from "../types/auth";
import { signInWithEmail } from "../api/auth";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const router = useRouter();

  const updateField = ({
    field,
    value,
  }: {
    field: keyof LoginFormData;
    value: string;
  }) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors.api) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signInWithEmail(formData.email, formData.password);
      if (response.error) {
        setErrors({ api: response.error.message });
        return;
      }
      router.push('/notes');
    } catch (error) {
      setErrors({
        api:
          error instanceof Error
            ? error.message
            : "произошла ошибка при авторизации",
      });
      return;
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    showPassword,
    errors,
    handleSubmit,
    togglePasswordVisibility,
    updateField
  }
};
