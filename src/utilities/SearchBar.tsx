import React from 'react';
import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import './searchbar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                    background: 'white'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    className="search-input"
                    label="Nothing to search"
                    variant="outlined"
                    onChange={() => { '' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search className="search-icon" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </div>
    );
};

export default SearchBar;
