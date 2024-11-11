import React, {useEffect, useMemo, useState} from 'react';

interface CounterItem {
    value: number;
    title: string;
    description: string;
    iconClass: string;
}

const Counter: React.FC = () => {
    const counterItems: CounterItem[] = useMemo(() => [
        { value: 45, title: 'Dry Cleaning', description: 'The Intersection of Textiles and Fine Art', iconClass: 'flaticon-sewing-machine' },
        { value: 55, title: 'finish projects', description: 'The Intersection of Textiles and Fine Art', iconClass: 'flaticon-textile-printing' },
        { value: 65, title: 'trusted clients', description: 'The Intersection of Textiles and Fine Art', iconClass: 'flaticon-clothes-1' },
    ], []);

    const [currentValues, setCurrentValues] = useState<number[]>(counterItems.map(() => 0));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentValues((values) =>
                values.map((val, index) =>
                    val < counterItems[index].value ? val + 1 : val
                )
            );
        }, 50);

        return () => clearInterval(intervalId);
    }, [counterItems]);


    return (
        <section className="counter pq-bg-dark pq-bg-img-6 pq-py-90 wow animated fadeInUp">
            <div className="container">
                <div className="row">
                    {counterItems.map((item, index) => (
                        <div key={index} className={`col-xl-4 col-lg-6 col-md-6 ${index === 0 ? 'p-0' : 'mt-4 mt-md-0 p-0'}`}>
                            <div className={`pq-counter pq-style-1 pq-counter-padding ${index === 2 ? 'border-end-0 border-bottom-0' : ''}`}>
                                <div className="pq-counter-info">
                                    <div className="pq-counter-top">
                                        <div className="pq-counter-num-prefix">
                                            <h5 className="timer">{currentValues[index]}</h5>
                                            <span className="pq-counter-prefix">%</span>
                                        </div>
                                        <div className="pq-counter-icon">
                                            <i className={item.iconClass}></i>
                                        </div>
                                    </div>
                                    <h4 className="pq-counter-title">{item.title}</h4>
                                    <p className="pq-counter-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
