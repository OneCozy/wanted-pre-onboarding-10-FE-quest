import { Box, Button, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = () => {
        console.log("아이디: " + userId);
        console.log("비밀번호: " + password);

        navigate("/success");
    }

    return (
        <Dialog
            open={true}
            sx={{
                backdropFilter: "blur(3px)"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: 300,
                    padding: 3,
                    gap: 2,
                    overflow: "hidden",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        margin: "0 auto",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center", flex: 1 }}>
                        로그인
                    </Typography>
                </Box>
                <form>
                    <TextField sx={{ width: "100%", marginBottom: "15px" }} size="small" label="아이디" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <TextField
                        type="password"
                        sx={{ width: "100%", marginBottom: "15px" }}
                        size="small"
                        label="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleLogin();
                            }
                        }}
                    />
                    <br />
                    <Button variant="contained" sx={{ width: "100%" }} size="large" onClick={handleLogin}>
                        로그인
                    </Button>
                </form>
            </Box>
        </Dialog>
    );
}

export default LoginPage;