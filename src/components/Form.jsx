export default function Form() {
  return (
    <form>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            placeholder="Ex: Jõao Gomes Silva"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
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
          />
        </div>

        <div >
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
          />
        </div>

        <div >
          <label
            htmlFor="jobPosition"
            className="block text-lg font-medium text-gray-700"
          >
            Cargo pretendido
          </label>
          <select
            id="jobPosition"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecione uma opção</option>
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
            type="url"
            placeholder="Ex: www.linkedin.com/in/joao"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          <span className="absolute bottom-2 right-2 text-xs italic">Opcional</span>
        </div>

        <div className="relative">
          <label 
            htmlFor="github" 
            className="block text-lg font-medium text-gray-700">
              GitHub 🐙
          </label>
          <input 
            id="github" 
            type="url" 
            placeholder="Ex: www.github.com/joao"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
          <span className="absolute bottom-2 right-2 text-xs italic">Opcional</span>
        </div>

      </div>
        <button 
          type="submit" 
          className="w-full bg-green-800 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 mt-8 transition"
        >
          Enviar
        </button>
    </form>
  );
}
