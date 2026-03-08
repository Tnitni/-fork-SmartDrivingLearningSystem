import { useState } from 'react';
import ExcelSheetReader from '../../components/ExcelSheetReader/ExcelSheetReader';

export default function ReadExcelData() {
    const [listSheetName, setListSheetName] = useState([]);
    const [sheetName, setSheetName] = useState('');

    const handleShowListSheetName = (sheets) => {
        setListSheetName(sheets);
    };

    const handleShowData = (data) => {
        console.log(data);
    };

    return (
        <div style={{ color: '#000' }}>
            <h2>Import User Sheet</h2>

            <ExcelSheetReader
                sheetName={sheetName}
                onFile={handleShowListSheetName}
                onData={handleShowData}
            />

            <div>{sheetName}</div>

            <select value={sheetName} onChange={(e) => setSheetName(e.target.value)}>
                <option value={''}>--</option>
                {listSheetName.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                ))}
            </select>
        </div>
    )
}
