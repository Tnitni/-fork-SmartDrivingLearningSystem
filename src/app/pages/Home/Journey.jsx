
import './Journey.css';

export default function Journey({
    steps = [],
}) {
    return (
        <div className='journey-container'>
            <section className='container'>
                <div className='background'>
                    <div className='glow glow-top' />
                    <div className='glow glow-bottom' />
                </div>

                <div className='wrapper'>
                    <div className='header'>
                        <div className='badge'>
                            <span>Simple 3-Step Process</span>
                        </div>

                        <h2 className='title'>
                            Your Journey to<br />
                            <span className='gradient'>Driving Excellence</span>
                        </h2>

                        <p className='subtitle'>
                            Master driving faster with our proven learning methodology
                        </p>
                    </div>

                    <div className='steps'>
                        <div className='line' />

                        {steps.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className='step'>
                                    <div className='card'>
                                        <div
                                            className='icon-box'
                                            style={{ background: item.color }}
                                        >
                                            {/* <Icon className='icon' /> */}
                                        </div>

                                        <div
                                            className='step-number'
                                            style={{
                                                background: `linear-gradient(to right, #2563eb, #06b6d4)`,
                                            }}
                                        >
                                            {item.step}
                                        </div>

                                        <h3 className='step-title'>{item.title}</h3>
                                        <p className='step-desc'>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
