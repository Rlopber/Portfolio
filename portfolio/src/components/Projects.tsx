export default function Projects() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow">
        <h3 className="font-semibold text-lg">Vhyper Games</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Plataforma de juegos web
        </p>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow">
        <h3 className="font-semibold text-lg">AutoNext</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Gestor de citas para talleres
        </p>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow">
        <h3 className="font-semibold text-lg">The Enigma Casino</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Casino online con PWA
        </p>
      </div>
    </div>
  );
}
