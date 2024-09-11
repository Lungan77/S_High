import { BriefcaseIcon, UserGroupIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/24/outline';

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

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            <li className="flex items-center space-x-2">
              <BriefcaseIcon className="w-6 h-6 text-gray-300" />
              <a href="#our-mission" className="hover:text-gray-400 text-lg md:text-xl">
                Our Mission
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <GlobeAltIcon className="w-6 h-6 text-gray-300" />
              <a href="#our-values" className="hover:text-gray-400 text-lg md:text-xl">
                Our Values
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <UserGroupIcon className="w-6 h-6 text-gray-300" />
              <a href="#our-team" className="hover:text-gray-400 text-lg md:text-xl">
                Our Team
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon className="w-6 h-6 text-gray-300" />
              <a href="#contact-us" className="hover:text-gray-400 text-lg md:text-xl">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default About