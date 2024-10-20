import Form from "./components/Form";

export default function App() {
  return (
    <div className="min-h-screen w-full flex bg-zinc-100 text-zinc-800 font-sans">
      <main
        className="flex flex-col items-center mx-auto py-4 px-12 my-12 bg-zinc-50 rounded-xl"
        role="main"
        aria-labelledby="form-title"
      >
        <header className="container py-12 text-start">
          <h1 id="form-title" className="text-4xl font-bold">
            Formulário Fusion
          </h1>
          <p className="text-xl mt-2">
            Preencha o formulário com seus dados para se cadastrar como membro
          </p>
        </header>
        
        <section className="w-full" aria-labelledby="form-description">
          <Form />
        </section>
      </main>
    </div>
  );
}
