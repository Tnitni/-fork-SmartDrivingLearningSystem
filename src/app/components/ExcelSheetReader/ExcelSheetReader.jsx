import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function ExcelSheetReader({
    sheetName,
    onFile,
    onData,
}) {
    // const [selectedSheetName, setSelectedSheetName] = useState(sheetName);
    const [fileName, setFileName] = useState('');
    const [refresh, setRefresh] = useState(0);

    // useEffect(() => {
    //     setSelectedSheetName(sheetName);
    // }, [sheetName]);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setFileName(file.name);

        const reader = new FileReader();

        reader.onload = (evt) => {
            const data = evt.target.result;

            const workbook = XLSX.read(data, {
                type: 'binary'
            });

            console.log('workbook.SheetNames', workbook.SheetNames);
            onFile(workbook.SheetNames);

            // kiểm tra sheet tồn tại
            if (!workbook.SheetNames.includes(sheetName)) {
                console.error(`Sheet '${sheetName}' không tồn tại`);
                return;
            }
            const sheet = workbook.Sheets[sheetName];
            // console.log('sheet', sheet);


            // convert sang array object
            const jsonData = XLSX.utils.sheet_to_json(sheet, {
                defval: '' // tránh undefined
            });

            if (onData) {
                onData(jsonData);
            }
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div>
            <input type='file' accept='.xlsx,.xls' onChange={(e) => handleFile(e)} />
            {fileName && <p>File: {fileName}</p>}
        </div>
    )
}