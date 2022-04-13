import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const InputSearchBar = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});
export { InputSearchBar }