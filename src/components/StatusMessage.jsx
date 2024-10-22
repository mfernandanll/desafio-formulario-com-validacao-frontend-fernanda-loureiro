export function StatusMessage({ message, formData }) {
  return (
    <div className="text-center">
      <div
        className={`p-4 mb-4 text-sm rounded-lg ${
          formData
            ? "bg-green-100 text-green-700 border border-green-400"
            : "bg-red-100 text-red-700 border border-red-400"
        }`}
      >
        {message}
        {formData && (
          <p className="mt-4">
            Obrigado por se cadastrar no projeto Fusion, {formData.fullName}!
          </p>
        )}
      </div>
    </div>
  );
}