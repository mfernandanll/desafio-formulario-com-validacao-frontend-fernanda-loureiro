import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\S*)$/;

const schema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("Digite um e-mail válido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  jobPosition: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(
      [
        "Desenvolvedor Frontend",
        "Desenvolvedor Backend",
        "Desenvolvedor Full Stack",
        "Desenvolvedor Mobile",
        "Desenvolvedor de Software",
        "Engenheiro de Software",
        "Arquiteto de Software",
        "UI/UX Designer",
        "Analista de Sistemas",
        "Analista Programador",
        "DevOps Engineer",
        "Engenheiro de Dados",
        "QA Engineer",
        "Scrum Master",
        "Product Owner",
      ],
      {
        required_error: "Cargo pretendido é obrigatório",
      }
    )
  ),
  linkedin: z
    .preprocess((val) => (val === "" ? undefined : val), z.string().optional().refine((value) => !value || urlRegex.test(value), {
      message: "Digite uma URL válida",
    })),
  github: z
    .preprocess((val) => (val === "" ? undefined : val), z.string().optional().refine((value) => !value || urlRegex.test(value), {
      message: "Digite uma URL válida",
    })),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Job Application Form">
      <fieldset
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        aria-labelledby="form-title"
      >
        <legend id="form-title" className="sr-only">
          Formulário de Aplicação para Trabalho
        </legend>

        <div className="md:col-span-2 lg:col-span-2">
          <label
            htmlFor="fullName"
            className="block text-lg font-medium text-gray-700"
          >
            Nome completo 🗣️
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Ex: João Gomes Silva"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="name"
            aria-required="true"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            E-mail 📧
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ex: joao@gmail.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="email"
            aria-required="true"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-700"
          >
            Telefone 📞
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Ex: (11) 98567-4835"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="tel"
            aria-required="true"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="jobPosition"
            className="block text-lg font-medium text-gray-700"
          >
            Cargo pretendido
          </label>
          <select
            id="jobPosition"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            aria-required="true"
            aria-label="Selecione o cargo pretendido"
            defaultValue=""
            {...register("jobPosition")}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="Desenvolvedor Frontend">
              Desenvolvedor Frontend
            </option>
            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
            <option value="Desenvolvedor Full Stack">
              Desenvolvedor Full Stack
            </option>
            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
            <option value="Desenvolvedor de Software">
              Desenvolvedor de Software
            </option>
            <option value="Engenheiro de Software">
              Engenheiro de Software
            </option>
            <option value="Arquiteto de Software">Arquiteto de Software</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Analista de Sistemas">Analista de Sistemas</option>
            <option value="Analista Programador">Analista Programador</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
          </select>
          {errors.jobPosition && (
            <p className="mt-1 text-sm text-red-600">
              {errors.jobPosition.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="linkedin"
            className="block text-lg font-medium text-gray-700"
          >
            LinkedIn 🌐
          </label>
          <input
            id="linkedin"
            type="text"
            placeholder="Ex: www.linkedin.com/in/joao"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="url"
            aria-describedby="linkedin-optional"
            {...register("linkedin")}
          />
          <span
            id="linkedin-optional"
            className="absolute bottom-2 right-2 text-xs italic"
          >
            Opcional
          </span>
          {errors.linkedin && (
            <p className="mt-1 text-sm text-red-600">
              {errors.linkedin.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="github"
            className="block text-lg font-medium text-gray-700"
          >
            GitHub 🐙
          </label>
          <input
            id="github"
            type="text"
            placeholder="Ex: www.github.com/joao"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="url"
            aria-describedby="github-optional"
            {...register("github")}
          />
          <span
            id="github-optional"
            className="absolute bottom-2 right-2 text-xs italic"
          >
            Opcional
          </span>
          {errors.linkedin && (
            <p className="mt-1 text-sm text-red-600">
              {errors.linkedin.message}
            </p>
          )}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-green-800 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 mt-8 transition"
        title="Enviar o formulário de aplicação"
      >
        Enviar
      </button>
    </form>
  );
}
