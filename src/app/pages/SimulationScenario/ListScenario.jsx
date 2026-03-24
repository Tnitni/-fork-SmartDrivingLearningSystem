
import './ListScenario.css';

export default function ListScenario({
    list = [],
    groupBy = '',
    onClickButton = () => { },
    selected = '',
}) {
    const groupedList = Object.values(
        list.reduce((acc, item) => {
            const chapterId = item?.[groupBy];
            if (!acc[chapterId]) {
                acc[chapterId] = { [groupBy]: item.chapter, items: [] };
            }
            acc[chapterId].items.push(item);
            return acc;
        }, {})
    );
    console.log('groupedList', groupedList);

    return (
        <div className='list-scenario-container'>
            {/* <div className='group-list'>
                {[...Array(groupedList.length)].map((_, gIndex) => (
                    <div key={gIndex}>
                        <div>
                            {gIndex + 1}: {groupedList?.[gIndex]?.chapter?.name}
                        </div>
                    </div>
                ))}
            </div> */}


            <div className='group-list'>
                {groupedList.map((group, gIndex) => (
                    <div key={gIndex} className='group-item'>
                        <h3>
                            Chương {gIndex + 1}: {group?.[groupBy]?.name}
                            {/* {JSON.stringify(group)} */}
                        </h3>

                        <div className='list'>
                            {group.items?.map((item, index) => (
                                <button key={index} className={`item ${item.id == selected ? 'btn-selected' : ''}`} onClick={() => onClickButton(item.id)}>
                                    <div>
                                        {index + 1}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
