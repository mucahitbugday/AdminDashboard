'use client'

interface StatCardProps {
    title: string
    value: string
    description: string
    bgColor: string
    icon?: React.ReactNode
}

const StatCard = ({ title, value, description, bgColor, icon }: StatCardProps) => {
    return (
        <div
            className={`relative p-6 rounded-lg shadow-lg text-white ${bgColor} flex items-center space-x-6`}
        >
            {/* İkon Kısmı */}
            <div className="flex-shrink-0 text-5xl bg-white bg-opacity-20 p-4 rounded-full">
                {icon}
            </div>
            {/* Bilgiler */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold uppercase">{title}</h3>
                <p className="text-4xl font-extrabold mt-2">{value}</p>
                <p className="text-sm mt-1 opacity-80">{description}</p>
            </div>
        </div>
    )
}

export default StatCard
