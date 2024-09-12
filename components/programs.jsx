import Image from 'next/image'

const programs = [
  {
    name: 'STEM Focus',
    description: 'Engaging courses in Science, Technology, Engineering, and Math to foster innovation and problem-solving skills.',
    imageSrc: 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg',
    alt: 'STEM Focus'
  },
  {
    name: 'Language Programs',
    description: 'Bilingual and multilingual courses to enhance global communication and cultural understanding.',
    imageSrc: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Language Programs'
  },
  {
    name: 'AP & Honors Courses',
    description: 'Rigorous academic challenges that prepare students for college-level work and advanced studies.',
    imageSrc: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'AP & Honors Courses'
  },
  {
    name: 'Project-Based Learning',
    description: 'Hands-on projects and real-world applications to develop critical thinking and practical skills.',
    imageSrc: '//images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Project-Based Learning'
  },
  {
    name: 'Arts & Humanities',
    description: 'Comprehensive programs in visual arts, music, and literature to cultivate creativity and self-expression.',
    imageSrc: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Arts & Humanities'
  },
  {
    name: 'Physical Education & Sports',
    description: 'A range of physical activities and competitive sports to promote health, teamwork, and discipline.',
    imageSrc: 'https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Physical Education & Sports'
  },
];

export default function ProgramsCurriculum() {
  return (
    <section className="bg-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white-900 mb-8">Programs & Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-full mb-4">
                <Image
                  src={program.imageSrc}
                  alt={program.alt}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.name}</h3>
              <p className="text-gray-600 text-center">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
