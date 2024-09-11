import { AcademicCapIcon, BuildingLibraryIcon, UserCircleIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Innovative Curriculum.',
        description:
            'A diverse range of STEM programs, bilingual courses, AP classes, and hands-on learning experiences.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Modern Facilities.',
        description: 'Smart classrooms, well-equipped science labs, a large library, top-notch sports areas, and art studios.',
        icon: BuildingLibraryIcon,
    },
    {
        name: 'Personalized Learning.',
        description: 'Small class sizes, individualized learning plans, and dedicated special education support for every student.',
        icon: UserCircleIcon,
    },
    {
        name: 'Technology Integration.',
        description: '1:1 device programs, a learning management system, and hybrid learning options for flexible, tech-enhanced education.',
        icon: DevicePhoneMobileIcon,
    }
]

export default function About_us() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Our School?</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find The Best Education</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Innovative programs, modern facilities, personalized learning, and strong career support—all in a safe, inclusive environment.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
