import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './License.css';
import StarsBackground from '../../components/StarsBackground/StarsBackground';

export default function License() {
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

    return (
        <div className='license-container'>
            <StarsBackground />
            <div className='license-content'>
                <div className='licenses-header'>
                    <div className='badge'>
                        <span>Driver License Programs</span>
                    </div>

                    <h1>
                        Choose Your <span className='gradient'>License Path</span>
                    </h1>

                    <p>
                        Select a license program to start your journey. Each program includes
                        comprehensive theory lessons and practice exams.
                    </p>
                </div>

                <div className='license-grid'>
                    {licenses.map((license, index) => (
                        <Link
                            key={license.id}
                            to={`/licenses/${license.id}`}
                            className='license-link'
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className='license-card'>
                                <div className='image'>
                                    <img src={license.image_url} alt={license.name} />

                                    <div className='overlay'></div>

                                    <h3>{license.name}</h3>
                                </div>

                                <div className='content'>
                                    <p>{license.description}</p>

                                    <div className='meta'>
                                        <div>
                                            {/* <BookOpen className='icon' /> */}
                                            <i className='fa-solid fa-book-open' />
                                            <span>{license.lesson_count} Lessons</span>
                                        </div>

                                        <div>
                                            {/* <CheckCircle2 className='icon success' /> */}
                                            <i className='fa-solid fa-check-circle' />
                                            <span>Theory + Exam</span>
                                        </div>
                                    </div>

                                    <div className='cta'>
                                        <span>Start Learning</span>
                                        {/* <ArrowRight className='arrow' /> */}
                                        <i className='fa-solid fa-arrow-right' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {licenses.length === 0 && !loading && (
                    <div className='empty'>
                        <div className='icon-box'>
                            {/* <GraduationCap /> */}
                        </div>

                        <h3>No Licenses Available</h3>
                        <p>Check back soon for available license programs.</p>
                    </div>
                )}
            </div>
        </div>
    )
}