export default function Skills() {
  const skills = ["Java", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"];
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Yetenekler</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}