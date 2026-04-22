export function generateStaticParams() {
    // These are the static paths that will be generated at build time
    // when using 'output: export'. 
    return [
        { id: 'agriculture' },
        { id: 'caregiver' },
        { id: 'food-service' },
        { id: 'building-cleaning' },
        { id: 'food-beverage-manufacturing' },
        { id: 'airport-ground-handling' },
        { id: 'accommodation' },
        { id: 'transportation' },
        { id: 'construction' },
        { id: 'automobile-mechanic' },
        { id: 'scholarship' },
        { id: 'construction-intern' },
        { id: 'engineer-humanities-international-services' },
        { id: 'truck-driving-skill-course' },
        { id: 'ssw-food-service-skill-course-category-ii-' },
        { id: 'ssw-food-manufacturing-skill-course-category-ii-' }
    ];
}

export default function VisaDetailsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
