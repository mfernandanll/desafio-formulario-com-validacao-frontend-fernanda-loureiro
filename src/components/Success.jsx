export function Success({ formData }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-zinc-800">Cadastro realizado com sucesso!</h2>
      <p className="mt-4">Obrigado por se cadastrar no projeto Fusion, {formData.fullName}!</p>
      <p className="mt-4">Assim que possível, vamos entrar em contato com você!</p>
    </div>
  );
}
