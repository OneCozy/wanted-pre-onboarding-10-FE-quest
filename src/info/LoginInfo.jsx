import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

function LoginInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
            .then((res) => {
                console.dir(res.data);
                setData(res.data);
            })
            .catch((e) => {
                console.error("API 호출 오류: ", e);
            });
    }, []);

    return (
        <Box>
            <h1>API 호출 결과</h1>
            <ul>
                {data.map((item) => {
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </Box>
    )
}

export default LoginInfo;