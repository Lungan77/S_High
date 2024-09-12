

function About() {
  return (
    <header className="bg-gray-900 text-white py-16 flex flex-col justify-center items-center">
      <div className="container text-center">
        {/* Title and Description */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          About Us
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed mb-8">
          At [School Name], we are dedicated to nurturing future leaders through a well-rounded education that blends academic excellence with personal growth.
          Our innovative curriculum, modern facilities, and dedicated faculty ensure every student receives personalized attention to thrive in a supportive,
          inclusive environment.
          With a focus on global exposure, extracurricular activities, and cutting-edge technology, we prepare students not only for academic success but for life beyond the classroom.
        </p>
      </div>
      <div className="read_more bg-gray-100 hover:bg-gray-500">
        <button className="hover:text-gray-100" type="submit">Read More..</button>
      </div>
    </header>
  )
}

export default About