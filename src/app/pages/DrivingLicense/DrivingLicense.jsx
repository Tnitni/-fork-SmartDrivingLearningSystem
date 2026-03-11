import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateUUID } from 'three/src/math/MathUtils.js';
import StarsBackground from '../../components/StarsBackground/StarsBackground';

import './DrivingLicense.css';

export default function DrivingLicense() {
    const [licenses, setLicenses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // (async () => {
        //     try {
        //         const { data: licensesData, error } = await supabase
        //             .from('licenses')
        //             .select('*')
        //             .eq('is_active', true)
        //             .order('order_index');

        //         if (error) throw error;

        //         const licensesWithCounts = await Promise.all(
        //             (licensesData || []).map(async (license) => {
        //                 const { count } = await supabase
        //                     .from('license_lessons')
        //                     .select('*', { count: 'exact', head: true })
        //                     .eq('license_id', license.id)
        //                     .eq('is_active', true);

        //                 return {
        //                     ...license,
        //                     lesson_count: count || 0,
        //                 };
        //             })
        //         );

        //         setLicenses(licensesWithCounts);
        //     } catch (error) {
        //         console.error('Error loading licenses:', error);
        //     } finally {
        //         setLoading(false);
        //     }
        // })();
    }, []);

    const listDrivingLicense = [
        {
            id: generateUUID(), name: 'A1', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
        {
            id: generateUUID(), name: 'A2', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
        {
            id: generateUUID(), name: 'A3', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
        {
            id: generateUUID(), name: 'A4', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
        {
            id: generateUUID(), name: 'A5', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
        {
            id: generateUUID(), name: 'A6', description: 'Description of A1', chapters: [
                {
                    id: generateUUID(), name: 'Chapter 1', description: 'Description of Chapter 1', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                        { id: generateUUID(), name: 'Lesson 9', },
                        { id: generateUUID(), name: 'Lesson 10', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 2', description: 'Description of Chapter 2', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                        { id: generateUUID(), name: 'Lesson 7', },
                        { id: generateUUID(), name: 'Lesson 8', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 3', description: 'Description of Chapter 3', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                        { id: generateUUID(), name: 'Lesson 5', },
                        { id: generateUUID(), name: 'Lesson 6', },
                    ],
                },
                {
                    id: generateUUID(), name: 'Chapter 4', description: 'Description of Chapter 4', questionLessons: [
                        { id: generateUUID(), name: 'Lesson 1', },
                        { id: generateUUID(), name: 'Lesson 2', },
                        { id: generateUUID(), name: 'Lesson 3', },
                        { id: generateUUID(), name: 'Lesson 4', },
                    ],
                },
            ],
        },
    ];

    return (
        <div className='driving-license-container container'>
            <StarsBackground />
            <div className='licenses-header'>
                <div className='badge'>
                    <span>Driver License Programs</span>
                </div>
                <h1>Choose Your <span className='gradient'>License Path</span></h1>
                <p>
                    Select a license program to start your journey. Each program includes
                    comprehensive theory lessons and practice exams.
                </p>
            </div>

            <div className='license-grid'>
                {listDrivingLicense.map((license, index) => (
                    <Link
                        key={license.id}
                        to={`${license.id}/chapter`}
                        className='license-link'
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className='license-card'>
                            <div className='image'>
                                <img src={license.image_url || 'https://media.wired.com/photos/592675f6cefba457b079a0cd/3:2/w_2560%2Cc_limit/SCG003S-FRONTTA.jpg'} alt={license.name} />
                                <div className='overlay'></div>
                                <h3>{license.name}</h3>
                            </div>

                            <div className='content'>
                                <p>{license.description}</p>

                                <div className='meta'>
                                    <div className='detail'>
                                        <div className='item'>
                                            <i className='fa-solid fa-book-open' />
                                            <span>{license.chapters?.length} Lessons</span>
                                        </div>
                                        <div className='item'>
                                            <i className='fa-regular fa-check-circle' />
                                            <span>Theory + Exam</span>
                                        </div>
                                    </div>
                                    <div className='cta'>
                                        <span>Start Learning</span>
                                        <i className='fa-solid fa-arrow-right' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {listDrivingLicense.length === 0 && !loading && (
                <div className='empty'>
                    <h3>No Licenses Available</h3>
                    <p>Check back soon for available license programs.</p>
                </div>
            )}
        </div>
    )
}